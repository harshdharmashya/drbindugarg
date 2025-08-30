import mongoose, { Document } from 'mongoose';

export interface IAuthor {
  name: string;
  designation?: string;
  imgUrl: string;
  alt: string;
  link?: string;
}

export interface AuthorDocument extends IAuthor, Document {
  createdAt: Date;
  modifiedAt: Date;
}

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    designation: {
      type: String,
      trim: true,
    },
    imgUrl: {
      type: String,
      required: [true, 'Image URL is required'],
      trim: true,
    },
    alt: {
      type: String,
      required: [true, 'Alt Text is required'],
      trim: true,
    },
    link: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Author = mongoose.models.Author || mongoose.model<AuthorDocument>('Author', authorSchema);

export default Author;
