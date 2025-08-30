import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const BlogsSkeleton = () => {
  return (
    <section className='bg-gray-50'>
      <div className='max-container padding-container-sm relative z-10'>
        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Featured Post Skeleton */}
            <div className='relative h-[450px] rounded-2xl overflow-hidden shadow-lg'>
              <Skeleton className='w-full h-full' />
              <div className='absolute bottom-0 left-0 right-0 p-6'>
                <Skeleton className='w-24 h-6 mb-3' />
                <Skeleton className='w-3/4 h-8 mb-2' />
                <Skeleton className='w-1/2 h-6' />
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-2xl p-6 shadow-lg'>
              <Skeleton className='w-48 h-8 mb-6' />
              <div className='space-y-4'>
                {[...Array(4)].map((_, index) => (
                  <div key={index} className='flex items-center gap-4'>
                    <Skeleton className='w-20 h-20 rounded-lg flex-shrink-0' />
                    <div className='flex-grow'>
                      <Skeleton className='w-full h-4 mb-2' />
                      <Skeleton className='w-3/4 h-4' />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Skeleton */}
        <div className='mt-16'>
          <Skeleton className='w-48 h-10 mb-8' />
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[...Array(6)].map((_, index) => (
              <div key={index} className='bg-white rounded-xl overflow-hidden shadow-lg'>
                <Skeleton className='w-full h-48' />
                <div className='p-6'>
                  <Skeleton className='w-3/4 h-6 mb-3' />
                  <Skeleton className='w-full h-4 mb-2' />
                  <Skeleton className='w-full h-4 mb-4' />
                  <div className='flex items-center justify-between'>
                    <Skeleton className='w-24 h-4' />
                    <Skeleton className='w-20 h-4' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Skeleton */}
        <div className='flex justify-center mt-16'>
          <Skeleton className='w-64 h-10' />
        </div>
      </div>
    </section>
  );
};

export default BlogsSkeleton;
