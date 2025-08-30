import { Metadata } from 'next';
import ThankYouPageHelper from './_client';

export const metadata: Metadata = {
  title: 'Thank You For Visiting To  Dr. Bindu Garg',
  description: 'Thank You for visiting Dr. Bindu Garg. We will get in touch with you very soon.',
};

const ThankYouPage = () => {
  return <ThankYouPageHelper />;
};

export default ThankYouPage;
