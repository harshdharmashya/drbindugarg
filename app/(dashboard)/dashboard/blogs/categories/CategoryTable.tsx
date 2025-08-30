'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AdminDashActionLinks, AdminDashLink, HeadingBar } from '@/components/dashboard/admin/misc';
import { MasterFilter, MasterTable } from '@/components/dashboard/admin/table';
import { ErrorState } from '@/components/dashboard/admin/misc/StateUI';
import { useCategories, useDeleteCategory } from '@/hooks/blogs/category.hooks';
import { FilterTypeKey, filterTypeMaps } from '@/constants/admin';
import { FilterOption, FilterValues } from '@/types/dashboard';

const CategoryTable: React.FC = () => {
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

  const queryParams = {
    page,
    ...filters,
  };

  const { data, isLoading, error } = useCategories(queryParams);

  const deleteItem = useDeleteCategory();

  const categories = data?.categories || [];
  const pagination = data?.pagination;

  if (error) {
    return <ErrorState message={error.message} />;
  }

  const headers = ['Name', 'Slug', 'Subcategory Count', 'Actions'];

  const rows = categories.map((category) => ({
    id: category._id,
    values: [
      <p className='font-medium'>{category.name}</p>,
      <p className='text-sm text-gray-500'>{category.slug}</p>,
      <AdminDashLink href={`/blogs/categories/${category._id}/subcategories`} className='text-blue-500'>
        {category.subcategoryCount || 0}
      </AdminDashLink>,
      <AdminDashActionLinks
        edit
        delete
        basePath='/blogs/categories'
        id={category._id}
        itemName={category.name}
        deleteItem={() => deleteItem.mutateAsync(category._id)}
      />,
    ],
  }));

  const filterOptions: FilterOption[] = [
    {
      type: filterTypeMaps.select.key as FilterTypeKey,
      label: 'Search Field',
      key: 'searchField',
      options: [
        { value: 'name', label: 'Name' },
        { value: 'slug', label: 'Slug' },
      ],
    },
    {
      type: filterTypeMaps.input.key as FilterTypeKey,
      label: 'Search Value',
      key: 'searchValue',
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
          title='Blog Categories'
          filterElement={
            <MasterFilter
              filterOptions={filterOptions}
              onApplyFilters={handleApplyFilters}
              onResetFilters={handleResetFilters}
              initialFilters={filters}
            />
          }
          addPath='/blogs/categories/add'
        />
        <MasterTable headers={headers} rows={rows} isLoading={isLoading} pagination={pagination} />
      </div>
    </section>
  );
};

export default CategoryTable;
