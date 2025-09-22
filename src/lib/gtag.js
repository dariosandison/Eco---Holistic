// src/lib/gtag.js
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-0G3ER4B1RE";

export function gtag(event, params = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, params);
}
