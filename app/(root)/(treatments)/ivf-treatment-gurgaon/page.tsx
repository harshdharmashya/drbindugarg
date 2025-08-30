import {
  FAQSection,
  HeroSectionDynamic,
  MediaStories,
  OurExpertise,
  TextTestimonials,
  TopBlogs,
  TreatmentOfferings,
  WhyChooseUsDynamic,
} from '@/components/section';

import { ContentArea, faqsData, heroSectionData, testimonialData, treatmentOfferingsData, whyChooseUsData } from './ivf-treatment-gurgaon.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best IVF (In Vitro Fertilization) Treatment In Gurgaon',
  description:
    'Know all about IVF treatment in Gurgaon. Get info about IVF Cost, and IVF  with other fertility treatments. Get top IVF doctors and Top IVF centers.',
  keywords: 'IVF in Gurgaon, IVF treatment in Gurgaon',
  openGraph: {
    title: 'IVF (In Vitro Fertilization) Treatment In Gurgaon',
    description:
      'Know all about IVF treatment in Gurgaon. Get info about IVF Cost, and IVF  with other fertility treatments. Get top IVF doctors and Top IVF centers.',
    type: 'website',
    url: 'https://www.drbindugarg.com/ivf-treatment-gurgaon',
    images: [
      {
        url: 'https://www.drbindugarg.com/images/banner/ivf_mv.webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IVF (In Vitro Fertilization) Treatment In Gurgaon',
    description:
      'Know all about IVF treatment in Gurgaon. Get info about IVF Cost, and IVF  with other fertility treatments. Get top IVF doctors and Top IVF centers.',
    images: ['https://www.drbindugarg.com/images/banner/ivf_mv.webp'],
  },
  alternates: {
    canonical: 'https://www.drbindugarg.com/ivf-treatment-gurgaon',
  },
};

const BestGynecologistObstetricianInGurgaonPage = () => {
  return (
    <>
      <HeroSectionDynamic data={heroSectionData} />
      <TreatmentOfferings data={treatmentOfferingsData} />
      <ContentArea />
      <OurExpertise />
      <WhyChooseUsDynamic data={whyChooseUsData} />
      <TextTestimonials data={testimonialData} />
      <MediaStories />
      <TopBlogs />
      <FAQSection data={faqsData} />
    </>
  );
};

export default BestGynecologistObstetricianInGurgaonPage;
