import Link from 'next/link';
import { MapPin, Phone, Mail, Home, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import SITE_CONFIG from '@/constants/SITE_CONFIG';
import { socialMediaLinks } from '@/constants/socialMediaLinks';
import { infertilityTreatments } from '@/constants';

const quickLinks = [
  { title: 'Home', link: '/' },
  { title: 'About Us', link: '/about-us' },
  { title: 'Gallery', link: '/gallery' },
  { title: 'Doctors', link: '/best-ivf-doctors-in-delhi' },
  { title: 'Blogs', link: '/blogs' },
  { title: 'Contact', link: '/contact-us' },
  { title: 'Privacy Policy', link: '/privacy-policy' },
  { title: 'Terms & Conditions', link: '/terms-and-conditions' },
];

const Footer: React.FC = () => {
  const fullAddress = `${SITE_CONFIG.ADDRESS.line1}, ${SITE_CONFIG.ADDRESS.line2}, ${SITE_CONFIG.ADDRESS.line3}`;

  return (
    <>
      <footer id='footer' className='bg-[#fbfbfb]'>
        <div className='max-container padding-container-sm'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div>
              <h4 className='footer-title text-xl font-semibold mb-5'>Quick Links</h4>
              <div className='footer-menu flex flex-col gap-3 text-gray-600'>
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.link}
                    className='footer-links text-sm hover:text-gray-900 hover:font-semibold transition-all duration-300'
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className='footer-title text-xl font-semibold mb-5'>Our Services</h4>
              <div className='footer-menu flex flex-col gap-3 text-gray-600'>
                {infertilityTreatments.map((treatment, index) => (
                  <Link
                    key={index}
                    href={treatment.href}
                    className='footer-links text-sm hover:text-gray-900 hover:font-semibold transition-all duration-300'
                  >
                    {treatment.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className='footer-title text-xl font-semibold mb-5'>Contact Info</h4>
              <div className='footer-menu flex flex-col gap-3 text-gray-600'>
                <a href={SITE_CONFIG.GOOGLE_MAP_URL} target='_blank' rel='noopener noreferrer' className='footer-links text-sm flex items-start'>
                  <MapPin className='mr-2 mt-1 flex-shrink-0' size={16} />
                  {fullAddress}
                </a>
                <a href={`mailto:${SITE_CONFIG.CONTACT.email}`} className='footer-links text-sm flex items-center'>
                  <Mail className='mr-2 flex-shrink-0' size={16} />
                  {SITE_CONFIG.CONTACT.email}
                </a>
                <a href={`tel:${SITE_CONFIG.CONTACT.phone[0].replace(/[^0-9+]/g, '')}`} className='footer-links text-sm flex items-center'>
                  <Phone className='mr-2 flex-shrink-0' size={16} />
                  {SITE_CONFIG.CONTACT.phone[0]}
                </a>
                <div className='social__links flex gap-4 mt-2 md:hidden'>
                  {socialMediaLinks.map(({ icon: Icon, url, name }) => (
                    <a
                      key={name}
                      href={url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-primaryColor-50 p-3 rounded-full hover:bg-primaryColor group transition-colors'
                      aria-label={`Visit our ${name} page`}
                    >
                      <Icon size={18} className='w-3 h-3 text-primaryColor group-hover:text-white' />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className='footer-menu'>
                <iframe
                  src={SITE_CONFIG.GOOGLE_MAP_IFRAME}
                  width='100%'
                  height='300'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title='Google Map Location for the hosptial'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <FooterCopyright />
      </footer>

      {/* Mobile Bottom Bar */}
      <div className='fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden'>
        <div className='flex justify-around items-center py-2'>
          <Link href='/' className='flex flex-col items-center text-gray-600 hover:text-primaryColor'>
            <Home size={24} />
            <span className='text-xs'>Home</span>
          </Link>
          <a
            href={`tel:${SITE_CONFIG.CONTACT.phone[0].replace(/[^0-9+]/g, '')}`}
            className='flex flex-col items-center text-gray-600 hover:text-primaryColor'
          >
            <Phone size={24} />
            <span className='text-xs'>Call</span>
          </a>
          <a
            href={`https://wa.me/${SITE_CONFIG.CONTACT.phone[0].replace(/[^0-9+]/g, '')}`}
            className='flex flex-col items-center text-gray-600 hover:text-primaryColor'
          >
            <FaWhatsapp size={24} />
            <span className='text-xs'>WhatsApp</span>
          </a>
          <a href='https://tawk.to/' className='flex flex-col items-center text-gray-600 hover:text-primaryColor'>
            <MessageCircle size={24} />
            <span className='text-xs'>Chat</span>
          </a>
        </div>
      </div>

      {/* Fixed Bottom Bar for larger screens */}
      <div className='fixed bottom-4 right-4 hidden md:flex flex-col gap-2'>
        <a
          href={`tel:${SITE_CONFIG.CONTACT.phone[0].replace(/[^0-9+]/g, '')}`}
          className='bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-300'
        >
          <Phone size={24} />
        </a>
        <a
          href={`https://wa.me/${SITE_CONFIG.CONTACT.phone[0].replace(/[^0-9+]/g, '')}`}
          className='bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors duration-300'
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </>
  );
};

export const FooterCopyright = () => (
  <div className='bg-primaryColor-800 py-4 flex flex-col items-center max-md:pb-20 text-center'>
    <div className='text-center text-sm text-gray-400'>Copyright © DrBinduGarg.com 2019 - {new Date().getFullYear()}</div>
    <div className='text-sm text-gray-400  py-2'>
      Designed and developed by{' '}
      <a href='http://www.cyberbizztechnologies.com' className='text-white'>
        Cyberbizz Technologies
      </a>
    </div>
  </div>
);

export default Footer;
