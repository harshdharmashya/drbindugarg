import mongoose, { Document, Schema } from 'mongoose';

export interface ITag {
  name: string;
  slug?: string;
}

export interface TagDocument extends ITag, Document {
  createdAt: Date;
  modifiedAt: Date;
}

const tagSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Tag name is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Tag = mongoose.models.Tag || mongoose.model<TagDocument>('Tag', tagSchema);

export default Tag;
