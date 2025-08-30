import mongoose, { Schema, Model } from 'mongoose';
import { GalleryDocument } from './gallery.model';

export interface IGalleryCategory {
  name: string;
  description?: string;
  isActive: boolean;
}

export interface GalleryCategoryDocument extends IGalleryCategory, Document {
  createdAt: Date;
  updatedAt: Date;
}

export interface GalleryCategoryDocumentPopulated extends GalleryCategoryDocument {
  galleries: GalleryDocument[];
}

const galleryCategorySchema = new Schema<GalleryCategoryDocument>(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

let GalleryCategory: Model<GalleryCategoryDocument>;

try {
  GalleryCategory = mongoose.model<GalleryCategoryDocument>('GalleryCategory');
} catch {
  GalleryCategory = mongoose.model<GalleryCategoryDocument>('GalleryCategory', galleryCategorySchema);
}

export default GalleryCategory;
