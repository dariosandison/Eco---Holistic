import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ComparisonTable from '@/components/ComparisonTable'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Best Air Purifiers for Allergies (UK) | Wild & Well',
  description: 'Shortlisted HEPA air purifiers for allergies in UK homes — what matters, what to skip, and the best picks for bedrooms and living rooms.',
}

const PICKS = [
  {
    title: 'Shark NeverChange5 (HEPA)',
    badge: 'Low filter fuss',
    desc: 'A popular option marketed around longer filter life. Still check replacement costs.',
    query: 'Shark NeverChange5 air purifier',
    bullets: ['Best for: busy households', 'Check room size coverage', 'Prioritise quiet night mode'],
  },
  {
    title: 'Blueair Blue Max 3250i',
    badge: 'Strong all‑rounder',
    desc: 'Well-regarded for everyday particle control with simple use.',
    query: 'Blueair Blue Max 3250i air purifier',
    bullets: ['Best for: living rooms', 'Plan for filter replacements', 'Auto mode is useful, not essential'],
  },
  {
    title: 'Levoit Core 600S (large rooms)',
    badge: 'Big room value',
    desc: 'Often recommended for higher coverage without jumping to premium pricing.',
    query: 'Levoit Core 600S air purifier',
    bullets: ['Best for: open plan spaces', 'Check noise at higher fan speeds'],
  },
  {
    title: 'Meaco HEPA air purifier',
    badge: 'Quiet comfort',
    desc: 'Meaco units are often praised for quiet operation — ideal for sleep.',
    query: 'Meaco air purifier HEPA',
    bullets: ['Best for: bedrooms', 'Look for quiet night mode'],
  },
  {
    title: 'Dyson purifier (HEPA + carbon)',
    badge: 'Premium',
    desc: 'Expensive, but some households value the build and sensor feedback.',
    query: 'Dyson purifier HEPA carbon',
    bullets: ['Best for: premium features', 'Check filter costs before committing'],
  },
  {
    title: 'Blueair Blue 511i Max (bedrooms)',
    badge: 'Small space',
    desc: 'Great for bedrooms/small rooms if you size it correctly.',
    query: 'Blueair 511i Max air purifier',
    bullets: ['Best for: small rooms', 'Quiet night mode matters'],
  },
]

export default function Page() {
  const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Air Purifiers for Allergies (UK)',
    dateModified: '2026-01-25',
    datePublished: '2026-01-25',
    mainEntity: { '@type': 'ItemList', itemListElement: itemList },
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do air purifiers help with pollen allergies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'They can reduce airborne particles indoors, but only if the unit is sized correctly for the room and you run it consistently (especially during high pollen periods).',
        },
      },
      {
        '@type': 'Question',
        name: 'What matters most when choosing an air purifier?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Room-size coverage, true HEPA filtration for particles, and realistic filter replacement costs. Quiet operation matters most for bedrooms.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often do air purifier filters need replacing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It varies by model, home conditions, and run time. Check the manufacturer guidance and always confirm replacement filter price and availability before buying.',
        },
      },
    ],
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <StructuredData data={faqLd} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Best air purifiers for allergies (UK)</h1>
        <p className="mt-3 text-zinc-700">
          The biggest mistake is buying a purifier that’s too small for the room. Size first, features second.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/picks/air-quality">Air quality hub</Link>
          <Link className="btn-secondary" href="/guides/healthy-air-at-home">Healthy air guide</Link>
          <Link className="btn-secondary" href="/best-air-purifiers-small-flats-uk">Small flats list</Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Last updated: January 25, 2026</p>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card">
          <h2 className="text-lg font-semibold">What matters</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
            <li><strong>Right size</strong> for the room.</li>
            <li><strong>True HEPA</strong> for particles.</li>
            <li><strong>Carbon</strong> if smells bother you.</li>
            <li>Filter replacement cost + availability.</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Bedroom priority</h2>
          <p className="mt-3 text-sm text-zinc-700">Quiet night mode beats “smart” features you never use.</p>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">If damp is the issue</h2>
          <p className="mt-3 text-sm text-zinc-700">A purifier helps particles, but damp often needs dehumidifying + ventilation.</p>
          <Link className="btn-secondary mt-4 inline-flex" href="/guides/winter-humidity-guide">Humidity guide</Link>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Top picks (shortlist)</h2>
        <p className="mt-2 text-sm text-zinc-600">Three common scenarios — pick the one that matches your room and use.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="Best all‑rounder: Blueair 3250i"
            badge="Best overall"
            description="A straightforward everyday choice for general particle control in living areas."
            href={amazonSearchUrl('Blueair Blue Max 3250i air purifier')}
            bullets={['Size it to your room', 'Plan filter replacements', 'Auto mode is optional']}
          />
          <ProductPick
            title="Best for bedrooms: Meaco HEPA"
            badge="Best for"
            description="Prioritises quiet comfort — helpful if allergies disturb sleep."
            href={amazonSearchUrl('Meaco air purifier HEPA')}
            bullets={['Quiet night mode matters', 'Don’t oversize if noise is a concern']}
          />
          <ProductPick
            title="Best for larger rooms: Levoit 600S"
            badge="Best value"
            description="A common pick for higher coverage without premium pricing."
            href={amazonSearchUrl('Levoit Core 600S air purifier')}
            bullets={['Check noise at high speeds', 'Confirm filter availability']}
          />
        </div>

        <ComparisonTable
          caption="At-a-glance comparison (what to check before you buy)"
          columns={[
            { key: 'pick', label: 'Pick' },
            { key: 'bestFor', label: 'Best for' },
            { key: 'watchOut', label: 'Watch-out' },
            { key: 'check', label: 'Check before buying' },
          ]}
          rows={[
            {
              pick: 'Bedroom unit',
              bestFor: 'Quiet night use',
              watchOut: 'Noise at higher speeds',
              check: 'Night-mode dB + room-size coverage',
            },
            {
              pick: 'Living room unit',
              bestFor: 'Daytime particle control',
              watchOut: 'Filter cost over time',
              check: 'Replacement filter price + frequency',
            },
            {
              pick: 'Large room unit',
              bestFor: 'Open-plan spaces',
              watchOut: 'You may need higher fan speeds',
              check: 'Coverage spec at realistic settings',
            },
          ]}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Shortlist (buyer picks)</h2>
        <p className="mt-2 text-sm text-zinc-600">Curated searches to compare prices and check filter costs.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {PICKS.map((p) => (
            <ProductPick
              key={p.title}
              title={p.title}
              badge={p.badge}
              description={p.desc}
              href={amazonSearchUrl(p.query)}
              bullets={p.bullets}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/picks/air-quality">Go to Air Quality hub →</Link>
          <Link className="btn-secondary" href="/best-air-purifiers-small-flats-uk">Best for small flats →</Link>
        </div>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-5 text-zinc-700">
          <div>
            <h3 className="font-semibold">Do air purifiers help with pollen?</h3>
            <p className="mt-1 text-sm text-zinc-700">
              They can reduce airborne particles indoors — but only if the unit is sized correctly and you run it consistently.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">How often do filters need replacing?</h3>
            <p className="mt-1 text-sm text-zinc-700">
              It depends on your home and how often you run it. Always check the replacement cost before you buy.
            </p>
          </div>
        </div>
      </section>

      <p className="mt-12 text-xs text-zinc-500">
        Some links may earn us a commission at no extra cost to you. We never accept paid placements in reviews.
      </p>
    </main>
  )
}
