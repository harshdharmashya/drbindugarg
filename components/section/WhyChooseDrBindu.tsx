import React from 'react';
import Image from 'next/image';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import Link from 'next/link';

const treatments = [
  { title: '42+ Years Of Excellent Experience' },
  { title: '20000+ Babies Delivered' },
  { title: 'Expertise in IVF, IUI, ICSI, Surrogacy' },
  { title: 'Renowned Obstetrician & Gynecologist' },
  { title: 'Awarded With Many Honors' },
];

const WhyChooseDrBindu = () => {
  return (
    <section id='why-choose-us' className='relative overflow-hidden'>
      <div className='max-container padding-container-sm'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div>
            <Image
              src='/images/why-choose-us.webp'
              alt='Dr. Bindu Garg - Fertility & IVF Specialist in Gurgaon'
              width={600}
              height={400}
              className='rounded-lg w-full h-auto'
            />
          </div>

          <div>
            <h2 className='text-xl lg:text-3xl font-bold'>
              Why Choose <span className='text-primaryColor-600'>Dr. Bindu Garg</span> for Your <br className='hidden md:block' /> IVF Needs?
            </h2>

            <p className='text-gray-600 my-2'>
              Dr. Bindu Garg is the most reputed and experienced IVF & Fertility Doctor in Gurgaon. Along with her expertise in IVF, IUI, ICSI, and
              Surrogacy, she is also famous as a renowned Obstetrician-Gynecologist. She has been practicing and researching for 42+ years in the
              field of reproductive health.
              <br />
              <br />
              Till the latest update, she has helped deliver 20000+ babies through various treatment processes and normally. She has been awarded many
              honors by different institutions for their contribution to the field of reproductive health and medicine.
            </p>

            {treatments.map((treatment, index) => (
              <div key={index} className='flex items-center gap-2 my-3'>
                <div className='size-7 rounded-full bg-primaryColor-50 flex items-center justify-center text-primaryColor-600 flex-shrink-0'>
                  <BadgeCheck size={16} />
                </div>
                <span className='font-semibold text-sm'>{treatment.title}</span>
              </div>
            ))}

            <Link
              href='/book-appointment'
              className='inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-primaryColor to-primaryColor-700 hover:from-primaryColor-700 hover:to-primaryColor transition-all duration-500 ease-in-out'
            >
              <span>Book Appointment</span>
              <div className='bg-white rounded-full p-1 text-primaryColor'>
                <ArrowRight className='w-4 h-4' />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseDrBindu;
