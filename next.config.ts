import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
      {
        protocol: 'https',
        hostname: "unsplash.com",
        port: '',
        pathname: '/photos/**',
      },
      {
        protocol: 'https',
        hostname: "cdn.sanity.io",
        port: '',
        pathname: '/images/**',
      },
    ]
  }
};

export default nextConfig;
