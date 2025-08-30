import { HeadingBar } from '@/components/dashboard/admin/misc';
import AddAuthor from '../AuthorForm';

const AddAuthorPage = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className='grid grid-cols-1 gap-4 items-start'>
        <HeadingBar title='Add an Author' listPath='/blogs/authors' />
        <div className='bg-white rounded-3xl p-6'>
          <AddAuthor />
        </div>
      </div>
    </section>
  );
};

export default AddAuthorPage;
