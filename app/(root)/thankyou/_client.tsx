'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, MoveLeft } from 'lucide-react';
import SITE_CONFIG from '@/constants/SITE_CONFIG';

export default function ThankYouPageHelper() {
  return (
    <div className='flex flex-col bg-gradient-to-br from-primaryColor-50 to-primaryColor-100 text-foreground'>
      <main className='flex-grow max-container padding-container-sm'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='max-w-3xl mx-auto'>
          <h1 className='text-5xl md:text-6xl font-bold text-primaryColor-600 mb-6 text-center'>Thank You for Choosing {SITE_CONFIG.PROJECT_NAME}</h1>
          <p className='text-xl mb-12 text-gray-600 text-center'>
            We appreciate your trust in our healthcare services. Your health and well-being are our top priorities.
          </p>

          <div className='bg-white rounded-2xl shadow-2xl overflow-hidden'>
            <div className='bg-secondaryColor-500 p-6 flex justify-between items-center'>
              <div>
                <h2 className='text-3xl font-semibold text-white mb-2'>What's Next?</h2>
                <p className='text-secondaryColor-100'>Here's what you can expect from us</p>
              </div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href='/' className='block'>
                  <motion.div
                    className='bg-white text-secondaryColor-500 p-2 rounded-full transition-colors duration-300 hover:bg-secondaryColor-50'
                    animate={{
                      boxShadow: ['0 0 0 0 rgba(var(--secondary-color-500), 0.7)', '0 0 0 10px rgba(var(--secondary-color-500), 0)'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  >
                    <motion.div
                      animate={{ x: [-3, 3, -3] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    >
                      <MoveLeft size={24} />
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
            <div className='p-6 space-y-6'>
              {[
                "We'll contact you shortly to confirm your appointment details.",
                'Please bring any relevant medical records to your appointment.',
                'If you need to reschedule, please contact us at least 24 hours in advance.',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className='flex items-start text-gray-600'
                >
                  <CheckCircle className='w-6 h-6 mr-4 flex-shrink-0' />
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
