'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

export default function ScrollDepthTracker({ thresholds = [25, 50, 75, 90] }) {
  useEffect(() => {
    const fired = new Set()

    function handler() {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || document.body.scrollTop
      const height = doc.scrollHeight - doc.clientHeight
      if (height <= 0) return
      const pct = (scrollTop / height) * 100

      for (const t of thresholds) {
        if (!fired.has(t) && pct >= t) {
          fired.add(t)
          try {
            trackEvent('scroll_depth', { percent: t })
          } catch {}
        }
      }
    }

    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [thresholds])

  return null
}
