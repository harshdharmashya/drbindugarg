import { HeadingBar } from '@/components/dashboard/admin/misc';
import { notFound } from 'next/navigation';
import GalleryTagForm from '../../GalleryTagForm';
import { getGalleryTagById } from '@/server/actions/gallery-tag.actions';

const EditGalleryTagPage = async ({ params }: { params: { id: string } }) => {
  const itemId = params.id;

  const returnPath = '/gallery-tags';

  try {
    const { data, success } = await getGalleryTagById(itemId);

    if (!success || !data?.tag) notFound();

    const tag = data.tag;

    return (
      <section className='relative overflow-hidden'>
        <div className='grid grid-cols-1 gap-4 items-start'>
          <HeadingBar title={`Edit Gallery Tag: ${tag.name}`} listPath={returnPath} />
          <div className='bg-white rounded-3xl p-6'>
            <GalleryTagForm data={tag} />
          </div>
        </div>
      </section>
    );
  } catch (error) {
    notFound();
  }
};

export default EditGalleryTagPage;
