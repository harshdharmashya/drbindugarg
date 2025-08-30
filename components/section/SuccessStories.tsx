'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const imageData = [
  {
    url: '/images/success-stories/3_babies_delivered_by_dr_bindu_garg.webp',
    alt: '3 babies delivered through IVF by Dr. Bindu Garg at her hospital in Gurgaon',
  },
  {
    url: '/images/success-stories/dr_bindu_garg_consulting_her_infertile_patients_1.webp',
    alt: 'Dr. Bindu Garg consulting couples',
  },
  {
    url: '/images/success-stories/dr_bindu_garg_with_her_happy_patient.webp',
    alt: "Dr. Bindu Garg (Centre) and her teammate Dr. Swati Kanawa with a baby in her Lap (Left side), Baby's mother (right corner)",
  },
  {
    url: '/images/success-stories/newly_born_baby_delivered_by_dr_bindu_garg.webp',
    alt: 'Newborn cute baby born through IVF procedure By Senior Infertility Specialist Dr. Bindu Garg',
  },
];

const SuccessStories = () => {
  return (
    <section id='success-stories' className='relative overflow-hidden bg-gray-50'>
      <div className='max-container padding-container-sm'>
        <div className='flex flex-col items-center gap-8'>
          <div className='text-center'>
            <h2 className='section-title'>Success Stories</h2>
          </div>

          <div className='w-full'>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {imageData.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image src={image.url} alt={image.alt} className='w-full object-cover rounded-lg' width={600} height={400} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
