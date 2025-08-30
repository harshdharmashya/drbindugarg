import { HeadingBar } from '@/components/dashboard/admin/misc';
import { notFound } from 'next/navigation';
import GalleryCategoryForm from '../../GalleryCategoryForm';
import { getGalleryCategoryById } from '@/server/actions/gallery-category.actions';
import { ErrorState } from '@/components/dashboard/admin/misc/StateUI';

const EditGalleryCategoryPage = async ({ params }: { params: { id: string } }) => {
  const itemId = params.id;

  const returnPath = '/gallery';

  try {
    const { data, success } = await getGalleryCategoryById(itemId);

    if (!success || !data?.category) {
      return <ErrorState message='Gallery category not found' />;
    }

    const galleryCategory = data.category;

    return (
      <section className='relative overflow-hidden'>
        <div className='grid grid-cols-1 gap-4 items-start'>
          <HeadingBar title={`Edit Gallery Category: ${galleryCategory.name}`} listPath={returnPath} />
          <div className='bg-white rounded-3xl p-6'>
            <GalleryCategoryForm data={galleryCategory} />
          </div>
        </div>
      </section>
    );
  } catch (error) {
    notFound();
  }
};

export default EditGalleryCategoryPage;
