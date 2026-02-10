'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'

function clamp(n, min = 0, max = 1) {
  return Math.max(min, Math.min(max, n))
}

export default function ReadingProgressBar() {
  const pathname = usePathname()
  const [p, setP] = useState(0)

  const enabled = useMemo(() => {
    if (!pathname) return false
    if (pathname === '/') return false
    // Only show on long-form pages
    return pathname.startsWith('/blog') || pathname.startsWith('/topics') || pathname.startsWith('/best-')
  }, [pathname])

  useEffect(() => {
    if (!enabled) return
    const handler = () => {
      const doc = document.documentElement
      const scrollTop = window.scrollY || doc.scrollTop || 0
      const scrollHeight = doc.scrollHeight || 0
      const clientHeight = doc.clientHeight || window.innerHeight || 1
      const denom = Math.max(1, scrollHeight - clientHeight)
      setP(clamp(scrollTop / denom))
    }

    handler()
    window.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
    }
  }, [enabled, pathname])

  if (!enabled) return null

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 right-0 z-[60]"
      style={{ top: 'calc(var(--header-h,0px))' }}
    >
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-[2px] bg-zinc-900/80"
          style={{ width: `${Math.round(p * 100)}%` }}
        />
      </div>
    </div>
  )
}
