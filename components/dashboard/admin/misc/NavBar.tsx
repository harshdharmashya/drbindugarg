'use client';

import { useRef, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minimize2, Maximize2, Lock } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { CreateSessionPayload } from '@/server/auth/definitions';
import { useSidebarStore } from '@/store/sidebarStore';
import { setUser } from '@/store/userStore';
import ChangePasswordForm from '@/components/dashboard/admin/forms/ChangePasswordForm';

const NavBar: React.FC<{ user: CreateSessionPayload | null }> = ({ user }) => {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user) {
      setUser({
        userId: user.userId,
        name: user.name,
        role: user.role as string,
        isActive: user.isActive,
        isLoggedIn: true,
      });
    }
  }, [user]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className='bg-white p-3 md:p-5 w-full flex justify-between items-center rounded-3xl'>
      <div className='flex items-center text-sm tracking-wider'>
        <div
          className={cn(
            'cursor-pointer hover:bg-blue-50 hover:text-black text-white p-2.5 md:p-3 mr-2 rounded-full transition-all duration-300',
            !isSidebarOpen ? 'bg-blue-500' : 'bg-amber-500'
          )}
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <Minimize2 size={25} className='size-5 md:size-6' /> : <Maximize2 size={25} className='size-5 md:size-6' />}
        </div>

        {user?.role && <p className='text-xl font-semibold capitalize'>{user?.role as string} Dashboard</p>}
      </div>

      <div className='flex items-center gap-3 md:gap-4 ml-auto'>
        <div className='relative z-50' ref={dropdownRef}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDropdown}
            className='size-10 rounded-full flex justify-center items-center bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300'
          >
            <Lock size={20} strokeWidth={2} />
          </motion.button>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial='hidden'
                animate='visible'
                exit='hidden'
                variants={dropdownVariants}
                transition={{ duration: 0.2 }}
                className='absolute right-0 mt-3 w-80 rounded-xl shadow-2xl bg-white overflow-hidden'
              >
                <div className='py-2' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                  <ChangePasswordForm user={user} onClose={() => setIsDropdownOpen(false)} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className='flex items-center bg-gradient-to-r from-indigo-50 to-blue-50 pr-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300'
        >
          <Image src='/images/user.png' alt='Profile' width={48} height={48} className='rounded-full size-12 object-cover border-2 border-white' />
          <p className='ml-2 hidden md:block text-sm font-medium text-gray-700'>Hello, {user?.name}</p>
        </motion.div>
      </div>
    </nav>
  );
};

export default NavBar;
