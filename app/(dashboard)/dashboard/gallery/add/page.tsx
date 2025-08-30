import { HeadingBar } from '@/components/dashboard/admin/misc';
import GalleryCategoryForm from '../GalleryCategoryForm';

const AddGalleryItemPage = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className='grid grid-cols-1 gap-4 items-start'>
        <HeadingBar title='Add a Gallery Item' listPath='/gallery' />
        <div className='bg-white rounded-3xl p-6'>
          <GalleryCategoryForm />
        </div>
      </div>
    </section>
  );
};

export default AddGalleryItemPage;
