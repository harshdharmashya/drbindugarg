import Image from 'next/image';
import Link from 'next/link';
import { Gift, Zap } from 'lucide-react';
import { HeroSectionProps } from '@/types';
import EnquiryModal from '../misc/EnquiryModal';

const HeroSectionDynamic = ({ data }: { data: HeroSectionProps }) => {
  const {
    bgImage = '/images/hero-bg.webp',
    subtitle = '',
    description = '',
    primaryButtonText = '',
    secondaryButtonText = '',
    mobileImage = '',
    mobileImageAlt = '',
  } = data;

  const title = typeof data.title === 'string' ? data.title : data.title?.normal;
  const coloredTitle = typeof data.title === 'string' ? '' : data.title?.colored;

  return (
    <section
      id='hero'
      className='lg:bg-cover lg:bg-center lg:bg-no-repeat lg:min-h-[80vh] flex items-center max-lg:bg-primaryColor-50 max-lg:!bg-none'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='max-container padding-container-sm'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full lg:w-7/12'>
            {subtitle && <p className='uppercase tracking-wider font-semibold text-primaryColor hidden md:block mb-4'>{subtitle}</p>}
            <h1 className='text-2xl font-bold md:text-4xl lg:text-5xl lg:font-semibold mb-6 lg:leading-tight'>
              {title && <span>{title}</span>}
              {coloredTitle && <span className='text-primaryColor'> {coloredTitle}</span>}
            </h1>
            <div className='md:hidden my-3'>
              <Image
                src={mobileImage || '/images/about-us.webp'}
                alt={mobileImageAlt || 'Dr. Bindu Garg - Fertility & Ivf Expert in Gurgaon'}
                width={500}
                height={300}
                priority={true}
                className='rounded-lg'
              />
            </div>
            {subtitle && <p className='uppercase tracking-wider font-semibold text-primaryColor md:hidden mb-4'>{subtitle}</p>}
            {description && <p className='text-lg mb-8'>{description}</p>}
            <div className='flex flex-wrap gap-4'>
              {primaryButtonText && (
                <EnquiryModal
                  triggerElement={
                    <button type='button' className='btn-default gap-2 max-md:text-base'>
                      <span>{primaryButtonText}</span>
                      <Zap className='w-5 h-5 max-md:hidden' />
                    </button>
                  }
                />
              )}
              {secondaryButtonText && (
                <Link href='#our-services' className='btn-default__outline gap-2 whitespace-pre max-md:px-6'>
                  <span>{secondaryButtonText}</span>
                  <Gift className='w-5 h-5' />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionDynamic;
