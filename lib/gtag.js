// lib/gtag.js
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export const pageview = (url) => {
  if (!GA_ID || typeof window === 'undefined') return;
  window.gtag('config', GA_ID, { page_path: url });
};

export const event = ({ action, category, label, value }) => {
  if (!GA_ID || typeof window === 'undefined') return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value
  });
};

export const webVitals = (metric) => {
  if (!GA_ID || typeof window === 'undefined') return;
  const { name, id, label, value } = metric;
  window.gtag('event', name, {
    event_category: label === 'web-vitals' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    event_label: id,
    non_interaction: true
  });
};
