'use client';

import { useState } from 'react';
import { Edit, Eye, Trash2 } from 'lucide-react';
import AdminDashLink from './AdminDashLink';
import DeleteModal from './DeleteModal';
import { toast } from 'react-toastify';
import { IAPIResponse } from '@/types/dashboard';
import { getUser } from '@/store/userStore';

interface IAdminDashActionLinks {
  view?: boolean;
  edit?: boolean;
  delete?: boolean;
  all?: boolean;
  basePath: string;
  id: string;
  itemName: string;
  deleteItem: (id: string) => Promise<IAPIResponse>;
  manualAction?: JSX.Element[];
}

const AdminDashActionLinks: React.FC<IAdminDashActionLinks> = ({
  basePath,
  id,
  itemName,
  view = false,
  edit = false,
  delete: del = false,
  all = false,
  deleteItem,
  manualAction,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const user = getUser();

  const showDeleteButton = user?.role === 'admin';

  const handleDelete = async () => {
    try {
      const result = await deleteItem(id);

      if (result.success) {
        toast.success(`${itemName} deleted successfully`);
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      console.error('Error deleting item:', error);
      toast.error(error.message || 'Error while deleting item');
    }
  };

  return (
    <div className='flex gap-2'>
      {(all || view) && (
        <AdminDashLink href={`${basePath}/${id}/view`}>
          <div className='bg-green-100 text-green-700 hover:bg-green-200 rounded size-7 flex items-center justify-center'>
            <Eye size={16} strokeWidth={1.5} />
          </div>
        </AdminDashLink>
      )}
      {(all || edit) && (
        <AdminDashLink href={`${basePath}/${id}/edit`}>
          <div className='bg-blue-100 text-blue-700 hover:bg-blue-200 rounded size-7 flex items-center justify-center'>
            <Edit size={16} strokeWidth={1.5} />
          </div>
        </AdminDashLink>
      )}
      {(all || del) && showDeleteButton && (
        <button
          onClick={() => setIsDeleteModalOpen(true)}
          className='bg-red-100 text-red-700 hover:bg-red-200 rounded size-7 flex items-center justify-center'
        >
          <Trash2 size={16} strokeWidth={1.5} />
        </button>
      )}
      <DeleteModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onDelete={handleDelete} itemName={itemName} />

      {manualAction && manualAction.map((action, index) => <div key={index}>{action}</div>)}
    </div>
  );
};

export default AdminDashActionLinks;
