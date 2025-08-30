import { HeadingBar } from '@/components/dashboard/admin/misc';
import { notFound } from 'next/navigation';
import { getSubCategoryById } from '@/server/actions/subcategory.actions';
import { SubCategoryDocument } from '@/server/models/subcategory.model';
import SubCategoryForm from '../../SubCategoryForm';

const EditSubCategoryPage = async ({ params }: { params: { id: string; subcategoryId: string } }) => {
  const categoryId = params.id;
  const itemId = params.subcategoryId;

  const returnPath = `/blogs/categories/${categoryId}/subcategories`;

  try {
    const { data, success } = await getSubCategoryById(itemId);

    if (!success || !data?.subcategory) notFound();

    const category = data.subcategory as SubCategoryDocument;
    return (
      <section className='relative overflow-hidden'>
        <div className='grid grid-cols-1 gap-4 items-start'>
          <HeadingBar title={`Edit Subcategory: ${category.name}`} listPath={returnPath} />
          <div className='bg-white rounded-3xl p-6'>
            <SubCategoryForm data={category} categoryId={categoryId} />
          </div>
        </div>
      </section>
    );
  } catch (error) {
    notFound();
  }
};

export default EditSubCategoryPage;
