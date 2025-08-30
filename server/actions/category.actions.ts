'use server';

import { StatusCodes } from '@/constants/StatusCodes';
import { sanitizePayload, toPlainObject, traceErrors } from '@/lib/utils';
import Category, { CategoryDocument, CategoryDocumentPopulated, ICategory } from '@/server/models/category.model';
import { connectToDB } from '@/server/mongoose';
import { isValidObjectId } from 'mongoose';
import slugify from 'slugify';
import SubCategory from '../models/subcategory.model';
import Blog from '../models/blog.model';
import { APIQueryParams } from '@/types/dashboard';
import { AggregateQueryManager } from '../helpers';

export async function createCategory(categoryData: ICategory) {
  try {
    await connectToDB();

    const { name, slug } = categoryData;

    if (!name) {
      throw new Error('Name is required');
    }

    const newSlug = slug ? slug : slugify(name, { lower: true, strict: true });

    const sanitizedPayload = sanitizePayload<ICategory>({ name, slug: newSlug });

    const category = await Category.create(sanitizedPayload);

    return {
      success: true,
      statusCode: StatusCodes.CREATED,
      message: 'Category created successfully',
      data: {
        category: toPlainObject(category),
      },
    };
  } catch (error: any) {
    console.error('Error creating category:', error);
    return traceErrors(error);
  }
}

export async function getAllCategories(queryParams: APIQueryParams) {
  try {
    await connectToDB();

    const baseAggregation: any[] = [
      {
        $lookup: {
          from: 'subcategories',
          localField: '_id',
          foreignField: 'category',
          as: 'subcategories',
        },
      },
      {
        $addFields: {
          subcategoryCount: { $size: '$subcategories' },
        },
      },
      {
        $lookup: {
          from: 'blogs',
          localField: '_id',
          foreignField: 'category',
          as: 'blogs',
        },
      },
      {
        $addFields: {
          postCount: { $size: '$blogs' },
        },
      },
      {
        $sort: { createdAt: -1 },
      },
      {
        $project: {
          subcategories: 0,
          blogs: 0,
        },
      },
    ];

    const queryManager = new AggregateQueryManager({ model: Category, baseAggregation, queryString: queryParams }).filter().sort().paginate();

    const allCategories = await queryManager.execute();
    const pagination = await queryManager.getPaginationMetadata();

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Categories fetched successfully',
      data: {
        categories: toPlainObject(allCategories),
        pagination,
      },
    };
  } catch (error: any) {
    console.error('Error fetching all categories:', error);
    return traceErrors(error);
  }
}

export async function getCategoryById(id: string) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Category ID provided');
    }

    const category = (await Category.findById(id).lean().exec()) as CategoryDocument;

    if (!category) {
      throw new Error(`Category ${id} not found`);
    }

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Category fetched successfully',
      data: {
        category: toPlainObject(category),
      },
    };
  } catch (error: any) {
    console.error('Error fetching category by ID:', error);
    return traceErrors(error);
  }
}

export async function updateCategory(id: string, categoryData: ICategory) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Category ID provided');
    }

    const { name, slug } = categoryData;

    if (!name) {
      throw new Error('Name is required');
    }

    const newSlug = slug ? slug : slugify(name, { lower: true, strict: true });

    const sanitizedPayload = sanitizePayload<ICategory>({ name, slug: newSlug });

    const category = await Category.findByIdAndUpdate(id, sanitizedPayload, { new: true, runValidators: true }).lean().exec();

    if (!category) {
      throw new Error(`Category ${id} not found`);
    }

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Category updated successfully',
      data: {
        category: toPlainObject(category),
      },
    };
  } catch (error: any) {
    console.error('Error updating category:', error);
    return traceErrors(error);
  }
}

export async function deleteCategory(id: string) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) throw new Error('Invalid Category ID provided');

    const subCategoryCount = await SubCategory.countDocuments({ category: id });

    if (subCategoryCount > 0) throw new Error('Cannot delete category with existing subcategories');

    const blogCount = await Blog.countDocuments({ category: id });

    if (blogCount > 0) throw new Error('Cannot delete category with existing blogs');

    const category = await Category.findByIdAndDelete(id);

    if (!category) throw new Error(`Category ${id} not found`);

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Category deleted successfully',
      data: null,
    };
  } catch (error: any) {
    console.error('Error deleting category:', error);
    return traceErrors(error);
  }
}
