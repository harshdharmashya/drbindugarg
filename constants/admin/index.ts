import { LuClipboardList, LuNewspaper, LuFolderOpen, LuTag, LuUserCircle, LuImage, LuLogOut } from 'react-icons/lu';
import SITE_CONFIG from '../SITE_CONFIG';

export const ADMIN_DASHBOARD_DIR = 'dashboard';
export const CRM_API_URL = process.env.CRM_API_URL;

export const UPLOAD_BASE_URL = SITE_CONFIG.URL + 'uploads';

type FileSizeKey = 'ONE_MB' | 'TWO_MB' | 'THREE_MB' | 'FOUR_MB' | 'FIVE_MB' | 'TEN_MB' | 'TWENTY_MB' | 'THIRTY_MB';

export const MAX_FILE_SIZE_BYTES: Record<FileSizeKey, number> = {
  ONE_MB: 1 * 1024 * 1024, // 1 MB in bytes
  TWO_MB: 2 * 1024 * 1024, // 2 MB in bytes
  THREE_MB: 3 * 1024 * 1024, // 3 MB in bytes
  FOUR_MB: 4 * 1024 * 1024, // 4 MB in bytes
  FIVE_MB: 5 * 1024 * 1024, // 5 MB in bytes
  TEN_MB: 10 * 1024 * 1024, // 10 MB in bytes
  TWENTY_MB: 20 * 1024 * 1024, // 20 MB in bytes
  THIRTY_MB: 30 * 1024 * 1024, // 30 MB in bytes
};

export const ACCEPTED_IMAGE_TYPES = ['image/*'];

export const sidebarLinks = [
  // {
  //   id: 'enquiries',
  //   label: 'Enquiries',
  //   links: [{ title: 'Leads', href: '/enquiries/leads', icon: LuClipboardList }],
  // },
  {
    id: 'blogs',
    label: 'Blogs',
    links: [
      { title: 'Manage Blogs', href: '/blogs', icon: LuNewspaper },
      { title: 'Categories', href: '/blogs/categories', icon: LuFolderOpen },
      { title: 'Tags', href: '/blogs/tags', icon: LuTag },
      { title: 'Authors', href: '/blogs/authors', icon: LuUserCircle },
    ],
  },
  {
    id: 'gallery',
    label: 'Gallery',
    links: [
      { title: 'Gallery', href: '/gallery', icon: LuImage },
      { title: 'Gallery Tags', href: '/gallery-tags', icon: LuTag },
    ],
  },
  {
    id: 'logout',
    label: 'Logout',
    links: [{ title: 'Logout', href: '/logout', icon: LuLogOut }],
  },
];

export const filterTypeMaps = {
  select: {
    key: 'select',
    label: 'Select',
  },
  input: {
    key: 'input',
    label: 'Input',
  },
  dateRange: {
    key: 'dateRange',
    length: 'Date Range',
  },
  multiSelect: {
    key: 'multiSelect',
    label: 'Multi Select',
  },
};

export type FilterTypeKey = keyof typeof filterTypeMaps;

export const regexMap = {
  phone: {
    errorMessage: 'Phone number must be between 10 and 20 digits and optionally start with +',
    pattern: /^\+?\d{10,20}$/,
  },
  email: {
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    errorMessage: 'Please enter a valid email address',
  },
};

export const galleryTypeMap = {
  image: {
    key: 'image',
    label: 'Image',
  },
  video: {
    key: 'video',
    label: 'Video',
  },
  youtube: {
    key: 'youtube',
    label: 'Youtube',
  },
  instagram: {
    key: 'instagram',
    label: 'Instagram',
  },
};

export type GalleryTypeKey = keyof typeof galleryTypeMap;

export const galleryItemSizeMap = {
  vertical: {
    key: 'vertical',
    label: 'Vertical',
  },
  square: {
    key: 'square',
    label: 'Square',
  },
};

export type GalleryItemSizeKey = keyof typeof galleryItemSizeMap;
