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
  title: "Walking Shoes for Daily Steps (UK): shortlist | Wild & Well",
  description: "A comfort-first shortlist of walking shoes for daily steps. Focus on fit, cushioning, and the surfaces you walk on.",
}

const PICKS = [
  {
    "title": "Skechers GOwalk range",
    "badge": "comfort",
    "desc": "Popular comfort-first walking shoes.",
    "query": "Skechers GOwalk walking shoes men women",
    "bullets": [
      "Comfort-first",
      "Easy daily wear",
      "Try sizing carefully"
    ]
  },
  {
    "title": "New Balance walking/running comfort models",
    "badge": "support",
    "desc": "Good if you want more structured support.",
    "query": "New Balance walking shoes cushioned",
    "bullets": [
      "Supportive feel",
      "Good cushioning",
      "Pick the right width"
    ]
  },
  {
    "title": "ASICS Gel (walking-friendly models)",
    "badge": "cushioned",
    "desc": "Cushioning-focused options that many people like for longer walks.",
    "query": "ASICS Gel walking shoes",
    "bullets": [
      "Good cushioning",
      "Often durable",
      "Check fit and toe box"
    ]
  },
  {
    "title": "Brooks Ghost / Glycerin (walking)",
    "badge": "Premium",
    "desc": "Often loved for comfort on long walks (marketed as running shoes too).",
    "query": "Brooks Ghost shoes",
    "bullets": [
      "Comfortable for long walks",
      "Quality build",
      "More expensive"
    ]
  },
  {
    "title": "HOKA Clifton (walking)",
    "badge": "Max cushion",
    "desc": "For people who like a softer, cushioned feel.",
    "query": "HOKA Clifton shoes",
    "bullets": [
      "Very cushioned",
      "Light for the cushion",
      "Not everyone likes the softness"
    ]
  },
  {
    "title": "Merrell walking/hiking casual models",
    "badge": "Outdoor option",
    "desc": "If you walk outdoors often and want a grippier sole.",
    "query": "Merrell walking shoes",
    "bullets": [
      "Grippy sole",
      "Outdoor-friendly",
      "Check breathability"
    ]
  }
]

function SummaryBox() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">At a glance</h2>
      <p className="mt-2 text-zinc-700">
        A straightforward shortlist with sensible options for most people — plus guidance on what to look for before you buy.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link className="btn-secondary" href="/movement">Movement</Link>
      </div>
      <p className="mt-4 text-xs text-zinc-500">Last updated: January 27, 2026</p>
    </div>
  )
}

export default function Page() {
    
  const edu = getMoneyPageEdu('best-walking-shoes-daily-steps-uk')

const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Walking Shoes for Daily Steps (UK): shortlist",
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
      <StructuredData data={{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Should I buy running shoes for walking?", "acceptedAnswer": {"@type": "Answer", "text": "Often yes — many running shoes work well for walking due to cushioning and support."}}, {"@type": "Question", "name": "What matters most?", "acceptedAnswer": {"@type": "Answer", "text": "Fit and comfort. If the shoe annoys you, you won’t wear it."}}]}} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Walking shoes for daily steps (UK): shortlist</h1>
        <p className="mt-3 text-zinc-700">A comfort-first shortlist of walking shoes for daily steps. Focus on fit, cushioning, and the surfaces you walk on.</p>

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
            title="Skechers GOwalk range"
            badge="comfort"
            description="Popular comfort-first walking shoes."
            href={amazonSearchUrl('Skechers GOwalk walking shoes men women')}
            bullets={["Comfort-first", "Easy daily wear", "Try sizing carefully"]}
          />

          <ProductPick
            title="New Balance walking/running comfort models"
            badge="support"
            description="Good if you want more structured support."
            href={amazonSearchUrl('New Balance walking shoes cushioned')}
            bullets={["Supportive feel", "Good cushioning", "Pick the right width"]}
          />

          <ProductPick
            title="ASICS Gel (walking-friendly models)"
            badge="cushioned"
            description="Cushioning-focused options that many people like for longer walks."
            href={amazonSearchUrl('ASICS Gel walking shoes')}
            bullets={["Good cushioning", "Often durable", "Check fit and toe box"]}
          />

        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Full shortlist</h2>
        <p className="mt-2 text-sm text-zinc-600">Choose based on your needs (space, budget, comfort, and how often you’ll actually use it).</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Skechers GOwalk range"
            badge="comfort"
            description="Popular comfort-first walking shoes."
            href={amazonSearchUrl('Skechers GOwalk walking shoes men women')}
            bullets={["Comfort-first", "Easy daily wear", "Try sizing carefully"]}
          />

          <ProductPick
            title="New Balance walking/running comfort models"
            badge="support"
            description="Good if you want more structured support."
            href={amazonSearchUrl('New Balance walking shoes cushioned')}
            bullets={["Supportive feel", "Good cushioning", "Pick the right width"]}
          />

          <ProductPick
            title="ASICS Gel (walking-friendly models)"
            badge="cushioned"
            description="Cushioning-focused options that many people like for longer walks."
            href={amazonSearchUrl('ASICS Gel walking shoes')}
            bullets={["Good cushioning", "Often durable", "Check fit and toe box"]}
          />

          <ProductPick
            title="Brooks Ghost / Glycerin (walking)"
            badge="Premium"
            description="Often loved for comfort on long walks (marketed as running shoes too)."
            href={amazonSearchUrl('Brooks Ghost shoes')}
            bullets={["Comfortable for long walks", "Quality build", "More expensive"]}
          />

          <ProductPick
            title="HOKA Clifton (walking)"
            badge="Max cushion"
            description="For people who like a softer, cushioned feel."
            href={amazonSearchUrl('HOKA Clifton shoes')}
            bullets={["Very cushioned", "Light for the cushion", "Not everyone likes the softness"]}
          />

          <ProductPick
            title="Merrell walking/hiking casual models"
            badge="Outdoor option"
            description="If you walk outdoors often and want a grippier sole."
            href={amazonSearchUrl('Merrell walking shoes')}
            bullets={["Grippy sole", "Outdoor-friendly", "Check breathability"]}
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
          Some links are affiliate links.
        </p>
      </section>
    
      <MoneyPageNextLinks slug="best-walking-shoes-daily-steps-uk" />

</main>
  )
}