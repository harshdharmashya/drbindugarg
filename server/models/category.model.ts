import mongoose, { Document } from 'mongoose';

export interface ICategory {
  name: string;
  slug?: string;
}

export interface CategoryDocument extends ICategory, Document {
  createdAt: Date;
  modifiedAt: Date;
}

export interface CategoryDocumentPopulated extends CategoryDocument {
  subcategoryCount: number;
  postCount?: number;
}

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
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

const Category = mongoose.models.Category || mongoose.model<CategoryDocument>('Category', categorySchema);

export default Category;
