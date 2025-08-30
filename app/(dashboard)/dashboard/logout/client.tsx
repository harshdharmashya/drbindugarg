'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { logout } from '@/server/actions/auth.actions';
import { Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function LogoutPageHelper() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const router = useRouter();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout();
        setStatus('success');
        router.push('/login');
      } catch (error) {
        console.error('Logout failed:', error);
        setStatus('error');
      }
    };

    performLogout();
  }, [router]);

  return (
    <div className='flex items-center justify-center min-h-[80vh]'>
      <Card className='w-64 shadow-xl border-t-4 border-t-yellow-400'>
        <CardContent className='p-6'>
          <div className='flex items-center justify-center space-x-3'>
            <Loader2 className='animate-spin h-6 w-6 text-blue-500' />
            <p className='text-lg font-semibold text-gray-800'>Logging out...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
