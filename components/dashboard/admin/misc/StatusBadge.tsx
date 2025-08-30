import { Badge } from '@/components/ui/badge';

const StatusBadge = ({ status }: { status: string }) => (
  <Badge variant='outline' className='capitalize bg-gray-100 text-gray-800'>
    {status}
  </Badge>
);

export default StatusBadge;
