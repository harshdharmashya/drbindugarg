export interface DynamicMetaDataParams {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  ogUrl: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterCard: string;
  twitterImage: string;
}

import { JSDOM } from 'jsdom';

export function parseMetaData(metaHtml: string): DynamicMetaDataParams {
  const dom = new JSDOM(metaHtml);
  const document = dom.window.document;

  return {
    title: document.querySelector('title')?.textContent || '',
    description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
    keywords: document.querySelector('meta[name="keywords"]')?.getAttribute('content') || '',
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
    ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '',
    ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '',
    ogType: document.querySelector('meta[property="og:type"]')?.getAttribute('content') || '',
    ogUrl: document.querySelector('meta[property="og:url"]')?.getAttribute('content') || '',
    ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '',
    twitterTitle: document.querySelector('meta[name="twitter:title"]')?.getAttribute('content') || '',
    twitterDescription: document.querySelector('meta[name="twitter:description"]')?.getAttribute('content') || '',
    twitterCard: document.querySelector('meta[name="twitter:card"]')?.getAttribute('content') || '',
    twitterImage: document.querySelector('meta[name="twitter:image"]')?.getAttribute('content') || '',
  };
}
