import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import ComparisonTable from '@/components/ComparisonTable'
import { amazonSearchUrl } from '@/lib/amazon'
import { SITE_NAME, SITE_URL } from '@/lib/site'
import EducationFirstCallout from '@/components/EducationFirstCallout'


export const metadata = {
  title: 'Cooking oils (UK): simple favourites | Wild & Well',
  description: 'A simple cooking-oil toolkit: which oils for everyday sautéing, salads, and high heat — plus label cues and storage tips.',
}

const PICKS = [
  {
    title: 'Extra virgin olive oil (everyday)',
    badge: 'Default',
    desc: 'Great all‑rounder for most cooking and dressing when you buy and store it well.',
    query: 'extra virgin olive oil dark glass bottle origin UK',
    bullets: ['Prefer smaller bottles', 'Look for harvest/lot info when available', 'Store away from heat/light'],
    internal: '/best-extra-virgin-olive-oil-uk',
  },
  {
    title: 'Rapeseed oil (high heat, neutral)',
    badge: 'High heat',
    desc: 'A neutral option for higher-heat cooking and roasting in many UK kitchens.',
    query: 'organic cold pressed rapeseed oil UK',
    bullets: ['Prefer cold-pressed', 'Check taste notes', 'Store sealed and cool'],
  },
  {
    title: 'Avocado oil (neutral, high heat)',
    badge: 'Alternative',
    desc: 'Often neutral and useful for higher heat; buy from transparent brands.',
    query: 'avocado oil cold pressed UK',
    bullets: ['Look for single-ingredient', 'Avoid blends if possible', 'Check reviews for taste'],
  },
  {
    title: 'Coconut oil (specific uses)',
    badge: 'Specific',
    desc: 'Works for certain recipes and baking; not an “everything oil” for most people.',
    query: 'organic virgin coconut oil UK',
    bullets: ['Choose virgin if you want flavour', 'Refined if you don’t', 'Keep portions reasonable'],
  },
  {
    title: 'Sesame oil (flavour)',
    badge: 'Flavour',
    desc: 'Use as a flavour oil (finishing), not for high heat frying.',
    query: 'toasted sesame oil UK',
    bullets: ['A little goes far', 'Store sealed', 'Use for dressing/finishing'],
  },
  {
    title: 'Butter / ghee (if it suits you)',
    badge: 'Kitchen staple',
    desc: 'Some people prefer this in cooking; choose what you tolerate and use consistently.',
    query: 'organic ghee UK',
    bullets: ['Check dairy tolerance', 'Use for flavour', 'Don’t overcomplicate'],
  },
]

export default function Page() {
  const url = `${SITE_URL}/best-organic-cooking-oils-uk`

  const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: p.internal ? `${SITE_URL}${p.internal}` : amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cooking oils (UK): simple favourites',
    datePublished: '2026-01-24',
    dateModified: '2026-01-29',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    mainEntity: { '@type': 'ItemList', itemListElement: itemList },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-default.jpg` },
    },
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Cooking oils (UK): simple favourites</h1>
        <p className="mt-3 text-zinc-700">
          A simple cooking‑oil toolkit: one default, one higher‑heat option, and a couple of flavour oils — with storage tips that actually help.
        </p>

        <EducationFirstCallout topicHref="/nutrition" topicLabel="Nutrition basics" insightHref="/blog/fibre-gut-health-practical-guide" insightLabel="Fibre & gut health" />
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/nutrition">Nutrition hub</Link>
          <Link className="btn-secondary" href="/best-extra-virgin-olive-oil-uk">EVOO favourites</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: January 29, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">At a glance</h2>
        <p className="mt-2 text-zinc-700 max-w-3xl">
          Most kitchens only need a few oils. The main upgrade is choosing oils you’ll actually use, then buying/storing them so they stay fresh.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Simple rules</h2>
        <ComparisonTable
          caption="A small toolkit works best"
          columns={[
            { key: 'job', label: 'Job' },
            { key: 'default', label: 'Good default' },
            { key: 'note', label: 'Note' },
          ]}
          rows={[
            { job: 'Everyday cooking + salads', default: 'Extra virgin olive oil', note: 'Buy smaller bottles; store away from heat/light' },
            { job: 'Higher heat roasting/frying', default: 'Rapeseed/avocado oil', note: 'Prefer simple, single-ingredient oils' },
            { job: 'Flavour/finishing', default: 'Sesame (or similar)', note: 'Use sparingly; not for high heat' },
          ]}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Favourites (UK‑friendly searches)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Where we have a dedicated page, we link internally. Otherwise we link to searches so you can compare availability and labels.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {PICKS.map((p) => (
            <ProductPick
              key={p.title}
              title={p.title}
              badge={p.badge}
              description={p.desc}
              href={p.internal ? p.internal : amazonSearchUrl(p.query)}
              bullets={p.bullets}
            />
          ))}
        </div>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links may earn us a small commission at no extra cost to you.
      </p>
    </main>
  )
}
