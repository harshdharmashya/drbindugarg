'use client';

import { LinkIcon } from 'lucide-react';
import { HeadingBar, RenderDateTime } from '@/components/dashboard/admin/misc';
import { MasterFilter, MasterTable } from '@/components/dashboard/admin/table';
import { ErrorState } from '@/components/dashboard/admin/misc/StateUI';
import { useRouter, useSearchParams } from 'next/navigation';
import { FilterOption, FilterValues } from '@/types/dashboard';
import { useState, useCallback, useEffect } from 'react';
import { FilterTypeKey, filterTypeMaps } from '@/constants/admin';
import { useEnquiries } from '@/hooks/enquiries.hooks';
import { AnimatedModal } from '@/components/misc';
import { Button } from '@/components/ui/button';

const EnquiryTable: React.FC = () => {
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

  const { data, isLoading, error } = useEnquiries({ queryParams });

  const enquiries = data?.enquiries;
  const pagination = data?.pagination;

  if (error) {
    return <ErrorState message={error.message} />;
  }

  const headers = ['Enquiry Date', 'Name', 'Contact Info', 'Treatment', 'Message'];

  const rows =
    enquiries?.map((enquiry) => ({
      id: enquiry._id,
      values: [
        <div>
          <RenderDateTime dateTime={enquiry.createdAt} />
          {enquiry.pageUrl && (
            <a href={enquiry.pageUrl} className='text-primaryColor ml-1'>
              <LinkIcon size={16} strokeWidth={1.5} />
            </a>
          )}
        </div>,
        <div className='text-sm font-medium'>{enquiry.fullName}</div>,
        <div>
          <span className='text-xs text-gray-500'>{enquiry.phone}</span>
          {enquiry.email && <div className='text-xs text-gray-500'>{enquiry.email}</div>}
        </div>,
        <div className='text-sm'>{enquiry?.message?.split('Treatment:')[1] || 'N/A'}</div>,
        <AnimatedModal triggerElement={<Button variant='outline'>View</Button>} children={<div>{enquiry.message}</div>} />,
      ],
    })) || [];

  const filterOptions: FilterOption[] = [
    {
      type: filterTypeMaps.input.key as FilterTypeKey,
      label: 'Full Name',
      key: 'fullName',
    },
    {
      type: filterTypeMaps.input.key as FilterTypeKey,
      label: 'Phone',
      key: 'phone',
    },
    {
      type: filterTypeMaps.input.key as FilterTypeKey,
      label: 'Email',
      key: 'email',
    },
    {
      type: filterTypeMaps.input.key as FilterTypeKey,
      label: 'Treatment',
      key: 'treatment',
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
          title='Enquiries'
          filterElement={
            <MasterFilter
              filterOptions={filterOptions}
              onApplyFilters={handleApplyFilters}
              onResetFilters={handleResetFilters}
              initialFilters={filters}
              variant='md'
            />
          }
        />
        <MasterTable headers={headers} rows={rows} isLoading={isLoading} pagination={pagination} />
      </div>
    </section>
  );
};

export default EnquiryTable;
