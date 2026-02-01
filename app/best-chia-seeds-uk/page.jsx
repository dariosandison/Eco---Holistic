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
  title: "Chia seeds (UK): simple shortlist | Wild & Well",
  description: "A shortlist of chia seeds for puddings, oats, and smoothies — plus what to look for (freshness and packaging).",
}

const PICKS = [
  {
    "title": "Organic chia seeds (1kg)",
    "badge": "Good value",
    "desc": "Great if you use chia weekly.",
    "query": "organic chia seeds 1kg",
    "bullets": [
      "Good value",
      "Seal and store well",
      "Use within a reasonable timeframe"
    ]
  },
  {
    "title": "Organic chia seeds (small bag)",
    "badge": "Easy starter",
    "desc": "Start small if you’re trying chia for the first time.",
    "query": "organic chia seeds 300g",
    "bullets": [
      "Lower commitment",
      "Freshness easier",
      "Great for testing"
    ]
  },
  {
    "title": "Chia + flax mix",
    "badge": "Convenient",
    "desc": "Easy option if you like mixing into oats/smoothies.",
    "query": "chia flax seed mix",
    "bullets": [
      "Convenient mix",
      "Check ingredients are just seeds",
      "Store cool/dry"
    ]
  },
  {
    "title": "Chia seeds in glass jar",
    "badge": "Nice storage",
    "desc": "Not necessary, but handy if you like pantry organisation.",
    "query": "chia seeds glass jar",
    "bullets": [
      "Easy storage",
      "Usually pricier",
      "Refill with bulk bags"
    ]
  },
  {
    "title": "White chia seeds",
    "badge": "Optional",
    "desc": "Similar use; pick based on preference and price.",
    "query": "white chia seeds organic",
    "bullets": [
      "Similar nutrition",
      "Often pricier",
      "Choose based on taste/price"
    ]
  },
  {
    "title": "Chia pudding kit (plain)",
    "badge": "Skip extras",
    "desc": "If you buy kits, choose ones without added sugar/flavours.",
    "query": "chia pudding mix no sugar",
    "bullets": [
      "Watch added sugar",
      "Plain is flexible",
      "Make it yourself to save money"
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
      </div>
      <p className="mt-4 text-xs text-zinc-500">Last updated: January 27, 2026</p>
    </div>
  )
}

export default function Page() {
    
  const edu = getMoneyPageEdu('best-chia-seeds-uk')

const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Chia seeds (UK): simple shortlist",
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
        <h1 className="text-4xl font-bold">Chia seeds (UK): simple shortlist</h1>
        <p className="mt-3 text-zinc-700">A shortlist of chia seeds for puddings, oats, and smoothies — plus what to look for (freshness and packaging).</p>

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
            title="Organic chia seeds (1kg)"
            badge="Good value"
            description="Great if you use chia weekly."
            href={amazonSearchUrl('organic chia seeds 1kg')}
            bullets={["Good value", "Seal and store well", "Use within a reasonable timeframe"]}
          />

          <ProductPick
            title="Organic chia seeds (small bag)"
            badge="Easy starter"
            description="Start small if you’re trying chia for the first time."
            href={amazonSearchUrl('organic chia seeds 300g')}
            bullets={["Lower commitment", "Freshness easier", "Great for testing"]}
          />

          <ProductPick
            title="Chia + flax mix"
            badge="Convenient"
            description="Easy option if you like mixing into oats/smoothies."
            href={amazonSearchUrl('chia flax seed mix')}
            bullets={["Convenient mix", "Check ingredients are just seeds", "Store cool/dry"]}
          />

        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Full shortlist</h2>
        <p className="mt-2 text-sm text-zinc-600">Choose based on your needs (space, budget, comfort, and how often you’ll actually use it).</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Organic chia seeds (1kg)"
            badge="Good value"
            description="Great if you use chia weekly."
            href={amazonSearchUrl('organic chia seeds 1kg')}
            bullets={["Good value", "Seal and store well", "Use within a reasonable timeframe"]}
          />

          <ProductPick
            title="Organic chia seeds (small bag)"
            badge="Easy starter"
            description="Start small if you’re trying chia for the first time."
            href={amazonSearchUrl('organic chia seeds 300g')}
            bullets={["Lower commitment", "Freshness easier", "Great for testing"]}
          />

          <ProductPick
            title="Chia + flax mix"
            badge="Convenient"
            description="Easy option if you like mixing into oats/smoothies."
            href={amazonSearchUrl('chia flax seed mix')}
            bullets={["Convenient mix", "Check ingredients are just seeds", "Store cool/dry"]}
          />

          <ProductPick
            title="Chia seeds in glass jar"
            badge="Nice storage"
            description="Not necessary, but handy if you like pantry organisation."
            href={amazonSearchUrl('chia seeds glass jar')}
            bullets={["Easy storage", "Usually pricier", "Refill with bulk bags"]}
          />

          <ProductPick
            title="White chia seeds"
            badge="Optional"
            description="Similar use; pick based on preference and price."
            href={amazonSearchUrl('white chia seeds organic')}
            bullets={["Similar nutrition", "Often pricier", "Choose based on taste/price"]}
          />

          <ProductPick
            title="Chia pudding kit (plain)"
            badge="Skip extras"
            description="If you buy kits, choose ones without added sugar/flavours."
            href={amazonSearchUrl('chia pudding mix no sugar')}
            bullets={["Watch added sugar", "Plain is flexible", "Make it yourself to save money"]}
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
          Some links are affiliate links.
        </p>
      </section>
    
      <MoneyPageNextLinks slug="best-chia-seeds-uk" />


      <MoneyPageFAQ slug="best-chia-seeds-uk" />

</main>
  )
}