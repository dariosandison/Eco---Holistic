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
  title: "Smart Scales (UK): shortlist | Wild & Well",
  description: "A shortlist of smart scales that track trends over time. Useful if you can use the data calmly and consistently.",
}

const PICKS = [
  {
    "title": "Withings Body / Body+",
    "badge": "Overall favourite",
    "desc": "Strong app and a trusted smart-scale brand.",
    "query": "Withings Body smart scale",
    "bullets": [
      "Good long-term trend tracking",
      "Strong app experience",
      "Multiple profiles"
    ]
  },
  {
    "title": "RENPHO smart scale",
    "badge": "Good value",
    "desc": "Popular budget pick with simple trend graphs.",
    "query": "RENPHO smart scale",
    "bullets": [
      "Affordable",
      "App is easy",
      "Ignore the more speculative body metrics"
    ]
  },
  {
    "title": "Eufy Smart Scale",
    "badge": "Good alternative",
    "desc": "Solid brand with a clean app and decent hardware.",
    "query": "Eufy smart scale",
    "bullets": [
      "Good value",
      "Nice UI",
      "Use trends, not daily numbers"
    ]
  },
  {
    "title": "Fitbit Aria Air",
    "badge": "Simple",
    "desc": "If you want simple weight/BMI tracking without extra metrics.",
    "query": "Fitbit Aria Air scale",
    "bullets": [
      "Simple",
      "Pairs with Fitbit",
      "No complex metrics"
    ]
  },
  {
    "title": "Tanita body composition scales",
    "badge": "Premium",
    "desc": "Long-standing scales brand; pick models that fit your needs.",
    "query": "Tanita body composition scale",
    "bullets": [
      "Established brand",
      "Many model options",
      "Choose for features you’ll use"
    ]
  },
  {
    "title": "Salter smart scales",
    "badge": "Budget option",
    "desc": "Widely available in the UK and simple to start.",
    "query": "Salter smart scales",
    "bullets": [
      "Easy to buy locally",
      "Good starter choice",
      "App varies by model"
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
        <Link className="btn-secondary" href="/blog/home-strength-basics-busy-people">Blog: strength basics</Link>
      </div>
      <p className="mt-4 text-xs text-zinc-500">Last updated: February 2, 2026 · Wild & Well Editorial Team</p>
    </div>
  )
}

export default function Page() {
    
  const edu = getMoneyPageEdu('best-smart-scales-uk')

const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Smart Scales (UK): shortlist",
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
      <StructuredData data={{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Are body-fat percentage readings accurate?", "acceptedAnswer": {"@type": "Answer", "text": "Treat them as estimates. The best use is tracking trends over time under similar conditions, not absolute accuracy."}}, {"@type": "Question", "name": "How often should I weigh?", "acceptedAnswer": {"@type": "Answer", "text": "If you use a scale, many people prefer weekly or twice-weekly to avoid fixation. Choose what keeps you sane and consistent."}}]}} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Smart scales (UK): shortlist</h1>
        <p className="mt-3 text-zinc-700">A shortlist of smart scales that track trends over time. Useful if you can use the data calmly and consistently.</p>

        <EducationFirstCallout topicHref="/topics" topicLabel="Explore topics" insightHref="/blog" insightLabel="Read Wellness Insights" />
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
            title="Withings Body / Body+"
            badge="Overall favourite"
            description="Strong app and a trusted smart-scale brand."
            href={amazonSearchUrl('Withings Body smart scale')}
            bullets={["Good long-term trend tracking", "Strong app experience", "Multiple profiles"]}
          />

          <ProductPick
            title="RENPHO smart scale"
            badge="Good value"
            description="Popular budget pick with simple trend graphs."
            href={amazonSearchUrl('RENPHO smart scale')}
            bullets={["Affordable", "App is easy", "Ignore the more speculative body metrics"]}
          />

          <ProductPick
            title="Eufy Smart Scale"
            badge="Good alternative"
            description="Solid brand with a clean app and decent hardware."
            href={amazonSearchUrl('Eufy smart scale')}
            bullets={["Good value", "Nice UI", "Use trends, not daily numbers"]}
          />

        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Full shortlist</h2>
        <p className="mt-2 text-sm text-zinc-600">Choose based on your needs (space, budget, comfort, and how often you’ll actually use it).</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Withings Body / Body+"
            badge="Overall favourite"
            description="Strong app and a trusted smart-scale brand."
            href={amazonSearchUrl('Withings Body smart scale')}
            bullets={["Good long-term trend tracking", "Strong app experience", "Multiple profiles"]}
          />

          <ProductPick
            title="RENPHO smart scale"
            badge="Good value"
            description="Popular budget pick with simple trend graphs."
            href={amazonSearchUrl('RENPHO smart scale')}
            bullets={["Affordable", "App is easy", "Ignore the more speculative body metrics"]}
          />

          <ProductPick
            title="Eufy Smart Scale"
            badge="Good alternative"
            description="Solid brand with a clean app and decent hardware."
            href={amazonSearchUrl('Eufy smart scale')}
            bullets={["Good value", "Nice UI", "Use trends, not daily numbers"]}
          />

          <ProductPick
            title="Fitbit Aria Air"
            badge="Simple"
            description="If you want simple weight/BMI tracking without extra metrics."
            href={amazonSearchUrl('Fitbit Aria Air scale')}
            bullets={["Simple", "Pairs with Fitbit", "No complex metrics"]}
          />

          <ProductPick
            title="Tanita body composition scales"
            badge="Premium"
            description="Long-standing scales brand; pick models that fit your needs."
            href={amazonSearchUrl('Tanita body composition scale')}
            bullets={["Established brand", "Many model options", "Choose for features you\u2019ll use"]}
          />

          <ProductPick
            title="Salter smart scales"
            badge="Budget option"
            description="Widely available in the UK and simple to start."
            href={amazonSearchUrl('Salter smart scales')}
            bullets={["Easy to buy locally", "Good starter choice", "App varies by model"]}
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
    
      <MoneyPageNextLinks slug="best-smart-scales-uk" />

</main>
  )
}