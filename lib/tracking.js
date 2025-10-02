// lib/tracking.js
export function track(event, payload = {}) {
  try {
    // GA4
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', event, payload);
    }
    // Plausible
    if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
      window.plausible(event, { props: payload });
    }
    // dataLayer (GTM)
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event, ...payload });
    }
    // Beacon fallback (no-op endpoint)
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify({ event, payload, ts: Date.now() })], { type: 'application/json' });
      navigator.sendBeacon('/api/track', blob);
    }
  } catch (e) {
    // ignore
  }
}
