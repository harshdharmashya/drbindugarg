'use client';

import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundHelper = () => {
  return (
    <div className='bg-gradient-to-br from-primaryColor-50 to-secondaryColor-50 min-h-[85vh] flex items-center justify-center py-8 relative overflow-hidden'>
      <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>
      <div className='absolute top-0 left-0 w-72 h-72 bg-primaryColor-200 rounded-full mix-blend-multiply filter blur-xl opacity-20'></div>
      <div className='absolute top-0 right-0 w-72 h-72 bg-secondaryColor-200 rounded-full mix-blend-multiply filter blur-xl opacity-20'></div>
      <div className='absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20'></div>

      <div className='max-w-lg w-full relative z-10'>
        <div className='bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-100'>
          <div className='w-32 h-32 bg-gradient-to-br from-primaryColor-500 to-secondaryColor-600 rounded-full flex items-center justify-center mx-auto mb-8 relative shadow-lg'>
            <Search className='w-16 h-16 text-white' />
            <div className='absolute inset-0 rounded-full bg-white/20 opacity-50'></div>
          </div>

          <h1 className='text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primaryColor-600 via-secondaryColor-600 to-purple-600 mb-4 text-center'>
            404
          </h1>

          <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center'>Oops! Page Not Found</h2>

          <p className='text-gray-600 mb-8 text-center'>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className='flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4'>
            <Link
              href='/'
              className='bg-gradient-to-r from-primaryColor-500 to-secondaryColor-600 text-white px-6 py-3 rounded-full flex items-center justify-center hover:from-primaryColor-600 hover:to-secondaryColor-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto'
            >
              <Home className='mr-2' size={20} />
              Go to Homepage
            </Link>

            <button
              onClick={() => window.history.back()}
              className='bg-gray-100 text-gray-700 px-6 py-3 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto'
            >
              <ArrowLeft className='mr-2' size={20} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundHelper;
