'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, XIcon } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const videoData = [
  {
    videoUrl: 'https://www.youtube.com/embed/0ztlxI_P3YA',
    thumbnail: '/images/doctor-topics/home - 0ztlxI_P3YA.png',
    alt: "Dr. Bindu Garg's video on fertility topics",
  },
  {
    videoUrl: 'https://www.youtube.com/embed/Wh_Te972zFs',
    thumbnail: '/images/doctor-topics/home - Wh_Te972zFs.png',
    alt: "Dr. Bindu Garg's video on fertility topics",
  },
  {
    videoUrl: 'https://www.youtube.com/embed/jtl4ueSnFpo',
    thumbnail: '/images/doctor-topics/home - jtl4ueSnFpo.png',
    alt: "Dr. Bindu Garg's video on fertility topics",
  },
  {
    videoUrl: 'https://www.youtube.com/embed/rHzU3hk_I9I',
    thumbnail: '/images/doctor-topics/home - rHzU3hk_I9I.png',
    alt: "Dr. Bindu Garg's video on fertility topics",
  },
  {
    videoUrl: 'https://www.youtube.com/embed/v0_Ng_YvTvM',
    thumbnail: '/images/doctor-topics/home - v0_Ng_YvTvM.png',
    alt: "Dr. Bindu Garg's video on fertility topics",
  },
  {
    videoUrl: 'https://www.youtube.com/embed/vtYywRvgVXc',
    thumbnail: '/images/doctor-topics/home - vtYywRvgVXc.png',
    alt: "Dr. Bindu Garg's video on fertility topics",
  },
  {
    videoUrl: 'https://www.youtube.com/embed/xyRny0SiVH4',
    thumbnail: '/images/doctor-topics/home - xyRny0SiVH4.png',
    alt: "Dr. Bindu Garg's video on fertility topics",
  },
  {
    videoUrl: 'https://www.youtube.com/embed/zkZB83ZBhK8',
    thumbnail: '/images/doctor-topics/home - zkZB83ZBhK8.png',
    alt: "Dr. Bindu Garg's video on fertility topics",
  },
];

const DoctorTopics = () => {
  const [selectedVideo, setSelectedVideo] = React.useState('');

  return (
    <section id='doctor-topics' className='relative overflow-hidden bg-white'>
      <div className='max-container padding-container-sm'>
        <div className='text-center mb-8'>
          <p className='section-subtitle mb-2'>Doctor's Topic</p>
          <h2 className='section-title'>Obs-Gynae and Fertility Related Topics</h2>
        </div>

        <div className='relative'>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.doctor-topics-unique-x7f9-prev',
              nextEl: '.doctor-topics-unique-x7f9-next',
            }}
            spaceBetween={24}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className='!pb-8'
          >
            {videoData.map((video, index) => (
              <SwiperSlide key={index}>
                <div className='relative cursor-pointer group p-2 border border-gray-200 rounded-lg' onClick={() => setSelectedVideo(video.videoUrl)}>
                  <div className='relative aspect-video'>
                    <Image src={video.thumbnail} alt={video.alt} fill className='object-cover rounded-lg' />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className='flex justify-center gap-4'>
            <button className='doctor-topics-unique-x7f9-prev bg-primaryColor-50 text-gray-700 px-6 py-3 rounded-xl hover:bg-primaryColor-100 transition-all duration-300 flex items-center gap-3 shadow-lg shadow-blue-50/30 border border-primaryColor-100'>
              <ChevronLeft className='w-5 h-5' />
              <span className='font-medium'>Previous</span>
            </button>
            <button className='doctor-topics-unique-x7f9-next bg-primaryColor-50 text-gray-700 px-6 py-3 rounded-xl hover:bg-primaryColor-100 transition-all duration-300 flex items-center gap-3 shadow-lg shadow-blue-50/30 border border-primaryColor-100'>
              <span className='font-medium'>Next</span>
              <ChevronRight className='w-5 h-5' />
            </button>
          </div>
        </div>
      </div>

      {selectedVideo && (
        <div className='fixed inset-0 bg-black bg-opacity-90 z-[51] flex items-center justify-center p-8'>
          <div className='relative w-full max-w-5xl'>
            <div className='absolute inset-0 -m-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl'>
              <div className='absolute inset-4 bg-black rounded-2xl border-4 border-gray-700'>
                <div className='absolute bottom-4 right-4 w-2 h-2 bg-green-500 rounded-full shadow-lg shadow-green-500/50'></div>
              </div>
            </div>

            <div className='relative aspect-video'>
              <iframe src={selectedVideo} className='w-full h-full rounded-xl' allowFullScreen />
            </div>

            <button
              onClick={() => setSelectedVideo('')}
              className='absolute -top-16 right-0 px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 flex items-center gap-2'
            >
              <span>Close</span>
              <XIcon className='w-5 h-5' />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DoctorTopics;
