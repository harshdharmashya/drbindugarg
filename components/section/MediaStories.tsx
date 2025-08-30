'use client';

import React from 'react';
import Image from 'next/image';
import { XIcon } from 'lucide-react';

const videoData = [
  {
    videoUrl: 'https://www.youtube.com/embed/7JzVjjVJcs4?si=MH6d3NS6mIH1kmZx',
    thumbnail: '/images/media-stories/youtube-1.webp',
    alt: "YouTube thumbnail of Dr. Bindu Garg's IBN7 IVF asha ki Nayi Kiran Explanation Video",
  },
  {
    videoUrl: 'https://www.youtube.com/embed/ycW7KReW_ZE?si=76rB0SwmDTHpc-t2',
    thumbnail: '/images/media-stories/youtube-2.webp',
    alt: "Thumbnail of Dr. Bindu Garg's New age parenting Explanation Video",
  },
  {
    videoUrl: 'https://www.youtube.com/embed/F7hQAJ3Cesc?si=klECS8WVfEuApS19',
    thumbnail: '/images/media-stories/youtube-3.webp',
    alt: "YouTube thumbnail of Dr. Bindu Garg's ABP News IVF & Infertility treatments tricks Explanation Video",
  },
];

const MediaStories = () => {
  const [selectedVideo, setSelectedVideo] = React.useState('');

  return (
    <section id='media-stories' className='relative overflow-hidden bg-gray-50'>
      <div className='max-container padding-container-sm'>
        <div className='text-center mb-8'>
          <p className='section-subtitle mb-2'>Gurgaon's Best IVF Doctor</p>
          <h2 className='section-title'>Dr. Bindu Garg in News</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {videoData.map((video, index) => (
            <div
              key={index}
              className='relative cursor-pointer group p-2 border border-gray-200 rounded-lg'
              onClick={() => setSelectedVideo(video.videoUrl)}
            >
              <div className='relative aspect-video'>
                <Image src={video.thumbnail} alt={video.alt} fill className='object-cover rounded-lg' />
              </div>
            </div>
          ))}
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

export default MediaStories;
