import { INavLinkItem } from '@/types';
import { Baby, FileText, Heart, Home } from 'lucide-react';

export const infertilityTreatments = [
  {
    name: 'IVF (In Vitro Fertilization)',
    href: '/ivf-treatment-gurgaon',
    icon: Baby,
    description: 'Advanced fertility treatment combining eggs and sperm in lab',
  },
  {
    name: 'IUI (Intrauterine Insemination)',
    href: '/iui-treatment-gurgaon',
    icon: Baby,
    description: 'Fertility procedure placing sperm directly in uterus',
  },
  {
    name: 'ICSI (Intracytoplasmic Sperm Injection)',
    href: '/icsi-treatment-gurgaon',
    icon: Baby,
    description: 'Direct injection of sperm into egg for fertilization',
  },
  {
    name: 'Laser Assisted Hatching',
    href: '/laser-assisted-hatching-treatment-gurgaon',
    icon: Baby,
    description: 'Laser technique to help embryo implantation',
  },
  {
    name: 'Blastocyst Culture & Transfer',
    href: '/blastocyst-culture-transfer-treatment-gurgaon',
    icon: Baby,
    description: 'Extended embryo culture for better selection',
  },
  {
    name: 'Fertility Workup',
    href: '/ferility-workup-gurgaon',
    icon: Baby,
    description: 'Comprehensive fertility testing and evaluation',
  },
];

export const navigationMenu: INavLinkItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
  },
  {
    name: 'About Us',
    href: '/about-us',
    icon: FileText,
  },
  {
    name: 'Obs-Gynae',
    href: '/best-gynecologist-obstetrician-in-gurgaon',
    icon: Heart,
  },
  {
    name: 'Infertility Treatments',
    icon: Baby,
    content: infertilityTreatments,
  },
  {
    name: 'Gallery',
    href: '/gallery',
    icon: FileText,
  },
];

const inHouseSitemapLinks = [{ href: '/', label: 'Home', icon: '🏠' }];

const generalSitemapLinks = [{ href: '/', label: 'Home', icon: '🏠' }];

export const sitemaplinks = [...generalSitemapLinks];

export const inHouseSitemapLinksMap = inHouseSitemapLinks.map((sitemaplink) => sitemaplink.href);
export const generalSitemapLinksMap = generalSitemapLinks.map((sitemaplink) => sitemaplink.href);
