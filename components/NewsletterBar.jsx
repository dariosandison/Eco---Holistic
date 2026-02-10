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
      if (subscribed === '1') {
        setHidden(true)
        return
      }
      if (dismissUntil && dismissUntil > Date.now()) {
        setHidden(true)
      }
    } catch (e) {
      // ignore
    }
  }, [now])

  useEffect(() => {
    const el = document.getElementById('newsletter-bar')
    if (!el) {
      // ensure layout doesn't reserve space if hidden/unmounted
      document.documentElement.style.setProperty('--newsletter-h', `0px`)
      return
    }
    if (hidden) {
      document.documentElement.style.setProperty('--newsletter-h', `0px`)
      return
    }
    const setH = () =>
      document.documentElement.style.setProperty('--newsletter-h', `${el.offsetHeight}px`)
    setH()
    const ro = new ResizeObserver(setH)
    ro.observe(el)
    return () => ro.disconnect()
  }, [hidden])

  if (hidden) {
    return null
  }

  return (
    <div
      id="newsletter-bar"
      className="fixed bottom-0 inset-x-0 z-50 border-t bg-white/95 backdrop-blur"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col sm:flex-row items-center gap-3">
        <p className="text-sm text-neutral-700 flex-1">
          Free: <a className="underline" href="/shopping-list">Low‑Tox Shopping List</a> + weekly shortlists + calm insights (no spam).
        </p>

        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => {
            trackEvent('newsletter_dismiss', { placement: 'sticky_bar' })
            try {
              // Hide for 7 days
              const until = Date.now() + 7 * 24 * 60 * 60 * 1000
              localStorage.setItem(DISMISS_KEY, String(until))
            } catch (e) {
              // ignore
            }
            setHidden(true)
          }}
          className="rounded-lg border border-zinc-300 bg-white/70 px-2 py-1 text-xs font-medium text-zinc-700 hover:bg-white"
        >
          No thanks
        </button>

        <form
          onSubmit={() => trackEvent('newsletter_signup', { placement: 'sticky_bar' })}
          className="flex w-full sm:w-auto gap-2"
          action="/api/subscribe"
          method="post"
        >
          <input type="hidden" name="source" value="newsletter-bar" />
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            aria-label="Email address"
            autoComplete="email"
            inputMode="email"
            className="w-full sm:w-64 rounded-xl border px-3 py-2"
          />
          <button type="submit" className="btn-primary">Get it</button>
        </form>
      </div>
    </div>
  )
}
