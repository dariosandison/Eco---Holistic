import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // You’re deploying static pages on Vercel, so keep this:
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  // 👇 Explicit alias so "@/..." always points to project root (works on Vercel)
  webpack: (config) => {
    config.resolve.alias["@"] = __dirname;
    return config;
  },
};

export default nextConfig;
