import {
  FAQSection,
  HeroSectionDynamic,
  MediaStories,
  OurExpertise,
  TextTestimonials,
  TopBlogs,
  TreatmentsCards,
  WhyChooseDrBindu,
} from '@/components/section';

import { ContentArea, faqsData, heroSectionData, testimonialData } from './best-gyne.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consult The Best Gynecologist in Gurgaon -Dr. Bindu Garg',
  description:
    "Consult the best Gynecologist in Gurgaon-Dr. Bindu Garg. Check the doctor's experience, expertise, and patient review. Book an Appointment with top Obs-Gynae.",
  keywords:
    'Best Gynaecologist in Gurgaon, Top Gynecologist in Gurgaon, Gynecologist in Gurgaon, Gyno in Gurgaon, Best Gyno in Gurgaon, Best obstetrician in Gurgaon',
  alternates: {
    canonical: 'https://www.drbindugarg.com/best-gynecologist-obstetrician-in-gurgaon',
  },
  openGraph: {
    title: 'Consult The Best Gynecologist in Gurgaon -Dr. Bindu Garg',
    description:
      "Consult the best Gynecologist in Gurgaon-Dr. Bindu Garg. Check the doctor's experience, expertise, and patient review. Book an Appointment with top Obs-Gynae.",
    type: 'website',
    url: 'https://www.drbindugarg.com/best-gynecologist-obstetrician-in-gurgaon',
    images: ['https://www.drbindugarg.com/images/why-choose-us.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consult The Best Gynecologist in Gurgaon -Dr. Bindu Garg',
    description:
      "Consult the best Gynecologist in Gurgaon-Dr. Bindu Garg. Check the doctor's experience, expertise, and patient review. Book an Appointment with top Obs-Gynae.",
    images: ['https://www.drbindugarg.com/images/why-choose-us.webp'],
  },
};

const BestGynecologistObstetricianInGurgaonPage = () => {
  return (
    <>
      <HeroSectionDynamic data={heroSectionData} />
      <TreatmentsCards />
      <ContentArea />
      <OurExpertise />
      <WhyChooseDrBindu />
      <TextTestimonials data={testimonialData} />
      <MediaStories />
      <TopBlogs />
      <FAQSection data={faqsData} />
    </>
  );
};

export default BestGynecologistObstetricianInGurgaonPage;
