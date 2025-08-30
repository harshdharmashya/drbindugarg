import { HeadingBar } from '@/components/dashboard/admin/misc';
import { notFound } from 'next/navigation';
import TagForm from '../../TagForm';
import { getTagById } from '@/server/actions/tag.actions';

const EditTagPage = async ({ params }: { params: { id: string } }) => {
  const itemId = params.id;

  const returnPath = '/blogs/tags';

  try {
    const { data, success } = await getTagById(itemId);

    if (!success || !data?.tag) notFound();

    const tag = data.tag;

    return (
      <section className='relative overflow-hidden'>
        <div className='grid grid-cols-1 gap-4 items-start'>
          <HeadingBar title={`Edit Tag: ${tag.name}`} listPath={returnPath} />
          <div className='bg-white rounded-3xl p-6'>
            <TagForm data={tag} />
          </div>
        </div>
      </section>
    );
  } catch (error) {
    notFound();
  }
};

export default EditTagPage;
