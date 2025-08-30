'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { ChevronDown, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface IMultiSelectCheckbox {
  options: Array<{ label: string; value: string }>;
  selectedOptions: string[] | undefined;
  onChange: (value: string[]) => void;
  variant?: 'sm' | 'md';
}

const MultiSelectWithSearch: React.FC<IMultiSelectCheckbox> = ({ options, selectedOptions, onChange, variant = 'md' }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isValidArray = Array.isArray(selectedOptions) && selectedOptions.length > 0;
  const currentSelectedOptions = isValidArray ? selectedOptions : [];

  const handleCheckboxChange = (value: string) => {
    const newSelectedOptions = currentSelectedOptions.includes(value)
      ? currentSelectedOptions.filter((option) => option !== value)
      : [...currentSelectedOptions, value];
    onChange(newSelectedOptions);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div ref={dropdownRef} className={cn('relative w-full inline-flex', dropdownOpen ? 'flex-col-reverse gap-4' : 'flex-col gap-2')}>
      <div className='relative'>
        <div className='flex justify-between items-center relative'>
          <Input
            onClick={handleDropdownToggle}
            type='text'
            placeholder={'Select...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={cn('!shadow-none focus-visible:!ring-blue-500 !ring-offset-blue-50 !ring-offset-2', variant === 'sm' ? '!py-5' : '!py-6')}
          />
          <ChevronDown size={16} className='text-gray-400 right-3.5 absolute' />
        </div>
        {dropdownOpen && (
          <div
            className={cn(
              'absolute top-14 mt-1 w-full border-t-[3px] flex gap-2 flex-wrap border-blue-100 bg-white rounded-xl shadow-lg z-10',
              variant === 'sm' ? 'text-sm p-3' : 'text-base p-4'
            )}
          >
            {filteredOptions.map((option) => (
              <label key={option.value} className='flex items-center cursor-pointer p-2 bg-blue-100 rounded'>
                <input
                  type='checkbox'
                  checked={currentSelectedOptions.includes(option.value)}
                  onChange={() => handleCheckboxChange(option.value)}
                  className={cn('mr-2 accent-blue-500 size-4', variant === 'sm' ? 'size-3' : 'size-4')}
                />
                {option.label}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className='flex flex-wrap gap-2'>
        {currentSelectedOptions.map((value) => {
          const selectedOption = options.find((option) => option.value === value);
          return (
            <div
              key={value}
              className={cn('flex items-center bg-blue-100 gap-2 rounded-full', variant === 'sm' ? 'text-sm py-1 px-3 pr-1' : 'text-base py-1 px-3')}
            >
              {selectedOption?.label}
              <div className='bg-blue-500 text-white p-1 rounded-full'>
                <X size={12} className='cursor-pointer' onClick={() => handleCheckboxChange(value)} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultiSelectWithSearch;
