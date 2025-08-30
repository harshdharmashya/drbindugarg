import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer, Header } from '@/components/layout';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '@/app/globals.css';
import 'swiper/css';
import QueryProvider from '@/lib/react-query/QueryProvider';
import { GoogleAnalyticsCode, GTMNoScript, Tawk } from '@/components/scripts';
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Bindu Garg - Fertility & Ivf Expert in Gurgaon',
  description:
    'Dr. Bindu Garg, the most trusted name among the best infertility & IVF doctors in Gurgaon. She is the most experienced and achieved many awards for her remarkable services in the field of reproductive health & medicine. Book your consultation today and take the first step towards starting your family.',
  verification: { google: 'ktG8fzJinrP8u0hD_v8_0YdbYwt1Gi1rcirfBIHE1Xs' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <GoogleTagManager gtmId='GTM-PMQFVKNK' />
      <body className={inter.className}>
        <QueryProvider>
          <GTMNoScript />
          <GoogleAnalyticsCode id='global-1' tagId='G-DMXB9GS3FY' />
          <GoogleAnalyticsCode id='global-2' tagId='AW-11234302649' />
          <Header />
          {children}
          <Footer />
          <ToastContainer />
          <Tawk />
        </QueryProvider>
      </body>
    </html>
  );
}
