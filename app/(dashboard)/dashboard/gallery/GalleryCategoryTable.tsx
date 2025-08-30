'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AdminDashActionLinks, AdminDashLink, HeadingBar } from '@/components/dashboard/admin/misc';
import { MasterTable } from '@/components/dashboard/admin/table';
import { ErrorState } from '@/components/dashboard/admin/misc/StateUI';
import { PlusIcon } from 'lucide-react';
import { MasterFilter } from '@/components/dashboard/admin/table';
import { FilterTypeKey, filterTypeMaps } from '@/constants/admin';
import { FilterOption, FilterValues } from '@/types/dashboard';
import { useDeleteGalleryCategory, useGalleryCategories } from '@/hooks/gallery-category.hooks';
import { getQueryClient } from '@/lib/react-query/queryClient';
import { toast } from 'react-toastify';
import { OTHER_QUERY_KEYS } from '@/lib/react-query/queryKeys';
import { Switch } from '@/components/ui/switch';
import { updateGalleryCategoryStatus } from '@/server/actions/gallery-category.actions';

const GalleryCategoryTable: React.FC = () => {
  const queryClient = getQueryClient();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<FilterValues>({});
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null);

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

  const { data, isLoading, error } = useGalleryCategories(queryParams);
  const deleteGalleryCategory = useDeleteGalleryCategory();

  const galleryItems = data?.categories || [];
  const pagination = data?.pagination;

  if (error) {
    return <ErrorState message={error.message} />;
  }

  const handleStatusToggle = async (itemId: string, currentStatus: boolean) => {
    setUpdatingStatus(itemId);
    try {
      const result = await updateGalleryCategoryStatus({
        id: itemId,
        status: !currentStatus,
      });

      if (result.success) {
        toast.success('Gallery category status updated successfully.');
        queryClient.invalidateQueries({ queryKey: [OTHER_QUERY_KEYS.GALLERY_CATEGORIES] });
      } else {
        toast.error('Failed to update Gallery category status. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to update Gallery category status. Please try again.');
    } finally {
      setUpdatingStatus(null);
    }
  };

  const headers = ['Name', 'Description', 'Published', 'Actions'];

  const rows = galleryItems.map((item) => ({
    id: item._id,
    values: [
      <span>{item.name}</span>,
      <span>{item.description}</span>,
      <Switch
        id={`status-${item._id}`}
        checked={item.isActive}
        onCheckedChange={() => handleStatusToggle(item._id, item.isActive)}
        disabled={updatingStatus === item._id}
      />,

      <AdminDashActionLinks
        edit
        delete
        basePath='/gallery'
        id={item._id}
        itemName={item.name}
        deleteItem={() => deleteGalleryCategory.mutateAsync(item._id)}
        manualAction={[
          <AdminDashLink href={`/gallery/category/${item._id}`}>
            <div className='bg-blue-100 text-blue-700 hover:bg-blue-200 rounded size-7 flex items-center justify-center'>
              <PlusIcon size={16} strokeWidth={1.5} />
            </div>
          </AdminDashLink>,
        ]}
      />,
    ],
  }));

  const filterOptions: FilterOption[] = [
    {
      type: filterTypeMaps.input.key as FilterTypeKey,
      label: 'Category Name',
      key: 'name',
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
          title='Browse Gallery Category'
          filterElement={
            <MasterFilter
              filterOptions={filterOptions}
              onApplyFilters={handleApplyFilters}
              onResetFilters={handleResetFilters}
              initialFilters={filters}
            />
          }
          addPath='/gallery/add'
        />
        <MasterTable headers={headers} rows={rows} isLoading={isLoading} pagination={pagination} />
      </div>
    </section>
  );
};

export default GalleryCategoryTable;
