'use client'
import { useEffect } from 'react'

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
          Get new guides & tested picks (no spam, unsubscribe anytime).
        </p>
        <form
          className="flex w-full sm:w-auto gap-2"
          action={process.env.NEXT_PUBLIC_NEWSLETTER_ACTION || '#'}
          method="post"
          target="_blank"
          rel="noopener"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="w-full sm:w-64 rounded-xl border px-3 py-2"
          />
          <button type="submit" className="btn-primary">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

