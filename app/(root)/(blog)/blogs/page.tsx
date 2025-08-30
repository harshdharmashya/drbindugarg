import { Breadcrumb } from '@/components/misc';
import BlogsSection from './BlogsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IVF And Fertility Blogs - Dr. Bindu Garg',
  description: 'Discover insightful IVF and fertility blogs by Dr. Bindu Garg to guide your fertility journey.',
  keywords: 'IVF Blog, Fertility Blog, IUI Blog, Male Fertility Blog, Female Fertility Blog, artificial insemination blog',
  alternates: {
    canonical: 'https://www.drbindugarg.com/blogs',
  },
  openGraph: {
    title: 'IVF And Fertility Blogs - Dr. Bindu Garg',
    description: 'Discover insightful IVF and fertility blogs by Dr. Bindu Garg to guide your fertility journey.',
    type: 'website',
    url: 'https://www.drbindugarg.com/blogs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IVF And Fertility Blogs - Dr. Bindu Garg',
    description: 'Discover insightful IVF and fertility blogs by Dr. Bindu Garg to guide your fertility journey.',
  },
};

interface IBlogPageParams {
  searchParams: {
    page: string;
  };
}

const BlogsPage = ({ searchParams }: IBlogPageParams) => {
  const page = +searchParams.page || 1;

  return (
    <>
      <Breadcrumb title='Our Blogs' enableH1 />
      <BlogsSection page={page} />
    </>
  );
};

export default BlogsPage;
