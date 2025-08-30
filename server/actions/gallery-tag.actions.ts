'use server';

import { StatusCodes } from '@/constants/StatusCodes';
import { sanitizePayload, toPlainObject, traceErrors } from '@/lib/utils';
import GalleryTag, { GalleryTagDocument, IGalleryTag } from '@/server/models/gallery-tag.model';
import { connectToDB } from '@/server/mongoose';
import { isValidObjectId } from 'mongoose';
import slugify from 'slugify';
import { AggregateQueryManager } from '../helpers';
import { APIQueryParams } from '@/types/dashboard';
import Gallery from '../models/gallery.model';

export async function createGalleryTag(tagData: IGalleryTag) {
  try {
    await connectToDB();

    const { name } = tagData;

    if (!name) {
      throw new Error('Name is required');
    }

    const newSlug = slugify(name, { lower: true, strict: true });

    const sanitizedPayload = sanitizePayload<IGalleryTag>({
      name,
      slug: newSlug,
      galleryItems: [],
    });

    const tag = await GalleryTag.create(sanitizedPayload);

    return {
      success: true,
      statusCode: StatusCodes.CREATED,
      message: 'Gallery tag created successfully',
      data: {
        tag: toPlainObject(tag),
      },
    };
  } catch (error: any) {
    console.error('Error creating gallery tag:', error);
    return traceErrors(error);
  }
}

export async function getAllGalleryTags(queryParams: APIQueryParams) {
  try {
    await connectToDB();

    const baseAggregation = [{ $match: {} }];

    const queryManager = new AggregateQueryManager({ model: GalleryTag, baseAggregation, queryString: queryParams }).filter().sort().paginate();

    const allTags = await queryManager.execute();
    const pagination = await queryManager.getPaginationMetadata();

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Gallery tags fetched successfully',
      data: {
        tags: toPlainObject(allTags),
        pagination,
      },
    };
  } catch (error: any) {
    console.error('Error fetching all gallery tags:', error);
    return traceErrors(error);
  }
}

export async function getGalleryTagById(id: string) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Gallery Tag ID provided');
    }

    const tag = (await GalleryTag.findById(id).lean().exec()) as GalleryTagDocument;

    if (!tag) {
      throw new Error(`Gallery Tag ${id} not found`);
    }

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Gallery tag fetched successfully',
      data: {
        tag: toPlainObject(tag),
      },
    };
  } catch (error: any) {
    console.error('Error fetching gallery tag by ID:', error);
    return traceErrors(error);
  }
}

export async function updateGalleryTag(id: string, tagData: IGalleryTag) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Gallery Tag ID provided');
    }

    const { name, galleryItems } = tagData;

    if (!name) {
      throw new Error('Name is required');
    }

    const newSlug = slugify(name, { lower: true, strict: true });

    const sanitizedPayload = sanitizePayload<IGalleryTag>({ name, slug: newSlug, galleryItems });

    const tag = await GalleryTag.findByIdAndUpdate(id, sanitizedPayload, { new: true, runValidators: true }).lean().exec();

    if (!tag) {
      throw new Error(`Gallery Tag ${id} not found`);
    }

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Gallery tag updated successfully',
      data: { tag: toPlainObject(tag) },
    };
  } catch (error: any) {
    console.error('Error updating gallery tag:', error);
    return traceErrors(error);
  }
}

export async function deleteGalleryTag(id: string) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) throw new Error('Invalid Gallery Tag ID provided');

    const tag = await GalleryTag.findById(id);

    if (!tag) throw new Error(`Gallery Tag ${id} not found`);

    if (tag.galleryItems.length > 0) throw new Error('Cannot delete gallery tag with existing galleries');

    await tag.deleteOne();

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Gallery tag deleted successfully',
      data: null,
    };
  } catch (error: any) {
    console.error('Error deleting gallery tag:', error);
    return traceErrors(error);
  }
}
