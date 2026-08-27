import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'

export const metadata = {
  title: 'Food-First Nutrition Shortlist UK',
  description: 'A practical UK nutrition buying hub focused on real food, convenient high-protein meals and useful staples before supplements.',
}

const REAL_FOOD_HUB_AWIN = 'https://www.awin1.com/cread.php?awinmid=20241&awinaffid=2754234&clickref=ww_nutrition_wholefoods_realfoodhub_mangalitza_primerib&ued=https%3A%2F%2Fwww.realfoodhub.co.uk%2Fproduct-detail%2Fmangalitza-pork-prime-rib-steak'
const GOOD_PREP_AWIN = 'https://www.awin1.com/cread.php?awinmid=16134&awinaffid=2754234&clickref=ww_nutrition_mealprep_goodprep_wildberry_collagen&ued=https%3A%2F%2Fthegoodprep.com%2Fproduct%2Fwild-berry-collagen-protein-yoghurt-large%2F'

const ROUTES = [
  {
    title: 'Simple pantry staples',
    desc: 'Olive oil, oats, chia and flax: low-complexity foods that are easy to use repeatedly.',
    href: '/shortlists',
    label: 'Browse nutrition staples',
  },
  {
    title: '72-hour food resilience',
    desc: 'Build a normal-food cupboard reserve without buying specialist survival products.',
    href: '/blog/72-hour-food-plan-uk',
    label: 'Read the food plan',
  },
]

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Food first</p>
        <h1 className="mt-2 text-4xl font-bold">Nutrition buying guide: start with real food</h1>
        <p className="mt-3 text-zinc-700">Wild & Well treats supplements as optional. The stronger foundation is repeatable food: enough protein, fibre-rich plants, useful fats and convenient options that help you stay consistent.</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/nutrition">Nutrition hub</Link>
          <Link className="btn-secondary" href="/topics/nutrition">Nutrition topic</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
          <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Partner links may earn Wild & Well a commission at no extra cost to you. Check current ingredients, delivery terms and pricing with the merchant.</p>
      </header>

      <section className="mt-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">Two food-first partner routes</h2>
          <p className="mt-2 text-zinc-700">These are included because they solve recognisable food problems — sourcing and convenience — rather than because a supplement can be attached to the page.</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Real Food Hub"
            badge="Whole foods"
            description="A direct route for higher-welfare meat, batch cooking and freezer planning. The linked item is one example; compare the wider range on the merchant site."
            bullets={["Best for: food-first protein and freezer planning", "Compare provenance, delivery windows and price per serving", "Batch-cook or freeze promptly"]}
            trackingContext="food_first_realfoodhub"
            links={[
              { label: 'Check Real Food Hub', merchant: 'awin', href: REAL_FOOD_HUB_AWIN, variant: 'primary' },
              { label: 'Read our buying guide', merchant: 'internal', href: '/ethical-meat-delivery-uk-real-food-hub-mangalitza-prime-rib', variant: 'ghost' },
            ]}
          />
          <ProductPick
            title="The Good Prep"
            badge="Convenience"
            description="A meal-prep route for busy weeks when convenience makes protein intake and meal consistency easier. Check the current menu rather than relying on one item."
            bullets={["Best for: busy weeks and reduced meal decision fatigue", "Check ingredients, serving size and protein per meal", "Use convenience to support — not replace — a food-first routine"]}
            trackingContext="food_first_goodprep"
            links={[
              { label: 'Check The Good Prep', merchant: 'awin', href: GOOD_PREP_AWIN, variant: 'primary' },
              { label: 'Read our buying guide', merchant: 'internal', href: '/high-protein-meal-prep-uk-the-good-prep-wild-berry-collagen-yoghurt', variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        {ROUTES.map((route) => (
          <article key={route.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">{route.title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{route.desc}</p>
            <Link href={route.href} className="mt-5 inline-flex font-semibold text-zinc-900 underline underline-offset-4">{route.label} →</Link>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6 md:p-8">
        <h2 className="text-2xl font-semibold">A simple food-first buying rule</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-4"><strong>1. Solve a food problem</strong><p className="mt-1 text-sm text-zinc-600">Protein, convenience, hydration or pantry consistency.</p></div>
          <div className="rounded-2xl bg-white p-4"><strong>2. Check ingredients</strong><p className="mt-1 text-sm text-zinc-600">Prefer straightforward products and useful serving sizes.</p></div>
          <div className="rounded-2xl bg-white p-4"><strong>3. Compare cost per use</strong><p className="mt-1 text-sm text-zinc-600">Convenience is valuable only when it helps the routine stick.</p></div>
        </div>
      </section>
    </main>
  )
}
