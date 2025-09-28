/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Easiest way to ensure all guide/blog images render without remote config headaches
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
