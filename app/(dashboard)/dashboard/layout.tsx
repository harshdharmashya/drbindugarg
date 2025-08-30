import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';

import { NavBar, SideBar } from '@/components/dashboard/admin/misc';
import { getCurrentUser } from '@/server/auth/getCurrentUser';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QueryProvider from '@/lib/react-query/QueryProvider';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export const metadata: Metadata = { title: 'Master Dashboard' };

export const dynamic = 'force-dynamic'; // 'auto' | 'force-dynamic' | 'error' | 'force-static'

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const user = await getCurrentUser();

  if (!user || !user.isActive) return redirect('/login');

  return (
    <html lang='en'>
      <body className={inter.className}>
        <QueryProvider>
          <div className='flex items-start justify-start bg-slate-100 min-h-screen p-4 lg:gap-4'>
            <div className='shrink-0'>
              <SideBar />
            </div>
            <div className='flex flex-col gap-4 flex-1 max-w-full w-full'>
              <NavBar user={user} />
              <main className='flex-1 rounded-3xl max-w-full w-full'>{children}</main>
            </div>
          </div>
          <ToastContainer />
        </QueryProvider>
      </body>
    </html>
  );
}
