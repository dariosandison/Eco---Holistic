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

function extractClickref(href) {
  try {
    return new URL(href).searchParams.get('clickref') || ''
  } catch {
    return ''
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

      const pagePath = window.location.pathname || '/'
      const label = (a.textContent || '').trim().slice(0, 120)
      const affiliateContext = a.getAttribute('data-affiliate-context') || ''

      if (href.startsWith('mailto:')) {
        try {
          trackEvent('mailto_click', { href, page_path: pagePath })
        } catch {}
        return
      }

      if (href.includes('awin1.com/cread.php')) {
        const merchant = extractMerchantFromAwin(href)
        const clickref = extractClickref(href)
        try {
          trackAffiliateClick({ href, label, merchant, clickref, page_path: pagePath, affiliate_context: affiliateContext })
        } catch {}
        try {
          trackEvent('affiliate_click', {
            href,
            host: merchant,
            label,
            kind: 'awin',
            clickref,
            page_path: pagePath,
            affiliate_context: affiliateContext,
          })
        } catch {}
        try {
          trackEvent('outbound_click', {
            href,
            host: merchant,
            label,
            kind: 'awin',
            clickref,
            page_path: pagePath,
            affiliate_context: affiliateContext,
          })
        } catch {}
        return
      }

      if (isExternalHttpLink(href)) {
        try {
          const u = new URL(href)
          const destHost = (u.hostname || '').replace(/^www[.]/, '')
          const currentHost = (window.location.hostname || '').replace(/^www[.]/, '')
          if (destHost && destHost !== currentHost) {
            trackEvent('outbound_click', {
              href,
              host: destHost,
              label,
              kind: 'external',
              page_path: pagePath,
              affiliate_context: affiliateContext,
            })
          }
        } catch {}
      }
    }

    document.addEventListener('click', handler, { capture: true })
    return () => document.removeEventListener('click', handler, { capture: true })
  }, [])

  return null
}
