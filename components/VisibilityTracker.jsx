'use client'

import { useEffect, useRef } from 'react'
import { trackEvent } from '@/lib/analytics'

export default function VisibilityTracker({ event, data = {}, children, className = '' }) {
  const ref = useRef(null)
  const sent = useRef(false)
  useEffect(() => {
    const element = ref.current
    if (!element || sent.current || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting || sent.current) return
      sent.current = true
      trackEvent(event, { ...data, page_path: window.location.pathname })
      observer.disconnect()
    }, { threshold: 0.5 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [data, event])
  return <div ref={ref} className={className}>{children}</div>
}
