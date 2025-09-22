// /src/lib/gtag.js

// Hard-coded GA4 ID so you don't have to touch env files.
export const GA_MEASUREMENT_ID = 'G-0G3ER4B1RE';

export function pageview(url) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'page_view', {
    page_location: window.location.href,
    page_path: url,
    page_title: document.title,
    send_to: GA_MEASUREMENT_ID,
  });
}

export function event(action, params = {}) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', action, { send_to: GA_MEASUREMENT_ID, ...params });
}
