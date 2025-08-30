'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { AlertCircle } from 'lucide-react';
import { ADMIN_DASHBOARD_DIR } from '@/constants/admin';
import { IAPIResponse } from '@/types/dashboard';
import { getQueryClient } from '@/lib/react-query/queryClient';

interface IDeleteItem {
  label: string;
  itemName: string;
  returnPath: string;
  deleteAction: () => Promise<IAPIResponse>;
  isLoading?: boolean;
  invalidationKey: string;
}

const DeleteComponent: React.FC<IDeleteItem> = ({ label, itemName, returnPath, deleteAction, isLoading = false, invalidationKey }) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const queryClient = getQueryClient();

  returnPath = '/' + ADMIN_DASHBOARD_DIR + returnPath;

  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsDeleting(true);

    try {
      const result = await deleteAction();
      if (result.success) {
        toast.success(`${label} deleted successfully`);
        queryClient.invalidateQueries({ queryKey: [invalidationKey] });
        router.push(returnPath);
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      toast.error(error.message || `Failed to delete ${label}`);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      <div className='flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mb-4 mx-auto'>
        <AlertCircle size={24} className='text-red-600' />
      </div>
      <h2 className='text-2xl font-semibold text-center mb-4'>Delete {label}</h2>
      <p className='text-gray-600 text-center mb-6'>
        Are you sure you want to delete the {label.toLowerCase()} <span className='font-semibold'>{itemName}</span>? This action cannot be undone.
      </p>
      <div className='flex justify-center space-x-4'>
        <Button variant='outline' onClick={() => router.push(returnPath)} disabled={isDeleting || isLoading} className='w-full sm:w-auto'>
          Cancel
        </Button>
        <form onSubmit={handleDelete} className='w-full sm:w-auto'>
          <Button type='submit' variant='destructive' disabled={isDeleting || isLoading} className='w-full'>
            {isDeleting ? 'Deleting...' : 'Confirm Delete'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DeleteComponent;
