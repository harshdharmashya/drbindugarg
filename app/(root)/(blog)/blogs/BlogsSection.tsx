'use client';

import { FC } from 'react';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { Calendar, TagIcon, User2 } from 'lucide-react';
import { useBlogs } from '@/hooks/blogs/blog.hooks';
import { BlogDocumentPopulated } from '@/server/models/blog.model';
import { formatDateTime } from '@/lib/utils';
import { ImageWithPrefix } from '@/components/misc';
import { formatDistanceToNow } from 'date-fns';
import BlogsSkeleton from './blog-skelton';

interface IPagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: FC<IPagination> = ({ currentPage, totalPages, onPageChange }) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) pageNumbers.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pageNumbers.push('...');
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <nav className='flex items-center justify-center mt-8'>
      <ul className='inline-flex -space-x-px'>
        <li>
          <button
            className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number, index) =>
          typeof number === 'number' ? (
            <li key={index}>
              <button
                className={`px-3 py-2 leading-tight ${
                  number === currentPage
                    ? 'text-white bg-primaryColor border-primaryColor'
                    : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                } border`}
                onClick={() => onPageChange(number)}
              >
                {number}
              </button>
            </li>
          ) : (
            <li key={index}>
              <span className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300'>...</span>
            </li>
          )
        )}
        <li>
          <button
            className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

const BlogsSection = ({ page }: { page: number }) => {
  const router = useRouter();
  const { data: blogsData, isLoading, error } = useBlogs({ page, limit: 11, isActive: true, displayInactiveBlogsForStaffs: true });

  const blogs = blogsData?.blogs || [];
  const pagination = blogsData?.pagination;

  if (page > 1 && !isLoading && blogs.length === 0) redirect('/404');

  const handlePageChange = (newPage: number) => {
    router.push(`/blogs?page=${newPage}`);
  };

  if (error) return <p>{error.message}</p>;

  const featuredBlog = blogs[0];
  const featuredPosts = blogs.slice(1, 5);
  const recentBlogs = blogs.slice(5);

  return (
    <section className='bg-gray-50'>
      <div className='max-container padding-container-sm'>
        {isLoading ? (
          <BlogsSkeleton />
        ) : (
          <div className='grid lg:grid-cols-3 gap-8'>
            {/* Main Content */}
            <div className='lg:col-span-2 space-y-8'>
              {/* Featured Post */}
              {featuredBlog && (
                <Link href={'/blog/' + featuredBlog.slug} className='relative h-fit md:h-[450px] rounded-2xl overflow-hidden group block'>
                  <ImageWithPrefix
                    src={featuredBlog.thumbnail}
                    alt={featuredBlog.thumbnail_alt || ''}
                    className='w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent' />
                  <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                    <div className='inline-block px-3 py-1 bg-primaryColor text-white text-sm rounded-full mb-1 md:mb-3'>{featuredBlog.category?.name}</div>
                    <h2 className='md:text-2xl font-bold mb-2 line-clamp-2'>{featuredBlog.title}</h2>
                    <div className='flex items-center gap-4 text-sm'>
                      <span className='flex items-center gap-2'>
                        <Calendar size={16} />
                        {formatDateTime(featuredBlog.publishedAt).date}
                      </span>
                    </div>
                  </div>
                </Link>
              )}
            </div>

            {/* Sidebar */}
            <div className='lg:col-span-1'>
              <div className='bg-white rounded-2xl p-6 border'>
                <h3 className='text-xl font-semibold mb-6 font-serif'>Other featured posts</h3>
                <div className='space-y-4'>
                  {featuredPosts.map((post, index) => (
                    <Link key={index} href={'/blog/' + post.slug} className='flex items-center gap-4 group'>
                      <div className='w-20 h-20 rounded-lg overflow-hidden flex-shrink-0'>
                        <ImageWithPrefix
                          height={128}
                          width={128}
                          src={post.thumbnail_small || post.thumbnail}
                          alt={post.thumbnail_alt || ''}
                          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                      </div>
                      <div>
                        <h4 className='font-medium line-clamp-2 group-hover:text-primaryColor transition-colors'>{post.title}</h4>
                        <div className='flex items-center justify-between text-xs text-primaryColor gap-4 flex-wrap mt-2'>
                          <p className='capitalize flex gap-2 items-center'>{post.category?.name}</p>
                          <p className='text-secondaryColor flex gap-2 items-center'>
                            <span className='font-medium'>{formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recent Posts */}
        {recentBlogs.length > 0 && (
          <div>
            <h2 className='text-2xl font-bold mb-6'>Recent Posts</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {recentBlogs.map((blog, index) => (
                <BlogCard key={index} item={blog} />
              ))}
            </div>
          </div>
        )}

        {pagination && (
          <div className='flex flex-col items-center justify-center gap-8 mt-8'>
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} onPageChange={handlePageChange} />
          </div>
        )}
      </div>
    </section>
  );
};

const BlogCard = ({ item }: { item: BlogDocumentPopulated }) => {
  const { title, thumbnail, thumbnail_alt, publishedAt, short_description, slug: link, category } = item;

  return (
    <Link
      href={'/blog/' + link}
      className='block bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200'
    >
      <div className='overflow-hidden max-w-full h-auto'>
        <ImageWithPrefix
          width={417}
          height={271}
          src={thumbnail}
          alt={thumbnail_alt || ''}
          className='size-full object-cover hover:scale-105 transition-transform duration-300'
        />
      </div>
      <div className='p-5'>
        <div className='flex items-center text-sm text-primaryColor gap-4 flex-wrap mb-2'>
          <p className='flex items-center gap-2 bg-primaryColor-50 py-1 px-3 rounded capitalize'>
            <TagIcon size={20} />
            <span className='text-sm font-medium'>{category.name}</span>
          </p>
          <p className='flex items-center gap-2 bg-secondaryColor-50 py-1 px-3 rounded text-secondaryColor'>
            <Calendar size={20} />
            <span className='text-sm font-medium'>{formatDateTime(publishedAt).date}</span>
          </p>
        </div>
        <h3 className='font-bold text-lg mb-2 line-clamp-2'>{title}</h3>
        <p className='text-gray-600 text-sm mb-4 line-clamp-2'>{short_description}</p>
        <span className='inline-flex items-center text-primaryColor hover:text-primaryColor-600 font-medium'>Read More</span>
      </div>
    </Link>
  );
};

export default BlogsSection;
