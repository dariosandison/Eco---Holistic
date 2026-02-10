'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export default function OnPageNav() {
  const pathname = usePathname()
  const [items, setItems] = useState([])

  const enabled = useMemo(() => {
    if (!pathname || pathname === '/') return false
    // Keep it focussed: long pages where section jumping is helpful.
    return pathname.startsWith('/blog') || pathname.startsWith('/topics') || pathname.startsWith('/best-') || pathname === '/deals' || pathname === '/shortlists'
  }, [pathname])

  useEffect(() => {
    if (!enabled) {
      setItems([])
      return
    }

    const root = document.getElementById('content')
    if (!root) return

    const headings = Array.from(root.querySelectorAll('h2, h3'))
      .filter((h) => h && h.textContent && h.textContent.trim().length > 2)
      .slice(0, 20)

    const out = []
    const seen = new Set()

    for (const h of headings) {
      const text = (h.textContent || '').trim()
      if (!text) continue

      if (!h.id) {
        const id = slugify(text)
        if (id) h.id = id
      }

      if (!h.id || seen.has(h.id)) continue
      seen.add(h.id)
      out.push({ id: h.id, text, level: h.tagName === 'H3' ? 3 : 2 })
    }

    // Only show if there are enough meaningful sections.
    setItems(out.length >= 3 ? out : [])
  }, [enabled, pathname])

  if (!enabled || items.length < 3) return null

  return (
    <div
      className="sticky z-40 border-b bg-white/90 backdrop-blur"
      style={{ top: 'calc(var(--header-h,0px) + var(--crumbs-h,0px))' }}
    >
      <div className="mx-auto max-w-6xl px-4 py-2 flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500 shrink-0">On this page</span>
        <div className="flex-1 overflow-x-auto">
          <div className="flex gap-2">
            {items.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                className={`whitespace-nowrap rounded-full border px-3 py-1 text-xs ${it.level === 3 ? 'bg-white' : 'bg-zinc-50'} border-zinc-200 text-zinc-900 hover:bg-zinc-100`}
                onClick={(e) => {
                  // Smooth scroll with header offset
                  e.preventDefault()
                  const el = document.getElementById(it.id)
                  if (!el) return
                  const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 0
                  const crumbsH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--crumbs-h')) || 0
                  const extra = 12
                  const top = el.getBoundingClientRect().top + window.scrollY - headerH - crumbsH - extra
                  window.scrollTo({ top, behavior: 'smooth' })
                }}
              >
                {it.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
