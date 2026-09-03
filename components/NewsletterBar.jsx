'use client'
import { useEffect, useMemo, useState } from 'react'
import { trackEvent } from '@/lib/analytics'

const DISMISS_KEY = 'ww_newsletter_dismiss_until'
const SUBSCRIBED_KEY = 'ww_subscribed'

export default function NewsletterBar() {
  const [hidden, setHidden] = useState(false)
  const now = useMemo(() => Date.now(), [])

  useEffect(() => {
    try {
      const subscribed = localStorage.getItem(SUBSCRIBED_KEY)
      const dismissUntil = parseInt(localStorage.getItem(DISMISS_KEY) || '0', 10)
      if (subscribed === '1' || (dismissUntil && dismissUntil > Date.now())) setHidden(true)
    } catch {}
  }, [now])

  useEffect(() => {
    const el = document.getElementById('newsletter-bar')
    if (!el || hidden) {
      document.documentElement.style.setProperty('--newsletter-h', '0px')
      return
    }
    const setH = () => document.documentElement.style.setProperty('--newsletter-h', `${el.offsetHeight}px`)
    setH()
    const ro = new ResizeObserver(setH)
    ro.observe(el)
    return () => ro.disconnect()
  }, [hidden])

  if (hidden) return null

  return (
    <div id="newsletter-bar" className="fixed inset-x-0 bottom-0 z-50 border-t border-[rgba(18,59,50,.16)] bg-[#f7f4ed]/95 backdrop-blur">
      <div className="content-shell flex flex-col gap-3 py-3 sm:flex-row sm:items-center">
        <p className="flex-1 text-sm leading-6 text-[#47534c]"><strong className="font-semibold text-[var(--brand-dark)]">Useful, not noisy.</strong> Practical Wild &amp; Well guidance and carefully chosen comparisons by email.</p>
        <form onSubmit={() => trackEvent('newsletter_signup', { placement: 'sticky_bar' })} className="flex w-full gap-2 sm:w-auto" action="/api/subscribe" method="post">
          <input type="hidden" name="source" value="newsletter-bar" />
          <input type="email" name="email" required placeholder="Email address" aria-label="Email address" autoComplete="email" inputMode="email" className="min-w-0 flex-1 border border-[rgba(18,59,50,.22)] bg-white px-3 py-2 text-sm sm:w-56" />
          <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
        </form>
        <button type="button" aria-label="Dismiss newsletter signup" onClick={() => {
          trackEvent('newsletter_dismiss', { placement: 'sticky_bar' })
          try { localStorage.setItem(DISMISS_KEY, String(Date.now() + 7 * 24 * 60 * 60 * 1000)) } catch {}
          setHidden(true)
        }} className="self-end px-1 py-1 text-xs font-semibold text-[#667069] underline underline-offset-4 sm:self-auto">Not now</button>
      </div>
    </div>
  )
}