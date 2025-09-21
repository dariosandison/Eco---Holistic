/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true }, // fine for static export + PNGs
  output: 'export',
  trailingSlash: false
};

module.exports = nextConfig;
