'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const expertiseCards = [
  {
    icon: '/icons/baby.webp',
    title: '1st IVF Baby in Gurgaon',
    description:
      'In 2003, Dr. Bindu Garg created history by becoming the first IVF doctor to successfully deliver the first IVF baby in Gurgaon at her own hospital.',
  },
  {
    icon: '/icons/achieved-haryana-ratan.webp',
    title: 'Achieved "Haryana Ratan"',
    description:
      'In 2013, Dr. Bindu Garg was awarded the Haryana Ratan Award by the All India Conference of Intellectuals for her outstanding work in the field of reproductive health.',
  },
  {
    icon: '/icons/experience.webp',
    title: '42+ Years Experience',
    description:
      'Dr. Bindu Garg has 42+ years of experience in the fields of reproductive health, fertility, obstetrics-gynecology, and IVF (In vitro Fertilization).',
  },
  {
    icon: '/icons/babies-delivered.webp',
    title: '20000+ Babies Delivered',
    description:
      'Over the last 42 years, she has helped deliver more than 20000 babies through normal delivery, C-section, and IVF procedures, the highest by doctor in North India.',
  },
];

const awardImages = [
  '/images/awards/dr-bindu-awards-1.webp',
  '/images/awards/dr-bindu-awards-2.webp',
  '/images/awards/dr-bindu-awards-3.webp',
  '/images/awards/dr-bindu-awards-4.webp',
];

const OurExpertise = () => {
  return (
    <section id='our-expertise' className='bg-white'>
      <div className='max-container padding-container-sm'>
        <h2 className='section-title mb-6 text-center'>
          <span className='text-primaryColor'>Dr. Bindu Garg's</span> Achievements
        </h2>
        <div className='flex flex-col-reverse lg:flex-row items-start justify-center gap-8'>
          <div className='w-full lg:w-7/12 text-center'>
            <div className='grid md:grid-cols-2 gap-6'>
              {expertiseCards.map((card, index) => (
                <div key={index} className='bg-primaryColor-50 rounded-lg p-6 flex flex-col items-center text-center'>
                  <div className='bg-primaryColor-100 rounded-full p-1 mb-4'>
                    <Image src={card.icon} alt={card.title} width={40} height={40} className='w-10 h-10' />
                  </div>
                  <h3 className='text-xl font-semibold mb-2'>{card.title}</h3>
                  <p className='text-gray-600'>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full lg:w-5/12'>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className='mb-5'
            >
              {awardImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image src={image} alt={`dr-bindu-awards-${index + 1}`} width={500} height={300} className='rounded-xl w-full shadow-md' />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='bg-primaryColor-50 rounded-xl p-3.5'>
              <p className='text-gray-700 leading-relaxed italic'>
                As an IVF specialist in Gurgaon, Dr. Bindu Garg has created many remarkable moments in the lives of her patients through fertility
                treatments. Here are some of the milestones she has set during her career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
