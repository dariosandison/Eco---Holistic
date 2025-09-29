// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Do NOT set `output: 'export'` — ISR and static HTML export are incompatible.
  trailingSlash: false,
  reactStrictMode: true,
  images: {
    // Keep this as-is; you can switch to optimized images later if you want.
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
