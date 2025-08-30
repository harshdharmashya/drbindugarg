'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AdminDashActionLinks, AdminDashLink, HeadingBar, RenderDateTime } from '@/components/dashboard/admin/misc';
import { MasterTable } from '@/components/dashboard/admin/table';
import { ErrorState } from '@/components/dashboard/admin/misc/StateUI';
import { useGalleryItems, useDeleteGalleryItem } from '@/hooks/gallery.hooks';
import { ArrowLeftIcon, ImageIcon, Video, Youtube } from 'lucide-react';
import { ImageWithPrefix } from '@/components/misc';
import { MasterFilter } from '@/components/dashboard/admin/table';
import { FilterTypeKey, filterTypeMaps, galleryTypeMap } from '@/constants/admin';
import { FilterOption, FilterValues } from '@/types/dashboard';
import { GalleryCategoryDocument } from '@/server/models/gallery-category.model';
import { toast } from 'react-toastify';
import { updateGalleryItemStatus } from '@/server/actions/gallery.actions';
import { OTHER_QUERY_KEYS } from '@/lib/react-query/queryKeys';
import { getQueryClient } from '@/lib/react-query/queryClient';
import { Switch } from '@/components/ui/switch';
import { FaImage, FaVideo } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GalleryTagDocument } from '@/server/models/gallery-tag.model';

const GalleryTable: React.FC<{ galleryCategoryId: string; galleryCategory: GalleryCategoryDocument }> = ({ galleryCategoryId, galleryCategory }) => {
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

  const queryParams = { page, ...filters, category: galleryCategoryId };

  const { data, isLoading, error } = useGalleryItems(queryParams);
  const deleteGalleryItem = useDeleteGalleryItem();

  const galleryItems = data?.galleryItems || [];

  const pagination = data?.pagination;

  if (error) {
    return <ErrorState message={error.message} />;
  }

  const handleStatusToggle = async (itemId: string, currentStatus: boolean) => {
    setUpdatingStatus(itemId);
    try {
      const result = await updateGalleryItemStatus({
        id: itemId,
        status: !currentStatus,
      });

      if (result.success) {
        toast.success('Gallery item status updated successfully.');
        queryClient.invalidateQueries({ queryKey: [OTHER_QUERY_KEYS.GALLERIES] });
      } else {
        toast.error('Failed to update Gallery item status. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to update Gallery item status. Please try again.');
    } finally {
      setUpdatingStatus(null);
    }
  };

  const headers = ['Thumbnail', 'Title', 'Type', 'Tags', 'Size', 'Created At - Updated At', 'Published', 'Actions'];

  const rows = galleryItems.map((item) => ({
    id: item._id,
    values: [
      item.type === galleryTypeMap.image.key ? (
        <ImageWithPrefix src={item.content} height={64} width={64} alt={item.title} className='size-12 rounded-md object-cover object-center' />
      ) : item.type === galleryTypeMap.video.key ? (
        <div className='size-12 rounded-md bg-gray-200 flex items-center justify-center'>
          <Video className='text-gray-500' />
        </div>
      ) : (
        <ImageWithPrefix src={item.thumbnailUrl} height={48} width={48} alt={item.title} className='max-w-full h-auto rounded-md object-content' />
      ),
      <p className='font-medium'>{item.title}</p>,
      <div className='flex items-center space-x-2'>
        {item.type === galleryTypeMap.image.key ? (
          <FaImage className='text-blue-500 text-base' />
        ) : item.type === galleryTypeMap.video.key ? (
          <FaVideo className='text-green-500 text-base' />
        ) : item.type === galleryTypeMap.instagram.key ? (
          <FaInstagram className='text-pink-500 text-base' />
        ) : (
          <FaYoutube className='text-red-500 text-base' />
        )}
        <span className='capitalize'>{item.type}</span>
      </div>,
      <div className='flex items-center gap-2 uppercase'>
        {item.tags?.map((tag: GalleryTagDocument) => (
          <div
            key={tag._id}
            className='bg-gradient-to-r from-primaryColor-500 to-secondaryColor-500 text-white py-1 px-4 rounded-full text-sm font-semibold shadow-md transition-all duration-300 hover:shadow-lg'
          >
            {tag.name}
          </div>
        ))}
      </div>,
      <p className='capitalize'>{item.itemSize || 'N/A'}</p>,
      <>
        <RenderDateTime dateTime={item.createdAt} />
        {' - '}
        <RenderDateTime dateTime={item.updatedAt} />
      </>,
      <Switch
        id={`status-${item._id}`}
        checked={item.isPublished}
        onCheckedChange={() => handleStatusToggle(item._id, item.isPublished)}
        disabled={updatingStatus === item._id}
      />,
      <AdminDashActionLinks
        delete
        edit
        basePath={`/gallery/category/${galleryCategoryId}`}
        id={item._id}
        itemName={item.title}
        deleteItem={() => deleteGalleryItem.mutateAsync(item._id)}
      />,
    ],
  }));

  const filterOptions: FilterOption[] = [
    {
      type: filterTypeMaps.input.key as FilterTypeKey,
      label: 'Gallery Title',
      key: 'title',
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
          title={`Gallery Items for ${galleryCategory?.name}`}
          filterElement={
            <div className='flex items-center gap-4'>
              <AdminDashLink
                href='/gallery'
                className='flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 hover:from-blue-600 hover:via-indigo-600 hover:to-blue-700 rounded-md border border-transparent transition-colors duration-200 shadow-md hover:shadow-lg'
              >
                <ArrowLeftIcon className='size-4' />
                <span>Back to Categories</span>
              </AdminDashLink>
              <MasterFilter
                filterOptions={filterOptions}
                onApplyFilters={handleApplyFilters}
                onResetFilters={handleResetFilters}
                initialFilters={filters}
              />
            </div>
          }
          addPath={`/gallery/category/${galleryCategoryId}/add`}
        />
        <MasterTable headers={headers} rows={rows} isLoading={isLoading} pagination={pagination} />
      </div>
    </section>
  );
};

export default GalleryTable;
