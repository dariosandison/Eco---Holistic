/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  images: {
    // for static export
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: '**' }]
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
};
export default config;
