import { Loader, Loader2 } from 'lucide-react';
import AdminDashLink from './AdminDashLink';

export const ErrorState: React.FC<{ message: string }> = ({ message }) => (
  <div className='relative overflow-hidden'>
    <div className='flex flex-col items-center w-full'>
      <img src='/images/dashboard/error-page.webp' alt='no-data-image' className='h-auto max-w-sm' />
      <h1 className='text-3xl font-bold text-primaryColor capitalize -mt-8'>{message || 'An unexpected error occurred.'}</h1>
      <p className='my-4 text-gray-600'>
        {message ? 'Please check the error message above for more details.' : 'Something went wrong. Please try again later.'}
      </p>
      <AdminDashLink className='btn-default__outline rounded-md' href='/'>
        Return to Dashboard
      </AdminDashLink>
    </div>
  </div>
);

export const NoDataFoundState: React.FC = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='flex flex-col items-center w-full'>
        <img src='/images/dashboard/no-data.webp' alt='no-data-image' className='h-auto max-w-sm' />
        <h1 className='mt-2 text-3xl font-bold text-primaryColor'>No Data Available</h1>
        <p className='my-4'>There is no data to display in the table at the moment. Please check back later.</p>
        <AdminDashLink className='btn-default__outline rounded-md' href='/'>
          Return to Dashboard
        </AdminDashLink>
      </div>
    </div>
  );
};

export const LoadingState: React.FC<{ message?: string }> = ({ message = 'Loading, please wait...' }) => (
  <div className='relative overflow-hidden'>
    <div className='flex flex-col items-center w-full'>
      <Loader className='animate-spin text-blue-500 h-12 w-12' />
      <h1 className='mt-4 text-3xl font-bold text-blue-500'>{message}</h1>
      <p className='my-4 text-gray-600'>We are fetching your data. Please be patient, it may take a moment.</p>
      <AdminDashLink className='btn-blue rounded-md' href='/'>
        Return to Dashboard
      </AdminDashLink>
    </div>
  </div>
);

interface LoadingSpinnerProps {
  message?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = 'Loading...' }) => {
  return (
    <div className='flex flex-col items-center justify-center p-4 space-y-2'>
      <Loader2 className='w-8 h-8 text-blue-500 animate-spin' />
      <p className='text-sm font-medium text-gray-600'>{message}</p>
    </div>
  );
};
