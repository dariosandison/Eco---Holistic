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
  title: "Matcha (UK): what to buy | Wild & Well",
  description: "A shortlist of matcha options (everyday vs ceremonial-style) and what to look for: origin, taste, and how you’ll use it.",
}

const PICKS = [
  {
    "title": "Everyday matcha (cooking grade)",
    "badge": "Good value",
    "desc": "Great for smoothies and lattes.",
    "query": "matcha powder culinary grade",
    "bullets": [
      "Great for lattes",
      "Good value",
      "Taste is less delicate"
    ]
  },
  {
    "title": "Ceremonial-style matcha (small tin)",
    "badge": "taste",
    "desc": "If you drink it straight, small tins keep it fresher.",
    "query": "ceremonial matcha tin",
    "bullets": [
      "Better taste",
      "Buy small tins",
      "Store airtight away from light"
    ]
  },
  {
    "title": "Organic matcha",
    "badge": "Organic pick",
    "desc": "If you prefer organic, choose reputable brands and check origin.",
    "query": "organic matcha powder",
    "bullets": [
      "Check origin",
      "Avoid big health claims",
      "Buy quantity you’ll use"
    ]
  },
  {
    "title": "Matcha starter kit (whisk + bowl)",
    "badge": "Starter kit",
    "desc": "Optional, but makes preparation nicer if you’re making matcha often.",
    "query": "matcha whisk set",
    "bullets": [
      "Nice ritual",
      "Not required",
      "Good gift option"
    ]
  },
  {
    "title": "Matcha sachets (plain)",
    "badge": "Convenient",
    "desc": "If you travel, sachets can be practical.",
    "query": "matcha sachets unsweetened",
    "bullets": [
      "Convenient",
      "Watch added sugar",
      "Plain sachets are best"
    ]
  },
  {
    "title": "Decaf green tea alternative",
    "badge": "Alternative",
    "desc": "If caffeine-sensitive, consider lower-caffeine alternatives.",
    "query": "decaf green tea",
    "bullets": [
      "Lower caffeine",
      "Cheaper",
      "Not matcha but still useful"
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
    
  const edu = getMoneyPageEdu('best-organic-matcha-uk')

const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Matcha (UK): what to buy",
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
        <h1 className="text-4xl font-bold">Matcha (UK): what to buy</h1>
        <p className="mt-3 text-zinc-700">A shortlist of matcha options (everyday vs ceremonial-style) and what to look for: origin, taste, and how you’ll use it.</p>

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
            title="Everyday matcha (cooking grade)"
            badge="Good value"
            description="Great for smoothies and lattes."
            href={amazonSearchUrl('matcha powder culinary grade')}
            bullets={["Great for lattes", "Good value", "Taste is less delicate"]}
          />

          <ProductPick
            title="Ceremonial-style matcha (small tin)"
            badge="taste"
            description="If you drink it straight, small tins keep it fresher."
            href={amazonSearchUrl('ceremonial matcha tin')}
            bullets={["Better taste", "Buy small tins", "Store airtight away from light"]}
          />

          <ProductPick
            title="Organic matcha"
            badge="Organic pick"
            description="If you prefer organic, choose reputable brands and check origin."
            href={amazonSearchUrl('organic matcha powder')}
            bullets={["Check origin", "Avoid big health claims", "Buy quantity you\u2019ll use"]}
          />

        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Full shortlist</h2>
        <p className="mt-2 text-sm text-zinc-600">Choose based on your needs (space, budget, comfort, and how often you’ll actually use it).</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Everyday matcha (cooking grade)"
            badge="Good value"
            description="Great for smoothies and lattes."
            href={amazonSearchUrl('matcha powder culinary grade')}
            bullets={["Great for lattes", "Good value", "Taste is less delicate"]}
          />

          <ProductPick
            title="Ceremonial-style matcha (small tin)"
            badge="taste"
            description="If you drink it straight, small tins keep it fresher."
            href={amazonSearchUrl('ceremonial matcha tin')}
            bullets={["Better taste", "Buy small tins", "Store airtight away from light"]}
          />

          <ProductPick
            title="Organic matcha"
            badge="Organic pick"
            description="If you prefer organic, choose reputable brands and check origin."
            href={amazonSearchUrl('organic matcha powder')}
            bullets={["Check origin", "Avoid big health claims", "Buy quantity you\u2019ll use"]}
          />

          <ProductPick
            title="Matcha starter kit (whisk + bowl)"
            badge="Starter kit"
            description="Optional, but makes preparation nicer if you’re making matcha often."
            href={amazonSearchUrl('matcha whisk set')}
            bullets={["Nice ritual", "Not required", "Good gift option"]}
          />

          <ProductPick
            title="Matcha sachets (plain)"
            badge="Convenient"
            description="If you travel, sachets can be practical."
            href={amazonSearchUrl('matcha sachets unsweetened')}
            bullets={["Convenient", "Watch added sugar", "Plain sachets are best"]}
          />

          <ProductPick
            title="Decaf green tea alternative"
            badge="Alternative"
            description="If caffeine-sensitive, consider lower-caffeine alternatives."
            href={amazonSearchUrl('decaf green tea')}
            bullets={["Lower caffeine", "Cheaper", "Not matcha but still useful"]}
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
    
      <MoneyPageNextLinks slug="best-organic-matcha-uk" />


      <MoneyPageFAQ slug="best-organic-matcha-uk" />

</main>
  )
}