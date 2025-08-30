'use client';

import { StarIcon } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const HeadingStars = ({ starCount = 3, size = 20, color = 'var(--primary-color-500)', className = '' }) => {
  return (
    <div className={cn('flex items-center justify-center gap-2', className)}>
      <div className='h-px w-16 bg-gradient-to-r from-transparent via-primaryColor to-transparent' />

      <div className='flex gap-1'>
        {[...Array(starCount)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <StarIcon size={size} className='rounded-full text-primaryColor' fill={color} strokeWidth={0} />
          </motion.div>
        ))}
      </div>

      <div className='h-px w-16 bg-gradient-to-r from-transparent via-primaryColor to-transparent' />
    </div>
  );
};

export default HeadingStars;
