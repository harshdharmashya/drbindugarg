'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => Promise<void>;
  itemName: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onDelete, itemName }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await onDelete();
      onClose();
    } catch (error) {
      console.error('Error deleting item:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className='bg-white rounded-lg p-6 w-full max-w-md'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-xl font-semibold text-gray-700'>Delete Confirmation</h2>
              <button onClick={onClose} className='bg-black p-1.5 rounded-full text-white'>
                <X size={20} />
              </button>
            </div>
            <p className='mb-6 text-base'>
              Are you sure you want to delete <span className='font-semibold'>{itemName}</span>? This action cannot be undone.
            </p>
            <div className='flex justify-end space-x-2'>
              <button
                onClick={onClose}
                disabled={isDeleting}
                className={`px-4 py-2 rounded-md text-sm font-medium 
      ${isDeleting ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
      transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className={`px-4 py-2 rounded-md text-sm font-medium 
      ${isDeleting ? 'bg-red-500 text-white opacity-50 cursor-not-allowed' : 'bg-red-600 text-white hover:bg-red-700'}
      transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeleteModal;
