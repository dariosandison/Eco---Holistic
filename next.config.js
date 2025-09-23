// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Hide console.* in production to reduce JS size
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "**" }, // safe default for affiliate images
    ],
  },
  async headers() {
    return [
      // Long-cache static assets
      {
        source:
          "/:all*(css|js|json|ico|svg|jpg|jpeg|png|webp|avif|gif|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Security headers for all pages
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value:
              "geolocation=(), microphone=(), camera=(), payment=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
  // Use static export if you ever switch to static-only:
  // output: 'export',
};

export default nextConfig;
