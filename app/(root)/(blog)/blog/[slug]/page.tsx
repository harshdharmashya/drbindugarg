import { Metadata } from 'next';
import { getBlogBySlug } from '@/server/actions/blog.actions';
import { notFound } from 'next/navigation';
import { CalendarIcon, UserIcon, TagIcon } from 'lucide-react';
import { ImageWithPrefix } from '@/components/misc';
import { cache } from 'react';
import SITE_CONFIG from '@/constants/SITE_CONFIG';
import { parseMetaData } from '@/lib/validations/seo';
import { BlogDocumentPopulated } from '@/server/models/blog.model';
import { IAPIResponse } from '@/types/dashboard';
import { formatDateTime } from '@/lib/utils';

export type OpenGraphTypes =
  | 'article'
  | 'book'
  | 'music.song'
  | 'music.album'
  | 'music.playlist'
  | 'music.radio_station'
  | 'profile'
  | 'website'
  | 'video.tv_show'
  | 'video.other'
  | 'video.movie'
  | 'video.episode';

interface PageProps {
  params: { slug: string };
}

const fetchBlogBySlug = cache(async (slug: string) => {
  return (await getBlogBySlug(slug, { displayInactiveBlogsForStaffs: true })) as IAPIResponse<{ blog: BlogDocumentPopulated }>;
});

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const result = await fetchBlogBySlug(params.slug);
  const blog = result.data?.blog;

  if (!result.success || !blog) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const blogMeta = blog.seo?.meta || '';
  const blogOg = blog.seo?.og || '';
  const payload = blogMeta + blogOg;

  const parsedMeta = parseMetaData(payload);

  return {
    title: parsedMeta.title || blog.title,
    description: parsedMeta.description || '',
    keywords: parsedMeta.keywords || '',
    alternates: {
      canonical: parsedMeta.canonical || `${SITE_CONFIG.URL}/blog/${blog.slug}`,
    },
    openGraph: {
      title: parsedMeta.ogTitle || blog.title || '',
      description: parsedMeta.ogDescription || '',
      images: parsedMeta.ogImage ? [new URL(parsedMeta.ogImage)] : [],
      locale: 'en_US',
      type: (parsedMeta.ogType as OpenGraphTypes) || 'website',
      url: parsedMeta.ogUrl ? new URL(parsedMeta.ogUrl) : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: parsedMeta.twitterTitle || blog.title,
      description: parsedMeta.twitterDescription || '',
      images: parsedMeta.twitterImage ? [parsedMeta.twitterImage] : [],
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const result = await fetchBlogBySlug(params.slug);
  const blog = result.data?.blog;

  if (!result.success || !blog) {
    notFound();
  }

  const headCode = blog.seo?.head || '';
  const bodyCode = blog.seo?.body || '';
  const footerCode = blog.seo?.footer || '';

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: headCode }} />
      <div dangerouslySetInnerHTML={{ __html: bodyCode }} />
      <article className='max-w-full'>
        {blog.thumbnail && (
          <div className='mb-8'>
            <ImageWithPrefix
              width={880}
              height={520}
              src={blog.thumbnail}
              alt={blog.thumbnail_alt || blog.title}
              className='rounded-lg object-contain max-w-full h-auto'
            />
          </div>
        )}

        <h1 className='text-4xl font-bold text-gray-900 mb-4'>{blog.title}</h1>

        <div className='flex flex-wrap items-center text-sm text-gray-600 mb-4'>
          <div className='flex items-center mr-6 mb-2'>
            <CalendarIcon size={16} className='mr-2' />
            <time dateTime={(blog.publishedAt || blog.createdAt).toString()}>{formatDateTime(blog.publishedAt || blog.createdAt).date}</time>
          </div>
          <div className='flex items-center mb-2'>
            <TagIcon size={16} className='mr-2' />
            <span>{blog.category.name}</span>
            {blog.subcategory && <span>, {blog.subcategory.name}</span>}
          </div>
        </div>

        <div className='prose prose-md max-w-full mb-12' dangerouslySetInnerHTML={{ __html: blog.content }} />

        {blog.tags.length > 0 && (
          <div className='mt-8 capitalize'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>Tags</h2>
            <div className='flex flex-wrap gap-2'>
              {blog.tags.map((tag) => (
                <span key={tag.id} className='bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm'>
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className='rounded-lg p-4 border capitalize'>
          <h2 className='text-lg font-semibold mb-2'>Content Created By:</h2>
          <div className='flex items-center gap-4'>
            <ImageWithPrefix height={64} width={64} src={blog.author.imgUrl} alt={blog.author.name} className='rounded-full object-cover' />
            <div>
              <h3 className='font-semibold text-base'>
                {blog.author.link ? (
                  <a href={blog.author.link} target='_blank' rel='noopener noreferrer' className='hover:text-primaryColor transition-colors'>
                    {blog.author.name}
                  </a>
                ) : (
                  blog.author.name
                )}
              </h3>
              <p className='text-gray-600 text-sm'>{blog.author.designation}</p>
            </div>
          </div>
        </div>
      </article>
      <div dangerouslySetInnerHTML={{ __html: footerCode }} />
    </>
  );
}
