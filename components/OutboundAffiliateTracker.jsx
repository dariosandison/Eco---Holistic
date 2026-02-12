'use client'

import { useEffect } from 'react'
import { trackAffiliateClick, trackEvent } from '@/lib/analytics'

function extractMerchantFromAwin(href) {
  try {
    const u = new URL(href)
    const ued = u.searchParams.get('ued')
    if (!ued) return 'awin'
    const dest = new URL(decodeURIComponent(ued))
    const host = (dest.hostname || '').replace(/^www[.]/, '')
    if (!host) return 'awin'
    return host.split('.')[0] || 'awin'
  } catch {
    return 'awin'
  }
}

function isExternalHttpLink(href) {
  return href.startsWith('http://') || href.startsWith('https://')
}

export default function OutboundAffiliateTracker() {
  useEffect(() => {
    const handler = (e) => {
      const a = e.target?.closest?.('a')
      if (!a) return

      const href = a.getAttribute('href') || ''
      if (!href) return

      if (href.startsWith('mailto:')) {
        try {
          trackEvent('mailto_click', { href })
        } catch {}
        return
      }

      // Track Awin affiliate links (used for non-Amazon merchants like ZeroWater).
      if (href.includes('awin1.com/cread.php')) {
        const label = (a.textContent || '').trim().slice(0, 120)
        const merchant = extractMerchantFromAwin(href)
        try {
          trackAffiliateClick({ href, label, merchant })
        } catch {}
        try {
          trackEvent('outbound_click', { href, host: merchant, label, kind: 'awin' })
        } catch {}
        return
      }

      // Track any external http(s) click (Amazon, brand sites, evidence links)
      if (isExternalHttpLink(href)) {
        try {
          const u = new URL(href)
          const destHost = (u.hostname || '').replace(/^www[.]/, '')
          const currentHost = (window.location.hostname || '').replace(/^www[.]/, '')
          if (destHost && destHost !== currentHost) {
            const label = (a.textContent || '').trim().slice(0, 120)
            trackEvent('outbound_click', { href, host: destHost, label, kind: 'external' })
          }
        } catch {}
      }
    }

    document.addEventListener('click', handler, { capture: true })
    return () => document.removeEventListener('click', handler, { capture: true })
  }, [])

  return null
}
