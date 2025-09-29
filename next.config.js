/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // ❌ remove: output: 'export'
  // If you previously had images.unoptimized: true, remove it to re-enable Image Optimization.
  // images: { unoptimized: false },
};

module.exports = nextConfig;
