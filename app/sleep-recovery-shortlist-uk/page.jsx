import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import { AWIN_PICKS } from '@/data/awinPicks'

export const metadata = {
  title: 'Sleep & recovery shortlist (UK) — partner links',
  description: 'Mattress and pillow upgrades, bedding for temperature control, and a few conservative wind‑down options (UK).',
}

function slugify(s = '') {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function Page() {
  const picks = AWIN_PICKS.sleep || []
  const groupOrder = ['Mattress & support', 'Pillows & bedding', 'Bedding & temperature', 'Posture & support', 'Sleep & recovery']

  const groups = groupOrder
    .map((g) => ({ title: g, id: slugify(g), items: picks.filter((p) => p.group === g) }))
    .filter((g) => g.items.length)

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Sleep &amp; recovery shortlist (UK)</h1>
        <p className="mt-3 text-zinc-700">
          Partner links that fit our approach: fix the basics first (light, timing, temperature), then consider one upgrade at a time.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics/sleep">Sleep topic</Link>
          <Link className="btn-secondary" href="/topics/recovery">Recovery topic</Link>
          <Link className="btn-secondary" href="/best-natural-sleep-support">Natural sleep support shortlist</Link>
          <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {groups.map((g) => (
            <a key={g.id} className="chip" href={`#${g.id}`}>{g.title}</a>
          ))}
        </div>

        <p className="mt-3 text-xs text-zinc-500">Last updated: February 13, 2026</p>
      </header>

      <section className="mt-12 panel">
        <h2 className="text-lg font-semibold">Keep it conservative</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
          <li><strong>Don’t stack changes:</strong> try one upgrade for 7–14 nights before adding another.</li>
          <li><strong>Environment beats supplements:</strong> dark, cool, quiet tends to win.</li>
          <li><strong>Medical note:</strong> if pregnant, on medication, or managing a condition, check with a qualified clinician before supplement changes.</li>
        </ul>
      </section>

      {groups.map((g) => (
        <section key={g.id} className="mt-14" id={g.id}>
          <h2 className="section-title">{g.title}</h2>
          <p className="section-subtitle">Direct partner links for comparison (UK).</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {g.items.map((p) => (
              <ProductPick
                key={p.clickref}
                title={p.product}
                badge={p.badge}
                description={p.description}
                bullets={p.bullets}
                links={[
                  { label: 'Check price', merchant: 'awin', href: p.awin, variant: 'primary' },
                  { label: 'Sleep basics', merchant: 'internal', href: '/topics/sleep', variant: 'ghost' },
                ]}
              />
            ))}
          </div>
        </section>
      ))}

      <p className="mt-12 text-xs text-zinc-500">
        Some links are affiliate links. If you buy via them, we earn a commission (at no extra cost to you).
      </p>
    </main>
  )
}
