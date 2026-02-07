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
  title: "Fermented foods to start with",
  description: "A shortlist of sauerkraut and kimchi options with simple ingredients. Look for refrigerated jars and minimal additives where possible.",
}

const PICKS = [
  {
    "title": "Refrigerated sauerkraut (simple ingredients)",
    "badge": "Easy starter",
    "desc": "Look for cabbage, salt — and not much else.",
    "query": "refrigerated sauerkraut cabbage salt",
    "bullets": [
      "Simple ingredients",
      "Check refrigeration",
      "Taste varies a lot"
    ]
  },
  {
    "title": "Kimchi (refrigerated)",
    "badge": "flavour",
    "desc": "Great as a side, in rice bowls, or eggs.",
    "query": "kimchi refrigerated jar",
    "bullets": [
      "Great flavour",
      "Check spice level",
      "Watch added sugars if sensitive"
    ]
  },
  {
    "title": "Organic sauerkraut",
    "badge": "Organic pick",
    "desc": "If organic matters to you, pick simple recipes.",
    "query": "organic sauerkraut jar refrigerated",
    "bullets": [
      "Simple recipe",
      "Check storage",
      "Start with small jar"
    ]
  },
  {
    "title": "Non-spicy kimchi",
    "badge": "Mild option",
    "desc": "If you don’t love spice, choose mild versions.",
    "query": "mild kimchi jar",
    "bullets": [
      "Milder taste",
      "Good starter option",
      "Still check ingredients"
    ]
  },
  {
    "title": "Fermented vegetable mix",
    "badge": "Variety",
    "desc": "If you want variety, choose minimal-ingredient mixes.",
    "query": "fermented vegetables jar",
    "bullets": [
      "Variety",
      "Check additives",
      "Start with small portions"
    ]
  },
  {
    "title": "Starter culture kits (DIY)",
    "badge": "DIY",
    "desc": "Only if you enjoy making food — not required.",
    "query": "sauerkraut starter culture kit",
    "bullets": [
      "DIY option",
      "Not necessary",
      "Good if you love fermenting"
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
        <Link className="btn-secondary" href="/blog/ultra-processed-foods-what-they-are-and-why-they-matter">Blog: UPFs</Link>
      </div>
      <p className="mt-4 text-xs text-zinc-500">Last updated: February 2, 2026 · Wild & Well Editorial Team</p>
    </div>
  )
}

export default function Page() {
    
  const edu = getMoneyPageEdu('best-fermented-foods-sauerkraut-kimchi')

const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Fermented foods to start with",
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

      <header>
        <div className="max-w-3xl">
        <h1 className="text-4xl font-bold">Fermented foods to start with</h1>
        <p className="mt-3 text-zinc-700">A shortlist of sauerkraut and kimchi options with simple ingredients. Look for refrigerated jars and minimal additives where possible.</p>

                </div>

        {/* Hero image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/nutrition.jpg"
          alt=""
          className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]"
          loading="lazy"
          decoding="async"
        />

        <div className="max-w-3xl">
<EducationFirstCallout topicHref="/topics" topicLabel="Explore topics" insightHref="/blog" insightLabel="Read Wellness Insights" />
              </div>
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
            title="Refrigerated sauerkraut (simple ingredients)"
            badge="Easy starter"
            description="Look for cabbage, salt — and not much else."
            href={amazonSearchUrl('refrigerated sauerkraut cabbage salt')}
            bullets={["Simple ingredients", "Check refrigeration", "Taste varies a lot"]}
          />

          <ProductPick
            title="Kimchi (refrigerated)"
            badge="flavour"
            description="Great as a side, in rice bowls, or eggs."
            href={amazonSearchUrl('kimchi refrigerated jar')}
            bullets={["Great flavour", "Check spice level", "Watch added sugars if sensitive"]}
          />

          <ProductPick
            title="Organic sauerkraut"
            badge="Organic pick"
            description="If organic matters to you, pick simple recipes."
            href={amazonSearchUrl('organic sauerkraut jar refrigerated')}
            bullets={["Simple recipe", "Check storage", "Start with small jar"]}
          />

        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Full shortlist</h2>
        <p className="mt-2 text-sm text-zinc-600">Choose based on your needs (space, budget, comfort, and how often you’ll actually use it).</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Refrigerated sauerkraut (simple ingredients)"
            badge="Easy starter"
            description="Look for cabbage, salt — and not much else."
            href={amazonSearchUrl('refrigerated sauerkraut cabbage salt')}
            bullets={["Simple ingredients", "Check refrigeration", "Taste varies a lot"]}
          />

          <ProductPick
            title="Kimchi (refrigerated)"
            badge="flavour"
            description="Great as a side, in rice bowls, or eggs."
            href={amazonSearchUrl('kimchi refrigerated jar')}
            bullets={["Great flavour", "Check spice level", "Watch added sugars if sensitive"]}
          />

          <ProductPick
            title="Organic sauerkraut"
            badge="Organic pick"
            description="If organic matters to you, pick simple recipes."
            href={amazonSearchUrl('organic sauerkraut jar refrigerated')}
            bullets={["Simple recipe", "Check storage", "Start with small jar"]}
          />

          <ProductPick
            title="Non-spicy kimchi"
            badge="Mild option"
            description="If you don’t love spice, choose mild versions."
            href={amazonSearchUrl('mild kimchi jar')}
            bullets={["Milder taste", "Good starter option", "Still check ingredients"]}
          />

          <ProductPick
            title="Fermented vegetable mix"
            badge="Variety"
            description="If you want variety, choose minimal-ingredient mixes."
            href={amazonSearchUrl('fermented vegetables jar')}
            bullets={["Variety", "Check additives", "Start with small portions"]}
          />

          <ProductPick
            title="Starter culture kits (DIY)"
            badge="DIY"
            description="Only if you enjoy making food — not required."
            href={amazonSearchUrl('sauerkraut starter culture kit')}
            bullets={["DIY option", "Not necessary", "Good if you love fermenting"]}
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
    
      <MoneyPageNextLinks slug="best-fermented-foods-sauerkraut-kimchi" />


      <MoneyPageFAQ slug="best-fermented-foods-sauerkraut-kimchi" />

</main>
  )
}