import React from 'react';
import {
  CallToAction,
  DoctorTopics,
  FAQSection,
  HeroSection,
  MediaStories,
  OurExpertise,
  OurExpertise2,
  SuccessStories,
  TextTestimonials,
  TopBlogs,
  Treatments,
  WhyChooseDrBindu,
} from '@/components/section';
import { ContentArea, faqsData, testimonialData } from './home.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best IVF Doctor in Gurgaon | Top Infertility Specialist',
  description:
    'Meet the best IVF doctor in Gurgaon - Dr. Bindu Garg. During her 42+ years of journey, she has delivered 20000+ Babies with the highest success rate in IVF.',
  keywords:
    'Best IVF Doctor in Gurgaon, IVF Specialist in Gurgaon, IVF Expert in Gurgaon, IVF Doctor in Gurgaon, IVF Doctor Gurgaon, best infertility doctor in Gurgaon, best infertility specialist in Gurgaon',
  alternates: {
    canonical: 'https://www.drbindugarg.com/',
  },
  openGraph: {
    title: 'Best IVF Doctor in Gurgaon - Dr. Bindu Garg',
    description: 'Dr. Bindu Garg is one of the famous IVF Doctor in Gurgaon. During her 42+ years of experience, she has delivered 20000+ Babies',
    images: ['https://www.drbindugarg.com/images/about-us.webp'],
    locale: 'en_US',
    type: 'website',
    url: 'https://www.drbindugarg.com/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best IVF Doctor in Gurgaon - Dr. Bindu Garg',
    description: 'Dr. Bindu Garg is one of the famous IVF Doctor in Gurgaon. During her 42+ years of experience, she has delivered 20000+ Babies',
    images: ['https://www.drbindugarg.com/images/about-us.webp'],
  },
};

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'Gynecologic',
  name: 'Dr. Bindu Garg : Best IVF Doctor in Gurgaon',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1, Neelkanth Hospital, Main, Mehrauli-Gurgaon Rd, near Guru Dronacharya Metro Station, DLF Phase 3',
    addressLocality: 'Gurugram',
    addressRegion: 'Haryana',
    postalCode: '122022',
    addressCountry: 'India',
  },
  image: 'https://www.drbindugarg.com/assets/img/common/about-us.webp',
  email: 'drbindu@neelkanthhospital.com',
  telePhone: '076690 54615',
  url: 'https://www.drbindugarg.com',
  paymentAccepted: ['cash', 'check', 'credit card', 'invoice'],
  openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 0-0',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '0',
      closes: '0',
    },
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.483336093256124',
    longitude: '77.10482361534473',
  },
  priceRange: '$',
};

const HomePage = () => {
  return (
    <>
      <script id='schema-markup' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <HeroSection />
      <OurExpertise />
      <CallToAction />
      <Treatments />
      <WhyChooseDrBindu />
      <OurExpertise2 />
      <SuccessStories />
      <TextTestimonials data={testimonialData} />
      <MediaStories />
      <DoctorTopics />
      <ContentArea />
      <TopBlogs />
      <FAQSection data={faqsData} />
    </>
  );
};

export default HomePage;
