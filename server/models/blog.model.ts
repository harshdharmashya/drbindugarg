import mongoose, { Document } from 'mongoose';
import { CategoryDocument } from './category.model';
import { TagDocument } from './tag.model';
import { SubCategoryDocument } from './subcategory.model';
import { AuthorDocument } from './author.model';

export interface SEO {
  meta?: string;
  og?: string;
  head?: string;
  body?: string;
  footer?: string;
}

export interface IBlog {
  title: string;
  content: string;
  category: mongoose.Types.ObjectId | string;
  thumbnail?: string;
  thumbnail_small?: string;
  thumbnail_alt?: string;
  tags: mongoose.Types.ObjectId[] | string[];
  short_description?: string;
  slug: string;
  subcategory?: mongoose.Types.ObjectId | string;
  seo?: SEO;
  author: string | mongoose.Types.ObjectId | string;
  isActive: boolean;
  publishedAt: Date;
}

export interface BlogDocument extends IBlog, Document {
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogDocumentPopulated extends Omit<BlogDocument, 'category' | 'subcategory' | 'tags' | 'author'> {
  category: CategoryDocument;
  subcategory: SubCategoryDocument;
  tags: TagDocument[];
  author: AuthorDocument;
}

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Category is required'],
    },
    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubCategory',
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author',
      required: [true, 'Author is required'],
    },
    thumbnail: {
      type: String,
    },
    thumbnail_small: {
      type: String,
    },
    thumbnail_alt: {
      type: String,
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
      },
    ],
    short_description: {
      type: String,
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      trim: true,
    },
    seo: {
      type: {
        meta: String,
        og: String,
        head: String,
        body: String,
        footer: String,
      },
      required: false,
    },
    isActive: {
      type: Boolean,
      default: true,
      required: true,
    },
    publishedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.models.Blog || mongoose.model<BlogDocument>('Blog', blogSchema);

export default Blog;
