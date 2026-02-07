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
  title: "Yoga Mats for Grip & Comfort: shortlist",
  description: "A shortlist of yoga mats that balance grip, cushioning, and durability. Choose based on sweat level and joint comfort.",
}

const PICKS = [
  {
    "title": "Manduka PRO / PROlite",
    "badge": "durability",
    "desc": "Premium mats known for longevity.",
    "query": "Manduka PRO yoga mat",
    "bullets": [
      "Very durable",
      "Great support",
      "Heavier than most mats"
    ]
  },
  {
    "title": "Liforme yoga mat",
    "badge": "grip",
    "desc": "High-grip option, popular for sweaty sessions.",
    "query": "Liforme yoga mat",
    "bullets": [
      "Excellent grip",
      "Alignment markings",
      "Premium price"
    ]
  },
  {
    "title": "Decathlon / Domyos yoga mats",
    "badge": "Good value",
    "desc": "Good starter mats if you’re building the habit.",
    "query": "Decathlon yoga mat Domyos",
    "bullets": [
      "Affordable",
      "Easy to replace",
      "Check thickness"
    ]
  },
  {
    "title": "Gaiam yoga mats",
    "badge": "Starter",
    "desc": "Popular entry-level mats with plenty of styles.",
    "query": "Gaiam yoga mat",
    "bullets": [
      "Good starter range",
      "Widely available",
      "Grip varies by model"
    ]
  },
  {
    "title": "Cork yoga mat",
    "badge": "Natural feel",
    "desc": "Cork can feel grippy as it warms up; check thickness.",
    "query": "cork yoga mat non slip",
    "bullets": [
      "Natural material feel",
      "Good for some sweat levels",
      "Heavier than foam mats"
    ]
  },
  {
    "title": "Extra-thick mats (joint friendly)",
    "badge": "cushioning",
    "desc": "If knees/wrists complain, extra thickness can help.",
    "query": "extra thick yoga mat 10mm",
    "bullets": [
      "More cushioning",
      "Better for floor work",
      "Can be less stable for balancing poses"
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
      <p className="mt-4 text-xs text-zinc-500">Last updated: February 2, 2026 · Wild & Well Editorial Team</p>
    </div>
  )
}

export default function Page() {
    
  const edu = getMoneyPageEdu('best-yoga-mats-grip-comfort')

const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Yoga Mats for Grip & Comfort: shortlist",
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
      <StructuredData data={{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How thick should a mat be?", "acceptedAnswer": {"@type": "Answer", "text": "Most people do well with 4–6mm. Go thicker if you need more cushioning on hard floors."}}, {"@type": "Question", "name": "What about smell/chemicals?", "acceptedAnswer": {"@type": "Answer", "text": "Let new mats air out. If you’re sensitive, choose reputable brands and avoid very strong odours."}}]}} />

      <header>
        <div className="max-w-3xl">
        <h1 className="text-4xl font-bold">yoga mats for grip & comfort: shortlist</h1>
        <p className="mt-3 text-zinc-700">A shortlist of yoga mats that balance grip, cushioning, and durability. Choose based on sweat level and joint comfort.</p>

                </div>

        {/* Hero image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/movement.jpg"
          alt=""
          className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]"
          loading="lazy"
          decoding="async"
        />

        <div className="max-w-3xl">
<EducationFirstCallout topicHref="/movement" topicLabel="Movement basics" insightHref="/blog/home-strength-basics-busy-people" insightLabel="Strength basics" />
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
            title="Manduka PRO / PROlite"
            badge="durability"
            description="Premium mats known for longevity."
            href={amazonSearchUrl('Manduka PRO yoga mat')}
            bullets={["Very durable", "Great support", "Heavier than most mats"]}
          />

          <ProductPick
            title="Liforme yoga mat"
            badge="grip"
            description="High-grip option, popular for sweaty sessions."
            href={amazonSearchUrl('Liforme yoga mat')}
            bullets={["Excellent grip", "Alignment markings", "Premium price"]}
          />

          <ProductPick
            title="Decathlon / Domyos yoga mats"
            badge="Good value"
            description="Good starter mats if you’re building the habit."
            href={amazonSearchUrl('Decathlon yoga mat Domyos')}
            bullets={["Affordable", "Easy to replace", "Check thickness"]}
          />

        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Full shortlist</h2>
        <p className="mt-2 text-sm text-zinc-600">Choose based on your needs (space, budget, comfort, and how often you’ll actually use it).</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Manduka PRO / PROlite"
            badge="durability"
            description="Premium mats known for longevity."
            href={amazonSearchUrl('Manduka PRO yoga mat')}
            bullets={["Very durable", "Great support", "Heavier than most mats"]}
          />

          <ProductPick
            title="Liforme yoga mat"
            badge="grip"
            description="High-grip option, popular for sweaty sessions."
            href={amazonSearchUrl('Liforme yoga mat')}
            bullets={["Excellent grip", "Alignment markings", "Premium price"]}
          />

          <ProductPick
            title="Decathlon / Domyos yoga mats"
            badge="Good value"
            description="Good starter mats if you’re building the habit."
            href={amazonSearchUrl('Decathlon yoga mat Domyos')}
            bullets={["Affordable", "Easy to replace", "Check thickness"]}
          />

          <ProductPick
            title="Gaiam yoga mats"
            badge="Starter"
            description="Popular entry-level mats with plenty of styles."
            href={amazonSearchUrl('Gaiam yoga mat')}
            bullets={["Good starter range", "Widely available", "Grip varies by model"]}
          />

          <ProductPick
            title="Cork yoga mat"
            badge="Natural feel"
            description="Cork can feel grippy as it warms up; check thickness."
            href={amazonSearchUrl('cork yoga mat non slip')}
            bullets={["Natural material feel", "Good for some sweat levels", "Heavier than foam mats"]}
          />

          <ProductPick
            title="Extra-thick mats (joint friendly)"
            badge="cushioning"
            description="If knees/wrists complain, extra thickness can help."
            href={amazonSearchUrl('extra thick yoga mat 10mm')}
            bullets={["More cushioning", "Better for floor work", "Can be less stable for balancing poses"]}
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
    
      <MoneyPageNextLinks slug="best-yoga-mats-grip-comfort" />

</main>
  )
}