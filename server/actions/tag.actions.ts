'use server';

import { StatusCodes } from '@/constants/StatusCodes';
import { sanitizePayload, toPlainObject, traceErrors } from '@/lib/utils';
import Tag, { TagDocument, ITag } from '@/server/models/tag.model';
import { connectToDB } from '@/server/mongoose';
import { isValidObjectId } from 'mongoose';
import slugify from 'slugify';
import Blog from '../models/blog.model';
import { AggregateQueryManager } from '../helpers';
import { APIQueryParams } from '@/types/dashboard';

export async function createTag(tagData: ITag) {
  try {
    await connectToDB();

    const { name, slug } = tagData;

    if (!name) {
      throw new Error('Name is required');
    }

    const newSlug = slug ? slug : slugify(name, { lower: true, strict: true });

    const sanitizedPayload = sanitizePayload<ITag>({ name, slug: newSlug });

    const tag = await Tag.create(sanitizedPayload);

    return {
      success: true,
      statusCode: StatusCodes.CREATED,
      message: 'Tag created successfully',
      data: {
        tag: toPlainObject(tag),
      },
    };
  } catch (error: any) {
    console.error('Error creating tag:', error);
    return traceErrors(error);
  }
}

export async function getAllTags(queryParams: APIQueryParams) {
  try {
    await connectToDB();

    const baseAggregation = [{ $match: {} }];

    const queryManager = new AggregateQueryManager({ model: Tag, baseAggregation, queryString: queryParams }).filter().sort().paginate();

    const allTags = await queryManager.execute();
    const pagination = await queryManager.getPaginationMetadata();

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Tags fetched successfully',
      data: {
        tags: toPlainObject(allTags),
        pagination,
      },
    };
  } catch (error: any) {
    console.error('Error fetching all tags:', error);
    return traceErrors(error);
  }
}

export async function getTagById(id: string) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Tag ID provided');
    }

    const tag = (await Tag.findById(id).lean().exec()) as TagDocument;

    if (!tag) {
      throw new Error(`Tag ${id} not found`);
    }

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Tag fetched successfully',
      data: {
        tag: toPlainObject(tag),
      },
    };
  } catch (error: any) {
    console.error('Error fetching tag by ID:', error);
    return traceErrors(error);
  }
}

export async function updateTag(id: string, tagData: ITag) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Tag ID provided');
    }

    const { name, slug } = tagData;

    if (!name) {
      throw new Error('Name is required');
    }

    const newSlug = slug ? slug : slugify(name, { lower: true, strict: true });

    const sanitizedPayload = sanitizePayload<ITag>({ name, slug: newSlug });

    const tag = await Tag.findByIdAndUpdate(id, sanitizedPayload, { new: true, runValidators: true }).lean().exec();

    if (!tag) {
      throw new Error(`Tag ${id} not found`);
    }

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Tag updated successfully',
      data: {
        tag: toPlainObject(tag),
      },
    };
  } catch (error: any) {
    console.error('Error updating tag:', error);
    return traceErrors(error);
  }
}

export async function deleteTag(id: string) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) throw new Error('Invalid Tag ID provided');

    const blogCount = await Blog.countDocuments({ tags: id });

    if (blogCount > 0) throw new Error('Cannot delete tag with existing blogs');

    const tag = await Tag.findByIdAndDelete(id);

    if (!tag) throw new Error(`Tag ${id} not found`);

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Tag deleted successfully',
      data: null,
    };
  } catch (error: any) {
    console.error('Error deleting tag:', error);
    return traceErrors(error);
  }
}
