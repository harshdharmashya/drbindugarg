import { HeadingBar } from '@/components/dashboard/admin/misc';
import { notFound } from 'next/navigation';
import AuthorForm from '../../AuthorForm';
import { getAuthorById } from '@/server/actions/author.actions';

const EditAuthorPage = async ({ params }: { params: { id: string } }) => {
  const itemId = params.id;

  const returnPath = '/blogs/authors';

  try {
    const { data, success } = await getAuthorById(itemId);

    if (!success || !data?.author) notFound();

    const author = data.author;

    return (
      <section className='relative overflow-hidden'>
        <div className='grid grid-cols-1 gap-4 items-start'>
          <HeadingBar title={`Edit Author: ${author.name}`} listPath={returnPath} />
          <div className='bg-white rounded-3xl p-6'>
            <AuthorForm data={author} />
          </div>
        </div>
      </section>
    );
  } catch (error) {
    notFound();
  }
};

export default EditAuthorPage;
