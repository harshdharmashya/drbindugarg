'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import logo from '@/public/images/logo.png';
import { navigationMenu } from '@/constants';
import { INavLinkItem } from '@/types';

const useTimeout = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimeoutRef = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    return clearTimeoutRef;
  }, []);

  return {
    setTimeoutRef: (callback: () => void, delay: number) => {
      clearTimeoutRef();
      timeoutRef.current = setTimeout(callback, delay);
    },
    clearTimeoutRef,
  };
};

const MegaMenu = ({ isOpen, onLinkClick, category }: { isOpen: boolean; onLinkClick: () => void; category: INavLinkItem }) => {
  const getGridCols = (length: number) => {
    if (length <= 7) return 'grid-cols-1';
    if (length <= 16) return 'grid-cols-2';
    return 'grid-cols-3';
  };

  const gridCols = getGridCols(category.content?.length || 0);
  const menuWidth = gridCols === 'grid-cols-1' ? 'w-[320px]' : gridCols === 'grid-cols-2' ? 'w-[640px]' : 'w-[800px]';

  return (
    <div
      className={cn(
        'absolute left-0 mt-2',
        'transition-all duration-300 ease-in-out transform',
        isOpen ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 -translate-y-4 pointer-events-none',
        menuWidth
      )}
    >
      <div className='rounded-xl shadow-lg ring-1 ring-black/5 overflow-hidden bg-white backdrop-blur-sm'>
        <div className='p-4'>
          <div className={cn('grid gap-4', gridCols)}>
            {category.content?.map((item) => (
              <Link
                key={item.name}
                href={item.href || '#'}
                className={cn(
                  'flex items-start gap-3 px-4 py-2 text-sm rounded-lg',
                  'text-gray-700 hover:text-primary',
                  'hover:bg-primary/5',
                  'transition-colors duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-primary/20'
                )}
                onClick={onLinkClick}
              >
                {item.icon && <item.icon className='w-5 h-5 mt-0.5 text-primary' />}
                <div>
                  <span className='block font-medium'>{item.name}</span>
                  <span className='block text-xs text-gray-500 mt-0.5'>{item.description}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ category }: { category: INavLinkItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTimeoutRef, clearTimeoutRef } = useTimeout();
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    clearTimeoutRef();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeoutRef(() => setIsOpen(false), 300);
  };

  const hasDropdown = category.content && category.content.length > 0;

  if (!hasDropdown) {
    return (
      <Link
        href={category.href || '#'}
        className={cn(
          'inline-flex items-center px-4 py-2 gap-2',
          'text-sm font-medium text-gray-700',
          'hover:text-primary transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg'
        )}
      >
        {category.icon && <category.icon className='w-4 h-4' />}
        {category.name}
      </Link>
    );
  }

  return (
    <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
        className={cn(
          'group inline-flex items-center px-4 py-2 gap-1 cursor-pointer',
          'text-sm font-medium text-gray-700',
          'hover:text-primary transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg'
        )}
      >
        {category.icon && <category.icon className='w-4 h-4 hidden 2xl:block' />}
        {category.name}
        <ChevronDown className={cn('h-4 w-4 transition-transform duration-200', 'group-hover:text-primary', isOpen && 'rotate-180')} />
      </div>
      <MegaMenu isOpen={isOpen} onLinkClick={() => setIsOpen(false)} category={category} />
    </div>
  );
};

const MobileNavItem = ({ category }: { category: INavLinkItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = category.content && category.content.length > 0;

  if (!hasDropdown) {
    return (
      <Link
        href={category.href || '#'}
        className={cn('flex items-center gap-3 py-3 px-4 text-gray-700', 'hover:bg-gray-50 transition-colors duration-200')}
      >
        {category.icon && <category.icon className='w-5 h-5' />}
        <span className='font-medium'>{category.name}</span>
      </Link>
    );
  }

  return (
    <div className='border-b border-gray-100 last:border-0'>
      <button
        className={cn('w-full flex justify-between items-center', 'py-3 px-4 text-gray-700', 'hover:bg-gray-50 transition-colors duration-200')}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='flex items-center gap-3'>
          {category.icon && <category.icon className='w-5 h-5' />}
          <span className='font-medium'>{category.name}</span>
        </span>
        <ChevronDown className={cn('h-4 w-4 transition-transform duration-200', isOpen && 'rotate-180')} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className='overflow-hidden bg-gray-50'
          >
            {category.content?.map((item) => (
              <Link
                key={item.name}
                href={item.href || '#'}
                className={cn(
                  'flex items-center gap-3 py-2.5 px-8',
                  'text-sm text-gray-600',
                  'hover:bg-gray-100 hover:text-primary',
                  'transition-colors duration-200'
                )}
              >
                {item.icon && <item.icon className='w-4 h-4' />}
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className='bg-white border-t border-gray-100'>
      <div className='px-8'>
        <div className='flex justify-between items-center h-20'>
          <div className='flex-shrink-0'>
            <Link href='/' className='block'>
              <Image src={logo} alt='Dr Bindu Garg' className='h-10 w-auto' priority />
            </Link>
          </div>

          <div className='hidden lg:flex lg:items-center lg:gap-x-1 lg:justify-center'>
            {navigationMenu.map((category) => (
              <NavItem key={category.name} category={category} />
            ))}
          </div>

          <div className='hidden lg:block'>
            <Link href='/book-appointment' className='btn-default'>
              Book Your Appointment
            </Link>
          </div>

          <div className='lg:hidden'>
            <button
              className={cn(
                'inline-flex items-center justify-center p-2',
                'rounded-lg text-gray-400',
                'hover:text-gray-500 hover:bg-gray-100',
                'focus:outline-none focus:ring-2 focus:ring-primary/20'
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className='sr-only'>{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {mobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg-white border-t'
          >
            <div className='divide-y divide-gray-100'>
              {navigationMenu.map((category) => (
                <MobileNavItem key={category.name} category={category} />
              ))}
              <div className='p-4'>
                <Link href='/book-appointment' className='w-full btn-default justify-center'>
                  Book Your Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
