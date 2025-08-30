import { Metadata } from 'next';
import { FAQSection, HeroSectionDynamic, MediaStories, OurExpertise, TextTestimonials, TopBlogs, WhyChooseUsDynamic } from '@/components/section';
import { ContentArea, faqsData, heroSectionData, testimonialData, whyChooseUsData } from './blastocyst-culture-transfer-treatment-gurgaon.constants';

export const metadata: Metadata = {
  title: 'Blastocyst Culture and Transfer Treatment In Gurgaon: DR. Bindu Garg',
  description:
    'Blastocyst Culture & Transfer In Gurgaon is performed by Dr. Bindu Garg. It is a technique used in IVF  to handle and select embryos for implantation.',
  keywords:
    'blastocyst, blastocyst treatment in gurgaon, blastocyst in gurgaon, blastocyst culture and transfer, blastocyst culture, blastocyst process,blastocyst treatment',
  openGraph: {
    title: 'Blastocyst Culture and Transfer Treatment In Gurgaon: DR. Bindu Garg',
    description:
      'Blastocyst Culture & Transfer In Gurgaon is performed by Dr. Bindu Garg. It is a technique used in IVF  to handle and select embryos for implantation.',
    type: 'website',
    url: 'https://www.drbindugarg.com/blastocyst-culture-transfer-treatment-gurgaon',
    images: [{ url: 'https://www.drbindugarg.com/images/banner/Blastocyst_mv.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blastocyst Culture and Transfer Treatment In Gurgaon: DR. Bindu Garg',
    description:
      'Blastocyst Culture & Transfer In Gurgaon is performed by Dr. Bindu Garg. It is a technique used in IVF  to handle and select embryos for implantation.',
    images: ['https://www.drbindugarg.com/images/banner/Blastocyst_mv.webp'],
  },
  alternates: {
    canonical: 'https://www.drbindugarg.com/blastocyst-culture-transfer-treatment-gurgaon',
  },
};

const BlastocystCultureTransferTreatmentGurgaonPage = () => {
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

export default BlastocystCultureTransferTreatmentGurgaonPage;
