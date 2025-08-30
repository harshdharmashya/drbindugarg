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
    <button type='submit' disabled={isSubmitting || disabled} className={`btn-default shrink-0 !rounded-md w-full flex justify-center ${className}`}>
      {isSubmitting ? (
        <>
          <Loader2 size={20} className='animate-spin mr-3' />
          <span>{submittingLabel}</span>
        </>
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
};

export default SubmitButton;
