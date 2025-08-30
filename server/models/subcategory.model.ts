import mongoose, { Document, mongo, Schema } from 'mongoose';
import { CategoryDocument } from './category.model';

export interface ISubCategory {
  name: string;
  slug?: string;
  category: mongoose.Types.ObjectId | string;
}

export interface SubCategoryDocument extends ISubCategory, Document {
  createdAt: Date;
  modifiedAt: Date;
}

const subCategorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Subcategory name is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      trim: true,
      unique: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Category is required'],
    },
  },
  { timestamps: true }
);

const SubCategory = mongoose.models.SubCategory || mongoose.model<SubCategoryDocument>('SubCategory', subCategorySchema);

export default SubCategory;
