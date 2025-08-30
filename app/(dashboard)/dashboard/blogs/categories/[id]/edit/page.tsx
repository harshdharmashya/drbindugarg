import { HeadingBar } from '@/components/dashboard/admin/misc';
import { notFound } from 'next/navigation';
import CategoryForm from '../../CategoryForm';
import { getCategoryById } from '@/server/actions/category.actions';

const EditCategoryPage = async ({ params }: { params: { id: string } }) => {
  const itemId = params.id;

  const returnPath = '/blogs/categories';

  try {
    const { data, success } = await getCategoryById(itemId);

    if (!success || !data?.category) notFound();

    const category = data.category;

    return (
      <section className='relative overflow-hidden'>
        <div className='grid grid-cols-1 gap-4 items-start'>
          <HeadingBar title={`Edit Category: ${category.name}`} listPath={returnPath} />
          <div className='bg-white rounded-3xl p-6'>
            <CategoryForm data={category} />
          </div>
        </div>
      </section>
    );
  } catch (error) {
    notFound();
  }
};

export default EditCategoryPage;
