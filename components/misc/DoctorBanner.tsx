import { Phone } from 'lucide-react';
import SITE_CONFIG from '@/constants/SITE_CONFIG';
import { preparePhoneNumberLinkWithTel } from '@/lib/utils';
import EnquiryModal from './EnquiryModal';
const DoctorBanner = () => {
  return (
    <div className='bg-white rounded-xl overflow-hidden border border-primaryColor-200'>
      <div className='border-b border-primaryColor-200 p-6'>
        <div className='relative w-full'>
          <div className='relative w-full'>
            {/* Desktop Image (Hidden on Mobile) */}
            <img
              src='/images/banner/doctor-banner-img.webp'
              alt='desktop-banner'
              className='rounded-md object-contain w-full hidden sm:block'
            />

            {/* Mobile Image (Hidden on Desktop) */}
            <img
              src='/images/banner/mobile-banner-img.webp'
              alt='mobile-banner'
              className='rounded-md object-contain w-full block sm:hidden'
            />

            {/* Buttons Positioned Below Image Content */}
            <div className='absolute -bottom-4 ml-12 lg:ml-0 sm:bottom-4 left-[26%] transform -translate-x-1/2 flex justify-center gap-2 w-full'>
              {/* Phone Number Button */}
              <a
                href={preparePhoneNumberLinkWithTel(
                  SITE_CONFIG.CONTACT.phone[0]
                )}
                className='h-8 flex items-center justify-center border border-primaryColor-600 bg-primaryColor-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-primaryColor-700 transition-colors text-[10px] sm:text-[14px] w-[50%] sm:w-auto'
              >
                <Phone className='w-4 h-4 sm:text-lg mr-2' />
                <span>{SITE_CONFIG.CONTACT.phone[0]}</span>
              </a>

              {/* Consult Doctor Button */}
              <EnquiryModal
                triggerElement={
                  <button
                    type='button'
                    className='flex h-8 items-center justify-center border border-primaryColor-600 bg-primaryColor-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-primaryColor-700 transition-colors text-[12px] sm:text-[14px] w-full sm:w-auto'
                  >
                    <span>Consult Doctor</span>
                  </button>
                }
                title='Book Your Appointment Today'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorBanner;
