import { Metadata } from 'next';
import { FAQSection, HeroSectionDynamic, MediaStories, OurExpertise, TextTestimonials, TopBlogs, WhyChooseUsDynamic } from '@/components/section';
import { ContentArea, faqsData, heroSectionData, testimonialData, whyChooseUsData } from './iui-treatment-gurgaon.constants';

export const metadata: Metadata = {
  title: 'Best IUI Treatment in Gurgaon: Dr. Bindu Garg',
  description:
    'Get the best IUI treatment in Gurgaon by the top fertility specialist Dr. Bindu Garg at her hospital. Know the cost and procedure details. Consult Now.',
  keywords: 'iui treatment in Gurgaon, iui treatment, iui therapy, intrauterine insemination treatment, intrauterine insemination, iui procedure',
  openGraph: {
    title: 'Best IUI Treatment in Gurgaon: Dr. Bindu Garg',
    description:
      'Get the best IUI treatment in Gurgaon by the top fertility specialist Dr. Bindu Garg at her hospital. Know the cost and procedure details. Consult Now.',
    type: 'website',
    url: 'https://www.drbindugarg.com/iui-treatment-gurgaon',
    images: [
      {
        url: 'https://www.drbindugarg.com/images/banner/iui_mv.webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best IUI Treatment in Gurgaon: Dr. Bindu Garg',
    description:
      'Get the best IUI treatment in Gurgaon by the top fertility specialist Dr. Bindu Garg at her hospital. Know the cost and procedure details. Consult Now.',
    images: ['https://www.drbindugarg.com/images/banner/iui_mv.webp'],
  },
  alternates: {
    canonical: 'https://www.drbindugarg.com/iui-treatment-gurgaon',
  },
};

const IuiTreatmentGurgaonPage = () => {
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

export default IuiTreatmentGurgaonPage;
