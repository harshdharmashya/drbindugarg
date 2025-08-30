import { FAQSection, HeroSectionDynamic, MediaStories, OurExpertise, TextTestimonials, TopBlogs, WhyChooseUsDynamic } from '@/components/section';

import { ContentArea, faqsData, heroSectionData, testimonialData, whyChooseUsData } from './icsi-treatment-gurgaon.constants';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best ICSI (Intracytoplasmic Sperm Injection) Treatment in Gurgaon',
  description:
    'Advanced Intracytoplasmic sperm injection (ICSI) treatment in Gurgaon by top infertility specialist Dr. Bindu Garg at an affordable cost with a high success rate.',
  keywords: 'icsi treatment, icsi treatment in gurgaon, icsi procedure, icsi treatment cost, icsi ivf cost, icsi near me',
  openGraph: {
    title: 'Best ICSI (Intracytoplasmic Sperm Injection) Treatment in Gurgaon',
    description:
      'Advanced Intracytoplasmic sperm injection (ICSI) treatment in Gurgaon by top infertility specialist Dr. Bindu Garg at an affordable cost with a high success rate.',
    type: 'website',
    url: 'https://www.drbindugarg.com/icsi-treatment-gurgaon',
    images: [
      {
        url: 'https://www.drbindugarg.com/images/banner/icsi_mv.webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best ICSI (Intracytoplasmic Sperm Injection) Treatment in Gurgaon',
    description:
      'Advanced Intracytoplasmic sperm injection (ICSI) treatment in Gurgaon by top infertility specialist Dr. Bindu Garg at an affordable cost with a high success rate.',
    images: ['https://www.drbindugarg.com/images/banner/icsi_mv.webp'],
  },
  alternates: {
    canonical: 'https://www.drbindugarg.com/icsi-treatment-gurgaon',
  },
};

const IcsitreatmentGurgaonPage = () => {
  return (
    <>
      <HeroSectionDynamic data={heroSectionData} />
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

export default IcsitreatmentGurgaonPage;
