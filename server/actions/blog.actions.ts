'use server';

import { StatusCodes } from '@/constants/StatusCodes';
import { toPlainObject, traceErrors } from '@/lib/utils';
import Blog, { BlogDocument, BlogDocumentPopulated, SEO } from '@/server/models/blog.model';
import { connectToDB } from '@/server/mongoose';
import mongoose, { isValidObjectId } from 'mongoose';
import slugify from 'slugify';
import { APIQueryParams } from '@/types/dashboard';
import { AggregateQueryManager } from '../helpers';
import { getCurrentUser } from '../auth/getCurrentUser';

export async function getAllBlogs(queryParams: APIQueryParams) {
  try {
    await connectToDB();

    const matchStage: any = {};

    if (queryParams.isActive) {
      matchStage.isActive = [true, 'true'].includes(queryParams.isActive);
      delete queryParams.isActive;
    }

    if (queryParams.displayInactiveBlogsForStaffs) {
      const user = await getCurrentUser();

      if (user?.userId && user.isActive && user?.role === 'admin') {
        delete matchStage.isActive;
      }

      delete queryParams.displayInactiveBlogsForStaffs;
    }

    if (queryParams.category) {
      matchStage.category = { $in: queryParams.category.split(',').map((id: string) => new mongoose.Types.ObjectId(id)) };
      delete queryParams.category;
    }

    if (queryParams.tags) {
      matchStage.tags = { $in: queryParams.tags.split(',').map((id: string) => new mongoose.Types.ObjectId(id)) };
      delete queryParams.tags;
    }

    const baseAggregation = [
      { $match: matchStage },
      {
        $lookup: {
          from: 'categories',
          localField: 'category',
          foreignField: '_id',
          as: 'category',
        },
      },
      { $unwind: '$category' },
      {
        $lookup: {
          from: 'subcategories',
          localField: 'subcategory',
          foreignField: '_id',
          as: 'subcategory',
        },
      },
      {
        $unwind: {
          path: '$subcategory',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'authors',
          localField: 'author',
          foreignField: '_id',
          as: 'author',
        },
      },
      {
        $unwind: '$author',
      },
      {
        $lookup: {
          from: 'tags',
          localField: 'tags',
          foreignField: '_id',
          as: 'tags',
        },
      },
    ];

    const queryManager = new AggregateQueryManager({ model: Blog, baseAggregation, queryString: queryParams }).filter().sort().paginate();

    const blogs = await queryManager.execute();
    const pagination = await queryManager.getPaginationMetadata();

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Blogs fetched successfully',
      data: {
        blogs: toPlainObject(blogs) as BlogDocumentPopulated[],
        pagination,
      },
    };
  } catch (error: any) {
    console.error('Error fetching blogs:', error);
    return traceErrors(error);
  }
}

export async function getBlogById(id: string) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Blog ID provided');
    }

    const blog = (await Blog.findById(id).lean().exec()) as BlogDocument;

    if (!blog) {
      throw new Error(`Blog ${id} not found`);
    }

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Blog fetched successfully',
      data: {
        blog: toPlainObject(blog),
      },
    };
  } catch (error: any) {
    console.error('Error fetching blog by ID:', error);
    return traceErrors(error);
  }
}

export async function getBlogsByConditions({ limit = 25 }: { limit?: number }) {
  try {
    await connectToDB();

    const blogs = (await Blog.aggregate([
      {
        $lookup: {
          from: 'categories',
          localField: 'category',
          foreignField: '_id',
          as: 'category',
        },
      },
      {
        $unwind: '$category',
      },
      {
        $lookup: {
          from: 'subcategories',
          localField: 'subcategory',
          foreignField: '_id',
          as: 'subcategory',
        },
      },
      {
        $unwind: {
          path: '$subcategory',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'authors',
          localField: 'author',
          foreignField: '_id',
          as: 'author',
        },
      },
      {
        $unwind: '$author',
      },
      {
        $lookup: {
          from: 'tags',
          localField: 'tags',
          foreignField: '_id',
          as: 'tags',
        },
      },
      {
        $sort: { createdAt: -1 },
      },
      {
        $limit: limit,
      },
      {
        $project: {
          __v: 0,
          'category.__v': 0,
          'subcategory.__v': 0,
          'author.__v': 0,
          'tags.__v': 0,
        },
      },
    ]).exec()) as BlogDocumentPopulated[];

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Blogs fetched successfully',
      data: {
        blogs: toPlainObject(blogs),
      },
    };
  } catch (error: any) {
    console.error('Error fetching blogs by conditions:', error);
    return traceErrors(error);
  }
}

export async function getBlogBySlug(slug: string, options?: { displayInactiveBlogsForStaffs?: boolean }) {
  try {
    await connectToDB();

    if (!slug || typeof slug !== 'string') {
      throw new Error('Invalid slug provided');
    }

    const matchStage: any = {};

    const slugRegex = new RegExp(`^${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i');

    matchStage.slug = slugRegex;

    if (options?.displayInactiveBlogsForStaffs) {
      const user = await getCurrentUser();

      if (!(user?.userId && user.isActive && user?.role === 'admin')) {
        matchStage.isActive = true;
      }
    }

    const aggregationPipeline = [
      { $match: matchStage },
      {
        $lookup: {
          from: 'categories',
          localField: 'category',
          foreignField: '_id',
          as: 'category',
        },
      },
      {
        $lookup: {
          from: 'subcategories',
          localField: 'subcategory',
          foreignField: '_id',
          as: 'subcategory',
        },
      },
      {
        $lookup: {
          from: 'tags',
          localField: 'tags',
          foreignField: '_id',
          as: 'tags',
        },
      },
      {
        $lookup: {
          from: 'authors',
          localField: 'author',
          foreignField: '_id',
          as: 'author',
        },
      },
      {
        $project: {
          __v: 0,
          'category.__v': 0,
          'subcategory.__v': 0,
          'tags.__v': 0,
          'author.__v': 0,
        },
      },
      { $unwind: '$category' },
      { $unwind: { path: '$subcategory', preserveNullAndEmptyArrays: true } },
      { $unwind: '$author' },
    ];

    const [blog] = (await Blog.aggregate(aggregationPipeline).exec()) as [BlogDocumentPopulated | null];

    if (!blog) {
      throw new Error(`Could not find blog with slug: ${slug}`);
    }

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Blog fetched successfully',
      data: {
        blog: toPlainObject(blog),
      },
    };
  } catch (error: any) {
    console.error('Error fetching blog by slug:', error);
    return traceErrors(error);
  }
}

export async function deleteBlog(id: string) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Blog ID provided');
    }

    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      throw new Error(`Blog ${id} not found`);
    }

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Blog deleted successfully',
      data: null,
    };
  } catch (error: any) {
    console.error('Error deleting blog:', error);
    return traceErrors(error);
  }
}

export async function updateBlogStatus({ id, status }: { id: string; status: boolean }) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Blog ID provided');
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      throw new Error(`Blog ${id} not found`);
    }

    blog.isActive = status;

    await blog.save();

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Blog status updated successfully',
      data: {
        blog: toPlainObject(blog),
      },
    };
  } catch (error: any) {
    console.error('Error updating blog status:', error);
    return traceErrors(error);
  }
}

export async function updateScheduledBlogs() {
  try {
    await connectToDB();

    const now = new Date();

    const blogs = await Blog.updateMany({ publishedAt: { $lte: now }, isActive: false }, { $set: { isActive: true } });

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Scheduled blogs updated successfully',
      data: { modifiedCount: blogs.modifiedCount },
    };
  } catch (error: any) {
    console.error('Error updating scheduled blogs:', error);
    return traceErrors(error);
  }
}

function extractTags(data: Record<string, any>): string[] {
  return Object.entries(data).reduce((acc, [key, value]) => {
    if (key.startsWith('tags.')) {
      delete data[key];
      acc.push(value);
    }
    return acc;
  }, [] as string[]);
}
