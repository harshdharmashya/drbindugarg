'use client';
import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import SITE_CONFIG from '@/constants/SITE_CONFIG';
import { preparePhoneNumberLinkWithTel } from '@/lib/utils';

interface BreadcrumbProps {
  title: string;
}

const Doctorcrumb: React.FC<BreadcrumbProps> = ({ title }) => {
  const [showFullText, setShowFullText] = useState(false);

  const content = `In Delhi, there are some of the best IVF specialists who are trained
            to provide top-class fertility treatments using the latest
            technology. Whether you prefer in-person consultation or video
            appointments, these doctors provide expert care according to your
            needs. This page provides details about some renowned doctors'
            qualifications, expertise, and experience. You can easily book an
            appointment online and check OPD timings with one of the best IVF
            doctors in Delhi.`;
  const truncateLength = 122;

  return (
    <header className='bg-gradient-to-br from-primaryColor-50 via-secondaryColor-50 border-b border-primaryColor-100 to-primaryColor-50 py-6 sm:py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <div className='flex flex-col sm:flex-row items-center justify-center sm:space-x-4'>
            <a
              href={preparePhoneNumberLinkWithTel(SITE_CONFIG.CONTACT.phone[0])}
              className='flex flex-col items-center rounded-md shadow-lg '
            >
              <div className='bg-primaryColor-600 text-white font-semibold text-sm sm:text-base text-center px-[27px] py-3 w-full'>
                CALL FOR BEST IVF DOCTORS IN DELHI NCR:
              </div>

              <div className='flex items-center justify-center space-x-2 bg-orange-600 py-2 w-full'>
                <Phone className='text-white w-6 h-6 sm:w-5 sm:h-5' />
                <span className='text-white font-semibold text-lg sm:text-base'>
                  {SITE_CONFIG.CONTACT.phone[0]}
                </span>
              </div>
            </a>
          </div>

          <h1 className='font-bold mt-4 text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 sm:mb-6'>
            {title}
          </h1>
          <p className='text-gray-700 text-justify'>
            <span className='hidden md:inline'>{content}</span>
            <span className='md:hidden'>
              {showFullText
                ? content
                : content.slice(0, truncateLength) + '...'}
            </span>
            {!showFullText && (
              <button
                onClick={() => setShowFullText(true)}
                className='text-blue-500 inline ml-1 md:hidden'
              >
                Read More
              </button>
            )}

            {showFullText && (
              <button
                onClick={() => setShowFullText(false)}
                className='text-blue-500 mt-2 block md:hidden'
              >
                Read Less
              </button>
            )}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Doctorcrumb;
