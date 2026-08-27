import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'The Good Prep (UK) — high-protein meal prep guide',
  description: 'A practical guide to meal-prep services and high-protein convenience: how to compare ingredients, protein per serving, cost and whether the service actually makes your week easier.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=16134&awinaffid=2754234&clickref=ww_nutrition_mealprep_goodprep_wildberry_collagen&ued=https%3A%2F%2Fthegoodprep.com%2Fproduct%2Fwild-berry-collagen-protein-yoghurt-large%2F'

export default function Page() {
  const slug = 'high-protein-meal-prep-uk-the-good-prep-wild-berry-collagen-yoghurt'
  const edu = getMoneyPageEdu(slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'High-protein meal prep (UK): The Good Prep',
    datePublished: '2026-02-11',
    dateModified: '2026-08-27',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Convenience without losing the basics</p>
          <h1 className="mt-2 text-4xl font-bold">High-protein meal prep: buy back time, not just macros</h1>
          <p className="mt-3 text-zinc-700">A meal-prep service earns its place when it makes a good routine easier to repeat. Compare protein per serving, ingredients, portion size, delivery cadence and cost against meals you would realistically make yourself.</p>
        </div>

        <img src="/images/photography/nutrition.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />

        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/nutrition" topicLabel="Nutrition" insightHref="/nutrition/food-first-shortlist" insightLabel="Food-first shortlist" />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-primary" href="/nutrition/food-first-shortlist">Compare food-first routes</Link>
            <Link className="btn-secondary" href="/blog/protein-basics-for-everyday-health-uk">Protein basics</Link>
            <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Last updated: August 27, 2026 · Wild &amp; Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">Featured partner route</h2>
          <p className="mt-2 text-sm text-zinc-600">The linked yoghurt is an example product from The Good Prep. Use the merchant site to compare the current menu and choose meals or snacks that fit your normal routine.</p>
        </div>

        <div className="mt-6 max-w-2xl">
          <ProductPick
            title="The Good Prep — high-protein convenience"
            badge="Meal prep"
            description="A direct partner route for busy weeks when prepared food can reduce decision fatigue and make protein intake easier to keep consistent."
            bullets={[
              'Best for: busy weeks when convenience keeps meals on track',
              'Compare protein, calories and ingredients per serving',
              'Check delivery frequency and total weekly cost',
            ]}
            trackingContext="goodprep_mealprep_guide_featured"
            links={[
              { label: 'Check The Good Prep', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare food-first alternatives', merchant: 'internal', href: '/nutrition/food-first-shortlist', variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="card"><h2 className="text-lg font-semibold">Protein per serving</h2><p className="mt-2 text-sm text-zinc-700">Compare the actual grams of protein in the portion you will eat, not just a high-protein label on the front.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">Ingredients & satiety</h2><p className="mt-2 text-sm text-zinc-700">Look at the full ingredient list, fibre and portion size. Convenience only helps if the meal leaves you satisfied.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">Cost of convenience</h2><p className="mt-2 text-sm text-zinc-700">Compare the delivered cost with the food you would otherwise buy — including the value of time and reduced waste.</p></div>
      </section>

      <section className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <h2 className="text-xl font-semibold">Use meal prep as a bridge</h2>
        <p className="mt-2 text-sm text-zinc-700">Prepared meals can support consistency during busy periods without becoming the whole diet. Keep easy whole-food meals and staples in rotation so convenience remains a tool rather than a dependency.</p>
      </section>

      <MoneyPageNextLinks slug={slug} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
