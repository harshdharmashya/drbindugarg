import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/misc';
import ContactCards from './ContactCards';
import SITE_CONFIG from '@/constants/SITE_CONFIG';
import { CallToAction } from '@/components/section';

export const metadata: Metadata = {
  title: 'Contact us- Dr. Bindu Garg',
  description: 'Contact Dr. Bindu Garg for fertility consultations and expert advice on your reproductive health.',
  keywords: 'Contact us, Contact Dr. Bindu Garg, Contact Fertility Specialist, Contact Fertility Doctor',
  openGraph: {
    title: 'Contact us- Dr. Bindu Garg',
    description: 'Contact Dr. Bindu Garg for fertility consultations and expert advice on your reproductive health.',
    type: 'website',
    url: 'https://www.drbindugarg.com/contact-us',
    images: [
      {
        url: 'https://www.drbindugarg.com/images/about-us.webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact us- Dr. Bindu Garg',
    description: 'Contact Dr. Bindu Garg for fertility consultations and expert advice on your reproductive health.',
    images: ['https://www.drbindugarg.com/images/about-us.webp'],
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb title='Contact Us' enableH1 />
      <CallToAction />
      <ContactCards />
      <ContactMap />
    </>
  );
};

const ContactMap = () => (
  <div className='h-[300px]'>
    <iframe
      src={SITE_CONFIG.GOOGLE_MAP_IFRAME}
      width='100%'
      height='100%'
      className='border-0 rounded-md'
      allowFullScreen
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    ></iframe>
  </div>
);

export default ContactPage;
