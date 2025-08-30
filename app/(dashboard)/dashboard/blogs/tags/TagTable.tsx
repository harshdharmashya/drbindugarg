'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AdminDashActionLinks, HeadingBar } from '@/components/dashboard/admin/misc';
import { MasterTable } from '@/components/dashboard/admin/table';
import { ErrorState } from '@/components/dashboard/admin/misc/StateUI';
import { useTags, useDeleteTag } from '@/hooks/blogs/tag.hooks';
import { MasterFilter } from '@/components/dashboard/admin/table';
import { FilterTypeKey, filterTypeMaps } from '@/constants/admin';
import { FilterOption, FilterValues } from '@/types/dashboard';

const TagTable: React.FC = () => {
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

  const { data, isLoading, error } = useTags(queryParams);

  const deleteItem = useDeleteTag();

  const tags = data?.tags || [];
  const pagination = data?.pagination;

  if (error) {
    return <ErrorState message={error.message} />;
  }

  const headers = ['Name', 'Slug', 'Actions'];

  const rows = tags.map((tag) => ({
    id: tag._id,
    values: [
      <p className='font-medium'>{tag.name}</p>,
      <p className='text-sm text-gray-500'>{tag.slug}</p>,
      <AdminDashActionLinks edit delete basePath='/blogs/tags' id={tag._id} itemName={tag.name} deleteItem={() => deleteItem.mutateAsync(tag._id)} />,
    ],
  }));

  const filterOptions: FilterOption[] = [
    {
      type: filterTypeMaps.input.key as FilterTypeKey,
      label: 'Tag Name',
      key: 'name',
    },
    {
      type: filterTypeMaps.input.key as FilterTypeKey,
      label: 'Slug',
      key: 'slug',
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
          title='Blog Tags'
          filterElement={
            <MasterFilter
              filterOptions={filterOptions}
              onApplyFilters={handleApplyFilters}
              onResetFilters={handleResetFilters}
              initialFilters={filters}
            />
          }
          addPath='/blogs/tags/add'
        />
        <MasterTable headers={headers} rows={rows} isLoading={isLoading} pagination={pagination} />
      </div>
    </section>
  );
};

export default TagTable;
