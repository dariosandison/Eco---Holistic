/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // IMPORTANT: Do NOT set `output: 'export'`. This keeps ISR working on Vercel.
  // If you previously had it, this replacement removes it.

  // Safe, permissive image config so external images continue working.
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },
};

module.exports = nextConfig;
