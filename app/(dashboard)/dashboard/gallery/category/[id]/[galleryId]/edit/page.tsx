import { isValidObjectId } from 'mongoose';
import { ErrorState } from '@/components/dashboard/admin/misc/StateUI';
import { getGalleryCategoryById } from '@/server/actions/gallery-category.actions';
import GalleryForm from '../../../../GalleryForm';

import { getGalleryItemById } from '@/server/actions/gallery.actions';
import { HeadingBar } from '@/components/dashboard/admin/misc';
const GalleryItemEditPage = async ({ params }: { params: { id: string; galleryId: string } }) => {
  const galleryCategoryId = params.id;
  const galleryItemId = params.galleryId;

  if (!galleryCategoryId || !isValidObjectId(galleryCategoryId)) {
    return <ErrorState message='Invalid gallery category id' />;
  }

  if (!galleryItemId || !isValidObjectId(galleryItemId)) {
    return <ErrorState message='Invalid gallery item id' />;
  }

  const galleryCategory = await getGalleryCategoryById(galleryCategoryId);

  if (!galleryCategory) {
    return <ErrorState message='Gallery category not found' />;
  }

  const galleryCategoryData = galleryCategory.data?.category;

  if (!galleryCategoryData) {
    return <ErrorState message='Gallery category not found' />;
  }

  const galleryItem = await getGalleryItemById(galleryItemId);

  if (!galleryItem) {
    return <ErrorState message='Gallery item not found' />;
  }

  const galleryItemData = galleryItem.data?.galleryItem;

  if (!galleryItemData) {
    return <ErrorState message='Gallery item not found' />;
  }

  return (
    <section className='relative overflow-hidden'>
      <div className='grid grid-cols-1 gap-4 items-start'>
        <HeadingBar title='Edit Gallery Item' listPath={`/gallery/category/${galleryCategoryId}`} />
        <div className='bg-white rounded-3xl p-6'>
          <GalleryForm data={galleryItemData} galleryCategoryId={galleryCategoryId} />
        </div>
      </div>
    </section>
  );
};

export default GalleryItemEditPage;
