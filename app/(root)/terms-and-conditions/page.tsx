import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/misc';

export const metadata: Metadata = {
  title: 'Terms and Conditions - Dr. Bindu Garg',
  description:
    'Understand the terms and conditions set by Dr. Bindu Garg for using our services. Learn about our privacy policy, data protection practices, and confidentiality measures.',
  keywords: 'Privacy Policy, Dr. Bindu Garg, personal data protection, confidentiality, fertility clinic privacy',
  openGraph: {
    title: 'Terms and Conditions - Dr. Bindu Garg',
    description:
      'Understand the terms and conditions set by Dr. Bindu Garg for using our services. Learn about our privacy policy, data protection practices, and confidentiality measures.',
    type: 'website',
    url: 'https://www.drbindugarg.com/terms-and-conditions',
    images: [
      {
        url: 'https://www.drbindugarg.com/images/why-choose-us.webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions - Dr. Bindu Garg',
    description:
      'Understand the terms and conditions set by Dr. Bindu Garg for using our services. Learn about our privacy policy, data protection practices, and confidentiality measures.',
    images: ['https://www.drbindugarg.com/images/why-choose-us.webp'],
  },
};

const TermsAndConditions = () => {
  return (
    <>
      <Breadcrumb title='Terms and Conditions' />
      <TermsAndConditionsContent />
    </>
  );
};

const TermsAndConditionsContent = () => {
  return (
    <section id='tos'>
      <div className='max-container padding-container-sm flex flex-col'>
        <h1 className='text-3xl font-bold mb-6'>Terms and Conditions</h1>

        <p className='mb-4'>
          By using Dr. Bindu Garg's website, you agree to these terms and conditions. If you do not agree, please do not use the Site. Your access and
          use indicate your acceptance of these terms, which govern your interaction with our website. Thank you for understanding and respecting
          these guidelines when browsing our content, you agree to abide by the following terms and conditions:
        </p>

        <h3 className='text-xl font-bold mb-2'>Information Accuracy:</h3>
        <p className='mb-4'>
          The website provides general information. We aim for accuracy but cannot guarantee completeness or suitability for specific purposes. For
          personalized guidance, consult Dr. Bindu Garg or qualified healthcare professionals. Use the information responsibly, understanding that it
          is not a substitute for professional medical advice.
        </p>

        <h3 className='text-xl font-bold mb-2'>Medical Disclaimer:</h3>
        <p className='mb-4'>
          The content of the website is not a replacement for expert medical advice. Consult Dr. Bindu Garg or qualified health professionals for
          personalized guidance. Your health is unique, and they are here to provide the personal care and support you need.
        </p>

        <h3 className='text-xl font-bold mb-2'>User Conduct:</h3>
        <p className='mb-4'>
          Please use Dr. Bindu Garg's website responsibly. Don't do anything illegal or disruptive. Respect the privacy of others and don't use
          anything without permission. Let's make the website a safe and positive place for everyone. Thank you for being considerate and following
          these guidelines.
        </p>

        <h3 className='text-xl font-bold mb-2'>Intellectual Property:</h3>
        <p className='mb-4'>
          Everything on Dr. Bindu Garg's website, such as words, images, and logos, belongs to Dr. Bindu Garg. You cannot use it without permission.
          Respect its content and enjoy the site as you wish. If you want to use something, just ask – he's friendly!
        </p>

        <h3 className='text-xl font-bold mb-2'>Third-Party Links:</h3>
        <p className='mb-4'>
          We provide external links on our site for your convenience. Please note that Dr. Bindu Garg is not responsible for the content or practices
          of third-party websites. Use them at your discretion, and consult their terms and conditions for a better understanding of their policies.
        </p>

        <h3 className='text-xl font-bold mb-2'>Data Security:</h3>
        <p className='mb-4'>
          Although we do our best to ensure security, please be aware that the Internet is not completely secure. There are inherent risks in sharing
          information online. Dr. Bindu Garg's website advises users to be cautious when providing personal details and understand the potential
          uncertainties associated with Internet-based data transmission.
        </p>

        <h3 className='text-xl font-bold mb-2'>Updates and Changes:</h3>
        <p className='mb-4'>
          Dr Bindu Garg may change, update or discontinue the Website and its content at any time without prior notice to you. Please be aware that
          these are subject to change, and we appreciate your understanding.
        </p>

        <h3 className='text-xl font-bold mb-2'>Limit of Liability:</h3>
        <p className='mb-4'>
          Dr. Bindu Garg is not responsible for any direct, indirect, or consequential damages that result from your use of or inability to use the
          website. Users are encouraged to obtain information responsibly, understanding that the content of the Website is provided for general
          purposes, and not as a substitute for professional advice.
        </p>

        <h3 className='text-xl font-bold mb-2'>Governing Law:</h3>
        <p className='mb-4'>
          These terms and conditions comply with the laws of the location where Dr. Bindu Garg operates. Any issues arising from these Terms will be
          settled by the courts located there. If you have any questions, please get in touch using the contact information on our website.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
