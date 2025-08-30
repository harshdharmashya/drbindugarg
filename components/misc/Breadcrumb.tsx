import React from 'react';
import Link from 'next/link';
import { Phone, ChevronRight } from 'lucide-react';
import SITE_CONFIG from '@/constants/SITE_CONFIG';
import { formatNumberLink, preparePhoneNumberLinkWithTel } from '@/lib/utils';
import { socialMediaLinks } from '@/constants/socialMediaLinks';
import { FaWhatsapp } from 'react-icons/fa';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  title: string;
  enableH1?: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, enableH1 = false }) => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: title, href: '#' },
  ];

  return (
    <header className='bg-gradient-to-br from-primaryColor-50 via-secondaryColor-50 border-b border-primaryColor-100 to-primaryColor-50 py-6 sm:py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <nav aria-label='Breadcrumb' className='text-xs sm:text-sm mb-4'>
            <ol className='list-none p-0 inline-flex items-center space-x-1'>
              {breadcrumbItems.map((item, index) => (
                <li key={index} className='flex items-center'>
                  {index > 0 && <ChevronRight className='h-3 w-3 sm:h-4 sm:w-4 text-gray-400 mx-1' />}
                  {index === breadcrumbItems.length - 1 ? (
                    <span className='text-gray-600 font-medium'>{item.label}</span>
                  ) : (
                    <p className='text-primaryColor-600 hover:text-primaryColor-800 transition-colors duration-200 ease-in-out inline'>
                      {item.label}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          {enableH1 ? (
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 sm:mb-6'>{title}</h1>
          ) : (
            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 sm:mb-6'>{title}</p>
          )}

          <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
            <a
              href={preparePhoneNumberLinkWithTel(SITE_CONFIG.CONTACT.phone[0])}
              className='flex items-center text-secondaryColor-600 bg-white rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-lg'
            >
              <Phone className='w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3' />
              <span className='font-semibold text-xs sm:text-sm'>CALL: {SITE_CONFIG.CONTACT.phone[0]}</span>
            </a>

            <div className='flex space-x-2 bg-secondaryColor-500 text-white py-2 px-3 sm:px-4 rounded-full shadow-lg'>
              {socialMediaLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={item.name}
                  className='p-2 hover:bg-secondaryColor-600 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondaryColor-500'
                >
                  <item.icon size={18} />
                </a>
              ))}
              <a
                aria-label='WhatsApp'
                className='p-2 hover:bg-secondaryColor-600 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondaryColor-500'
                href={`https://wa.me/${formatNumberLink(SITE_CONFIG.CONTACT.phone[0])}?text=Hi, I would like to inquire about your services.`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaWhatsapp className='w-5 h-5' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Breadcrumb;
