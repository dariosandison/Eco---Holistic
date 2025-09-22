// Lightweight Google Analytics (GA4) helpers used by _app.js

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Log a pageview
export const pageview = (url) => {
  if (!GA_ID) return;
  if (typeof window === "undefined") return;
  window.gtag?.("config", GA_ID, { page_path: url });
};

// Log a custom event
// Usage: event({ action: 'click', category: 'nav', label: 'logo', value: 1 })
export const event = ({ action, category, label, value }) => {
  if (!GA_ID) return;
  if (typeof window === "undefined") return;
  window.gtag?.("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
