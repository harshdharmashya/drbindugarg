import React from 'react';
import { GraduationCap, Award, Building2, Users } from 'lucide-react';

const educationData = [
  {
    icon: GraduationCap,
    title: 'MBBS',
    institute: 'Lady Hardinge Medical College, Delhi University',
  },
  {
    icon: Award,
    title: 'MD (Obs-Gynae)',
    institute: 'Maulana Azad Medical College, Delhi University',
  },
  {
    icon: Building2,
    title: 'Post Graduate in Reproductive Science',
    institute: 'Monash University, Australia',
  },
  {
    icon: Users,
    title: 'Training in Human Reproductive Science',
    institute: 'Cleveland University, USA',
  },
];

const experienceData = [
  {
    icon: GraduationCap,
    title: 'Director & Founder - Neelkanth Group Of IVF Hospitals',
    description:
      'In 1991, Bindu Garg and Himanshu Garg founded Neelkanth IVF and Infertility Hospital with the aim of helping couples who are unable to conceive.',
  },
  {
    icon: Award,
    title: 'Director & Founder - World IVF & Infertility Centre, Delhi',
    description:
      'Dr. Bindu Garg founded the World IVF and Infertility Center in Delhi in 2016 to help infertile couples around the world turn their dream of becoming parents into reality.',
  },
  {
    icon: Building2,
    title: 'Expanded The Branches Of Neelkanth Group Of IVF Hospitals in Faridabad, Patna & Srinagar',
    description:
      'To fulfill the dream of becoming parents to childless couples in different locations, they have opened branches of Neelkanth Infertility and IVF Center in Patna, Faridabad, and Srinagar.',
  },
];

const OurExpertise2 = () => {
  return (
    <section id='our-expertise2' className='relative overflow-hidden'>
      <div className='max-container padding-container-sm'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          {/* single-column */}
          <div className='lg:col-span-7'>
            <p className='section-subtitle mb-2'>Our Expertise</p>
            <h2 className='section-title mb-4'>
              Career Path of <span className='text-primaryColor'>Dr. Bindu Garg</span>
            </h2>
            <p className='section-desc mb-8'>
              Dr. Bindu Garg has achieved her destination through her dedication, hard work, knowledge, and experience. Currently, she is recognized
              as the best IVF specialist not only in Gurgaon but all over India. Her success path tells her success story from an MBBS doctor to the
              director of Neelkanth Groups Of Hospitals located in many cities in India. As a person she is kind, knows a lot, and always trying to do
              better, making her a top IVF expert in helping people with fertility problems. As a doctor, she is courteous and always devoted to her
              work and helps her patients with the best possible treatment at a very affordable cost.
            </p>
            {/* cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {educationData.map((item, index) => (
                <div key={index} className='flex gap-6 pb-4 border-b border-gray-200'>
                  <div className='h-12 w-12 bg-primaryColor-50 flex items-center justify-center flex-shrink-0'>
                    <item.icon className='w-6 h-6 text-primaryColor' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold mb-1'>{item.title}</h3>
                    <p>{item.institute}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* single-column */}
          <div className='lg:col-span-5'>
            <div className='flex flex-col gap-4'>
              {experienceData.map((item, index) => (
                <div key={index} className='bg-white p-6 rounded-2xl flex gap-4 shadow-xl border-t-2 border-primaryColor'>
                  <div className='size-7 rounded-full bg-primaryColor-50 flex items-center justify-center text-primaryColor-600 flex-shrink-0'>
                    <item.icon className='w-4 h-4' />
                  </div>
                  <div>
                    <h3 className='text-base font-bold mb-2'>{item.title}</h3>
                    <p className='text-gray-700'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise2;
