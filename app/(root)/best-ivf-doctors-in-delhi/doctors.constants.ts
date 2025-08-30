import { Doctor } from './DoctorCard';

export const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Bindu Garg',
    image: '/images/doctors-img/dr-bindu-garg.webp',
    specialization: 'IVF Specialist',
    experience: '42+',
    qualification: [
      'MBBS, MD (Obs-Gynae)', 'Post Graduate in Reproductive Science',' Training in Human Reproductive Science'
    ],
    clinic: {
      name: 'Neelkanth Hospital',
      location: 'Gurgaon',
    },
    availability: {
      today: true,
      time: [
        '11:00 AM – 1:00 PM ', '4:00 PM – 6:00 PM'
      ],
    },
    fees: {
      clinic: '1000',
    },
    href:{
      url:'/book-appointment'
    },
    ratings: {
      score: 4.9,
    },
    description:
      'Dr. Bindu Garg is one of the most renowned fertility specialists. She has been honored as the first IVF doctor to deliver the first IVF baby in Gurgaon in 2003. With 42+ years of expertise and over 20,000 successful deliveries, she has received the prestigious Haryana Ratan Award.',
  },
  {
    id: 2,
    name: 'Dr. Kavita Manchanda',
    image: '/images/doctors-img/dr-kavita-manchanda.webp',
    specialization: 'IVF Consultant',
    experience: '10+',
    qualification: [
      'MBBS, MS (OBG), DBN (OBG)',' FNB (Reproductive Medicine)'
    ],
    clinic: {
      name: 'World Infertility & IVF Centre',
      location: 'Delhi',
    },
    availability: {
      today: false,
      time: [
       ' 9:00 AM – 6:00 PM'
      ],
    },
    fees: {
      clinic: '1000',
    },
    href:{
      url:'/book-appointment'
    },
    ratings: {
      score: 4.7,
    },
    description:
      'Dr. Kavita Manchanda is a dedicated fertility consultant with over 10 years of experience in reproductive medicine. Her expertise includes advanced fertility treatments and personalized care for couples facing infertility challenges.',
  },
  {
    id: 3,
    name: ' Dr. Swati Kanawa',
    image: '/images/doctors-img/dr-swati-kanawa.webp',
    specialization: 'IVF Specialist',
    experience: '20 ',
    qualification: [
      'MS - Obstetrics & Gynaecology', 'MBBS'
    ],
    clinic: {
      name: 'Neelkanth Hospital',
      location: 'Gurgaon',
    },
    availability: {
      today: true,
      time: [
        '11:00 AM – 4:00 PM'
      ],
    },
    fees: {
      clinic: '1000',
    },
    href:{
      url:'/book-appointment'
    },
    ratings: {
      score: 4.8,
    },
    description:
      'Dr. Swati Kanava is an experienced obstetrician, gynecologist and infertility specialist. She has expertise in laparoscopic surgery and provides fertility solutions to her patients.',
  },
  {
    id: 4,
    name: 'Dr. Ashita Punjabi',
    image: '/images/doctors-img/dr-anita-punjabi.webp',
    specialization: 'IVF Consultant',
    experience: '10+',
    qualification: [
      'MBBS, MD (OBST. & Gynae.)'
    ],
    clinic: {
      name: 'Neelkanth Hospital ',
      location: 'Faridabad',
    },
    availability: {
      today: true,
      time: [
        '9:30 AM – 5:30 PM'
      ],
    },
    fees: {
      clinic: '1000',
    },
    href:{
      url:'/book-appointment'
    },
    ratings: {
      score: 4.7,
    },
    description:
      'Dr. Ashita Punjabi is best doctor for ivf in delhi with vast experience in reproductive medicine. She specializes in providing personalized treatment to help couples fulfill their dream of becoming parents.',
  },
  {
    id: 5,
    name: 'Dr. Sonali Gupta',
    image: '/images/doctors-img/dr-sonali.webp',
    specialization: 'Fertility Expert',
    experience: '10+',
    qualification: [
      'MBBS, MS, Diploma in IVF ','Diploma in  Reproductive Medicine', 'Fellowship in Gynecological ','Hysteroscopy & Laparoscopy'
    ],
    clinic: {
      name: 'Neelkanth Hospital',
      location: 'Patna',
    },
    availability: {
      today: false,
      time: [
        '10:00 AM - 6:00 PM'
      ],
    },
    fees: {
      clinic: '1000',
    },
    href:{
      url:'/book-appointment'
    },
    ratings: {
      score: 4.7,
    },
    description:
      "Dr. Sonali Gupta is a renowned fertility expert known for her comprehensive approach to IVF and reproductive treatments. With numerous international fellowships and accolades, she specializes in advanced IVF techniques and laparoscopic procedures.",
  },
  {
    id: 6,
    name: ' Dr. Tasleem',
    image: '/images/doctors-img/dr-tasleem-2.webp',
    specialization: 'IVF Consultant ',
    experience: '6',
    qualification: [
      'IVF Consultation'
    ],
    clinic: {
      name: 'Neelkanth Hospital',
      location: 'Srinagar',
    },
    availability: {
      today: true,
      time: [
        '10:00 AM - 5:00 PM'
      ],
    },
    fees: {
      clinic: '1000',
    },
    href:{
      url:'/book-appointment'
    },
    ratings: {
      score: 4.7,
    },
    description:
      'Dr. Tasleem is an experienced IVF counselor and consultant providing personalized care and guidance to patients undergoing fertility treatments. Her empathetic approach ensures a comfortable experience for patients navigating their IVF journey.',
  },
];
