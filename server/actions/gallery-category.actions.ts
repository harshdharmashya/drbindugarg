'use server';

import { StatusCodes } from '@/constants/StatusCodes';
import { sanitizePayload, toPlainObject, traceErrors } from '@/lib/utils';
import GalleryCategory, { GalleryCategoryDocument, IGalleryCategory } from '@/server/models/gallery-category.model';
import { connectToDB } from '@/server/mongoose';
import { isValidObjectId } from 'mongoose';
import { APIQueryParams } from '@/types/dashboard';
import { AggregateQueryManager } from '../helpers';
import Gallery from '../models/gallery.model';

export async function createGalleryCategory(data: IGalleryCategory) {
  try {
    await connectToDB();

    if (!data.name) {
      throw new Error('Category name is required');
    }

    const sanitizedPayload = sanitizePayload<IGalleryCategory>(data);

    const category = await GalleryCategory.create(sanitizedPayload);

    return {
      success: true,
      statusCode: StatusCodes.CREATED,
      message: 'Gallery category created successfully',
      data: {
        category: toPlainObject(category),
      },
    };
  } catch (error: any) {
    console.error('Error creating gallery category:', error);
    return traceErrors(error);
  }
}

export async function getAllGalleryCategories(queryParams: APIQueryParams) {
  try {
    await connectToDB();

    const baseAggregation = [];

    if (queryParams.includeGalleries) {
      delete queryParams.includeGalleries;
      baseAggregation.push({ $lookup: { from: 'galleries', localField: '_id', foreignField: 'category', as: 'galleries' } });
    } else {
      baseAggregation.push({ $match: {} });
    }

    const queryManager = new AggregateQueryManager({ model: GalleryCategory, baseAggregation, queryString: queryParams }).filter().sort().paginate();

    const allCategories = await queryManager.execute();
    const pagination = await queryManager.getPaginationMetadata();

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Gallery categories fetched successfully',
      data: {
        categories: toPlainObject(allCategories),
        pagination,
      },
    };
  } catch (error: any) {
    console.error('Error fetching all gallery categories:', error);
    return traceErrors(error);
  }
}

export async function getGalleryCategoryById(id: string) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Gallery Category ID provided');
    }

    const category = await GalleryCategory.findById(id).lean().exec();

    if (!category) {
      throw new Error(`Gallery category ${id} not found`);
    }

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Gallery category fetched successfully',
      data: {
        category: toPlainObject(category) as GalleryCategoryDocument,
      },
    };
  } catch (error: any) {
    console.error('Error fetching gallery category by ID:', error);
    return traceErrors(error);
  }
}

export async function updateGalleryCategory(id: string, data: Partial<IGalleryCategory>) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Gallery Category ID provided');
    }

    if (!data.name) {
      throw new Error('Category name is required');
    }

    const sanitizedPayload = sanitizePayload<Partial<IGalleryCategory>>(data);

    const category = await GalleryCategory.findByIdAndUpdate(id, sanitizedPayload, {
      new: true,
      runValidators: true,
    })
      .lean()
      .exec();

    if (!category) {
      throw new Error(`Gallery category ${id} not found`);
    }

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Gallery category updated successfully',
      data: {
        category: toPlainObject(category),
      },
    };
  } catch (error: any) {
    console.error('Error updating gallery category:', error);
    return traceErrors(error);
  }
}

export async function deleteGalleryCategory(id: string) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Gallery Category ID provided');
    }

    const category = await GalleryCategory.findById(id);

    if (!category) {
      throw new Error(`Gallery category ${id} not found`);
    }

    const galleryItem = await Gallery.findOne({ category: id });

    if (galleryItem) {
      throw new Error('Cannot delete gallery category as it is associated with gallery items');
    }

    await category.deleteOne();

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Gallery category deleted successfully',
      data: null,
    };
  } catch (error: any) {
    console.error('Error deleting gallery category:', error);
    return traceErrors(error);
  }
}

export async function updateGalleryCategoryStatus({ id, status }: { id: string; status: boolean }) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Gallery Category ID provided');
    }

    const category = await GalleryCategory.findById(id);

    if (!category) {
      throw new Error(`Gallery category ${id} not found`);
    }

    category.isActive = status;

    await category.save();

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Gallery category status updated successfully',
      data: {
        category: toPlainObject(category),
      },
    };
  } catch (error: any) {
    console.error('Error updating gallery category status:', error);
    return traceErrors(error);
  }
}
