import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageQuickCompare from '@/components/MoneyPageQuickCompare'
import MoneyPageFAQ from '@/components/MoneyPageFAQ'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'




export const metadata = {
  title: "Ground flaxseed (UK): simple shortlist",
  description: "A shortlist of ground flaxseed (linseed) and how to store it so it stays fresh. Great for oats, yoghurt, and baking.",
}

const PICKS = [
  {
    "title": "Organic ground flaxseed (linseed)",
    "badge": "all-round",
    "desc": "Easy to add to oats, yoghurt, and baking.",
    "query": "organic ground flaxseed linseed",
    "bullets": [
      "Easy add-in",
      "Check packaging",
      "Store cool/dry"
    ]
  },
  {
    "title": "Flaxseed (whole) + grinder",
    "badge": "Freshness control",
    "desc": "Whole seeds keep longer; grind small batches.",
    "query": "organic whole flaxseed linseed",
    "bullets": [
      "Keeps longer",
      "Grind as needed",
      "More effort"
    ]
  },
  {
    "title": "Golden flaxseed (ground)",
    "badge": "Taste preference",
    "desc": "Milder flavour for some people.",
    "query": "golden flaxseed ground",
    "bullets": [
      "Milder taste",
      "Check freshness",
      "Store well"
    ]
  },
  {
    "title": "Flaxseed meal (baking)",
    "badge": "Baking",
    "desc": "Often marketed for baking; check it’s just flax.",
    "query": "flaxseed meal organic",
    "bullets": [
      "Good for baking",
      "Check ingredients",
      "Avoid added sugars"
    ]
  },
  {
    "title": "Ground flax in resealable pouch",
    "badge": "Convenient",
    "desc": "Resealable packaging helps keep it fresher.",
    "query": "ground flaxseed resealable pouch",
    "bullets": [
      "Convenient",
      "Seal tightly",
      "Use within weeks/months"
    ]
  },
  {
    "title": "Flax + fibre blends",
    "badge": "Optional",
    "desc": "Only if ingredients are simple and you know why you want it.",
    "query": "flaxseed fibre blend",
    "bullets": [
      "Check ingredients",
      "Avoid proprietary blends",
      "Start small"
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
        <Link className="btn-secondary" href="/nutrition">Nutrition</Link>
        <Link className="btn-secondary" href="/blog/fibre-gut-health-practical-guide">Blog: fibre & gut health</Link>
      </div>
      <p className="mt-4 text-xs text-zinc-500">Last updated: February 2, 2026 · Wild & Well Editorial Team</p>
    </div>
  )
}

export default function Page() {
    
  const edu = getMoneyPageEdu('best-ground-flaxseed-uk')

const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Ground flaxseed (UK): simple shortlist",
    dateModified: '2026-02-02',
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
        <h1 className="text-4xl font-bold">Ground flaxseed (UK): simple shortlist</h1>
        <p className="mt-3 text-zinc-700">A shortlist of ground flaxseed (linseed) and how to store it so it stays fresh. Great for oats, yoghurt, and baking.</p>

        <EducationFirstCallout topicHref="/nutrition" topicLabel="Nutrition basics" insightHref="/blog/fibre-gut-health-practical-guide" insightLabel="Fibre & gut health" />
      </header>

      
      <MoneyPageEducationBlock edu={edu} />

      <MoneyPageQuickCompare picks={PICKS} />
<section className="mt-8">
        <SummaryBox />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Top options (shortlist)</h2>
        <p className="mt-2 text-sm text-zinc-600">Three solid starting points, then a fuller list below.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="Organic ground flaxseed (linseed)"
            badge="all-round"
            description="Easy to add to oats, yoghurt, and baking."
            href={amazonSearchUrl('organic ground flaxseed linseed')}
            bullets={["Easy add-in", "Check packaging", "Store cool/dry"]}
          />

          <ProductPick
            title="Flaxseed (whole) + grinder"
            badge="Freshness control"
            description="Whole seeds keep longer; grind small batches."
            href={amazonSearchUrl('organic whole flaxseed linseed')}
            bullets={["Keeps longer", "Grind as needed", "More effort"]}
          />

          <ProductPick
            title="Golden flaxseed (ground)"
            badge="Taste preference"
            description="Milder flavour for some people."
            href={amazonSearchUrl('golden flaxseed ground')}
            bullets={["Milder taste", "Check freshness", "Store well"]}
          />

        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Full shortlist</h2>
        <p className="mt-2 text-sm text-zinc-600">Choose based on your needs (space, budget, comfort, and how often you’ll actually use it).</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Organic ground flaxseed (linseed)"
            badge="all-round"
            description="Easy to add to oats, yoghurt, and baking."
            href={amazonSearchUrl('organic ground flaxseed linseed')}
            bullets={["Easy add-in", "Check packaging", "Store cool/dry"]}
          />

          <ProductPick
            title="Flaxseed (whole) + grinder"
            badge="Freshness control"
            description="Whole seeds keep longer; grind small batches."
            href={amazonSearchUrl('organic whole flaxseed linseed')}
            bullets={["Keeps longer", "Grind as needed", "More effort"]}
          />

          <ProductPick
            title="Golden flaxseed (ground)"
            badge="Taste preference"
            description="Milder flavour for some people."
            href={amazonSearchUrl('golden flaxseed ground')}
            bullets={["Milder taste", "Check freshness", "Store well"]}
          />

          <ProductPick
            title="Flaxseed meal (baking)"
            badge="Baking"
            description="Often marketed for baking; check it’s just flax."
            href={amazonSearchUrl('flaxseed meal organic')}
            bullets={["Good for baking", "Check ingredients", "Avoid added sugars"]}
          />

          <ProductPick
            title="Ground flax in resealable pouch"
            badge="Convenient"
            description="Resealable packaging helps keep it fresher."
            href={amazonSearchUrl('ground flaxseed resealable pouch')}
            bullets={["Convenient", "Seal tightly", "Use within weeks/months"]}
          />

          <ProductPick
            title="Flax + fibre blends"
            badge="Optional"
            description="Only if ingredients are simple and you know why you want it."
            href={amazonSearchUrl('flaxseed fibre blend')}
            bullets={["Check ingredients", "Avoid proprietary blends", "Start small"]}
          />

        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">How we build our shortlists</h2>
        <div className="mt-3 space-y-3 text-sm text-zinc-700 max-w-3xl">
          <p>
            Our approach here is: sensible features, consistent buyer reviews, and a realistic fit for most people.
          </p>
          <p>
            Always check sizing/specs and current pricing before you buy. If a product makes strong health claims without evidence, treat that as marketing.
          </p>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Some links are affiliate links. If you buy via them, we earn a commission.
        </p>
      </section>
    
      <MoneyPageNextLinks slug="best-ground-flaxseed-uk" />


      <MoneyPageFAQ slug="best-ground-flaxseed-uk" />

</main>
  )
}