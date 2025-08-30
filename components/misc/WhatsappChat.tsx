'use client';

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SITE_CONFIG from '@/constants/SITE_CONFIG';
import { formatNumberLink } from '@/lib/utils';

export default function WhatsappChat() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='fixed bottom-4 left-4 z-50'>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className='absolute bottom-full left-0 mb-2 p-2 bg-white rounded-lg shadow-lg'
        >
          <p className='text-sm font-medium text-gray-800'>Need help? Chat with us!</p>
        </motion.div>
      )}
      <motion.a
        className='flex items-center justify-center gap-3 bg-green-500 text-white px-6 py-2.5 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href={`https://wa.me/${formatNumberLink(SITE_CONFIG.CONTACT.phone[0])?.replace(/\D/g, '')}?text=${encodeURIComponent(
          'Hello, I would like to get more information!'
        )}`}
      >
        <FaWhatsapp className='w-6 h-6' />
        <span className='font-semibold text-lg'>Chat with Us</span>
      </motion.a>
    </motion.div>
  );
}
