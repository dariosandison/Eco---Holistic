/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Keep this if you’re using external images without a loader/domains setup
  images: { unoptimized: true }
};

module.exports = nextConfig;
