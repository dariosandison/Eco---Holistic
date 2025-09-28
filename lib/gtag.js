// lib/gtag.js
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'YOUR_GA4_ID';

export function pageview(url) {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;
  window.gtag?.('config', GA_MEASUREMENT_ID, { page_path: url });
}

export function event({ action, category, label, value }) {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;
  const send = () => {
    window.gtag?.('event', action, {
      event_category: category,
      event_label: label,
      value
    });
  };
  if ('requestIdleCallback' in window) {
    requestIdleCallback(send, { timeout: 500 });
  } else {
    setTimeout(send, 0);
  }
}
