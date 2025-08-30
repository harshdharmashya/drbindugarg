import { isValidObjectId } from 'mongoose';
import GalleryTable from '../../GalleryTable';
import { ErrorState } from '@/components/dashboard/admin/misc/StateUI';
import { getGalleryCategoryById } from '@/server/actions/gallery-category.actions';

const GalleryPage = async ({ params }: { params: { id: string } }) => {
  const galleryCategoryId = params.id;

  if (!galleryCategoryId || !isValidObjectId(galleryCategoryId)) {
    return <ErrorState message='Invalid gallery category id' />;
  }

  const galleryCategory = await getGalleryCategoryById(galleryCategoryId);

  if (!galleryCategory) {
    return <ErrorState message='Gallery category not found' />;
  }

  const galleryCategoryData = galleryCategory.data?.category;

  if (!galleryCategoryData) {
    return <ErrorState message='Gallery category not found' />;
  }

  return <GalleryTable galleryCategory={galleryCategoryData} galleryCategoryId={galleryCategoryId} />;
};

export default GalleryPage;
