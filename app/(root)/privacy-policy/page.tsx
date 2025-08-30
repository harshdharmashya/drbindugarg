import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/misc';

export const metadata: Metadata = {
  title: 'Privacy Policy - Dr. Bindu Garg',
  description: "Read Dr. Bindu Garg's privacy policy to understand how your personal information is protected.",
  openGraph: {
    title: 'Privacy Policy - Dr. Bindu Garg',
    description: "Read Dr. Bindu Garg's privacy policy to understand how your personal information is protected.",
    type: 'website',
    url: 'https://www.drbindugarg.com/privacy-policy',
    images: [
      {
        url: 'https://www.drbindugarg.com/why-choose-us.webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Dr. Bindu Garg',
    description: "Read Dr. Bindu Garg's privacy policy to understand how your personal information is protected.",
    images: ['https://www.drbindugarg.com/why-choose-us.webp'],
  },
};

const PrivacyPolicy = () => {
  return (
    <>
      <Breadcrumb title='Privacy Policy' />
      <PrivacyPolicyContent />
    </>
  );
};

const PrivacyPolicyContent = () => {
  return (
    <>
      <section className='relative overflow-hidden'>
        <div className='max-container padding-container-sm flex flex-col'>
          <h1 className='text-3xl font-bold mb-6'>Privacy Policy</h1>

          <p className='mb-8'>
            Our Privacy Policy reflects our commitment to your privacy and the protection of your personal information. Thank you for choosing Dr.
            Bindu Garg for your reproductive health needs. Your privacy is critically important to us. Here's how we handle your information:
          </p>

          <h2 className='text-xl font-bold mb-3'>1. Information collected:</h2>
          <p className='mb-6'>
            We collect personal details, including name, contact information, and medical history, provided voluntarily by users.
          </p>

          <h2 className='text-xl font-bold mb-3'>2. Purpose of Information:</h2>
          <p className='mb-6'>
            The data is used for appointment scheduling, personalized services, and communications regarding reproductive health matters.
          </p>

          <h2 className='text-xl font-bold mb-3'>3. Safety Measures:</h2>
          <p className='mb-6'>
            The security of your data is a top priority. We implement measures to protect it from unauthorized access or disclosure.
          </p>

          <h2 className='text-xl font-bold mb-3'>4. Third-Party Links:</h2>
          <p className='mb-6'>
            Our site may contain links to third-party websites. Please note that we are not responsible for their privacy practices. Review their
            policies separately.
          </p>

          <h2 className='text-xl font-bold mb-3'>5. Cookies:</h2>
          <p className='mb-6'>
            We use cookies to improve your browsing experience. Users can modify cookie settings through their browser preferences.
          </p>

          <h2 className='text-xl font-bold mb-3'>6. Data Sharing:</h2>
          <p className='mb-6'>We do not sell, trade, or share your personal information with third parties unless required by law.</p>

          <h2 className='text-xl font-bold mb-3'>7. Policy Update:</h2>
          <p className='mb-6'>There may be updates to our privacy policy. Check the effective date to make sure you have the latest version.</p>

          <h2 className='text-xl font-bold mb-3'>8. Contact Us:</h2>
          <p className='mb-6'>For privacy questions or concerns, please contact us at www.drbindugarg.com/book-appointments.</p>

          <p className='mb-4'>
            By using our website, you agree to Dr. Bindu Garg's Privacy Policy. Your trust is important to us, and we are committed to maintaining the
            privacy and security of your information.
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
