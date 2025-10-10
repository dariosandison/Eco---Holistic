/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: '**.images-amazon.com' },
      { protocol: 'https', hostname: 'images-na.ssl-images-amazon.com' },
      { protocol: 'https', hostname: '**.amazonaws.com' },
    ],
  },
};
module.exports = nextConfig;
