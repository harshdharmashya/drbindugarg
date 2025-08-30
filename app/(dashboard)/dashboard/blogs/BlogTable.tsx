'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AdminDashActionLinks, HeadingBar, RenderDateTime } from '@/components/dashboard/admin/misc';
import { MasterTable } from '@/components/dashboard/admin/table';
import { ErrorState } from '@/components/dashboard/admin/misc/StateUI';
import { useBlogs, useDeleteBlog } from '@/hooks/blogs/blog.hooks';
import { ImageWithPrefix } from '@/components/misc';
import { MasterFilter } from '@/components/dashboard/admin/table';
import { FilterTypeKey, filterTypeMaps } from '@/constants/admin';
import { FilterOption, FilterValues } from '@/types/dashboard';
import { Switch } from '@/components/ui/switch';
import { toast } from 'react-toastify';
import { updateBlogStatus } from '@/server/actions/blog.actions';
import { getQueryClient } from '@/lib/react-query/queryClient';
import { BLOGS_QUERY_KEYS } from '@/lib/react-query/queryKeys';
import { useCategories } from '@/hooks/blogs/category.hooks';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTags } from '@/hooks/blogs/tag.hooks';

const BlogTable: React.FC = () => {
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

  const { data, isLoading, error } = useBlogs(queryParams);
  const deleteItem = useDeleteBlog();

  const blogs = data?.blogs || [];
  const pagination = data?.pagination;

  if (error) {
    return <ErrorState message={error.message} />;
  }

  const { data: categoriesData } = useCategories({ limit: Number.MAX_SAFE_INTEGER });
  const { data: tagsData } = useTags({ limit: Number.MAX_SAFE_INTEGER });

  const headers = ['Thumbnail', 'Title', 'Created - Published', 'Status', 'Actions'];

  const handleStatusToggle = async (itemId: string, currentStatus: boolean) => {
    setUpdatingStatus(itemId);
    try {
      const result = await updateBlogStatus({
        id: itemId,
        status: !currentStatus,
      });

      if (result.success) {
        toast.success('Blog status updated successfully.');
        queryClient.invalidateQueries({ queryKey: [BLOGS_QUERY_KEYS.BLOGS] });
      } else {
        toast.error('Failed to update blog status. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to update blog status. Please try again.');
    } finally {
      setUpdatingStatus(null);
    }
  };

  const rows = blogs.map((blog) => ({
    id: blog._id,
    values: [
      blog.thumbnail ? (
        <ImageWithPrefix
          src={blog.thumbnail}
          alt={blog.thumbnail_alt || 'Blog Thumbnail'}
          className='size-12 object-contain object-center'
        />
      ) : (
        <p>N/A</p>
      ),
      <a href={`/blog/${blog.slug}`} target='_blank' className='primary-link'>
        {blog.title.slice(0, 50)}...
      </a>,
      <>
        <RenderDateTime dateTime={blog.createdAt} />
        {' - '}
        <RenderDateTime dateTime={blog.publishedAt} />
      </>,
      <Switch
        id={`status-${blog._id}`}
        checked={blog.isActive}
        onCheckedChange={() => handleStatusToggle(blog._id, blog.isActive)}
        disabled={updatingStatus === blog._id}
      />,
      <AdminDashActionLinks edit delete basePath='/blogs' id={blog._id} itemName={blog.title} deleteItem={() => deleteItem.mutateAsync(blog._id)} />,
    ],
  }));

  const filterOptions: FilterOption[] = [
    {
      type: filterTypeMaps.select.key as FilterTypeKey,
      label: 'Search Field',
      key: 'searchField',
      options: [
        { value: 'title', label: 'Title' },
        { value: 'content', label: 'Content' },
        { value: 'slug', label: 'Slug' },
      ],
    },
    {
      type: filterTypeMaps.input.key as FilterTypeKey,
      label: 'Search Value',
      key: 'searchValue',
    },
    {
      type: filterTypeMaps.multiSelect.key as FilterTypeKey,
      label: 'Category',
      key: 'category',
      options: categoriesData?.categories?.map((category) => ({ value: category._id, label: category.name })) || [],
    },
    {
      type: filterTypeMaps.multiSelect.key as FilterTypeKey,
      label: 'Tag',
      key: 'tags',
      options: tagsData?.tags?.map((tag) => ({ value: tag._id, label: tag.name })) || [],
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
          title='Blogs'
          filterElement={
            <div className='flex items-center gap-4'>
              <p className='text-sm font-medium text-gray-600'>Sort By</p>
              <div>
                <Select value={filters.isActive as string} onValueChange={(value) => handleApplyFilters({ ...filters, isActive: value })}>
                  <SelectTrigger className='w-full bg-white border-gray-200 h-10 rounded-lg'>
                    <SelectValue placeholder='Select Status' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='true' className='hover:bg-gray-50'>
                      Active
                    </SelectItem>
                    <SelectItem value='false' className='hover:bg-gray-50'>
                      Inactive
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <MasterFilter
                filterOptions={filterOptions}
                onApplyFilters={handleApplyFilters}
                onResetFilters={handleResetFilters}
                initialFilters={filters}
              />
            </div>
          }
          addPath='/blogs/add'
        />
        <MasterTable headers={headers} rows={rows} isLoading={isLoading} pagination={pagination} />
      </div>
    </section>
  );
};

export default BlogTable;
