/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // We’re shipping a fully static site (compatible with your export flow)
  output: 'export',

  // Use the raw <img> output for next/image so we don’t need remote loaders/domains
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
