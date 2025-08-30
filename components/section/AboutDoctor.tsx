'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CardWrapper } from '@/components/misc';
import CTAMiniForm from '@/components/forms/CTAMiniForm';

const consultationTimes = [
  'Mon - 11:00 AM-1:00 PM | 5:00 PM-6:00 PM',
  'Tue - 11:00 AM-1:00 PM | 5:00 PM-6:00 PM',
  'Wed - 11:00 AM-1:00 PM | 5:00 PM-6:00 PM',
  'Thu - 11:00 AM-1:00 PM | 5:00 PM-6:00 PM',
  'Fri - 11:00 AM-1:00 PM | 5:00 PM-6:00 PM',
  'Sat - 11:00 AM-1:00 PM | 5:00 PM-6:00 PM',
];

const doctorInfo = [
  {
    title: 'About Dr. Bindu Garg',
    id: 'about',
    content:
      'Dr. Bindu Garg is known as the best IVF doctor in Gurgaon. She is the head of the IVF department at Neelkanth Hospital. She has 42+ years of remarkable experience in the fields of gynecology, obstetrics, and infertility treatment. She was in fact the first IVF specialist in Gurgaon to deliver a baby through IVF treatment. Apart from infertility treatments, her expertise also lies in normal delivery, and she has a high rate of success. She has delivered more than 20,000 babies through IVF treatment till now. Dr. Garg also has been a consistent recipient of several awards and recognitions, such as the Mahatma Gandhi Samman and the Swastha Bharat Samman.',
  },
  {
    title: 'Experience',
    id: 'experience',
    content:
      '42+ Years of Overall Experience as a Fertility & IVF Expert and Gynecologist-Obstetrician',
  },
  {
    title: 'Education',
    id: 'education',
    content: [
      'MBBS From Lady Hardinge Medical College, Delhi University',
      'MD (Obs-Gynae) From Maulana Azad Medical College, Delhi University',
      'Post Graduate in Reproductive Science From Monash University, Australia',
      'Training in Human Reproductive Science From Cleveland University, USA',
    ],
  },
  {
    title: 'Speciality & Expertise',
    id: 'speciality',
    content: [
      'IVF & Infertility',
      'IUI',
      'ICSI',
      'Normal Delivery',
      'High Risk Delivery',
      'IVF and Infertility',
      'Male Infertility',
      'Egg Freezing',
      'Surrogacy',
      'Female Fertility Workup',
    ],
  },
  {
    title: 'Awards & Recognition',
    id: 'awards',
    content: [
      'Six sigma healthcare excellence award',
      'Mahatma Gandhi Samman: 2015, 2016, 2017',
      'Swastha Bharat Samman - 2008, 2009, 2011, 2012',
      'India News Award - 2008, 2009, 2010, 2011, 2019',
      'Haryana Ratan" award by distinguished dignitaries in Haryana',
    ],
  },
];

const AboutDoctor: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    'about'
  );
  const rightColumnRef = useRef<HTMLDivElement>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section className='bg-gray-50 relative overflow-hidden'>
      <div className='max-container padding-container-sm'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8'>
          <div className='lg:col-span-12 text-center mb-4 md:mb-6 lg:mb-8'>
            <p className='section-subtitle text-base md:text-lg'>
              Our IVF Expert
            </p>
            <h1 className='section-title text-2xl md:text-3xl lg:text-4xl'>
              About Doctor Bindu Garg
            </h1>
          </div>

          <div className='lg:col-span-8'>
            <div className='bg-white shadow-lg rounded-xl md:rounded-2xl overflow-hidden'>
              <div className='relative w-full h-48 md:h-72 lg:h-[400px] p-4'>
                <div className='absolute inset-0 bg-gradient-to-b from-primaryColor-50/20 to-transparent'></div>
                <div className='absolute -right-20 -top-20 w-40 h-40 bg-primaryColor-100 rounded-full opacity-20'></div>
                <div className='absolute -left-20 -bottom-20 w-40 h-40 bg-primaryColor-100 rounded-full opacity-20'></div>
                <Image
                  src='/images/about-us.webp'
                  alt='Dr. Bindu Garg'
                  fill
                  priority
                  className='object-cover object-top hover:scale-[1.02] transition-transform duration-300'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 66vw 50vw'
                 
                />
                <div className='absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white to-transparent'></div>
              </div>
              {doctorInfo.map((section) => (
                <div
                  key={section.id}
                  className='border-b border-gray-200 last:border-b-0'
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className='w-full text-left px-4 md:px-6 py-3 md:py-4 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 transition-colors duration-200'
                  >
                    <span className='text-lg md:text-xl font-semibold text-gray-800'>
                      {section.title}
                    </span>
                    <motion.span
                      className='float-right text-xl md:text-2xl text-gray-500'
                      animate={{
                        rotate: expandedSection === section.id ? 180 : 0,
                      }}
                    >
                      {expandedSection === section.id ? '−' : '+'}
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {expandedSection === section.id && (
                      <motion.div
                        className='px-4 md:px-6 pb-3 md:pb-4 text-gray-700 text-sm md:text-base'
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {Array.isArray(section.content) ? (
                          <ul className='list-disc pl-4 md:pl-5 space-y-1 md:space-y-2'>
                            {section.content.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{section.content}</p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className='lg:col-span-4' ref={rightColumnRef}>
            <div className='flex flex-col md:flex-row lg:flex-col gap-4'>
              <CardWrapper
                subtitle='Consultation Timings'
                title='Choose Your Time Slot'
              >
                <div className='space-y-2 text-gray-700'>
                  {consultationTimes.map((time, index) => (
                    <div
                      key={index}
                      className='flex items-center space-x-2 pb-3 md:pb-4 pt-0.5 border-b border-gray-200 last:border-b-0 hover:translate-x-1 transition-transform'
                    >
                      <Clock
                        size={16}
                        className='text-gray-500 flex-shrink-0'
                      />
                      <span className='text-xs md:text-sm'>{time}</span>
                    </div>
                  ))}
                </div>
              </CardWrapper>

              <CardWrapper
                subtitle='Schedule a Consultation'
                title='Book Your Appointment!'
              >
                <CTAMiniForm />
              </CardWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
