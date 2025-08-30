import { HeadingBar } from '@/components/dashboard/admin/misc';
import GalleryTagForm from '../GalleryTagForm';

const AddTagPage = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className='grid grid-cols-1 gap-4 items-start'>
        <HeadingBar title='Add a Gallery Tag' listPath='/gallery-tags' />
        <div className='bg-white rounded-3xl p-6'>
          <GalleryTagForm />
        </div>
      </div>
    </section>
  );
};

export default AddTagPage;
