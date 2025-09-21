// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tell Next to output a fully static site (replaces `next export`)
  output: 'export',

  // If any page uses `next/image`, this makes images work in static export
  images: { unoptimized: true },

  reactStrictMode: true,
  trailingSlash: false,
};

module.exports = nextConfig;
