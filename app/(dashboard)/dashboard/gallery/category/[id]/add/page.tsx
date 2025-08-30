import { HeadingBar } from '@/components/dashboard/admin/misc';
import GalleryForm from '../../../GalleryForm';
import { getGalleryCategoryById } from '@/server/actions/gallery-category.actions';
import { isValidObjectId } from 'mongoose';
import { notFound } from 'next/navigation';

const AddGalleryItemPage = async ({ params }: { params: { id: string } }) => {
  const galleryCategoryId = params.id;

  if (!galleryCategoryId || !isValidObjectId(galleryCategoryId)) {
    notFound();
  }

  const galleryCategory = await getGalleryCategoryById(galleryCategoryId);

  if (!galleryCategory) {
    notFound();
  }

  const category = galleryCategory.data?.category;

  return (
    <section className='relative overflow-hidden'>
      <div className='grid grid-cols-1 gap-4 items-start'>
        <HeadingBar title={`Add a Gallery Item for ${category?.name}`} listPath={`/gallery/category/${galleryCategoryId}`} />
        <div className='bg-white rounded-3xl p-6'>
          <GalleryForm galleryCategoryId={galleryCategoryId} />
        </div>
      </div>
    </section>
  );
};

export default AddGalleryItemPage;
