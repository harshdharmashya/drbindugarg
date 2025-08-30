'use server';

import { StatusCodes } from '@/constants/StatusCodes';
import { sanitizePayload, toPlainObject, traceErrors } from '@/lib/utils';
import Author, { AuthorDocument, IAuthor } from '@/server/models/author.model';
import { connectToDB } from '@/server/mongoose';
import { isValidObjectId } from 'mongoose';
import Blog from '../models/blog.model';
import { APIQueryParams } from '@/types/dashboard';
import { AggregateQueryManager } from '../helpers';

export async function createAuthor(formData: FormData) {
  try {
    await connectToDB();

    const name = formData.get('name') as string;
    const designation = formData.get('designation') as string;
    const alt = formData.get('alt') as string;
    const link = formData.get('link') as string;
    const image = formData.get('image') as File;

    if (!name || !designation || !alt || !image) {
      throw new Error('Missing required fields');
    }

    const sanitizedPayload = sanitizePayload<Partial<IAuthor>>({
      name,
      designation,
      alt,
      link: link || undefined,
    });

    const uploadedImgUrl = '';

    const author = await Author.create({
      ...sanitizedPayload,
      imgUrl: uploadedImgUrl,
    });

    return {
      success: true,
      statusCode: StatusCodes.CREATED,
      message: 'Author created successfully',
      data: {
        author: toPlainObject(author),
      },
    };
  } catch (error: any) {
    console.error('Error creating author:', error);
    return traceErrors(error);
  }
}

export async function getAllAuthors(queryParams: APIQueryParams) {
  try {
    await connectToDB();

    const baseAggregation = [{ $match: {} }];

    const queryManager = new AggregateQueryManager({
      model: Author,
      baseAggregation,
      queryString: queryParams,
    })
      .filter()
      .sort()
      .paginate();

    const allAuthors = await queryManager.execute();
    const pagination = await queryManager.getPaginationMetadata();

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Authors fetched successfully',
      data: {
        authors: toPlainObject(allAuthors),
        pagination,
      },
    };
  } catch (error: any) {
    console.error('Error fetching all authors:', error);
    return traceErrors(error);
  }
}

export async function getAuthorById(id: string) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Author ID provided');
    }

    const author = (await Author.findById(id).lean().exec()) as AuthorDocument;

    if (!author) {
      throw new Error(`Author ${id} not found`);
    }

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Author fetched successfully',
      data: {
        author: toPlainObject(author),
      },
    };
  } catch (error: any) {
    console.error('Error fetching author by ID:', error);
    return traceErrors(error);
  }
}

export async function updateAuthor(id: string, formData: FormData) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Author ID provided');
    }

    const name = formData.get('name') as string;
    const designation = formData.get('designation') as string;
    const alt = formData.get('alt') as string;
    const image = formData.get('image') as File | null;
    const link = formData.get('link') as string;

    if (!name || !designation || !alt) {
      throw new Error('Missing required fields');
    }

    const sanitizedPayload = sanitizePayload<Partial<IAuthor>>({
      name,
      designation,
      alt,
      link: link || undefined,
    });

    if (image && image instanceof File) {
      const uploadedImgUrl = '';

      sanitizedPayload.imgUrl = uploadedImgUrl;
    }

    const author = await Author.findByIdAndUpdate(id, sanitizedPayload, { new: true, runValidators: true }).lean().exec();

    if (!author) {
      throw new Error(`Author ${id} not found`);
    }

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Author updated successfully',
      data: {
        author: toPlainObject(author),
      },
    };
  } catch (error: any) {
    console.error('Error updating author:', error);
    return traceErrors(error);
  }
}

export async function deleteAuthor(id: string) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) throw new Error('Invalid Author ID provided');

    const blogCount = await Blog.countDocuments({ author: id });

    if (blogCount > 0) throw new Error('Cannot delete author with existing blogs');

    const author = await Author.findByIdAndDelete(id);

    if (!author) throw new Error(`Author ${id} not found`);

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Author deleted successfully',
      data: null,
    };
  } catch (error: any) {
    console.error('Error deleting author:', error);
    return traceErrors(error);
  }
}
