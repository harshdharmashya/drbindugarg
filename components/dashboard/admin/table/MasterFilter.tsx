'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DateRange } from 'react-day-picker';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatePickerWithRange } from '@/components/ui/date-picker-with-range';
import { FilterIcon, X, Search, Filter, RotateCcw } from 'lucide-react';
import { FilterValues, FilterOption } from '@/types/dashboard';
import { MultiSelectWithSearch } from '../forms';
import { cn } from '@/lib/utils';

const dateOptions = [
  { label: 'Today', value: 'today' },
  { label: 'Yesterday', value: 'yesterday' },
  { label: 'Last 7 Days', value: 'last7days' },
  { label: 'Last 30 Days', value: 'last30days' },
  { label: 'Custom Range', value: 'custom' },
];

type FilterVariant = 'default' | 'md' | 'lg';

interface MasterFilterProps {
  filterOptions: FilterOption[];
  onApplyFilters: (filters: Record<string, string>) => void;
  onResetFilters: () => void;
  initialFilters?: FilterValues;
  variant?: FilterVariant;
}

const variantWidths: Record<FilterVariant, string> = {
  default: 'w-[400px]',
  md: 'w-[700px]',
  lg: 'w-[900px]',
};

export default function MasterFilter({ filterOptions, onApplyFilters, onResetFilters, initialFilters, variant = 'default' }: MasterFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filterValues, setFilterValues] = useState<FilterValues>(initialFilters || {});
  const [selectedDateOption, setSelectedDateOption] = useState('');

  useEffect(() => {
    if (initialFilters) {
      const processedFilters = Object.entries(initialFilters).reduce((acc, [key, value]) => {
        if (typeof value === 'string' && value.includes(',')) {
          acc[key] = value.split(',');
        } else {
          acc[key] = value;
        }
        return acc;
      }, {} as FilterValues);

      setFilterValues(processedFilters);
    } else {
      setFilterValues({});
    }
  }, [initialFilters]);

  const handleInputChange = (key: string, value: string) => {
    setFilterValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleDateRangeChange = (key: string, value: DateRange | undefined) => {
    setFilterValues((prev) => ({
      ...prev,
      [key]: value
        ? {
            from: value.from ? new Date(value.from) : undefined,
            to: value.to ? new Date(value.to) : undefined,
          }
        : undefined,
    }));
  };

  const handleFilter = () => {
    const processedFilters = Object.entries(filterValues).reduce((acc, [key, value]) => {
      if (value instanceof Object && 'from' in value && 'to' in value) {
        if (value.from) acc[`${key}From`] = value.from.toISOString().split('T')[0];
        if (value.to) acc[`${key}To`] = value.to.toISOString().split('T')[0];
      } else if (Array.isArray(value)) {
        acc[key] = value.join(',');
      } else if (value) {
        acc[key] = value as string;
      }
      return acc;
    }, {} as Record<string, string>);

    onApplyFilters(processedFilters);
  };

  const handleReset = () => {
    setFilterValues({});
    onResetFilters();
  };

  const handleDateOptionChange = (value: string) => {
    setSelectedDateOption(value);
    const today = new Date();
    let fromDate, toDate;

    switch (value) {
      case 'today':
        fromDate = new Date(today);
        toDate = new Date(today);
        break;
      case 'yesterday':
        fromDate = new Date(today);
        fromDate.setDate(today.getDate() - 1);
        toDate = new Date(today);
        break;
      case 'last7days':
        fromDate = new Date(today);
        fromDate.setDate(today.getDate() - 7);
        toDate = new Date(today);
        break;
      case 'last30days':
        fromDate = new Date(today);
        fromDate.setDate(today.getDate() - 30);
        toDate = new Date(today);
        break;
      default:
        fromDate = toDate = undefined;
    }

    setFilterValues((prev) => ({
      ...prev,
      dateRange: { from: fromDate, to: toDate },
    }));
  };

  const handleClearDateRange = () => {
    setSelectedDateOption('custom');
    setFilterValues((prev) => ({
      ...prev,
      dateRange: undefined,
    }));
  };

  const getActiveFiltersCount = () => {
    return Object.entries(filterValues).reduce((count, [key, value]) => {
      if (value) {
        if (typeof value === 'object' && 'from' in value && 'to' in value) {
          return value.from || value.to ? count + 1 : count;
        }
        return count + 1;
      }
      return count;
    }, 0);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} size='sm' className='flex items-center gap-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md px-4'>
        <FilterIcon className='h-4 w-4' />
        Filter
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={cn(
              'absolute right-0 top-12 bg-white rounded-xl shadow-xl border border-gray-200 z-50 max-h-[calc(100vh-160px)] overflow-y-auto custom-scrollbar',
              variantWidths[variant]
            )}
          >
            <div className='p-4'>
              <div className='flex items-center justify-between border-b border-gray-100 pb-4 mb-6'>
                <div className='flex items-center gap-2'>
                  <h3 className='text-lg font-semibold text-gray-900'>Filters</h3>
                  <span className='px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-600 rounded-full capitalize'>
                    {getActiveFiltersCount()} active
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className='p-2 bg-gray-50 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200 rounded-full'
                >
                  <X className='h-4 w-4' />
                  <span className='sr-only'>Close</span>
                </button>
              </div>

              <div className={cn('grid gap-x-6 gap-y-4', variant === 'default' ? 'grid-cols-1' : variant === 'md' ? 'grid-cols-2' : 'grid-cols-3')}>
                <div className='space-y-2'>
                  <div className='flex justify-between items-center'>
                    <Label className='text-sm text-gray-600'>Select Date</Label>
                    {/* @ts-ignore */}
                    {(filterValues.dateRange?.from || filterValues.dateRange?.to) && (
                      <button onClick={handleClearDateRange} className='text-sm text-blue-500 hover:text-blue-600'>
                        Clear
                      </button>
                    )}
                  </div>
                  <Select value={selectedDateOption} onValueChange={handleDateOptionChange}>
                    <SelectTrigger className='w-full bg-white border-gray-200 h-10 rounded-lg'>
                      <SelectValue placeholder='Select date range' />
                    </SelectTrigger>
                    <SelectContent>
                      {dateOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value} className='hover:bg-gray-50'>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedDateOption === 'custom' && (
                    <DatePickerWithRange
                      dateRange={filterValues.dateRange as DateRange}
                      onDateRangeChange={(range) => setFilterValues((prev) => ({ ...prev, dateRange: range }))}
                      className='w-full'
                    />
                  )}
                </div>
                {filterOptions.map((option) => (
                  <div key={option.key} className='space-y-2'>
                    <Label className='text-sm text-gray-600'>
                      {option.label}
                      {option.key !== 'keywords' && (
                        <button onClick={() => handleInputChange(option.key, '')} className='float-right text-sm text-blue-500 hover:text-blue-600'>
                          Clear
                        </button>
                      )}
                    </Label>

                    {option.type === 'dateRange' && (
                      <DatePickerWithRange
                        dateRange={filterValues[option.key] as DateRange}
                        onDateRangeChange={(range) => handleDateRangeChange(option.key, range)}
                        className='w-full'
                      />
                    )}

                    {option.type === 'select' && (
                      <Select value={filterValues[option.key] as string} onValueChange={(value) => handleInputChange(option.key, value)}>
                        <SelectTrigger className='w-full bg-white border-gray-200 h-10 rounded-lg'>
                          <SelectValue placeholder={`Select ${option.label.toLowerCase()}`} />
                        </SelectTrigger>
                        <SelectContent>
                          {option.options?.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value} className='hover:bg-gray-50'>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}

                    {option.type === 'multiSelect' && (
                      <MultiSelectWithSearch
                        variant='sm'
                        options={option.options || []}
                        selectedOptions={
                          filterValues[option.key]
                            ? Array.isArray(filterValues[option.key])
                              ? (filterValues[option.key] as string[])
                              : (filterValues[option.key] as string).split(',')
                            : []
                        }
                        onChange={(selectedValues: string[]) => {
                          setFilterValues((prev) => ({
                            ...prev,
                            [option.key]: selectedValues,
                          }));
                        }}
                      />
                    )}

                    {option.type === 'input' && (
                      <div className='relative'>
                        <Search className='absolute left-3 top-2.5 h-5 w-5 text-gray-400' />
                        <Input
                          placeholder={`Search ${option.label.toLowerCase()}`}
                          className='pl-10 h-10 bg-white border-gray-200 rounded-lg'
                          value={(filterValues[option.key] as string) || ''}
                          onChange={(e) => handleInputChange(option.key, e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className={cn('flex items-center justify-between mt-6 pt-4 border-t', variant === 'default' ? '' : 'col-span-2')}>
                <Button
                  variant='outline'
                  onClick={handleReset}
                  className='text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 flex items-center gap-2'
                >
                  <RotateCcw size={16} />
                  Reset
                </Button>
                <Button
                  onClick={() => {
                    handleFilter();
                    setIsOpen(false);
                  }}
                  className='bg-blue-500 text-white hover:bg-blue-600 flex items-center gap-2'
                >
                  <Filter size={16} />
                  Apply Filters
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
