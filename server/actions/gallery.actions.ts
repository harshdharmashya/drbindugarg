'use server';

import { StatusCodes } from '@/constants/StatusCodes';
import { extractInstagramVideoId, extractYouTubeVideoId, sanitizePayload, toPlainObject, traceErrors } from '@/lib/utils';
import Gallery, { IGallery, GalleryDocument, GalleryDocumentPopulated } from '@/server/models/gallery.model';
import { connectToDB } from '@/server/mongoose';
import mongoose, { isValidObjectId } from 'mongoose';
import { APIQueryParams } from '@/types/dashboard';
import { AggregateQueryManager } from '../helpers';
import { GalleryItemSizeKey, GalleryTypeKey, galleryTypeMap } from '@/constants/admin';
import GalleryTag from '../models/gallery-tag.model';

export async function createGalleryItem(formData: FormData) {
  try {
    await connectToDB();

    const title = formData.get('title') as string;
    const type = formData.get('type') as GalleryTypeKey;
    const content = formData.get('content') as string | File;
    const thumbnail = formData.get('thumbnailUrl') as File | string;
    const isPublished = formData.get('isPublished') === 'true';
    const category = formData.get('category') as string;
    const tags = (formData.get('tags') as string) ? (formData.get('tags') as string).split(',') : [];
    const itemSize = formData.get('itemSize') as GalleryItemSizeKey;

    if (!title || !type || !content || !category) {
      throw new Error('Title, type, content, and category are required');
    }

    let processedContent: string;
    let processedThumbnailUrl: string | undefined;

    if (type === galleryTypeMap.youtube.key) {
      const videoId = extractYouTubeVideoId(content as string);
      if (!videoId) {
        throw new Error('Invalid YouTube URL');
      }
      processedContent = content as string;
    } else if (type === galleryTypeMap.instagram.key) {
      const videoId = extractInstagramVideoId(content as string);
      if (!videoId) {
        throw new Error('Invalid Instagram URL');
      }
      processedContent = content as string;
    } else if (content instanceof File) {
      processedContent = '';
    } else {
      processedContent = content;
    }

    if (thumbnail instanceof File) {
      processedContent = '';
    } else if (typeof thumbnail === 'string') {
      processedThumbnailUrl = thumbnail;
    }

    const sanitizedPayload = sanitizePayload<IGallery>({
      title,
      type,
      content: processedContent,
      thumbnailUrl: processedThumbnailUrl,
      isPublished,
      category,
      itemSize,
    });

    const galleryItem = await Gallery.create(sanitizedPayload);

    if (!galleryItem) throw new Error('Failed to create gallery item');

    await GalleryTag.updateMany({ _id: { $in: tags } }, { $addToSet: { galleryItems: galleryItem._id } });

    return {
      success: true,
      statusCode: StatusCodes.CREATED,
      message: 'Gallery item created successfully',
      data: {
        galleryItem: toPlainObject(galleryItem),
      },
    };
  } catch (error: any) {
    console.error('Error creating gallery item:', error);
    return traceErrors(error);
  }
}

export async function getAllGalleryItems(queryParams: APIQueryParams) {
  try {
    await connectToDB();

    const matchStage = {} as any;

    if (queryParams.category) {
      matchStage.category = new mongoose.Types.ObjectId(queryParams.category);
      delete queryParams.category;
    }

    if (queryParams.tags) {
      matchStage.tags = { $in: queryParams.tags };
      delete queryParams.tags;
    }

    const baseAggregation = [
      { $match: matchStage },
      {
        $lookup: {
          from: 'gallerytags',
          localField: '_id',
          foreignField: 'galleryItems',
          as: 'tags',
        },
      },
      {
        $lookup: {
          from: 'gallerycategories',
          localField: 'category',
          foreignField: '_id',
          as: 'category',
        },
      },
      { $unwind: { path: '$category', preserveNullAndEmptyArrays: true } },
    ];

    const queryManager = new AggregateQueryManager({
      model: Gallery,
      baseAggregation,
      queryString: queryParams,
    })
      .filter()
      .sort()
      .paginate();

    const allGalleryItems = await queryManager.execute();
    const pagination = await queryManager.getPaginationMetadata();

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Gallery items fetched successfully',
      data: {
        galleryItems: toPlainObject(allGalleryItems) as GalleryDocumentPopulated[],
        pagination,
      },
    };
  } catch (error: any) {
    console.error('Error fetching all gallery items:', error);
    return traceErrors(error);
  }
}

export async function getGalleryItemById(id: string) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Gallery Item ID provided');
    }

    const [galleryItem] = await Gallery.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: 'gallerytags',
          localField: '_id',
          foreignField: 'galleryItems',
          as: 'tags',
        },
      },
      {
        $lookup: {
          from: 'gallerycategories',
          localField: 'category',
          foreignField: '_id',
          as: 'category',
        },
      },
      { $unwind: { path: '$category', preserveNullAndEmptyArrays: true } },
    ]);

    if (!galleryItem) throw new Error(`Gallery item ${id} not found`);

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Gallery item fetched successfully',
      data: {
        galleryItem: toPlainObject(galleryItem) as GalleryDocumentPopulated,
      },
    };
  } catch (error: any) {
    console.error('Error fetching gallery item by ID:', error);
    return traceErrors(error);
  }
}

export async function updateGalleryItem(id: string, formData: FormData) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Gallery Item ID provided');
    }

    const title = formData.get('title') as string;
    const type = formData.get('type') as GalleryTypeKey;
    const content = formData.get('content') as string | File;
    const thumbnail = formData.get('thumbnailUrl') as string | File | undefined;
    const isPublished = formData.get('isPublished') === 'true';
    const tags = (formData.get('tags') as string) ? (formData.get('tags') as string).split(',') : [];
    const itemSize = formData.get('itemSize') as GalleryItemSizeKey;

    let processedContent: string | undefined;
    let processedThumbnailUrl: string | undefined;

    if (type === galleryTypeMap.youtube.key && content) {
      const videoId = extractYouTubeVideoId(content as string);
      if (!videoId) {
        throw new Error('Invalid YouTube URL');
      }
      processedContent = content as string;
    } else if (type === galleryTypeMap.instagram.key && content) {
      const videoId = extractInstagramVideoId(content as string);
      if (!videoId) {
        throw new Error('Invalid Instagram URL');
      }
      processedContent = content as string;
    } else if (content instanceof File) {
      processedContent = '';
    } else if (typeof content === 'string') {
      processedContent = content;
    }

    if (thumbnail instanceof File) {
      processedContent = '';
    } else if (typeof thumbnail === 'string') {
      processedThumbnailUrl = thumbnail;
    }

    const sanitizedPayload = sanitizePayload<Partial<IGallery>>({
      title,
      type,
      content: processedContent,
      thumbnailUrl: processedThumbnailUrl,
      isPublished,
      itemSize,
    });

    const galleryItem = await Gallery.findByIdAndUpdate(id, sanitizedPayload, { new: true, runValidators: true });

    if (!galleryItem) throw new Error(`Gallery item ${id} not found`);

    Object.assign(galleryItem, sanitizedPayload);
    await galleryItem.save();

    const currentTags = await GalleryTag.find({ galleryItems: galleryItem._id });
    const currentTagIds = currentTags.map((tag) => tag._id.toString());

    const tagsToAdd = tags.filter((tag) => !currentTagIds.includes(tag));
    const tagsToRemove = currentTagIds.filter((tag) => !tags.includes(tag));

    if (tagsToAdd.length > 0) {
      await GalleryTag.updateMany({ _id: { $in: tagsToAdd } }, { $addToSet: { galleryItems: galleryItem._id } });
    }

    if (tagsToRemove.length > 0) {
      await GalleryTag.updateMany({ _id: { $in: tagsToRemove } }, { $pull: { galleryItems: galleryItem._id } });
    }
    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Gallery item updated successfully',
      data: {
        galleryItem: toPlainObject(galleryItem),
      },
    };
  } catch (error: any) {
    console.error('Error updating gallery item:', error);
    return traceErrors(error);
  }
}

export async function deleteGalleryItem(id: string) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Gallery Item ID provided');
    }

    const galleryItem = await Gallery.findByIdAndDelete(id);

    if (!galleryItem) {
      throw new Error(`Gallery item ${id} not found`);
    }

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Gallery item deleted successfully',
      data: null,
    };
  } catch (error: any) {
    console.error('Error deleting gallery item:', error);
    return traceErrors(error);
  }
}

export async function updateGalleryItemStatus({ id, status }: { id: string; status: boolean }) {
  try {
    await connectToDB();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid Gallery Item ID provided');
    }

    const galleryItem = await Gallery.findById(id);

    if (!galleryItem) {
      throw new Error(`Gallery item ${id} not found`);
    }

    galleryItem.isPublished = status;

    await galleryItem.save();

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Gallery item status updated successfully',
      data: {
        galleryItem: toPlainObject(galleryItem),
      },
    };
  } catch (error: any) {
    console.error('Error updating gallery item status:', error);
    return traceErrors(error);
  }
}
