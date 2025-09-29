// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // We are NOT using "output: 'export'".
  // Keeping it disabled allows ISR/SSR pages to build on Vercel.
  // output: 'export',

  trailingSlash: false,

  images: {
    // We’re using <img> inside MDX, so no external domains needed.
    // If you decide to switch to next/image for MDX, add domains here.
    unoptimized: true,
  },
};

module.exports = nextConfig;
