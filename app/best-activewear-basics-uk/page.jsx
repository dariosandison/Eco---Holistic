import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageQuickCompare from '@/components/MoneyPageQuickCompare'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'




export const metadata = {
  title: "Activewear Basics (UK): shortlist | Wild & Well",
  description: "A practical shortlist of activewear basics (tops, leggings, socks, layers) that prioritise comfort and durability.",
}

const PICKS = [
  {
    "title": "Moisture-wicking training tops",
    "badge": "all-round",
    "desc": "Simple breathable tops for walking and training.",
    "query": "men women moisture wicking training top",
    "bullets": [
      "Breathable",
      "Easy to wash",
      "Buy 2–3 and rotate"
    ]
  },
  {
    "title": "Supportive sports bra (women)",
    "badge": "Key comfort",
    "desc": "If you train regularly, comfort and fit matter more than brand.",
    "query": "supportive sports bra high impact",
    "bullets": [
      "Fit first",
      "Return policy matters",
      "Choose level of support you need"
    ]
  },
  {
    "title": "Training leggings / shorts",
    "badge": "Everyday",
    "desc": "Comfortable basics that don’t ride up.",
    "query": "training leggings squat proof",
    "bullets": [
      "Comfortable",
      "Check size guide",
      "Choose pockets if you’ll use them"
    ]
  },
  {
    "title": "Merino or performance socks",
    "badge": "Underrated",
    "desc": "Socks can make walking and training far more comfortable.",
    "query": "merino walking socks",
    "bullets": [
      "Less blister risk",
      "Comfortable",
      "Good for walking"
    ]
  },
  {
    "title": "Lightweight zip layer",
    "badge": "Outdoor layer",
    "desc": "Useful for walking in UK weather.",
    "query": "lightweight running jacket windproof",
    "bullets": [
      "Wind protection",
      "Packable",
      "Breathable helps"
    ]
  },
  {
    "title": "Simple cap / beanie",
    "badge": "Optional",
    "desc": "Small comfort items that help consistency in bad weather.",
    "query": "running cap beanie",
    "bullets": [
      "Comfort in weather",
      "Cheap",
      "Optional"
    ]
  }
]

function SummaryBox() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">At a glance</h2>
      <p className="mt-2 text-zinc-700">
        Comfort-first activewear basics with fabric and sizing notes.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link className="btn-secondary" href="/movement">Movement</Link>
        <Link className="btn-secondary" href="/picks">Favourites</Link>
      </div>
      <p className="mt-4 text-xs text-zinc-500">Last updated: February 2, 2026 · Wild & Well Editorial Team</p>
    </div>
  )
}

export default function Page() {
    
  const edu = getMoneyPageEdu('best-activewear-basics-uk')

const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Activewear Basics (UK): shortlist",
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
      <StructuredData data={{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do I need “technical” clothing?", "acceptedAnswer": {"@type": "Answer", "text": "Not necessarily. Comfortable basics are enough for most beginners. Buy for comfort and durability, not buzzwords."}}]}} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">activewear basics (UK): shortlist</h1>
        <p className="mt-3 text-zinc-700">A practical shortlist of activewear basics (tops, leggings, socks, layers) that prioritise comfort and durability.</p>

        <EducationFirstCallout topicHref="/movement" topicLabel="Movement basics" insightHref="/blog/home-strength-basics-busy-people" insightLabel="Strength basics" />
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
            title="Moisture-wicking training tops"
            badge="all-round"
            description="Simple breathable tops for walking and training."
            href={amazonSearchUrl('men women moisture wicking training top')}
            bullets={["Breathable", "Easy to wash", "Buy 2\u20133 and rotate"]}
          />

          <ProductPick
            title="Supportive sports bra (women)"
            badge="Key comfort"
            description="If you train regularly, comfort and fit matter more than brand."
            href={amazonSearchUrl('supportive sports bra high impact')}
            bullets={["Fit first", "Return policy matters", "Choose level of support you need"]}
          />

          <ProductPick
            title="Training leggings / shorts"
            badge="Everyday"
            description="Comfortable basics that don’t ride up."
            href={amazonSearchUrl('training leggings squat proof')}
            bullets={["Comfortable", "Check size guide", "Choose pockets if you\u2019ll use them"]}
          />

        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Full shortlist</h2>
        <p className="mt-2 text-sm text-zinc-600">Choose based on your needs (space, budget, comfort, and how often you’ll actually use it).</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Moisture-wicking training tops"
            badge="all-round"
            description="Simple breathable tops for walking and training."
            href={amazonSearchUrl('men women moisture wicking training top')}
            bullets={["Breathable", "Easy to wash", "Buy 2\u20133 and rotate"]}
          />

          <ProductPick
            title="Supportive sports bra (women)"
            badge="Key comfort"
            description="If you train regularly, comfort and fit matter more than brand."
            href={amazonSearchUrl('supportive sports bra high impact')}
            bullets={["Fit first", "Return policy matters", "Choose level of support you need"]}
          />

          <ProductPick
            title="Training leggings / shorts"
            badge="Everyday"
            description="Comfortable basics that don’t ride up."
            href={amazonSearchUrl('training leggings squat proof')}
            bullets={["Comfortable", "Check size guide", "Choose pockets if you\u2019ll use them"]}
          />

          <ProductPick
            title="Merino or performance socks"
            badge="Underrated"
            description="Socks can make walking and training far more comfortable."
            href={amazonSearchUrl('merino walking socks')}
            bullets={["Less blister risk", "Comfortable", "Good for walking"]}
          />

          <ProductPick
            title="Lightweight zip layer"
            badge="Outdoor layer"
            description="Useful for walking in UK weather."
            href={amazonSearchUrl('lightweight running jacket windproof')}
            bullets={["Wind protection", "Packable", "Breathable helps"]}
          />

          <ProductPick
            title="Simple cap / beanie"
            badge="Optional"
            description="Small comfort items that help consistency in bad weather."
            href={amazonSearchUrl('running cap beanie')}
            bullets={["Comfort in weather", "Cheap", "Optional"]}
          />

        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">How we think about “best”</h2>
        <div className="mt-3 space-y-3 text-sm text-zinc-700 max-w-3xl">
          <p>
            “Shortlist” here means: sensible features, consistent buyer reviews, and a realistic fit for most people.
          </p>
          <p>
            Always check sizing/specs and current pricing before you buy. If a product makes strong health claims without evidence, treat that as marketing.
          </p>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Some links are affiliate links. If you buy via them, we earn a commission.
        </p>
      </section>
    
      <MoneyPageNextLinks slug="best-activewear-basics-uk" />

</main>
  )
}