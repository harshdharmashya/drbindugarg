import { cn, formatDateTime } from '@/lib/utils';

const RenderDateTime = ({ dateTime, dateOnly = false, className }: { dateTime: string | Date; dateOnly?: boolean; className?: string }) => {
  const { date, time } = formatDateTime(dateTime);
  return (
    <span className={cn('text-xs font-normal', className)}>
      <span className='whitespace-nowrap'>{date}</span>
      {!dateOnly && <span className={cn(className?.startsWith('text-') ? className : 'text-gray-500', 'ml-1')}>{time}</span>}
    </span>
  );
};

export default RenderDateTime;
