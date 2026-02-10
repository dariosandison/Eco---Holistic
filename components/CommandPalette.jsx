'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { trackEvent } from '@/lib/analytics'

function norm(s) {
  return String(s || '').toLowerCase().trim()
}

function scoreItem(item, q) {
  // Tiny scoring: prefix matches > contains
  const title = norm(item.title)
  const desc = norm(item.desc)
  const hay = `${title} ${desc} ${(item.tags || []).map(norm).join(' ')} ${norm(item.kind)}`
  if (!q) return 0
  if (title.startsWith(q)) return 100
  if (title.includes(q)) return 70
  if (hay.includes(q)) return 40
  return 0
}

export default function CommandPalette({ index = [] }) {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef(null)

  const items = useMemo(() => {
    const query = norm(q)
    const base = Array.isArray(index) ? index : []

    if (!query) {
      // Default: show a few useful actions, then recent-ish items.
      const actions = base.filter((x) => x.kind === 'Action').slice(0, 8)
      const rest = base.filter((x) => x.kind !== 'Action').slice(0, 12)
      return [...actions, ...rest]
    }

    const scored = base
      .map((it) => ({ it, s: scoreItem(it, query) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 18)
      .map((x) => x.it)

    // If we have few matches, always include Search action.
    const hasSearch = scored.some((x) => x.href?.startsWith('/search'))
    if (!hasSearch) {
      const searchAction = base.find((x) => x.kind === 'Action' && x.href?.startsWith('/search'))
      if (searchAction) scored.unshift(searchAction)
    }

    return scored
  }, [index, q])

  useEffect(() => {
    function onKeyDown(e) {
      const isK = e.key.toLowerCase() === 'k'
      const isSlash = e.key === '/'
      const meta = e.metaKey || e.ctrlKey

      // Cmd/Ctrl+K
      if (meta && isK) {
        e.preventDefault()
        setOpen(true)
        return
      }

      // '/' quick open (avoid when typing in inputs)
      const t = e.target
      const isTyping = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)
      if (!isTyping && isSlash) {
        e.preventDefault()
        setOpen(true)
        return
      }

      if (!open) return

      if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
        return
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActive((a) => Math.min(a + 1, Math.max(items.length - 1, 0)))
        return
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActive((a) => Math.max(a - 1, 0))
        return
      }

      if (e.key === 'Enter') {
        e.preventDefault()
        const it = items[active]
        if (it?.href) {
          trackEvent('command_palette_open_item', { href: it.href, kind: it.kind || 'Item' })
          setOpen(false)
          // Preserve query for /search
          if (it.href.startsWith('/search') && q.trim()) {
            router.push(`/search?q=${encodeURIComponent(q.trim())}`)
          } else {
            router.push(it.href)
          }
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, items, active, router, q])

  useEffect(() => {
    function onOpen() {
      setOpen(true)
    }
    window.addEventListener('ww_open_palette', onOpen)
    return () => window.removeEventListener('ww_open_palette', onOpen)
  }, [])

  useEffect(() => {
    if (!open) return
    setQ('')
    setActive(0)
    // Delay focus until modal is mounted
    setTimeout(() => inputRef.current?.focus(), 0)
    trackEvent('command_palette_open', { path: pathname || '' })
  }, [open, pathname])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center bg-black/40 px-4 py-16"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) setOpen(false)
      }}
    >
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border bg-white shadow-xl">
        <div className="border-b p-3">
          <div className="flex items-center gap-3">
            <div className="text-sm font-semibold text-zinc-900 shrink-0">Search</div>
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => {
                setQ(e.target.value)
                setActive(0)
              }}
              placeholder="Type to search… (try: water, sleep, laundry)"
              className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
            />
            <button
              type="button"
              className="rounded-xl border px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
              onClick={() => setOpen(false)}
            >
              Esc
            </button>
          </div>
          <p className="mt-2 text-xs text-zinc-500">
            Tips: <span className="font-medium">Enter</span> to open • <span className="font-medium">↑/↓</span> to navigate • <span className="font-medium">Ctrl/⌘ K</span> to reopen
          </p>
        </div>

        <div className="max-h-[60vh] overflow-auto">
          {items.length ? (
            <ul className="p-2">
              {items.map((it, i) => (
                <li key={`${it.href}_${it.title}`}> 
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => {
                      trackEvent('command_palette_click', { href: it.href, kind: it.kind || 'Item' })
                      setOpen(false)
                      if (it.href.startsWith('/search') && q.trim()) {
                        router.push(`/search?q=${encodeURIComponent(q.trim())}`)
                      } else {
                        router.push(it.href)
                      }
                    }}
                    className={`w-full rounded-xl px-3 py-2 text-left transition ${i === active ? 'bg-zinc-100' : 'hover:bg-zinc-50'}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold text-zinc-900">{it.title}</div>
                        {it.desc ? (
                          <div className="mt-0.5 truncate text-xs text-zinc-600">{it.desc}</div>
                        ) : null}
                      </div>
                      <div className="shrink-0 flex items-center gap-2">
                        {it.badge ? (
                          <span className="rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">{it.badge}</span>
                        ) : null}
                        {it.kind && it.kind !== 'Action' ? (
                          <span className="rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">{it.kind}</span>
                        ) : null}
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-6 text-sm text-zinc-600">No matches. Try a different term.</div>
          )}
        </div>

        <div className="border-t p-3 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500">
          <div>
            Press <span className="font-medium">/</span> to search anywhere.
          </div>
          <div className="flex items-center gap-2">
            <a
              href={q.trim() ? `/search?q=${encodeURIComponent(q.trim())}` : '/search'}
              className="underline"
              onClick={() => {
                trackEvent('command_palette_open_search_page', { q: q.trim() })
                setOpen(false)
              }}
            >
              Open full search
            </a>
            <span>•</span>
            <a
              href="/start-here"
              className="underline"
              onClick={() => setOpen(false)}
            >
              Start here
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
