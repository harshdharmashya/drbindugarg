import { Metadata } from 'next';
import NotFoundHelper from './NotFoundHelper';

export const metadata: Metadata = {
  title: 'Page Not Found - 404 Error',
  description: 'This page is not found due to a 404 error. Kindly visit to home page to access more pages. Thank You!',
  openGraph: {
    title: 'Page Not Found - 404 Error',
    description: 'This page is not found due to a 404 error. Kindly visit to home page to access more pages. Thank You!',
    type: 'website',
    url: 'https://www.drbindugarg.com/404',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Not Found - 404 Error',
    description: 'This page is not found due to a 404 error. Kindly visit to home page to access more pages. Thank You!',
  },
  alternates: {
    canonical: 'https://www.drbindugarg.com/404',
  },
};

const NotFoundPage = () => <NotFoundHelper />;

export default NotFoundPage;
