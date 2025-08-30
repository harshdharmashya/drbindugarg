import { Metadata } from 'next';
import { AboutDoctor } from '@/components/section';
import { TextTestimonials } from '@/components/section';
import { testimonialData } from '../home.constants';
import { Breadcrumb } from '@/components/misc';

export const metadata: Metadata = {
  title: 'About Dr. Bindu Garg',
  description: "Get to know more about Dr. Bindu Garg's experience, qualifications, specialties, and awards and achievements.",
  alternates: {
    canonical: 'https://www.drbindugarg.com/about-us',
  },
  openGraph: {
    title: 'About Dr. Bindu Garg',
    description: "Get to know more about Dr. Bindu Garg's experience, qualifications, specialties, and awards and achievements.",
    type: 'website',
    url: 'https://www.drbindugarg.com/about-us',
    images: ['https://www.drbindugarg.com/images/about-us.webp'],
  },
  twitter: {
    title: 'About Dr. Bindu Garg',
    description: "Get to know more about Dr. Bindu Garg's experience, qualifications, specialties, and awards and achievements.",
    card: 'summary_large_image',
    images: ['https://www.drbindugarg.com/images/about-us.webp'],
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb title='About Us' />
      <AboutDoctor />
      <TextTestimonials data={testimonialData} />
    </>
  );
};

export default AboutPage;
