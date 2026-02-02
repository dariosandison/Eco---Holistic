'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { loadGA } from '@/lib/ga-client'

export default function ConsentBanner() {
  const requireConsent = process.env.NEXT_PUBLIC_REQUIRE_CONSENT !== 'false'
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!requireConsent) return
    const v = localStorage.getItem('consent_analytics')
    if (!v) setOpen(true)
  }, [requireConsent])

  if (!requireConsent || !open) return null

  return (
    <div
      className="fixed inset-x-0 z-[60]"
      style={{ bottom: 'calc(var(--newsletter-h,0px) + 12px)' }}
    >
      <div className="mx-auto max-w-3xl card px-4 py-3 bg-white shadow">
        <p className="text-sm text-neutral-700">
          We use optional analytics cookies to understand which pages help readers most. You can accept or decline.
          Learn more on our <Link href="/cookies" className="underline">Cookies</Link> page.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            className="btn"
            onClick={() => {
              localStorage.setItem('consent_analytics', 'granted')
              loadGA()
              setOpen(false)
            }}
          >
            Accept
          </button>
          <button
            className="btn-muted"
            onClick={() => {
              localStorage.setItem('consent_analytics', 'denied')
              setOpen(false)
            }}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
