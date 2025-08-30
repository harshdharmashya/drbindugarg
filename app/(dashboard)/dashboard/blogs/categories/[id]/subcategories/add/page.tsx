import { HeadingBar } from '@/components/dashboard/admin/misc';
import AddSubCategory from '../SubCategoryForm';

const AddSubCategoryPage = ({ params }: { params: { id: string } }) => {
  const categoryId = params.id;
  return (
    <section className='relative overflow-hidden'>
      <div className='grid grid-cols-1 gap-4 items-start'>
        <HeadingBar title='Add an SubCategory' listPath={`/blogs/categories/${categoryId}/subcategories`} />
        <div className='bg-white rounded-3xl p-6'>
          <AddSubCategory categoryId={categoryId} />
        </div>
      </div>
    </section>
  );
};

export default AddSubCategoryPage;
