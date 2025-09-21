/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // If you ever switch to next/image, keep this for static export friendliness
  images: { unoptimized: true },
  output: 'export', // enables static export the supported way
  trailingSlash: false
};

export default nextConfig;
