/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // replaces `next export`
  images: { unoptimized: true }, // allow images with static export
  trailingSlash: false
};

module.exports = nextConfig;
