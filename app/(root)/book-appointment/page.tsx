import { CallToAction } from '@/components/section';
import { Breadcrumb } from '@/components/misc';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Your Appointment - Dr Bindu Garg',
  description: 'Book your appointment with Dr. Bindu Garg for expert fertility care and personalized treatment plans.',
  keywords: 'Book IVF Appointment, Book Fertility Appointment, Book Appointment, online appointment booking',
  alternates: {
    canonical: 'https://www.drbindugarg.com/book-appointment',
  },
  openGraph: {
    title: 'Book Your Appointment - Dr Bindu Garg',
    description: 'Book your appointment with Dr. Bindu Garg for expert fertility care and personalized treatment plans.',
    type: 'website',
    url: 'https://www.drbindugarg.com/book-appointment',
  },
};

const BookAppointment = () => {
  return (
    <>
      <Breadcrumb title='Book Appointment' enableH1 />
      <CallToAction />
    </>
  );
};

export default BookAppointment;
