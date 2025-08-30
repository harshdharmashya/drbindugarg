import React from 'react';
import { ArrowRight, Calendar, TagIcon } from 'lucide-react';
import { getBlogsByConditions } from '@/server/actions/blog.actions';
import Link from 'next/link';
import { ImageWithPrefix } from '@/components/misc';
import { BlogDocumentPopulated } from '@/server/models/blog.model';
import { formatDateTime } from '@/lib/utils';

const BlogPostCard: React.FC<BlogDocumentPopulated> = ({ title, category, thumbnail, slug, publishedAt }) => (
  <Link href={`/blog/${slug}`} className='block'>
    <div className='rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer border border-gray-200'>
      <div className='relative max-w-full h-48'>
        <ImageWithPrefix width={384} height={250} src={thumbnail} alt={title} className='size-full object-cover' />
      </div>
      <div className='p-3'>
        <div className='flex items-center text-sm text-primaryColor gap-2 flex-wrap mb-2'>
          <p className='flex items-center gap-2 bg-primaryColor-50 py-1 px-3 rounded capitalize'>
            <TagIcon size={20} />
            <span className='text-sm font-medium'>{category.name}</span>
          </p>
          <p className='flex items-center gap-2 bg-secondaryColor-100 py-1 px-3 rounded text-secondaryColor-800'>
            <Calendar size={20} />
            <span className='text-sm font-medium'>{formatDateTime(publishedAt).date}</span>
          </p>
        </div>
        <h3 className='text-base font-bold mb-2 text-gray-600 line-clamp-2'>{title}</h3>
        <div className='group w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-primaryColor-600 bg-white rounded-lg transition-all duration-300 hover:bg-primaryColor-600 hover:text-white border-2 border-primaryColor-600 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5'>
          Read More
          <ArrowRight size={16} className='transform transition-transform group-hover:translate-x-1' />
        </div>
      </div>
    </div>
  </Link>
);

const TopBlogs = async () => {
  const result = await getBlogsByConditions({ limit: 4 });
  const topBlogs = result.data?.blogs || [];

  return (
    <section id='top-blogs' className='relative overflow-hidden bg-white'>
      <div className='max-container padding-container-sm'>
        <h2 className='section-title mb-6'>
          Our Recent <span className='text-primaryColor'>Blogs</span>
        </h2>
        {topBlogs.length === 0 ? (
          <p className='text-center text-gray-600'>No blogs found</p>
        ) : (
          <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {topBlogs.map((post) => (
                <BlogPostCard key={post._id} {...post} />
              ))}
            </div>
            <Link href='/blogs' className='btn-default !flex items-center mt-8 !justify-center w-fit mx-auto'>
              View all blogs
              <ArrowRight size={20} className='ml-2' />
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default TopBlogs;
