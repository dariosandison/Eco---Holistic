'use client'
import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

export default function NewsletterBar() {
  useEffect(() => {
    const el = document.getElementById('newsletter-bar')
    if (!el) return
    const setH = () =>
      document.documentElement.style.setProperty('--newsletter-h', `${el.offsetHeight}px`)
    setH()
    const ro = new ResizeObserver(setH)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div
      id="newsletter-bar"
      className="fixed bottom-0 inset-x-0 z-50 border-t bg-white/95 backdrop-blur"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col sm:flex-row items-center gap-3">
        <p className="text-sm text-neutral-700">
          Free: <a className="underline" href="/shopping-list">Low‑Tox Shopping List</a> + weekly trusted picks (no spam).
        </p>

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
            className="w-full sm:w-64 rounded-xl border px-3 py-2"
          />
          <button type="submit" className="btn-primary">Get it</button>
        </form>
      </div>
    </div>
  )
}
