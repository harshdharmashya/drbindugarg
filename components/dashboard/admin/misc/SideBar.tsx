'use client';

import { useSidebarStore } from '@/store/sidebarStore';
import { cn } from '@/lib/utils';
import { sidebarLinks } from '@/constants/admin';
import AdminDashLink from './AdminDashLink';
import logo from '@/public/images/logo.png';
import Image from 'next/image';
import { useUserStore } from '@/store/userStore';

const Sidebar = () => {
  const { isSidebarOpen } = useSidebarStore();
  const { user } = useUserStore();

  if (!user) return null;

  return (
    <aside
      className={cn(
        'sticky group top-0 left-0 max-lg:hidden bg-white w-full flex flex-col justify-start items-start gap-8 h-screen pt-5 pb-8 overflow-hidden hover:overflow-y-auto overflow-x-hidden custom-scrollbar rounded-3xl',
        !isSidebarOpen ? 'max-w-20' : 'max-w-72 pr-4'
      )}
    >
      <div className='flex items-center justify-center px-3 self-center justify-self-center'>
        {isSidebarOpen ? (
          <Image src={logo} alt='logo' className='object-contain max-w-full h-10' priority />
        ) : (
          <p className='bg-gradient-to-br from-blue-400 to-blue-700 rounded-full size-12 flex items-center justify-center text-white font-bold'>LM</p>
        )}
      </div>
      <div className={cn('overflow-hidden hover:overflow-y-auto overflow-x-hidden custom-scrollbar pb-12', !isSidebarOpen ? 'w-20' : 'w-72')}>
        {sidebarLinks.map((item, idx) => {
          return (
            <div key={idx}>
              <p className={cn('text-gray-400 text-xs font-medium pl-6 mt-4 mb-2 uppercase', !isSidebarOpen ? 'hidden' : '')}>{item.label}</p>
              {item.links && (
                <div className='pl-4'>
                  {item.links.map(
                    (sublink, subIdx) =>
                      sublink.title && (
                        <AdminDashLink
                          key={subIdx}
                          href={sublink.href}
                          className='shrink-0 w-56 flex items-center gap-4 pr-4 hover:pl-6 p-3 rounded-full text-sm transition-all duration-300 text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white'
                        >
                          <sublink.icon size={24} strokeWidth={1.5} />
                          <span className={cn('capitalize', !isSidebarOpen ? 'hidden' : '')}>{sublink.title}</span>
                        </AdminDashLink>
                      )
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
