import { HeadingBar } from '@/components/dashboard/admin/misc';
import SubCategoryTable from './SubCategoryTable';
import { getCategoryById } from '@/server/actions/category.actions';
import { notFound } from 'next/navigation';

const SubCategoriesPage = async ({ params }: { params: { id: string } }) => {
  const categoryId = params.id;

  const { data, success } = await getCategoryById(categoryId);

  if (!success || !data?.category) notFound();

  const category = data.category;

  return (
    <section className='relative overflow-hidden'>
      <div className='grid grid-cols-1 gap-4 items-start'>
        <HeadingBar title={`Sub Categories Under ${category.name}`} addPath={`/blogs/categories/${categoryId}/subcategories/add`} />
        <SubCategoryTable categoryId={categoryId} />
      </div>
    </section>
  );
};

export default SubCategoriesPage;
