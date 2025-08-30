import mongoose, { Document } from 'mongoose';

export interface IEnquiry {
  fullName: string;
  phone: string;
  message: string;
  treatment?: string;
  email?: string;
  pageUrl?: string;
  pageTitle?: string;
}

export interface EnquiryDocument extends IEnquiry, Document {
  createdAt: Date;
  updatedAt: Date;
}

const enquirySchema = new mongoose.Schema(
  {
    fullName: { type: String, required: [true, 'Full name is required'] },
    phone: { type: String, required: [true, 'Phone number is required'] },
    message: { type: String, required: [true, 'Message is required'] },
    treatment: { type: String },
    email: { type: String },
    pageUrl: { type: String },
    pageTitle: { type: String },
  },
  { timestamps: true }
);

const Enquiry = mongoose.models.Enquiry || mongoose.model<EnquiryDocument>('Enquiry', enquirySchema);

export default Enquiry;
