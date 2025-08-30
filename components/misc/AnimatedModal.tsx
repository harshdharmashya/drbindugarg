'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AnimatedModalProps {
  triggerElement: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  closeButton?: 'top' | 'bottom-text' | 'none';
  neverClose?: boolean;
}

export default function AnimatedModal({ triggerElement, children, className = '', closeButton = 'top', neverClose = false }: AnimatedModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    if (!neverClose) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen && !neverClose) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, neverClose]);

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!neverClose && modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: '100%',
      rotateX: 45,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
        duration: 0.7,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: '-100%',
      rotateX: -45,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
        duration: 0.5,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50, rotateY: 90 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        type: 'spring',
        damping: 20,
        stiffness: 200,
      },
    }),
    exit: {
      opacity: 0,
      y: -50,
      rotateY: -90,
      transition: {
        duration: 0.3,
      },
    },
  };

  const renderCloseButton = () => {
    if (neverClose) return null;

    switch (closeButton) {
      case 'top':
        return (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 0.5 }}
            className='absolute top-4 right-4 z-[999999] text-white focus:outline-none 
                       p-2 rounded-full bg-primaryColor hover:bg-secondaryColor focus:ring-2 
                       focus:ring-offset-2 focus:ring-primaryColor transition duration-200 ease-in-out'
            onClick={closeModal}
            aria-label='Close modal'
          >
            <X size={20} />
          </motion.button>
        );
      case 'bottom-text':
        return (
          <Button onClick={closeModal} className='w-full h-12'>
            Close
          </Button>
        );
      default:
        return null;
    }
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
          className='fixed inset-0 bg-black/50 backdrop-blur-sm z-[99] flex items-center justify-center p-4'
          onClick={handleClickOutside}
        >
          <motion.div
            ref={modalRef}
            variants={modalVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className={cn(
              'relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden flex flex-col',
              'border border-gray-200 dark:border-gray-700',
              className
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {closeButton === 'top' && renderCloseButton()}

            <motion.div
              variants={contentVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='p-6 overflow-y-auto flex-grow custom-scrollbar'
            >
              {React.Children.map(children, (child, index) => (
                <motion.div variants={contentVariants} custom={index}>
                  {child}
                </motion.div>
              ))}
            </motion.div>

            {closeButton === 'bottom-text' && <div className='px-6 pb-6'>{renderCloseButton()}</div>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div onClick={openModal} className='cursor-pointer'>
        {triggerElement}
      </div>
      {typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null}
    </>
  );
}
