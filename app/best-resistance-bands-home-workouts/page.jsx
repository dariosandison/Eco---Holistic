import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: "Best Resistance Bands for Home Workouts | Wild & Well",
  description: "A practical shortlist of resistance band types (loop bands and long bands) for strength training, rehab, and mobility at home.",
}

const PICKS = [
  {
    "title": "Long resistance bands (set)",
    "badge": "Best all-round",
    "desc": "Most versatile for rows, presses, and assisted movements.",
    "query": "long resistance bands set with handles",
    "bullets": [
      "Versatile",
      "Good for full-body workouts",
      "Check band strength levels"
    ]
  },
  {
    "title": "Loop mini bands (fabric)",
    "badge": "Best for glutes",
    "desc": "Great for activation work and lower-body accessories.",
    "query": "fabric loop resistance bands mini",
    "bullets": [
      "Comfortable on skin",
      "Great for glute work",
      "Choose multiple strengths"
    ]
  },
  {
    "title": "TheraBand (classic)",
    "badge": "Best rehab",
    "desc": "A trusted option often used in physiotherapy settings.",
    "query": "TheraBand resistance band",
    "bullets": [
      "Good for rehab",
      "Consistent resistance",
      "Pick appropriate strength"
    ]
  },
  {
    "title": "Power bands (pull-up assist)",
    "badge": "Best for pull-ups",
    "desc": "Thicker bands for assisted pull-ups and heavier resistance.",
    "query": "pull up assist power bands set",
    "bullets": [
      "Strong resistance",
      "Great for pull-up progress",
      "Requires anchor point"
    ]
  },
  {
    "title": "Door anchor + handles kit",
    "badge": "Best kit",
    "desc": "A simple setup if you’re training in a small space.",
    "query": "resistance bands door anchor handles kit",
    "bullets": [
      "Small-space friendly",
      "Good variety",
      "Check anchor quality"
    ]
  },
  {
    "title": "Ankle straps for cables/bands",
    "badge": "Accessory",
    "desc": "Optional add-on for leg work if you already have long bands.",
    "query": "ankle straps for resistance bands",
    "bullets": [
      "Optional",
      "Adds variety",
      "Works with long bands"
    ]
  }
]

function SummaryBox() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">At a glance</h2>
      <p className="mt-2 text-zinc-700">
        A straightforward shortlist with sensible options for most people — plus guidance on what to look for so you don’t buy on hype.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link className="btn-secondary" href="/movement">Movement hub</Link>
        <Link className="btn-secondary" href="/blog/home-strength-basics-busy-people">Wellness Insights: home strength basics</Link>
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
    headline: "Best Resistance Bands for Home Workouts",
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
      <StructuredData data={{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do bands build muscle?", "acceptedAnswer": {"@type": "Answer", "text": "They can, especially for beginners, if you use enough tension and progressive overload."}}, {"@type": "Question", "name": "Which should I buy first?", "acceptedAnswer": {"@type": "Answer", "text": "A set of long bands is usually the most versatile starting point."}}]}} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Best resistance bands for home workouts</h1>
        <p className="mt-3 text-zinc-700">A practical shortlist of resistance band types (loop bands and long bands) for strength training, rehab, and mobility at home.</p>
      </header>

      <section className="mt-8">
        <SummaryBox />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Top picks (shortlist)</h2>
        <p className="mt-2 text-sm text-zinc-600">Three solid starting points, then a fuller list below.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="Long resistance bands (set)"
            badge="Best all-round"
            description="Most versatile for rows, presses, and assisted movements."
            href={amazonSearchUrl('long resistance bands set with handles')}
            bullets={["Versatile", "Good for full-body workouts", "Check band strength levels"]}
          />

          <ProductPick
            title="Loop mini bands (fabric)"
            badge="Best for glutes"
            description="Great for activation work and lower-body accessories."
            href={amazonSearchUrl('fabric loop resistance bands mini')}
            bullets={["Comfortable on skin", "Great for glute work", "Choose multiple strengths"]}
          />

          <ProductPick
            title="TheraBand (classic)"
            badge="Best rehab"
            description="A trusted option often used in physiotherapy settings."
            href={amazonSearchUrl('TheraBand resistance band')}
            bullets={["Good for rehab", "Consistent resistance", "Pick appropriate strength"]}
          />

        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Full shortlist</h2>
        <p className="mt-2 text-sm text-zinc-600">Choose based on your needs (space, budget, comfort, and how often you’ll actually use it).</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Long resistance bands (set)"
            badge="Best all-round"
            description="Most versatile for rows, presses, and assisted movements."
            href={amazonSearchUrl('long resistance bands set with handles')}
            bullets={["Versatile", "Good for full-body workouts", "Check band strength levels"]}
          />

          <ProductPick
            title="Loop mini bands (fabric)"
            badge="Best for glutes"
            description="Great for activation work and lower-body accessories."
            href={amazonSearchUrl('fabric loop resistance bands mini')}
            bullets={["Comfortable on skin", "Great for glute work", "Choose multiple strengths"]}
          />

          <ProductPick
            title="TheraBand (classic)"
            badge="Best rehab"
            description="A trusted option often used in physiotherapy settings."
            href={amazonSearchUrl('TheraBand resistance band')}
            bullets={["Good for rehab", "Consistent resistance", "Pick appropriate strength"]}
          />

          <ProductPick
            title="Power bands (pull-up assist)"
            badge="Best for pull-ups"
            description="Thicker bands for assisted pull-ups and heavier resistance."
            href={amazonSearchUrl('pull up assist power bands set')}
            bullets={["Strong resistance", "Great for pull-up progress", "Requires anchor point"]}
          />

          <ProductPick
            title="Door anchor + handles kit"
            badge="Best kit"
            description="A simple setup if you’re training in a small space."
            href={amazonSearchUrl('resistance bands door anchor handles kit')}
            bullets={["Small-space friendly", "Good variety", "Check anchor quality"]}
          />

          <ProductPick
            title="Ankle straps for cables/bands"
            badge="Accessory"
            description="Optional add-on for leg work if you already have long bands."
            href={amazonSearchUrl('ankle straps for resistance bands')}
            bullets={["Optional", "Adds variety", "Works with long bands"]}
          />

        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">How we think about “best”</h2>
        <div className="mt-3 space-y-3 text-sm text-zinc-700 max-w-3xl">
          <p>
            “Best” here means: sensible features, decent reviews across many buyers, and a realistic fit for most homes — not hype, not extreme claims.
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
