'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { SITE_URL } from '@/lib/site'

const LABELS = {
  topics: 'Topics',
  picks: 'Picks',
  picks: 'Picks',
  deals: 'Deals',
  blog: 'Wellness Insights',
  nutrition: 'Nutrition',
  movement: 'Movement',
  'natural-remedies': 'Natural remedies',
  'holistic-health': 'Holistic health',
  authors: 'Authors',
  contact: 'Contact',
  about: 'About',
  cookies: 'Cookies',
  corrections: 'Corrections',
  disclosure: 'Disclosure',
  'affiliate-disclosure': 'Affiliate disclosure',
  'editorial-policy': 'Editorial policy',
  'how-we-test': 'How we test',
}

function humanizeSlug(slug) {
  if (!slug) return ''
  const cleaned = slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b(uk|faq|hepa|cadr)\b/gi, (m) => m.toUpperCase())
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1)
}

function buildCrumbs(pathname) {
  const segments = String(pathname || '/').split('/').filter(Boolean)
  if (!segments.length) return []

  // Special case: money pages live at /best-*
  if (segments.length === 1 && segments[0].startsWith('best-')) {
    const label = humanizeSlug(segments[0].replace(/^best-/, ''))
    return [
      { label: 'Home', href: '/' },
      { label: 'Shortlists', href: '/picks' },
      { label, href: `/${segments[0]}` },
    ]
  }

  const crumbs = [{ label: 'Home', href: '/' }]
  let acc = ''
  for (const seg of segments) {
    acc += `/${seg}`
    const label = LABELS[seg] || humanizeSlug(seg)
    crumbs.push({ label, href: acc })
  }
  return crumbs
}

export default function BreadcrumbBar() {
  const pathname = usePathname()
  const crumbs = buildCrumbs(pathname)
  if (!crumbs.length) return null

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.href}`,
    })),
  }

  return (
    <div className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <nav aria-label="Breadcrumb" className="text-xs text-zinc-600">
          <ol className="flex flex-wrap items-center gap-2">
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1
              return (
                <li key={c.href} className="flex items-center gap-2">
                  {i > 0 ? <span className="text-zinc-400">/</span> : null}
                  {isLast ? (
                    <span className="font-medium text-zinc-900">{c.label}</span>
                  ) : (
                    <Link href={c.href} className="hover:underline">
                      {c.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      </div>
    </div>
  )
}
