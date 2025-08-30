import { FAQSection, HeroSectionDynamic, MediaStories, OurExpertise, TextTestimonials, TopBlogs, WhyChooseUsDynamic } from '@/components/section';
import { ContentArea, faqsData, heroSectionData, testimonialData, whyChooseUsData } from './laser-assisted-hatching-treatment-gurgaon.constants';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Laser-Assisted Hatching (LAH) Treatment in Gurgaon: DR. Bindu Garg',
  description:
    'Dr. Bindu Garg offers Laser Assisted Hatching (LAH) treatment in Gurgaon at the lowest cost. It is performed with IVF to increase the fertility success rate.',
  keywords:
    'laser assisted hatching in Gurgaon, laser assisted hatching treatment in Gurgaon, lah treatment, laser assisted hatching, assisted embryo hatching, laser assisted hatching success rates, laser hatching, laser hatching cost, laser hatching process',
  openGraph: {
    title: 'Laser-Assisted Hatching (LAH) Treatment in Gurgaon: DR. Bindu Garg',
    description:
      'Dr. Bindu Garg offers Laser Assisted Hatching (LAH) treatment in Gurgaon at the lowest cost. It is performed with IVF to increase the fertility success rate.',
    type: 'website',
    url: 'https://www.drbindugarg.com/laser-assisted-hatching-treatment-gurgaon',
    images: [{ url: 'https://www.drbindugarg.com/images/banner/laser_mv.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laser-Assisted Hatching (LAH) Treatment in Gurgaon: DR. Bindu Garg',
    description:
      'Dr. Bindu Garg offers Laser Assisted Hatching (LAH) treatment in Gurgaon at the lowest cost. It is performed with IVF to increase the fertility success rate.',
    images: ['https://www.drbindugarg.com/images/banner/laser_mv.webp'],
  },
  alternates: {
    canonical: 'https://www.drbindugarg.com/laser-assisted-hatching-treatment-gurgaon',
  },
};

const LaserAssistedHatchingTreatmentGurgaonPage = () => {
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

export default LaserAssistedHatchingTreatmentGurgaonPage;
