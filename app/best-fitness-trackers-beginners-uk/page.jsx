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
  title: "Fitness Trackers for Beginners (UK): shortlist",
  description: "A straightforward shortlist of fitness trackers for beginners: steps, sleep, heart-rate, and the features that actually matter.",
}

const PICKS = [
  {
    "title": "Fitbit Charge series",
    "badge": "all-round",
    "desc": "Solid balance of step tracking + sleep features.",
    "query": "Fitbit Charge tracker",
    "bullets": [
      "Good sleep tracking features",
      "Comfortable for daily wear",
      "Check subscription features"
    ]
  },
  {
    "title": "Garmin vívosmart / Venu (entry models)",
    "badge": "Great for training",
    "desc": "Great if you want activity insights and strong battery.",
    "query": "Garmin vivosmart fitness tracker",
    "bullets": [
      "Great battery on many models",
      "Good activity insights",
      "App ecosystem is strong"
    ]
  },
  {
    "title": "Amazfit Band / GTS series",
    "badge": "Good value",
    "desc": "Affordable options with useful basics and good battery.",
    "query": "Amazfit band fitness tracker",
    "bullets": [
      "Good value",
      "Battery often strong",
      "Keep expectations realistic on “advanced” metrics"
    ]
  },
  {
    "title": "Apple Watch SE",
    "badge": "iPhone",
    "desc": "If you’re on iPhone and want smart features + fitness.",
    "query": "Apple Watch SE",
    "bullets": [
      "with iPhone",
      "Lots of apps",
      "Battery is usually shorter than bands"
    ]
  },
  {
    "title": "Huawei Band series",
    "badge": "Simple band",
    "desc": "Slim, light band for steps and general tracking.",
    "query": "Huawei Band fitness tracker",
    "bullets": [
      "Lightweight",
      "Good basics",
      "Check app compatibility"
    ]
  },
  {
    "title": "Xiaomi Smart Band",
    "badge": "Easy starter band",
    "desc": "Popular entry band with the essentials.",
    "query": "Xiaomi Smart Band",
    "bullets": [
      "Very affordable",
      "Good for steps",
      "Great as a first tracker"
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
        <Link className="btn-secondary" href="/picks">Picks</Link>
        <Link className="btn-secondary" href="/how-we-test">How we test</Link>
      </div>
      <p className="mt-4 text-xs text-zinc-500">Last updated: February 2, 2026 · Wild & Well Editorial Team</p>
    </div>
  )
}

export default function Page() {
    
  const edu = getMoneyPageEdu('best-fitness-trackers-beginners-uk')

const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Fitness Trackers for Beginners (UK): shortlist",
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
      <StructuredData data={{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do I need a tracker to get fitter?", "acceptedAnswer": {"@type": "Answer", "text": "No. A tracker is optional. It helps some people stay consistent by making steps and sleep more visible."}}, {"@type": "Question", "name": "Which metric matters most?", "acceptedAnswer": {"@type": "Answer", "text": "For most beginners: daily steps, weekly minutes of movement, and sleep consistency are the most useful starting points."}}]}} />

      <header>
        <div className="max-w-3xl">
        <h1 className="text-4xl font-bold">Fitness trackers for beginners (UK): shortlist</h1>
        <p className="mt-3 text-zinc-700">A straightforward shortlist of fitness trackers for beginners: steps, sleep, heart-rate, and the features that actually matter.</p>

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
            title="Fitbit Charge series"
            badge="all-round"
            description="Solid balance of step tracking + sleep features."
            href={amazonSearchUrl('Fitbit Charge tracker')}
            bullets={["Good sleep tracking features", "Comfortable for daily wear", "Check subscription features"]}
          />

          <ProductPick
            title="Garmin vívosmart / Venu (entry models)"
            badge="Great for training"
            description="Great if you want activity insights and strong battery."
            href={amazonSearchUrl('Garmin vivosmart fitness tracker')}
            bullets={["Great battery on many models", "Good activity insights", "App ecosystem is strong"]}
          />

          <ProductPick
            title="Amazfit Band / GTS series"
            badge="Good value"
            description="Affordable options with useful basics and good battery."
            href={amazonSearchUrl('Amazfit band fitness tracker')}
            bullets={["Good value", "Battery often strong", "Keep expectations realistic on \u201cadvanced\u201d metrics"]}
          />

        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Full shortlist</h2>
        <p className="mt-2 text-sm text-zinc-600">Choose based on your needs (space, budget, comfort, and how often you’ll actually use it).</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Fitbit Charge series"
            badge="all-round"
            description="Solid balance of step tracking + sleep features."
            href={amazonSearchUrl('Fitbit Charge tracker')}
            bullets={["Good sleep tracking features", "Comfortable for daily wear", "Check subscription features"]}
          />

          <ProductPick
            title="Garmin vívosmart / Venu (entry models)"
            badge="Great for training"
            description="Great if you want activity insights and strong battery."
            href={amazonSearchUrl('Garmin vivosmart fitness tracker')}
            bullets={["Great battery on many models", "Good activity insights", "App ecosystem is strong"]}
          />

          <ProductPick
            title="Amazfit Band / GTS series"
            badge="Good value"
            description="Affordable options with useful basics and good battery."
            href={amazonSearchUrl('Amazfit band fitness tracker')}
            bullets={["Good value", "Battery often strong", "Keep expectations realistic on \u201cadvanced\u201d metrics"]}
          />

          <ProductPick
            title="Apple Watch SE"
            badge="iPhone"
            description="If you’re on iPhone and want smart features + fitness."
            href={amazonSearchUrl('Apple Watch SE')}
            bullets={["with iPhone", "Lots of apps", "Battery is usually shorter than bands"]}
          />

          <ProductPick
            title="Huawei Band series"
            badge="Simple band"
            description="Slim, light band for steps and general tracking."
            href={amazonSearchUrl('Huawei Band fitness tracker')}
            bullets={["Lightweight", "Good basics", "Check app compatibility"]}
          />

          <ProductPick
            title="Xiaomi Smart Band"
            badge="Easy starter band"
            description="Popular entry band with the essentials."
            href={amazonSearchUrl('Xiaomi Smart Band')}
            bullets={["Very affordable", "Good for steps", "Great as a first tracker"]}
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
    
      <MoneyPageNextLinks slug="best-fitness-trackers-beginners-uk" />

</main>
  )
}