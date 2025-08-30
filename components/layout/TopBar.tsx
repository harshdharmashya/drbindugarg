import SITE_CONFIG from '@/constants/SITE_CONFIG';
import { FaClock, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';
import { socialMediaLinks } from '@/constants/socialMediaLinks';
import { preparePhoneNumberLinkWithTel } from '@/lib/utils';

const TopBar = () => {
  const contactLinks = [
    {
      href: preparePhoneNumberLinkWithTel(SITE_CONFIG.CONTACT.phone[0]),
      icon: FaPhoneAlt,
      text: SITE_CONFIG.CONTACT.phone[0],
    },
    {
      href: `mailto:${SITE_CONFIG.CONTACT.email}`,
      icon: FaEnvelope,
      text: SITE_CONFIG.CONTACT.email,
    },
  ];

  const timingInfo = {
    icon: FaClock,
    text: 'Mon-Sat 11:00 AM - 1:00 PM | 5:00 PM - 6:00 PM',
  };

  return (
    <div className='w-full bg-gray-50 py-3 hidden lg:block'>
      <div className='max-container flex justify-between items-center'>
        {/* Left Side - Contact Info */}
        <div className='flex items-center gap-6'>
          {contactLinks.map(({ href, icon: Icon, text }, index) => (
            <Link key={index} href={href} className='flex items-center gap-2 group'>
              <div className='bg-primaryColor-50 p-3 rounded-full group-hover:bg-primaryColor group-hover:text-white transition-colors'>
                <Icon className='w-3 h-3 text-primaryColor group-hover:text-white' />
              </div>
              <span className='text-sm text-gray-900 group-hover:text-primaryColor transition-colors'>{text}</span>
            </Link>
          ))}

          <div className='flex items-center gap-2'>
            <div className='bg-primaryColor-50 p-3 rounded-full group-hover:bg-primaryColor group-hover:text-white transition-colors'>
              <timingInfo.icon className='w-3 h-3 text-primaryColor' />
            </div>
            <span className='text-sm text-gray-900'>{timingInfo.text}</span>
          </div>
        </div>

        {/* Right Side - Social Media */}
        <div className='flex items-center gap-2'>
          {socialMediaLinks.map(({ icon: Icon, url, name }, index) => (
            <a
              key={index}
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={name}
              className='bg-primaryColor-50 p-3 rounded-full hover:bg-primaryColor group transition-colors'
            >
              <Icon size={18} strokeWidth={1.5} className='w-3 h-3 text-primaryColor group-hover:text-white' />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
