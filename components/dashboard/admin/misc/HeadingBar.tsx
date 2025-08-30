import { CirclePlus, List } from 'lucide-react';
import AdminDashLink from './AdminDashLink';
import { Button } from '@/components/ui/button';

interface IHeadingBar {
  title: string;
  addPath?: string;
  listPath?: string;
  filterElement?: React.ReactNode;
}

const HeadingBar: React.FC<IHeadingBar> = ({ title, addPath, listPath, filterElement }) => {
  return (
    <div className='rounded-3xl bg-white flex justify-between items-center p-6'>
      <h2 className='text-lg font-medium'>{title}</h2>
      <div className='flex items-center space-x-3'>
        {filterElement && filterElement}
        {listPath && (
          <Button asChild variant='secondary' size='sm' className='rounded-md'>
            <AdminDashLink href={listPath} className='flex items-center space-x-2'>
              <List size={16} />
              <span className='hidden sm:inline'>View List</span>
            </AdminDashLink>
          </Button>
        )}
        {addPath && (
          <Button asChild variant='default' size='sm' className='rounded-md'>
            <AdminDashLink href={addPath} className='flex items-center space-x-2'>
              <CirclePlus size={16} />
              <span className='hidden sm:inline'>Add New</span>
            </AdminDashLink>
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeadingBar;
