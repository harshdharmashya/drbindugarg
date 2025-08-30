'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const GTMEventTracker: React.FC = () => {
  useEffect(() => {
    const handlePhoneClick = () => {
      window.gtag('event', 'conversion', {
        send_to: 'AW-10807861975/wtxKCLyAqIMYENfFy6Eo',
      });
    };

    const handleWhatsAppClick = () => {
      window.gtag('event', 'conversion', {
        send_to: 'AW-10807861975/7kEwCLqgqIMYENfFy6Eo',
      });
    };

    document.body.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link?.href) {
        if (link.href.includes('tel:')) {
          handlePhoneClick();
        } else if (link.href.includes('wa.me')) {
          handleWhatsAppClick();
        }
      }
    });

    return () => {
      document.body.removeEventListener('click', handlePhoneClick);
      document.body.removeEventListener('click', handleWhatsAppClick);
    };
  }, []);

  return null;
};

export default GTMEventTracker;
