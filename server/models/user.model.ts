import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import { regexMap } from '@/constants/admin';

export type AdminRoles = 'admin' | 'user';

export interface IUser {
  name: string;
  email: string;
  password?: string;
  role?: AdminRoles;
}

export interface UserDocument extends IUser, Document {
  isActive: boolean;
  passwordReset: {
    token: string | undefined;
    expiry: Date | undefined;
  };
  verification: {
    code: string;
    expires: Date;
    completedAt: Date;
    otpAttempts: Date[];
    lastAttempt: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}

const userSchema: Schema<UserDocument> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      match: [regexMap.email.pattern, regexMap.email.errorMessage],
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
      minlength: [8, 'Password must be at least 8 characters long.'],
      select: false,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },

    passwordReset: {
      type: {
        token: String,
        expiry: Date,
      },
      select: false,
    },
    verification: {
      type: {
        code: {
          type: String,
        },
        expires: {
          type: Date,
          default: () => Date.now() + 300000, // 5 minutes from now
        },
        completedAt: {
          type: Date,
        },
        otpAttempts: {
          type: [Date],
          default: [],
        },
        lastAttempt: {
          type: Date,
          default: Date.now,
        },
      },
      select: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// 1A Pre-save hook to hash the password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = this.password ? await bcrypt.hash(this.password, salt) : undefined;
    next();
  } catch (error: any) {
    next(error);
  }
});

// 1B Method to generate OTP
userSchema.methods.generateOTP = function () {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  if (!this.verification) {
    this.verification = {};
  }

  this.verification.code = otp;
  this.verification.expires = Date.now() + 300000; // 5 minutes from now
  return otp;
};

// 1C Method to verify OTP
userSchema.methods.verifyOTP = function (otp: string) {
  if (this.verification.code === otp && Date.now() < this.verification.expires) {
    this.verification.code = null;
    this.verification.expires = null;
    this.verification.completedAt = Date.now();
    return true;
  }
  return false;
};

export default mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);
