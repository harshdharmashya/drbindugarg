'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AdminDashActionLinks, HeadingBar } from '@/components/dashboard/admin/misc';
import { MasterTable } from '@/components/dashboard/admin/table';
import { ErrorState } from '@/components/dashboard/admin/misc/StateUI';
import { useAuthors, useDeleteAuthor } from '@/hooks/blogs/author.hooks';
import { ImageWithPrefix } from '@/components/misc';
import { MasterFilter } from '@/components/dashboard/admin/table';
import { FilterTypeKey, filterTypeMaps } from '@/constants/admin';
import { FilterOption, FilterValues } from '@/types/dashboard';

const AuthorTable: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<FilterValues>({});

  const updateFiltersFromParams = useCallback(() => {
    const initialFilters: FilterValues = {};
    searchParams.forEach((value, key) => {
      if (key !== 'page') {
        initialFilters[key] = value;
      }
    });
    setFilters(initialFilters);
  }, [searchParams]);

  useEffect(() => {
    updateFiltersFromParams();
  }, [updateFiltersFromParams]);

  const page = Number(searchParams.get('page')) || 1;

  const queryParams = { page, ...filters };

  const { data, isLoading, error } = useAuthors(queryParams);

  const deleteItem = useDeleteAuthor();

  const authors = data?.authors || [];
  const pagination = data?.pagination;

  if (error) {
    return <ErrorState message={error.message} />;
  }

  const headers = ['Profile Picture', 'Name', 'Position', 'Actions'];

  const rows = authors.map((author) => ({
    id: author._id,
    values: [
      <ImageWithPrefix src={author.imgUrl} height={64} width={64} alt={author.alt} className='size-12 rounded-full object-contain object-center' />,
      <p>
        {author.link ? (
          <a href={author.link} target='_blank' rel='noopener noreferrer' className='text-primaryColor hover:underline'>
            {author.name}
          </a>
        ) : (
          <p>{author.name}</p>
        )}
      </p>,
      <p>{author.designation}</p>,

      <AdminDashActionLinks
        edit
        delete
        basePath='/blogs/authors'
        id={author._id}
        itemName={author.name}
        deleteItem={() => deleteItem.mutateAsync(author._id)}
      />,
    ],
  }));

  const filterOptions: FilterOption[] = [
    {
      type: filterTypeMaps.input.key as FilterTypeKey,
      label: 'Author Name',
      key: 'name',
    },
    {
      type: filterTypeMaps.input.key as FilterTypeKey,
      label: 'Position',
      key: 'position',
    },
  ];

  const handleApplyFilters = (newFilters: FilterValues) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value && typeof value === 'string') {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    params.set('page', '1');
    router.push(`?${params.toString()}`);
  };

  const handleResetFilters = () => {
    router.push(`?page=1`);
  };

  return (
    <section className='relative'>
      <div className='grid grid-cols-1 gap-4 items-start'>
        <HeadingBar
          title='Authors'
          filterElement={
            <MasterFilter
              filterOptions={filterOptions}
              onApplyFilters={handleApplyFilters}
              onResetFilters={handleResetFilters}
              initialFilters={filters}
            />
          }
          addPath='/blogs/authors/add'
        />
        <MasterTable headers={headers} rows={rows} isLoading={isLoading} pagination={pagination} />
      </div>
    </section>
  );
};

export default AuthorTable;
