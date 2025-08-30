import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardWrapperProps {
  children: ReactNode;
  className?: string;
  subtitle?: string;
  title?: string;
}

const CardWrapper = ({ children, className, subtitle = 'Consult Dr. Bindu Garg', title }: CardWrapperProps) => {
  return (
    <div className={cn('p-6 w-full shadow-lg border-[5px] rounded-3xl border-x-0 border-t-primaryColor-500 bg-white', className)}>
      <div className='text-center mb-4'>
        <p className='section-subtitle'>{subtitle}</p>
        {title && <h3 className='text-2xl font-semibold text-primaryColor-900'>{title}</h3>}
      </div>
      {children}
    </div>
  );
};

export default CardWrapper;
