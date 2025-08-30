'use server';

import { StatusCodes } from '@/constants/StatusCodes';
import { sanitizePayload, toPlainObject, traceErrors } from '@/lib/utils';
import SubCategory, { SubCategoryDocument, ISubCategory } from '@/server/models/subcategory.model';
import { connectToDB } from '@/server/mongoose';
import { isValidObjectId } from 'mongoose';
import slugify from 'slugify';
import Blog from '../models/blog.model';

export async function createSubCategory(subCategoryData: ISubCategory) {
  try {
    await connectToDB();

    const { name, slug, category } = subCategoryData;

    if (!name || !category) {
      throw new Error('Name and Category are required');
    }

    const newSlug = slug ? slug : slugify(name, { lower: true, strict: true });

    const sanitizedPayload = sanitizePayload<ISubCategory>({ name, slug: newSlug, category });

    const subCategory = await SubCategory.create(sanitizedPayload);

    return {
      success: true,
      statusCode: StatusCodes.CREATED,
      message: 'SubCategory created successfully',
      data: {
        subcategory: toPlainObject(subCategory),
      },
    };
  } catch (error: any) {
    console.error('Error creating subcategory:', error);
    return traceErrors(error);
  }
}

export async function getAllSubCategories({ categoryId }: { categoryId: string }) {
  try {
    await connectToDB();

    const query = categoryId ? { category: categoryId } : {};

    const allSubCategories = (await SubCategory.find(query).sort({ createdAt: 'desc' }).lean().exec()) as SubCategoryDocument[];

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Subcategories fetched successfully',
      data: {
        subcategories: toPlainObject(allSubCategories),
      },
    };
  } catch (error: any) {
    console.error('Error fetching subcategories:', error);
    return traceErrors(error);
  }
}

export async function getSubCategoryById(id: string) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid SubCategory ID provided');
    }

    const subCategory = (await SubCategory.findById(id).lean().exec()) as SubCategoryDocument;

    if (!subCategory) {
      throw new Error(`SubCategory ${id} not found`);
    }

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'SubCategory fetched successfully',
      data: {
        subcategory: toPlainObject(subCategory),
      },
    };
  } catch (error: any) {
    console.error('Error fetching subcategory by ID:', error);
    return traceErrors(error);
  }
}

export async function updateSubCategory(id: string, subCategoryData: ISubCategory) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid SubCategory ID provided');
    }

    const { name, slug, category } = subCategoryData;

    if (!name || !category) {
      throw new Error('Name and Category are required');
    }

    const newSlug = slug ? slug : slugify(name, { lower: true, strict: true });

    const sanitizedPayload = sanitizePayload<ISubCategory>({ name, slug: newSlug, category });

    const subCategory = await SubCategory.findByIdAndUpdate(id, sanitizedPayload, { new: true, runValidators: true }).lean().exec();

    if (!subCategory) {
      throw new Error(`SubCategory ${id} not found`);
    }

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'SubCategory updated successfully',
      data: {
        subcategory: toPlainObject(subCategory),
      },
    };
  } catch (error: any) {
    console.error('Error updating subcategory:', error);
    return traceErrors(error);
  }
}

export async function deleteSubCategory(id: string) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) throw new Error('Invalid SubCategory ID provided');

    const blogCount = await Blog.countDocuments({ subcategory: id });

    if (blogCount > 0) throw new Error('Cannot delete subcategory with existing blogs');

    const subCategory = await SubCategory.findByIdAndDelete(id);

    if (!subCategory) throw new Error(`SubCategory ${id} not found`);

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'SubCategory deleted successfully',
      data: null,
    };
  } catch (error: any) {
    console.error('Error deleting subcategory:', error);
    return traceErrors(error);
  }
}
