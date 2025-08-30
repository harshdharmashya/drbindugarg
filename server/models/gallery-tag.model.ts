import mongoose, { Document, Schema } from 'mongoose';

export interface IGalleryTag {
  name: string;
  slug?: string;
  galleryItems?: mongoose.Types.ObjectId[];
}

export interface GalleryTagDocument extends IGalleryTag, Document {
  createdAt: Date;
  modifiedAt: Date;
}

const galleryTagSchema = new Schema(
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
    galleryItems: [{ type: Schema.Types.ObjectId, ref: 'Gallery', default: [] }],
  },
  { timestamps: true }
);

const GalleryTag = mongoose.models.GalleryTag || mongoose.model<GalleryTagDocument>('GalleryTag', galleryTagSchema);

export default GalleryTag;
