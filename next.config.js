/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // IMPORTANT: allow ISR/SSR on Vercel (remove static export)
  // output: 'export', // ← delete the export mode

  // Keep images simple and safe regardless of remote domains
  images: {
    unoptimized: true,
  },

  // If you have .md or .mdx in /pages, keep these; harmless if unused
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
};

module.exports = nextConfig;
