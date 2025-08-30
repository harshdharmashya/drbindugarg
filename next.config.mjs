/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.drbindugarg.com',
        protocol: 'https',
      },
      {
        hostname: 'drbindugarg.com',
        protocol: 'https',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/my-blog-detail/ivf-myths-vs-facts-debunking-common-misconceptions.',
        destination: '/blog/ivf-myths-vs-facts-debunking-common-misconceptions',
        permanent: true,
      },
      {
        source: '/my-blog-detail/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
