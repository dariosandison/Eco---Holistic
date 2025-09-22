// /src/site.config.js
export const SITE = {
  name: "Wild & Well",
  domain: "www.wild-and-well.store",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.wild-and-well.store",
  logo: "/logo.png", // put a real logo in /public/logo.png if you have one
  twitterHandle: "@wildandwell", // optional; leave as-is if you don't use Twitter
  defaultImage: "/og-default.jpg", // put a 1200x630 image in /public/og-default.jpg (optional)
  gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-0G3ER4B1RE",
};
