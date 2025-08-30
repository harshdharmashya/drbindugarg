import SITE_CONFIG from '@/constants/SITE_CONFIG';
import { preparePhoneNumberLinkWithTel } from '@/lib/utils';
import { Phone, MapPin, Mail } from 'lucide-react';

interface IContactCardItem {
  icon: JSX.Element;
  title: string;
  details: string[];
  type: 'call' | 'email' | 'address';
}

const ContactCard = ({ item }: { item: IContactCardItem }) => {
  const { icon, title, details, type } = item;

  return (
    <div className='bg-white p-10 rounded-2xl shadow-2xl hover:shadow-lg transition-shadow duration-300 relative'>
      <div className='bg-primaryColor-100 rounded-full size-20 flex items-center justify-center text-primaryColor'>{icon}</div>
      <h3 className='text-xl font-bold mt-3 mb-2'>{title}</h3>
      {details.map((detail, i) => (
        <p key={i} className='text-gray-600'>
          {type === 'call' ? (
            <a href={preparePhoneNumberLinkWithTel(detail)} className='text-base text-gray-600 hover:underline hover:text-primaryColor'>
              {detail}
            </a>
          ) : type === 'email' ? (
            <a href={`mailto:${detail}`} className='text-base text-gray-600 hover:underline hover:text-primaryColor'>
              {detail}
            </a>
          ) : (
            <span className='text-base text-gray-600'>{detail}</span>
          )}
        </p>
      ))}
    </div>
  );
};

const contactData: IContactCardItem[] = [
  {
    icon: <Phone size={30} strokeWidth={1.5} />,
    title: 'Call Now',
    details: SITE_CONFIG.CONTACT.phone,
    type: 'call',
  },
  {
    icon: <MapPin size={30} strokeWidth={1.5} />,
    title: 'Location',
    details: [SITE_CONFIG.ADDRESS.line1, `${SITE_CONFIG.ADDRESS.line2}, ${SITE_CONFIG.ADDRESS.line3}`],
    type: 'address',
  },
  {
    icon: <Mail size={30} strokeWidth={1.5} />,
    title: 'Email Now',
    details: [SITE_CONFIG.CONTACT.email],
    type: 'email',
  },
];

const ContactCards = () => {
  return (
    <section className='relative overflow-hidden bg-gray-50'>
      <div className='max-container padding-container-sm'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {contactData.map((item, index) => (
            <ContactCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
