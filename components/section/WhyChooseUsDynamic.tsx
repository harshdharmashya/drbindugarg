import React from 'react';
import Image from 'next/image';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { WhyChooseUsDynamicProps } from '@/types';

const WhyChooseUsDynamic = ({ data }: { data: WhyChooseUsDynamicProps }) => {
  const { title, description, pointsBefore, points, imgUrl, imgAlt } = data;

  return (
    <section id='why-choose-us' className='relative overflow-hidden'>
      <div className='max-container padding-container-sm'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div>
            <Image src={imgUrl} alt={imgAlt} width={600} height={400} className='rounded-lg w-full h-auto' />
          </div>

          <div>
            <h2 className='section-title'>{title}</h2>

            <p className='text-gray-600 my-4'>{description}</p>

            {pointsBefore && <p className='text-gray-800 my-2'>{pointsBefore}</p>}

            {points.map((point, index) => (
              <div key={index} className='flex items-center gap-2 mb-2'>
                <div className='h-9 w-9 rounded-full bg-primaryColor-50 flex items-center justify-center text-primaryColor-600 flex-shrink-0'>
                  <BadgeCheck size={20} />
                </div>
                <p className='text-gray-700 text-[16px]'>
                  {' '}
                  {point.bold && point.normal ? (
                    <>
                      <strong className='text-gray-800'>{point.bold}:</strong> {point.normal}
                    </>
                  ) : (
                    <strong className='text-gray-800'>{point.bold}</strong>
                  )}
                </p>
              </div>
            ))}

            <button className='mt-2 inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-primaryColor to-primaryColor-700 hover:from-primaryColor-700 hover:to-primaryColor transition-all duration-500 ease-in-out'>
              <span>Book Appointment</span>
              <div className='bg-white rounded-full p-1 text-primaryColor'>
                <ArrowRight className='w-4 h-4' />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsDynamic;
