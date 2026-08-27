import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import { AWIN_PICKS } from '@/data/awinPicks'

export const metadata = {
  title: 'Movement Gear UK — Barefoot Shoes, Home Strength & Tracking',
  description: 'Choose movement gear by the problem it solves: foot-strength transition, simple home strength and useful tracking, with UK partner links and practical buying checks.',
}

function slugify(s = '') {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

const ROUTES = [
  { title: 'Build foot strength', text: 'Use footwear as a gradual transition tool, not an overnight switch.', target: 'barefoot-footwear' },
  { title: 'Train at home', text: 'Choose simple kit that makes regular strength work easier to repeat.', target: 'home-strength-basics' },
  { title: 'Track useful trends', text: 'Use tracking for steps, consistency and longer-term patterns rather than daily perfection.', target: 'tracking-feedback' },
]

export default function Page() {
  const picks = AWIN_PICKS.movement || []
  const groupOrder = ['Barefoot footwear', 'Home strength basics', 'Tracking & feedback', 'Other']
  const groups = groupOrder
    .map((g) => ({ title: g, id: slugify(g), items: picks.filter((p) => p.group === g) }))
    .filter((g) => g.items.length)

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Low-friction movement</p>
        <h1 className="mt-2 text-4xl font-bold">Movement gear: buy only what helps you move more</h1>
        <p className="mt-3 text-zinc-700">The goal is not more equipment. Start with the habit you want to make easier — walking, foot-strength work, home strength or useful tracking — then choose the simplest tool that removes friction.</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/topics/movement">Movement basics</Link>
          <Link className="btn-secondary" href="/topics/foot-strength">Foot-strength guide</Link>
          <Link className="btn-secondary" href="/topics/recovery">Recovery basics</Link>
          <Link className="btn-secondary" href="/affiliate-disclosure">How affiliate links work</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Partner links may earn Wild & Well a commission at no extra cost to you.</p>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {ROUTES.map((route) => (
          <a key={route.title} href={`#${route.target}`} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h2 className="font-semibold text-zinc-900">{route.title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{route.text}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-zinc-900">Compare options →</span>
          </a>
        ))}
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">Three checks before buying</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
          <li><strong>Footwear:</strong> prioritise fit, return policy and a gradual transition rather than chasing a brand.</li>
          <li><strong>Strength gear:</strong> choose equipment that supports progressive overload without taking over your room.</li>
          <li><strong>Tracking:</strong> buy for a specific behaviour you want to monitor; more data is not automatically more useful.</li>
        </ul>
      </section>

      {groups.map((g) => (
        <section key={g.id} className="mt-14 scroll-mt-28" id={g.id}>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="section-title">{g.title}</h2>
              <p className="section-subtitle">Relevant Wild & Well partner options for this use case.</p>
            </div>
            <Link href="/topics/movement" className="text-sm font-semibold text-zinc-700 underline underline-offset-4">Read movement basics</Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {g.items.map((p) => (
              <ProductPick
                key={p.clickref}
                title={p.product}
                badge={p.badge}
                description={p.description}
                bullets={p.bullets}
                trackingContext={`movement_shortlist_${g.id}`}
                links={[
                  { label: `Check ${p.badge || p.advertiser} price`, merchant: 'awin', href: p.awin, variant: 'primary' },
                  { label: 'Movement basics', merchant: 'internal', href: '/topics/movement', variant: 'ghost' },
                ]}
              />
            ))}
          </div>
        </section>
      ))}

      <section className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <h2 className="text-xl font-semibold">The Wild & Well rule</h2>
        <p className="mt-2 text-sm text-zinc-700">Walking and basic strength habits come before gadgets. Equipment earns its place only when it makes a useful habit easier, safer or more consistent.</p>
      </section>
    </main>
  )
}
