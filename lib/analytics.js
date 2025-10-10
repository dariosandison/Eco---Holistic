// lib/analytics.js
export function trackAffiliateClick({ href, text, asin }) {
  if (typeof window === 'undefined') return
  if (!window.gtag) return
  window.gtag('event', 'affiliate_click', {
    event_category: 'affiliate',
    event_label: href,
    value: 1,
    text,
    asin,
  })
}
