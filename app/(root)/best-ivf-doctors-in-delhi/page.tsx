import React from 'react';
import { doctors } from './doctors.constants';
import CTAMiniForm from '@/components/forms/CTAMiniForm';
import { DoctorCard } from './DoctorCard';
import Doctorcrumb from '@/components/misc/Doctorcrumb';
import DoctorContentPage from './doctor-content';
import EnquiryModal from '@/components/misc/EnquiryModal';
import { Metadata } from 'next';
import DoctorBanner from '@/components/misc/DoctorBanner';

export const metadata: Metadata = {
  title: 'Best IVF Doctors in Delhi - Top Fertility Experts',
  description:
    'Choose the best IVF doctors in Delhi with advanced qualifications and experience. Book an online appointment with leading fertility experts for IVF treatment.',
  keywords:
    'best ivf doctor in delhi, best ivf specialist in delhi, ivf doctor in delhi, best doctor for ivf in delhi, best infertility specialist in delhi, best fertility doctor in delhi, ivf specialist in delhi, infertility specialist in delhi, top ivf doctors in delhi',
  alternates: {
    canonical: 'https://www.drbindugarg.com/best-ivf-doctors-in-delhi',
  },
  openGraph: {
    title: ' Best IVF Doctors in Delhi - Top Fertility Experts',
    description:
      'Choose the best IVF doctors in Delhi with advanced qualifications and experience. Book an online appointment with leading fertility experts for IVF treatment.',
    type: 'website',
    url: 'https://www.drbindugarg.com/best-ivf-doctors-in-delhi',
    images: ['https://www.drbindugarg.com/images/why-choose-us.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: ' Best IVF Doctors in Delhi - Top Fertility Experts',
    description:
      'Choose the best IVF doctors in Delhi with advanced qualifications and experience. Book an online appointment with leading fertility experts for IVF treatment.',
    images: ['https://www.drbindugarg.com/images/why-choose-us.webp'],
  },
};

const DoctorsPage = () => {
  return (
    <>
      <Doctorcrumb title='Best IVF Doctors in Delhi' />
      <h2 className='mt-4 text-xl font-bold text-center lg:text-3xl'>
        Meet With Delhi’s Top IVF Doctors
      </h2>
      <div className='relative overflow-visible bg-gray-50'>
        <div className='max-container padding-container-sm'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Main Content */}
            <div className='lg:col-span-2 space-y-8'>
              {doctors.map((doctor, index) => (
                <React.Fragment key={doctor.id}>
                  <DoctorCard doctor={doctor} />
                  {(index ) % 2 === 0 && (
                    <div className='bg-white p-4 rounded-lg shadow flex justify-center'>
                  <EnquiryModal
                        triggerElement={
                          <button
                            type='button'
                            className='btn-default__outline gap-2 whitespace-pre max-md:px-6'
                          >
                            <span>Book Your Appointment Today</span>
                          </button>
                        }
                        title='Book Your Appointment Today'
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
              <div className='bg-white shadow-xl rounded-xl overflow-hidden p-4 md:p-6 md:pt-4 lg:hidden'>
                <CTAMiniForm />
              </div>
              <DoctorContentPage />
            </div>
            {/* Right sidebar */}
            <div className='lg:col-span-1'>
              <div className='space-y-6 lg:sticky lg:top-40'>
                <div className='bg-white shadow-xl rounded-xl overflow-hidden'>
                  <div className='bg-gradient-to-r from-primaryColor-600 to-primaryColor-700 p-4'>
                    <h2 className='text-xl font-semibold text-white text-center'>
                      Schedule an Appointment
                    </h2>
                  </div>
                  <div className='p-4 md:p-6 md:pt-4'>
                    <CTAMiniForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-4/12'></div>
    </>
  );
};

export default DoctorsPage;
