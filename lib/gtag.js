// lib/gtag.js
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const pageview = (url) => {
  if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_ID, { page_path: url });
};
