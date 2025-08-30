'use client';

import React from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { ITestimonialProps } from '@/types';

const TextTestimonials: React.FC<{ data: ITestimonialProps }> = ({ data }) => {
  const { subtitle, title, testimonials } = data;
  return (
    <section id='text-testimonials' className='relative overflow-hidden bg-gray-100'>
      <div className='max-container padding-container-sm'>
        <div className='w-full text-center mb-8'>
          <p className='section-subtitle text-primaryColor-600 mb-2'>{subtitle}</p>
          <h2 className='section-title text-primaryColor-900'>{title}</h2>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
          <div className='w-full lg:w-5/12'>
            <Image
              src='/images/text-testimonials.webp'
              alt='A happy couple with their baby in lap'
              width={500}
              height={400}
              className='w-full h-auto rounded-lg'
            />
          </div>

          <div className='w-full lg:w-6/12'>
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: '.prev-rating-card',
                nextEl: '.next-rating-card',
              }}
              loop={true}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className='bg-white p-6 lg:p-8 rounded-3xl shadow-lg'>
                    <p className='text-sm font-semibold mb-3 capitalize'>{formatDistanceToNow(new Date(testimonial.date), { addSuffix: true })}</p>
                    <div className='flex gap-1 mb-4'>
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className='w-5 h-5 fill-yellow-500 text-yellow-500' />
                      ))}
                    </div>
                    <p className='text-gray-700 mb-6'>{testimonial.description}</p>

                    <div className='flex justify-between items-center'>
                      <div>
                        <p className='font-bold text-primaryColor-900'>{testimonial.person}</p>
                        <p className='text-sm text-primaryColor-600'>{testimonial.location}</p>
                      </div>
                      <div className='w-8 h-8'>
                        <Image src='/icons/google.png' alt={`Google review by ${testimonial.person}`} width={32} height={32} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className='flex gap-4 justify-end mt-6'>
              <button
                aria-label='Previous review'
                className='prev-rating-card p-2 rounded-full bg-primaryColor-50 hover:bg-primaryColor-100 transition-colors'
              >
                <ArrowLeft className='w-6 h-6 text-primaryColor-600' />
              </button>
              <button
                aria-label='Next review'
                className='next-rating-card p-2 rounded-full bg-primaryColor-50 hover:bg-primaryColor-100 transition-colors'
              >
                <ArrowRight className='w-6 h-6 text-primaryColor-600' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextTestimonials;
