import { Metadata } from 'next';
import DynamicGallery from './client';

export const metadata: Metadata = {
  title: 'Gallery - Awards, Achievements, Patient Videos | Dr. Bindu Garg',
  description: "Dr. Bindu Garg's gallery of awards, achievements, and inspiring patient success stories.",
  keywords: "Dr. Bindu Garg's gallery, awards, achievements, patient videos, success stories",
  alternates: {
    canonical: 'https://www.drbindugarg.com/gallery',
  },
  openGraph: {
    title: 'Gallery - Awards, Achievements, Patient Videos | Dr. Bindu Garg',
    description: "Dr. Bindu Garg's gallery of awards, achievements, and inspiring patient success stories.",
    type: 'website',
    url: 'https://www.drbindugarg.com/gallery',
    images: ['https://www.drbindugarg.com/images/awards/dr-bindu-awards-3.webp'],
  },
  twitter: {
    title: 'Gallery - Awards, Achievements, Patient Videos | Dr. Bindu Garg',
    description: "Dr. Bindu Garg's gallery of awards, achievements, and inspiring patient success stories.",
    card: 'summary_large_image',
    images: ['https://www.drbindugarg.com/images/awards/dr-bindu-awards-3.webp'],
  },
};

const GalleryPage = () => {
  return <DynamicGallery />;
};

export default GalleryPage;
