import { HeadingBar } from '@/components/dashboard/admin/misc';
import AddCategory from '../CategoryForm';

const AddCategoryPage = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className='grid grid-cols-1 gap-4 items-start'>
        <HeadingBar title='Add an Category' listPath='/blogs/categories' />
        <div className='bg-white rounded-3xl p-6'>
          <AddCategory />
        </div>
      </div>
    </section>
  );
};

export default AddCategoryPage;
