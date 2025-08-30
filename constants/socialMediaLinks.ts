import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

import SITE_CONFIG from './SITE_CONFIG';

export const socialMediaLinks = [
  { icon: FaFacebook, url: SITE_CONFIG.SOCIAL_MEDIA.facebook, name: 'Facebook' },
  { icon: FaInstagram, url: SITE_CONFIG.SOCIAL_MEDIA.instagram, name: 'Instagram' },
  { icon: FaYoutube, url: SITE_CONFIG.SOCIAL_MEDIA.youtube, name: 'Youtube' },
  { icon: FaLinkedin, url: SITE_CONFIG.SOCIAL_MEDIA.linkedin, name: 'LinkedIn' },
  { icon: FaTwitter, url: SITE_CONFIG.SOCIAL_MEDIA.twitter, name: 'Twitter' },
];
