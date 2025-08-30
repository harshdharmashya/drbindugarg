'use client';

import { IPagination } from '@/types/dashboard';
import { useRouter, useSearchParams } from 'next/navigation';

const Pagination = ({ pagination }: { pagination: IPagination }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('page', newPage.toString());
    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(query);
  };

  return (
    <nav className='flex items-center justify-between p-4 pb-0'>
      <span className='text-sm font-normal text-gray-500'>
        Page <span className='font-semibold text-gray-900'>{pagination.currentPage}</span> of{' '}
        <span className='font-semibold text-gray-900'>{pagination.totalPages}</span>
      </span>
      <div>
        <button
          className={`px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 rounded-l-lg ${
            !pagination.hasPrevPage ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={!pagination.hasPrevPage}
          onClick={() => handlePageChange(pagination.currentPage - 1)}
        >
          Previous
        </button>

        <button
          className={`px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg ${
            !pagination.hasNextPage ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={!pagination.hasNextPage}
          onClick={() => handlePageChange(pagination.currentPage + 1)}
        >
          Next
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
