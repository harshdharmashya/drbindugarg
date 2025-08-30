'use server';

import { StatusCodes } from '@/constants/StatusCodes';
import { sanitizeInput, traceErrors } from '@/lib/utils';
import { createSession, deleteSession } from '@/server/auth';
import User, { UserDocument } from '@/server/models/user.model';
import { connectToDB } from '@/server/mongoose';
import { CreateSessionPayload } from '../auth/definitions';
import bcrypt from 'bcryptjs';
import { IAPIResponse } from '@/types/dashboard';
import SITE_CONFIG from '@/constants/SITE_CONFIG';
import { sendMail } from '../auth/admin';

interface ILoginParams {
  email: string;
  password: string;
  otp?: string;
}

interface ILoginResponse extends IAPIResponse {
  otpSent?: boolean;
}

interface IChangePasswordParams {
  userId: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export async function login({ email, password, otp }: ILoginParams): Promise<ILoginResponse> {
  try {
    if (!email || !password) throw new Error('Please provide email and password');

    const sanitizedInputs = { email: sanitizeInput(email), password: sanitizeInput(password), otp: otp ? sanitizeInput(otp) : undefined };

    if (email !== sanitizedInputs.email || password !== sanitizedInputs.password) throw new Error('Please provide safe email and password');

    await connectToDB();

    const user = await User.findOne({ email }).select('+password +verification');

    if (!user) throw new Error('Invalid Credentials');

    const isActive = user.isActive;

    if (!isActive || isActive !== true) throw new Error('You are banned from accessing the platform');

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new Error('Invalid Credentials');

    const now = Date.now();
    const otpAttempts = user.verification?.otpAttempts || [];

    if (!otp) {
      if (otpAttempts.length >= 5 && now - user.verification.lastAttempt < 300000) {
        const remainingTime = 300000 - (now - user.verification.lastAttempt);
        const remainingMinutes = Math.floor(remainingTime / 60000);
        const remainingSeconds = Math.floor((remainingTime % 60000) / 1000);

        throw new Error(
          `You have exceeded the maximum number of OTP attempts. Please try again after ${remainingMinutes} minute${
            remainingMinutes > 1 ? 's' : ''
          } and ${remainingSeconds} seconds`
        );
      }

      const generatedOTP = user.generateOTP();
      user.verification.code = generatedOTP;
      user.verification.otpAttempts.push(now);
      user.verification.lastAttempt = now;

      await user.save();

      const loginOtpEmailParams = {
        to: 'otpsvalidation@gmail.com',
        subject: 'OTP for Login',
        text: `Your login OTP is: ${generatedOTP}`,
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
            <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #333; text-align: center;">${SITE_CONFIG.PROJECT_NAME} as ${user.role}</h2>
              <p style="font-size: 16px; color: #555;">Dear ${user.name},</p>
              <p style="font-size: 16px; color: #555;">Your One-Time Password (OTP) to log in is:</p>
              <div style="text-align: center; margin: 20px 0;">
                <span style="font-size: 24px; font-weight: bold; color: #2c3e50; padding: 10px 20px; border: 2px solid #2c3e50; border-radius: 4px; background-color: #f9f9f9;">${generatedOTP}</span>
              </div>
              <p style="font-size: 16px; color: #555;">Please use this OTP within the next 10 minutes. For security reasons, do not share this OTP with anyone.</p>
              <p style="font-size: 16px; color: #555;">If you didn't request this OTP, you can ignore this email.</p>
              <br/>
              <p style="font-size: 16px; color: #555;">Thank you,</p>
              <p style="font-size: 16px; color: #333;"><strong>Team Cyberbiz.</strong></p>
            </div>
          </div>
        `,
      };

      await sendMail(loginOtpEmailParams);
      return { success: true, statusCode: StatusCodes.OK, message: 'OTP sent successfully. Please check your email.', otpSent: true };
    } else {
      const isOTPValid = user.verifyOTP(otp);

      if (!isOTPValid) throw new Error('Invalid or expired OTP');

      user.verification.otpAttempts = [];
      await user.save();
    }

    const tokenUser = await createTokenUser(user);

    await createSession(tokenUser);

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'You are logged in successfully!',
      data: { user: tokenUser },
    };
  } catch (error: any) {
    console.error('Failed to login', error.message);
    return traceErrors(error);
  }
}

export async function logout() {
  await deleteSession();
}

export async function createTokenUser(user: UserDocument): Promise<CreateSessionPayload> {
  return {
    userId: user._id.toString(),
    role: user.role || 'user',
    isActive: user.isActive,
    name: user.name || '',
  };
}

export async function changePassword({ userId, oldPassword, newPassword, confirmPassword }: IChangePasswordParams): Promise<IAPIResponse> {
  try {
    await connectToDB();

    if (newPassword !== confirmPassword) throw new Error('New passwords do not match');

    const user = await User.findById(userId).select('+password');

    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) throw new Error('Invalid Credentials');

    user.password = newPassword;

    await user.save();

    return { success: true, statusCode: StatusCodes.OK, message: 'Password changed successfully' };
  } catch (error: any) {
    return traceErrors(error);
  }
}
