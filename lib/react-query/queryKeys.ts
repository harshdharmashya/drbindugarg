export const ENQUIRIES_QUERY_KEYS = {
  ENQUIRIES: 'enquiries',
} as const;

export const OTHER_QUERY_KEYS = {
  USERS: 'users',
  user: 'user',
  GALLERIES: 'galleries',
  GALLERY_CATEGORIES: 'gallery-categories',
  GALLERY_TAGS: 'gallery-tags',
} as const;

export const BLOGS_QUERY_KEYS = {
  AUTHORS: 'authors',
  TAGS: 'tags',
  CATEGORIES: 'categories',
  SUBCATEGORIES: 'subcategories',
  BLOGS: 'blogs',
} as const;

export type QueryKey = keyof typeof ENQUIRIES_QUERY_KEYS | keyof typeof OTHER_QUERY_KEYS | keyof typeof BLOGS_QUERY_KEYS;
