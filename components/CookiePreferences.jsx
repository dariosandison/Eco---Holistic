'use client'

import { useEffect, useState } from 'react'
import { loadGA } from '@/lib/ga-client'

export default function CookiePreferences() {
  const [value, setValue] = useState(null)

  useEffect(() => {
    const v = localStorage.getItem('consent_analytics')
    setValue(v || 'unset')
  }, [])

  function setConsent(next) {
    localStorage.setItem('consent_analytics', next)
    setValue(next)
    if (next === 'granted') loadGA()
  }

  return (
    <div className="not-prose rounded-2xl border bg-white p-5">
      <h2 className="text-lg font-semibold">Analytics cookies</h2>
      <p className="mt-2 text-sm text-zinc-700">
        If enabled, we use anonymous analytics to understand which pages help readers most.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <button className="btn" onClick={() => setConsent('granted')}>Allow analytics</button>
        <button className="btn-muted" onClick={() => setConsent('denied')}>Disable analytics</button>
      </div>

      <p className="mt-3 text-xs text-zinc-500">
        Current setting: <span className="font-medium">{value || 'unset'}</span>
      </p>
    </div>
  )
}
