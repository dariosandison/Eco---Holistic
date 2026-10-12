import { track } from '@vercel/analytics'

const VERCEL_EVENT_KEYS = new Set([
  'catalogue',
  'category',
  'clickref',
  'component',
  'destination',
  'group',
  'interest',
  'kind',
  'label',
  'merchant',
  'page_path',
  'percent',
  'placement',
  'product_id',
  'result_count',
  'slug',
  'tool',
  'topic',
  'tracking_context',
])

function vercelEventData(data) {
  return Object.fromEntries(
    Object.entries(data)
      .filter(([key, value]) => VERCEL_EVENT_KEYS.has(key) && ['string', 'number', 'boolean'].includes(typeof value))
      .map(([key, value]) => [key, typeof value === 'string' ? value.slice(0, 255) : value])
  )
}

export function trackEvent(name, data = {}) {
  if (typeof window === 'undefined') return
  track(name, vercelEventData(data))
  if (window.gtag) window.gtag('event', name, data)
  if (window.plausible) window.plausible(name, { props: data })
}

export function trackAffiliateClick({ href = '', label = '', merchant = '', ...context } = {}) {
  trackEvent('affiliate_click', { href, label, merchant, ...context })
}
