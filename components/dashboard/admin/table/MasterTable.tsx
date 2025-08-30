import { ITable } from '@/types/dashboard';
import Pagination from './Pagination';
import { Skeleton } from '@/components/ui/skeleton';
import { NoDataFoundState } from '../misc/StateUI';

const MasterTable: React.FC<ITable> = ({ headers, rows, pagination, isLoading = false }) => {
  if (rows.length === 0 && !isLoading) return <NoDataFoundState />;

  const startIndex = pagination ? (pagination.currentPage - 1) * 10 : 0;

  return (
    <div className='relative overflow-x-auto bg-white p-6 rounded-3xl shadow-sm custom-scrollbar'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 rounded-3xl'>
          <tr>
            <th className='px-6 py-3'>SN</th>
            {headers.map((header, index) => (
              <th key={index} className='px-6 py-3'>
                {isLoading ? <Skeleton className='h-4 w-full' /> : header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? Array.from({ length: 5 }).map((_, rowIndex) => (
                <tr key={rowIndex} className='bg-white border-b'>
                  <td className='w-4 p-4'>
                    <div className='flex items-center'>
                      <Skeleton className='w-4 h-4 rounded-full' />
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <Skeleton className='h-4 w-8' />
                  </td>
                  {headers.map((_, colIndex) => (
                    <td key={colIndex} className='px-6 py-4'>
                      <Skeleton className='h-4 w-full' />
                    </td>
                  ))}
                </tr>
              ))
            : rows.map((row, index) => (
                <tr key={row.id} className='bg-white border-b hover:bg-gray-100'>
                  <td className='px-6 py-4'>{startIndex + index + 1}</td>
                  {row.values.map((value, valueIndex) => (
                    <td key={valueIndex} className='px-6 py-4'>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
        </tbody>
      </table>
      {!isLoading && pagination && <Pagination pagination={pagination} />}
    </div>
  );
};

export default MasterTable;
