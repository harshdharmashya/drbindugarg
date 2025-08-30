import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface SubmitButtonProps {
  isSubmitting: boolean;
  label: string;
  submittingLabel: string;
  disabled?: boolean;
  className?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting, label, submittingLabel, disabled = false, className = '' }) => {
  return (
    <button type='submit' disabled={isSubmitting || disabled} className={cn('btn-blue', className)}>
      {isSubmitting ? (
        <div className='flex gap-2 items-center justify-center'>
          <Loader2 size={20} className='animate-spin mr-3' />
          <span>{submittingLabel}</span>
        </div>
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
};

export default SubmitButton;
