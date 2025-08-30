'use client';
import { Clock, GraduationCap, MapPin, Star, Stethoscope } from 'lucide-react';
import { MdCurrencyRupee } from 'react-icons/md';
import { useState } from 'react';
import Link from 'next/link';

export interface Doctor {
  id: number;
  name: string;
  image: string;
  specialization: string;
  experience: string;
  qualification: string[];
  clinic: {
    name: string;
    location: string;
  };
  availability: {
    today: boolean;
    time: string[];
  };
  fees: {
    clinic: string;
  };
  href?: {
    url: string;
  };
  ratings: {
    score: number;
  };
  description: string;
}

export const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const toggleDescription = () => setShowFullDescription((prev) => !prev);

  return (
    <div className='bg-white rounded-xl overflow-hidden border border-primaryColor-200'>
      <div className='border-b border-primaryColor-200 bg-gradient-to-r from-primaryColor-50 to-blue-50 p-6'>
        <div className='flex items-center text-gray-600 -mt-5 justify-end lg:mr-[72px]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill={doctor.availability.today ? 'green' : 'red'}
            stroke={doctor.availability.today ? 'green' : 'red'}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='lucide lucide-dot'
          >
            <circle cx='12.1' cy='12.1' r='4' />
          </svg>
          <p
            className={`text-[14px] font-medium lg:ml-2 ${
              doctor.availability.today ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {doctor.availability.today
              ? 'Available Today'
              : 'Not Available Today'}
          </p>
        </div>

        <div className='flex flex-col md:flex-row md:items-start gap-6 -mt-4'>
          <div className='relative w-24 md:w-32'>
            <div className='w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg'>
              <img
                src={doctor.image}
                alt={doctor.name}
                className='object-cover w-full h-full'
              />
            </div>
            <div className='absolute -bottom-2 right-0 flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-primaryColor-500 to-primaryColor-600 text-white text-xs font-semibold rounded-full border border-white shadow-md'>
              <Star className='w-3.5 h-3.5 fill-primaryColor-50 stroke-primaryColor-50' />
              <span>{doctor.ratings.score}</span>
            </div>
          </div>

          <div className='flex-1'>
            <div className='flex flex-col  lg:text-left mt-[-98px] lg:mt-0'>
              <h2 className='text-xl font-bold text-gray-800 leading-tight lg:ml-0 ml-32'>
                {doctor.name}
              </h2>
              <div className='lg:flex ml-32 lg:ml-0 text-sm'>
                <div className='flex sm:flex-row gap-2 text-gray-600 mt-1  sm:justify-start'>
                  <Stethoscope className='w-5 h-5 text-primaryColor-600 shrink-0' />
                  <p className='text-[15px] max-w-full text-right sm:text-left mr-1'>
                    {doctor.specialization}
                  </p>
                </div>
              </div>

              <div className='flex  sm:flex-row gap-2 text-gray-600 mt-1 sm:justify-start  ml-32 lg:ml-0'>
                <Clock className='w-5 h-5 text-primaryColor-600 shrink-0' />
                <p className='text-[15px] whitespace-normal break-words max-w-full text-right sm:text-left'>
                  {doctor.experience} Years Exp.
                </p>
              </div>
            </div>

            <div className='text-right sm:text-left lg:mt-0'>
              <div className='flex sm:items-start text-left gap-2 text-gray-600 mt-6 lg:mt-2 '>
                <GraduationCap className='w-5 h-5 text-primaryColor-600' />
                <div className='text-[15px] space-y-1'>
                  {doctor.qualification.map((qual, index) => (
                    <p key={index}>{qual}</p>
                  ))}
                </div>
              </div>
              <div className='flex items-center gap-2 text-gray-600 mt-2'>
                <MapPin className='w-5 h-5 text-primaryColor-600' />
                <span className='text-[15px]'>
                  {doctor.clinic.name}, {doctor.clinic.location}
                </span>
              </div>
            </div>
          </div>

          <div className='w-full lg:ml-20 lg:w-auto flex flex-col gap-2 lg:text-right mr-10 lg:mt-6 -mt-4 '>
            <div className='flex items-start gap-2 text-gray-600'>
              <Clock className='w-5 h-5 text-primaryColor-600' />
              <div className='text-[15px] space-y-1'>
                {doctor.availability.time.map((time, index) => (
                  <p key={index}>{time}</p>
                ))}
              </div>
            </div>

            <div className='flex items-center gap-2 text-gray-600'>
              <MdCurrencyRupee className='w-5 h-5 text-primaryColor-600' />
              <p className='text-[15px]'>{doctor.fees.clinic} at clinic</p>
            </div>
            <button className='w-full sm:w-auto px-6 py-3 bg-primaryColor-600 text-white rounded-lg hover:bg-primaryColor-700 transition-colors text-[16px] mt-4 mb-4 min-h-[48px] min-w-[48px] relative'>
              {doctor.href ? (
                <Link
                  href={doctor.href.url}
                  className='absolute inset-0 flex items-center justify-center'
                >
                  Book Appointment
                </Link>
              ) : (
                'Book Appointment'
              )}
            </button>
          </div>
        </div>
      </div>

      <div className='p-4'>
        <p className='text-gray-600 text-base leading-relaxed'>
          <span className='hidden md:inline'>{doctor.description}</span>
          <span className='md:hidden'>
            {!showFullDescription ? (
              <>
                {doctor.description.slice(0, 56)}...{' '}
                <button
                  onClick={toggleDescription}
                  className='text-primaryColor-600 hover:text-primaryColor-700 font-medium inline'
                >
                  Read More
                </button>
              </>
            ) : (
              <>
                {doctor.description}{' '}
                <button
                  onClick={toggleDescription}
                  className='text-primaryColor-600 hover:text-primaryColor-700 font-medium inline'
                >
                  Read Less
                </button>
              </>
            )}
          </span>
        </p>
      </div>
    </div>
  );
};
