'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { IFAQ } from '@/types';

const FAQSection: React.FC<{ data: IFAQ[] }> = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [visibleFAQs, setVisibleFAQs] = useState(10);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const loadMore = () => {
    setVisibleFAQs((prev) => Math.min(prev + 10, data.length));
  };

  const createMarkup = (html: string) => {
    return { __html: html };
  };

  return (
    <section id='faq' className='relative overflow-hidden bg-gradient-to-b from-gray-50 to-white'>
      <div className='max-container padding-container-sm'>
        <div className='text-center mb-10'>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className='section-title mb-4'>
              Most Frequently Asked <span className='text-primaryColor'>Questions</span>
            </h2>
            <p className='text-gray-600 text-lg max-w-2xl mx-auto'>Find answers to common questions about our fertility treatments and services</p>
          </motion.div>
        </div>

        <div className='max-w-4xl mx-auto space-y-4'>
          {data.slice(0, visibleFAQs).map((faq, index) => (
            <motion.div
              key={index}
              className='bg-white rounded-2xl border border-gray-100'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <motion.button
                className='w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200'
                onClick={() => toggleExpand(index)}
              >
                <span className='font-medium text-gray-800 pr-4'>{faq.question}</span>
                <motion.div className={`flex-shrink-0 ${expandedIndex === index ? 'text-primaryColor' : 'text-gray-400'}`}>
                  {expandedIndex === index ? <X className='h-5 w-5' /> : <Plus className='h-5 w-5' />}
                </motion.div>
              </motion.button>

              <AnimatePresence initial={false}>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className='px-8 pb-6 text-gray-600'>
                      {typeof faq.answer === 'string' ? (
                        <p className='leading-relaxed text-gray-600' dangerouslySetInnerHTML={createMarkup(faq.answer)} />
                      ) : (
                        <>
                          {faq.answer.beforeList && <p className='mb-3' dangerouslySetInnerHTML={createMarkup(faq.answer.beforeList)} />}
                          <ul className='list-disc pl-5 space-y-2'>
                            {faq.answer.list?.map((item, idx) => (
                              <li key={idx} className='leading-relaxed' dangerouslySetInnerHTML={createMarkup(item)} />
                            ))}
                          </ul>
                          {faq.answer.afterList && <p className='mt-3' dangerouslySetInnerHTML={createMarkup(faq.answer.afterList)} />}
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {visibleFAQs < data.length && (
          <div className='text-center mt-12'>
            <motion.button
              className='px-6 py-3 bg-primaryColor text-white rounded-full font-medium hover:bg-primaryColor-600 transition-colors duration-200'
              onClick={loadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
