import { HeadingBar } from '@/components/dashboard/admin/misc';
import AddTag from '../TagForm';

const AddTagPage = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className='grid grid-cols-1 gap-4 items-start'>
        <HeadingBar title='Add an Tag' listPath='/blogs/tags' />
        <div className='bg-white rounded-3xl p-6'>
          <AddTag />
        </div>
      </div>
    </section>
  );
};

export default AddTagPage;
