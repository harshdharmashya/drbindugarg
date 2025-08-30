'use client';

import React, { useState } from 'react';
import CTAForm from '../forms/CTAForm';
import AnimatedModal2 from './AnimatedModal2';

interface EnquiryModalProps {
  triggerElement: React.ReactNode;
  title?: string;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ triggerElement, title = 'Get in Touch' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={handleOpen}>{triggerElement}</div>
      <AnimatedModal2 isOpen={isOpen} onClose={handleClose} className='max-w-lg p-2 md:p-4'>
        <div className='p-3 text-center'>
          <h2 className='section-title'>{title}</h2>
          <div className='w-24 h-1 bg-secondaryColor mx-auto mt-2 mb-6'></div>
          <CTAForm />
        </div>
      </AnimatedModal2>
    </>
  );
};

export default EnquiryModal;
