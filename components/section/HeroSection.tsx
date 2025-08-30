'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Gift, Zap } from 'lucide-react';
import EnquiryModal from '../misc/EnquiryModal';

const HeroSection = () => {
  const bgImage = '/images/hero-bg.webp';

  return (
    <section id='hero' className='lg:min-h-[80vh] flex items-center max-lg:bg-primaryColor-50 max-lg:!bg-none relative'>
      <Image
        src={bgImage}
        alt='Background Image'
        fill
        sizes='(max-width: 768px) 100vw, 50vw'
        priority
        className='object-contain absolute inset-0 z-[-1]'
      />
      <div className='max-container padding-container-sm'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full lg:w-7/12'>
            <p className='uppercase tracking-wider font-semibold text-primaryColor hidden md:block mb-4'>FOR THE SUCCESSFUL JOURNEY TO PARENTHOOD</p>
            <h1 className='text-2xl font-bold md:text-4xl lg:text-5xl lg:font-semibold mb-6 lg:leading-tight'>
              Consult <span className='text-primaryColor'>Dr. Bindu Garg</span> <span className='block'>Top IVF Doctor In Gurgaon</span>
            </h1>
            <div className='md:hidden my-3'>
              <Image
                src='/images/about-us.webp'
                alt='Dr. Bindu Garg - Fertility & Ivf Expert in Gurgaon'
                width={500}
                height={300}
                className='rounded-lg'
                priority
              />
            </div>
            <p className='uppercase tracking-wider font-semibold text-primaryColor md:hidden mb-4'>FOR THE SUCCESSFUL JOURNEY TO PARENTHOOD</p>
            <p className='text-lg mb-8'>
              Dr. Bindu Garg, the most trusted name among the best infertility & IVF doctors in Gurgaon. She is the most experienced and achieved many
              awards for her remarkable services in the field of reproductive health & medicine. Book your consultation today and take the first step
              towards starting your family.
            </p>
            <div className='flex flex-wrap gap-4'>
              <Link href='#treatments' className='btn-default gap-2'>
                <span>Explore Treatments</span>
                <Gift className='w-5 h-5' />
              </Link>
              <EnquiryModal
                triggerElement={
                  <button type='button' className='btn-default__outline gap-2 whitespace-pre max-md:px-6'>
                    <span>Schedule Your Appointment</span>
                    <Zap className='w-5 h-5 max-md:hidden' />
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
