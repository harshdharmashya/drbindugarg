import mongoose, { Document, Schema, Model } from 'mongoose';
import { GalleryCategoryDocument } from './gallery-category.model';
import { galleryItemSizeMap, GalleryItemSizeKey, galleryTypeMap, GalleryTypeKey } from '@/constants/admin';
import { GalleryTagDocument } from './gallery-tag.model';

export interface IGallery {
  title: string;
  type: GalleryTypeKey;
  content: string;
  thumbnailUrl?: string;
  isPublished: boolean;
  category: mongoose.Schema.Types.ObjectId | string;
  itemSize?: GalleryItemSizeKey;
}

export interface GalleryDocument extends IGallery, Document {
  createdAt: Date;
  updatedAt: Date;
}

export interface GalleryDocumentPopulated extends Omit<GalleryDocument, 'category'> {
  category: GalleryCategoryDocument;
  tags: GalleryTagDocument[];
}

const gallerySchema = new Schema<GalleryDocument>(
  {
    title: {
      type: String,
      required: [true, 'Gallery item title is required'],
      trim: true,
    },
    type: {
      type: String,
      enum: Object.keys(galleryTypeMap),
      required: [true, 'Gallery item type is required'],
    },
    itemSize: {
      type: String,
      enum: Object.keys(galleryItemSizeMap),
      default: galleryItemSizeMap.square.key,
    },
    content: {
      type: String,
      required: [true, 'Content URL or YouTube video ID is required'],
      trim: true,
    },
    thumbnailUrl: {
      type: String,
      trim: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'GalleryCategory',
      required: [true, 'Gallery category is required'],
    },
  },
  { timestamps: true }
);

let Gallery: Model<GalleryDocument>;

try {
  Gallery = mongoose.model<GalleryDocument>('Gallery');
} catch {
  Gallery = mongoose.model<GalleryDocument>('Gallery', gallerySchema);
}

export default Gallery;
