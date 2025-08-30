import { Metadata } from 'next';
import { FAQSection, HeroSectionDynamic, MediaStories, OurExpertise, TextTestimonials, TopBlogs, WhyChooseUsDynamic } from '@/components/section';
import { ContentArea, faqsData, heroSectionData, testimonialData, whyChooseUsData } from './ferility-workup-gurgaon.constants';

export const metadata: Metadata = {
  title: 'Male & Female Fertility Workup in Gurgaon',
  description:
    'The best fertility workup in Gurgaon by Dr. Bindu Garg at Neelkanth Hospital. Get all male and female fertility tests done at an affordable cost.',
  keywords:
    'fertility workup, fertility workup female, infertility workup male, primary infertility workup, Medical history assessment, Sonogram (ultrasound imaging), Hormone blood tests, Ovarian reserve test, Laparoscopy, Sonohysterogram. Hysteroscopy Ultrasound',
  openGraph: {
    title: 'Male & Female Fertility Workup in Gurgaon',
    description:
      'The best fertility workup in Gurgaon by Dr. Bindu Garg at Neelkanth Hospital. Get all male and female fertility tests done at an affordable cost.',
    type: 'website',
    url: 'https://www.drbindugarg.com/ferility-workup-gurgaon',
    images: [{ url: 'https://www.drbindugarg.com/images/banner/Fertilityworkup_mv.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Male & Female Fertility Workup in Gurgaon',
    description:
      'The best fertility workup in Gurgaon by Dr. Bindu Garg at Neelkanth Hospital. Get all male and female fertility tests done at an affordable cost.',
    images: ['https://www.drbindugarg.com//images/banner/Fertilityworkup_mv.webp'],
  },
  alternates: {
    canonical: 'https://www.drbindugarg.com/ferility-workup-gurgaon',
  },
};

const FerilityWorkupGurgaonPage = () => {
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

export default FerilityWorkupGurgaonPage;
