import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'
import EducationFirstCallout from '@/components/EducationFirstCallout'


export const metadata = {
  title: "Extra virgin olive oil (UK): our favourites | Wild & Well",
  description: "A practical shortlist of extra virgin olive oils (EVOO) with notes on freshness, storage, and what to look for on the label.",
}

const PICKS = [
  {
    "title": "Single-origin EVOO (glass bottle)",
    "badge": "Top label quality",
    "desc": "Look for harvest date, origin, and dark glass.",
    "query": "single origin extra virgin olive oil harvest date dark glass",
    "bullets": [
      "Prefer harvest date",
      "Dark glass helps",
      "Store away from heat/light"
    ]
  },
  {
    "title": "Cold-pressed organic EVOO",
    "badge": "Organic favourite",
    "desc": "If organic matters to you, choose reputable brands and check dates.",
    "query": "organic cold pressed extra virgin olive oil",
    "bullets": [
      "Check bottling/harvest info",
      "Avoid big “detox” claims",
      "Buy smaller bottles more often"
    ]
  },
  {
    "title": "EVOO in tin (freshness)",
    "badge": "Top protection",
    "desc": "Tin can protect from light. Choose a good brand and use it.",
    "query": "extra virgin olive oil tin 1l",
    "bullets": [
      "Great light protection",
      "Use within a reasonable time",
      "Decant if needed"
    ]
  },
  {
    "title": "High-polyphenol marketed EVOO",
    "badge": "Optional",
    "desc": "Some bottles highlight polyphenols — still check freshness and taste.",
    "query": "high polyphenol extra virgin olive oil",
    "bullets": [
      "Taste matters",
      "Freshness matters more than buzzwords",
      "Don’t overpay for marketing"
    ]
  },
  {
    "title": "Cooking-friendly EVOO (daily use)",
    "badge": "Everyday",
    "desc": "A decent everyday EVOO you’ll actually use regularly.",
    "query": "everyday extra virgin olive oil 1 litre",
    "bullets": [
      "Use it daily",
      "Heat exposure is about storage too",
      "Buy from brands you trust"
    ]
  },
  {
    "title": "Spray EVOO (minimal ingredients)",
    "badge": "Convenient",
    "desc": "If you use sprays, choose minimal-ingredient options.",
    "query": "olive oil spray 100% extra virgin",
    "bullets": [
      "Check ingredients (avoid propellants if preferred)",
      "Good for portioning",
      "Don’t rely on sprays only"
    ]
  }
]

function SummaryBox() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">At a glance</h2>
      <p className="mt-2 text-zinc-700">
        A short, practical shortlist plus the label cues that matter (freshness, ingredients, and how you’ll actually use it).
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link className="btn-secondary" href="/nutrition">Nutrition hub</Link>
        <Link className="btn-secondary" href="/favourites">Favourites hub</Link>
      </div>
      <p className="mt-4 text-xs text-zinc-500">Last updated: January 27, 2026</p>
    </div>
  )
}

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
    headline: "Extra virgin olive oil (UK): our favourites",
    dateModified: '2026-01-27',
    datePublished: '2026-01-27',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: itemList,
    },
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Extra virgin olive oil (UK): our favourites</h1>
        <p className="mt-3 text-zinc-700">A practical shortlist of extra virgin olive oils (EVOO) with notes on freshness, storage, and what to look for on the label.</p>

        <EducationFirstCallout topicHref="/nutrition" topicLabel="Nutrition basics" insightHref="/blog/fibre-gut-health-practical-guide" insightLabel="Fibre & gut health" />
      </header>

      <section className="mt-8">
        <SummaryBox />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Top options (shortlist)</h2>
        <p className="mt-2 text-sm text-zinc-600">Three solid starting points, then a fuller list below.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="Single-origin EVOO (glass bottle)"
            badge="Top label quality"
            description="Look for harvest date, origin, and dark glass."
            href={amazonSearchUrl('single origin extra virgin olive oil harvest date dark glass')}
            bullets={["Prefer harvest date", "Dark glass helps", "Store away from heat/light"]}
          />

          <ProductPick
            title="Cold-pressed organic EVOO"
            badge="Organic favourite"
            description="If organic matters to you, choose reputable brands and check dates."
            href={amazonSearchUrl('organic cold pressed extra virgin olive oil')}
            bullets={["Check bottling/harvest info", "Avoid big \u201cdetox\u201d claims", "Buy smaller bottles more often"]}
          />

          <ProductPick
            title="EVOO in tin (freshness)"
            badge="Top protection"
            description="Tin can protect from light. Choose a good brand and use it."
            href={amazonSearchUrl('extra virgin olive oil tin 1l')}
            bullets={["Great light protection", "Use within a reasonable time", "Decant if needed"]}
          />

        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Full shortlist</h2>
        <p className="mt-2 text-sm text-zinc-600">Choose based on your needs (space, budget, comfort, and how often you’ll actually use it).</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Single-origin EVOO (glass bottle)"
            badge="Top label quality"
            description="Look for harvest date, origin, and dark glass."
            href={amazonSearchUrl('single origin extra virgin olive oil harvest date dark glass')}
            bullets={["Prefer harvest date", "Dark glass helps", "Store away from heat/light"]}
          />

          <ProductPick
            title="Cold-pressed organic EVOO"
            badge="Organic favourite"
            description="If organic matters to you, choose reputable brands and check dates."
            href={amazonSearchUrl('organic cold pressed extra virgin olive oil')}
            bullets={["Check bottling/harvest info", "Avoid big \u201cdetox\u201d claims", "Buy smaller bottles more often"]}
          />

          <ProductPick
            title="EVOO in tin (freshness)"
            badge="Top protection"
            description="Tin can protect from light. Choose a good brand and use it."
            href={amazonSearchUrl('extra virgin olive oil tin 1l')}
            bullets={["Great light protection", "Use within a reasonable time", "Decant if needed"]}
          />

          <ProductPick
            title="High-polyphenol marketed EVOO"
            badge="Optional"
            description="Some bottles highlight polyphenols — still check freshness and taste."
            href={amazonSearchUrl('high polyphenol extra virgin olive oil')}
            bullets={["Taste matters", "Freshness matters more than buzzwords", "Don\u2019t overpay for marketing"]}
          />

          <ProductPick
            title="Cooking-friendly EVOO (daily use)"
            badge="Everyday"
            description="A decent everyday EVOO you’ll actually use regularly."
            href={amazonSearchUrl('everyday extra virgin olive oil 1 litre')}
            bullets={["Use it daily", "Heat exposure is about storage too", "Buy from brands you trust"]}
          />

          <ProductPick
            title="Spray EVOO (minimal ingredients)"
            badge="Convenient"
            description="If you use sprays, choose minimal-ingredient options."
            href={amazonSearchUrl('olive oil spray 100% extra virgin')}
            bullets={["Check ingredients (avoid propellants if preferred)", "Good for portioning", "Don\u2019t rely on sprays only"]}
          />

        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">How we build our shortlists</h2>
        <div className="mt-3 space-y-3 text-sm text-zinc-700 max-w-3xl">
          <p>
            Our approach here is: sensible features, decent reviews across many buyers, and a realistic fit for most homes — not hype, not extreme claims.
          </p>
          <p>
            Always check sizing/specs and current pricing before you buy. If a product makes strong health claims without evidence, treat that as marketing.
          </p>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Some links may earn us a small commission at no extra cost to you.
        </p>
      </section>
    </main>
  )
}
