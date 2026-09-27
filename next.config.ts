import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cloud.appwrite.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/aboutus.html",
        destination: "/aboutus",
        permanent: true, // 301 Redirect
      },
      {
        source: "/Blog/blog.html",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog.html",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/services.html",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;