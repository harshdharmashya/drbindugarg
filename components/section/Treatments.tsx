import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

const services = [
  {
    icon: '/icons/ivf.webp',
    title: 'IVF (In Vitro Fertilization)',
    description:
      'In Vitro Fertilization (IVF) is an assisted reproductive technology where an egg and sperm are combined outside the body and then implanted in the uterus.',
    link: '/ivf-treatment-gurgaon',
    alt: 'ivf_icon',
  },
  {
    icon: '/icons/iui.webp',
    title: 'IUI (Intrauterine Insemination)',
    description: "Intrauterine insemination (IUI) is a fertility treatment where sperm is placed inside a woman's uterus to help her get pregnant.",
    link: '/iui-treatment-gurgaon',
    alt: 'iui_icon',
  },
  {
    icon: '/icons/icsi.webp',
    title: 'ICSI (Intracytoplasmic Sperm Injection)',
    description: 'Intracytoplasmic sperm injection (ICSI) is an assisted reproductive technique used to extend the fertilization stage in IVF.',
    link: '/icsi-treatment-gurgaon',
    alt: 'icsi_icon',
  },
  {
    icon: '/icons/laser-assisted-hatching.webp',
    title: 'Laser Assisted Hatching',
    description:
      'Laser-assisted hatching is a laboratory technique used during IVF to assist in the implantation of embryos into the lining of the uterus.',
    link: '/laser-assisted-hatching-treatment-gurgaon',
    alt: 'laser assisted hatching_icon',
  },
  {
    icon: '/icons/blastocyst.webp',
    title: 'Blastocyst Culture & Transfer',
    description:
      'Blastocyst culture and transfer is a process in IVF where embryos are cultured for a long period of time before being transferred to the uterus.',
    link: '/blastocyst-culture-transfer-treatment-gurgaon',
    alt: 'blastocyst_icon',
  },
  {
    icon: '/icons/fertility-workshop.webp',
    title: 'Fertility Workup',
    description:
      'Fertility workup is a basic test to find out the reasons for difficulty in conceiving. It helps identify issues, guiding your medical team in finding solutions to pregnancy challenges.',
    link: '/ferility-workup-gurgaon',
    alt: 'fertility workup_icon',
  },
];

const Treatments = () => {
  return (
    <section id='treatments' className='relative bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('/temp/services-bg.jpg')" }}>
      <div className='max-container padding-container-sm'>
        <div className='text-center mb-12'>
          <p className='section-subtitle mb-2'>Our Services</p>
          <h2 className='section-title'>Our Infertility Treatments</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, index) => (
            <div key={index} className='group relative'>
              <div className='relative bg-white rounded-lg rounded-br-[100px] p-6 text-center cursor-pointer transition-all duration-500 hover:bg-primaryColor-600'>
                <div className='absolute inset-0 bg-[url(/temp/services-card-shape.png)] bg-no-repeat bg-center bg-contain size-[90%] m-auto opacity-50' />
                <div className='relative z-10'>
                  <div className='border border-primaryColor-600 rounded-full p-1 inline-block'>
                    <div className='h-16 w-16 flex items-center justify-center rounded-full bg-primaryColor-50'>
                      <Image src={service.icon} alt={service.alt} width={40} height={40} className='object-contain' />
                    </div>
                  </div>
                  <h3 className='mt-4 text-xl font-bold text-primaryColor-950 group-hover:text-white transition-colors'>{service.title}</h3>
                  <p className='mt-2 text-gray-600 group-hover:text-primaryColor-50 transition-colors'>{service.description}</p>
                  <Link href={service.link} className='inline-flex items-center mt-4 text-primaryColor-600 group-hover:text-white transition-colors'>
                    <span>Read More</span>
                    <MoveRight className='w-4 h-4 ml-2' />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
