import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ComparisonTable from '@/components/ComparisonTable'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'
import EducationFirstCallout from '@/components/EducationFirstCallout'


export const metadata = {
  title: 'Best Fragrance‑Free Laundry Detergents (UK) | Wild & Well',
  description: 'A shortlist of fragrance‑free detergents for sensitive households in the UK — what to look for, what to avoid, and buyer shortlist.',
}

const PICKS = [
  {
    title: 'Ecover ZERO (fragrance-free)',
    badge: 'Mainstream favourite',
    desc: 'Fragrance-free detergent designed for sensitive skin.',
    query: 'Ecover ZERO laundry liquid fragrance free',
    bullets: ['Fragrance-free', 'Easy to repurchase in the UK', 'Consider refills to cut plastic'],
  },
  {
    title: 'Surcare 0% Non‑Bio',
    badge: 'Sensitive skin',
    desc: 'A popular sensitive-skin option with wide UK availability.',
    query: 'Surcare non bio laundry liquid 0% fragrance',
    bullets: ['0% fragrance/dyes/enzymes', 'Great for bedding and towels'],
  },
  {
    title: 'Bio‑D Fragrance Free',
    badge: 'Refill-friendly',
    desc: 'Often available in larger sizes and refills.',
    query: 'Bio-D fragrance free laundry liquid',
    bullets: ['Fragrance-free', 'Check local refill shops', 'Good for regular washing'],
  },
  {
    title: 'Miniml Non‑Bio (sensitive)',
    badge: 'Budget refill',
    desc: 'Often found in refill formats; check the sensitive/fragrance-free variant.',
    query: 'Miniml non bio laundry liquid sensitive fragrance free',
    bullets: ['Look for sensitive variants', 'Refill options can reduce waste'],
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
    headline: 'Best Fragrance‑Free Laundry Detergents (UK)',
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
        name: 'Is "natural fragrance" the same as fragrance-free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. "Natural fragrance" can still contain sensitising compounds. If scent is an issue, choose products labelled fragrance-free (and ideally free from dyes).',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does my laundry still smell after switching?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fragrance can linger in fabrics and in the washing machine. Run a hot maintenance wash, clean the drawer/seal, and consider an extra rinse for bedding and towels for a week or two.',
        },
      },
    ],
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <StructuredData data={faqLd} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Best fragrance‑free laundry detergents (UK)</h1>
        <p className="mt-3 text-zinc-700">
          Laundry touches your skin all day. If you’re sensitive to scent, detergent is the highest-impact swap.
        </p>

        <EducationFirstCallout topicHref="/topics/fragrance-free" topicLabel="Fragrance‑free topic hub" insightHref="/blog/ingredient-red-flags" insightLabel="Ingredient red flags" />
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics/fragrance-free">Fragrance-free hub</Link>
          <Link className="btn-secondary" href="/blog/eco-laundry">Laundry guide</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Last updated: January 25, 2026</p>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card">
          <h2 className="text-lg font-semibold">What to look for</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
            <li><strong>Fragrance-free</strong> (not “natural fragrance”).</li>
            <li>Simple ingredient lists.</li>
            <li>Realistic dosing (avoid residue).</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Common mistake</h2>
          <p className="mt-3 text-sm text-zinc-700">Overdosing detergent. More isn’t cleaner — it often leaves residue.</p>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Easy comfort win</h2>
          <p className="mt-3 text-sm text-zinc-700">Wash bedding/towels fragrance-free and add an extra rinse for a week.</p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Top options (shortlist)</h2>
        <p className="mt-2 text-sm text-zinc-600">Pick one route: sensitive-skin baseline, refill-friendly, or easy mainstream.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="Best for sensitive skin: Surcare 0%"
            badge="Best overall"
            description="Widely available in the UK and a common sensitive-household baseline."
            href={amazonSearchUrl('Surcare non bio laundry liquid 0% fragrance')}
            bullets={['0% fragrance/dyes/enzymes', 'Great for bedding and towels', 'Add an extra rinse for comfort']}
          />
          <ProductPick
            title="Best refill-friendly: Bio-D"
            badge="Best for"
            description="Often sold in larger sizes/refills — great if you want to reduce plastic and keep things simple."
            href={amazonSearchUrl('Bio-D fragrance free laundry liquid')}
            bullets={['Check local refill shops', 'Good for regular washing', 'Stick to recommended dosing']}
          />
          <ProductPick
            title="Best mainstream: Ecover ZERO"
            badge="Best value"
            description="Easy to repurchase and a straightforward fragrance-free swap."
            href={amazonSearchUrl('Ecover ZERO laundry liquid fragrance free')}
            bullets={['Fragrance-free (avoid “natural fragrance”)', 'Consider refills to cut plastic']}
          />
        </div>

        <ComparisonTable
          caption="At-a-glance comparison (choose what you’ll stick with)"
          columns={[
            { key: 'pick', label: 'Pick' },
            { key: 'bestFor', label: 'Best for' },
            { key: 'watchOut', label: 'Watch-out' },
            { key: 'startTip', label: 'Start tip' },
          ]}
          rows={[
            {
              pick: 'Sensitive-skin baseline',
              bestFor: 'Irritation from scent/dyes',
              watchOut: 'Overdosing leaves residue',
              startTip: 'Use less than you think + add an extra rinse for bedding',
            },
            {
              pick: 'Refill-friendly option',
              bestFor: 'Reducing plastic + repeat buying',
              watchOut: 'Check the exact fragrance-free variant',
              startTip: 'Find a local refill shop or buy larger sizes',
            },
            {
              pick: 'Mainstream fragrance-free',
              bestFor: 'Easy availability',
              watchOut: 'Don’t confuse with “natural fragrance"',
              startTip: 'Wash towels/bedding fragrance-free for a week',
            },
          ]}
        />
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-5 text-zinc-700">
          <div>
            <h3 className="font-semibold">Is “natural fragrance” the same as fragrance-free?</h3>
            <p className="mt-1 text-sm text-zinc-700">
              No. “Natural fragrance” can still contain sensitising compounds. If scent is an issue, choose products labelled fragrance-free.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Why does my laundry still smell after switching?</h3>
            <p className="mt-1 text-sm text-zinc-700">
              Fragrance can linger in fabrics and in the washing machine. Run a hot maintenance wash, clean the drawer/seal, and consider an extra rinse for a week or two.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Shortlist (buyer-friendly)</h2>
        <p className="mt-2 text-sm text-zinc-600">Curated searches so you can compare sizes and prices.</p>
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
          <Link className="btn-primary" href="/topics/fragrance-free">Go to Fragrance-free hub →</Link>
          <Link className="btn-secondary" href="/blog/non-toxic-cleaning-starter">Cleaning starter</Link>
        </div>
      </section>

      <p className="mt-12 text-xs text-zinc-500">
        Some links may earn us a commission at no extra cost to you. We never accept paid placements in reviews.
      </p>
    </main>
  )
}
