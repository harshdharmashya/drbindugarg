import { Suspense } from 'react';
import { getBlogsByConditions } from '@/server/actions/blog.actions';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { ImageWithPrefix } from '@/components/misc';
import { getAllCategories } from '@/server/actions/category.actions';
import { Skeleton } from '@/components/ui/skeleton';
import BlogMiniForm from './BlogMiniForm';

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section id='blog-detail' className='relative overflow-visible'>
      <div className='max-container px-4 md:px-6 lg:px-8 2xl:px-0 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Left Column */}
          <div className='lg:col-span-2'>{children}</div>

          {/* Right Column */}
          <div className='lg:col-span-1'>
            <div className='space-y-6 lg:sticky lg:top-24'>
              <div className='bg-gradient-to-r from-primaryColor-50 to-primaryColor-100 shadow-lg rounded-xl overflow-hidden'>
                <div className='bg-gradient-to-r from-primaryColor-200 to-primaryColor-300 p-6'>
                  <h2 className='text-xl font-bold text-primaryColor-900 text-center'>Schedule an Appointment</h2>
                </div>
                <div>
                  <BlogMiniForm className='!rounded-none' />
                </div>
              </div>

              {/* Recent Articles Section */}
              <Suspense fallback={<RecentArticlesSkeleton />}>
                <RecentArticles />
              </Suspense>

              {/* Categories Section */}
              <Suspense fallback={<CategoriesSkeleton />}>
                <CategoriesSection />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const RecentArticles = async () => {
  const result = await getBlogsByConditions({ limit: 5 });
  const recentBlogs = result.data?.blogs || [];

  return (
    <aside>
      <div className='bg-gray-300 py-2 px-4 rounded-t-md'>
        <h2 className='text-lg font-semibold text-gray-900'>Recent Articles</h2>
      </div>
      <div className='space-y-4 bg-white p-4 border-t-0 border rounded-b-md'>
        {recentBlogs.map((blog) => (
          <div key={blog._id} className='flex gap-4 border-b pb-4'>
            <div className='bg-gray-100 size-20 flex-shrink-0 relative w-20 h-20'>
              {blog.thumbnail_small && (
                <ImageWithPrefix height={100} width={100} src={blog.thumbnail_small} alt={blog.title} className='max-w-full h-auto object-cover' />
              )}
            </div>
            <div className='flex flex-col justify-between'>
              <Link href={`/blog/${blog.slug}`} className='text-gray-800 text-sm hover:underline'>
                {blog.title}
              </Link>
              <Link href={`/blog/${blog.slug}`} className='text-red-500 text-sm font-semibold hover:underline flex items-center'>
                Know more <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

const RecentArticlesSkeleton = () => (
  <aside>
    <div className='bg-gray-300 py-2 px-4 rounded-t-md'>
      <h2 className='text-lg font-semibold text-gray-900'>Recent Articles</h2>
    </div>
    <div className='space-y-4 bg-white p-4 border-t-0 border rounded-b-md'>
      {[...Array(5)].map((_, index) => (
        <div key={index} className='flex gap-4 border-b pb-4'>
          <Skeleton className='h-20 w-20 rounded' />
          <div className='flex flex-col justify-between w-full'>
            <Skeleton className='h-4 w-3/4' />
            <Skeleton className='h-4 w-1/4' />
          </div>
        </div>
      ))}
    </div>
  </aside>
);

const CategoriesSection = async () => {
  const result = await getAllCategories({ limit: 5 });
  const categories = result.data?.categories || [];

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='font-bold text-lg'>Categories</h2>
      {categories.map((category) => (
        <Link href='/blogs' prefetch={false} className='flex gap-x-1 items-start border-b pb-4' key={category._id}>
          <ChevronRight className='text-primaryColor' size={25} strokeWidth={1.5} />
          <span className='font-medium text-base'>{category.name}</span>
          <span className='ml-auto bg-primaryColor-100 text-primaryColor text-xs h-6 w-6 flex items-center justify-center rounded-full'>
            {category.postCount}
          </span>
        </Link>
      ))}
    </div>
  );
};

const CategoriesSkeleton = () => (
  <div className='flex flex-col gap-4'>
    <h2 className='font-bold text-lg'>Categories</h2>
    {[...Array(5)].map((_, index) => (
      <div key={index} className='flex gap-x-1 items-start border-b pb-4'>
        <Skeleton className='h-6 w-6 rounded-full' />
        <Skeleton className='h-4 w-3/4' />
      </div>
    ))}
  </div>
);
