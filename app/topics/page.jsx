import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Topics — Wild & Well',
  description: 'Education-first guides for sleep, movement, nutrition, skin, air, water, healthy-home habits and practical resilience in the UK.',
}

function Card({ title, desc, href, tag, image }) {
  return (
    <Link href={href} className="card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 gap-3">
          <div className="relative mt-0.5 h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-zinc-100"><img src={image || '/images/cards/neutral.svg'} alt="" className="h-full w-full object-cover" loading="lazy" /></div>
          <div className="min-w-0"><h2 className="text-lg font-semibold">{title}</h2><p className="mt-1 text-sm text-zinc-600">{desc}</p></div>
        </div>
        <span className="shrink-0 rounded-full border bg-white px-2 py-0.5 text-[11px] text-zinc-600">{tag}</span>
      </div>
      <p className="mt-3 text-xs text-zinc-500">Open →</p>
    </Link>
  )
}

const CORE_PATHS = [
  { title: 'Better everyday water', desc: 'Understand the job first, then compare portable, countertop, under-sink or gravity filtration.', learn: '/topics/water', buy: '/water-filtration-shortlist-uk' },
  { title: 'Breathe easier indoors', desc: 'Separate particles and smoke from damp and excess humidity before choosing equipment.', learn: '/topics/air-quality', buy: '/air-quality-shortlist-uk' },
  { title: 'Sleep & recover better', desc: 'Light, timing and comfort first; mattresses, bedding and recovery products only when they solve a clear problem.', learn: '/topics/sleep', buy: '/sleep-recovery-shortlist-uk' },
  { title: 'Eat better without perfection', desc: 'Food-first nutrition, useful staples and convenient meals before optional supplements.', learn: '/topics/nutrition', buy: '/nutrition/food-first-shortlist' },
  { title: 'Move more consistently', desc: 'Walking and simple strength first, then footwear, home-training equipment or tracking when useful.', learn: '/topics/movement', buy: '/movement/movement-shortlist' },
  { title: 'Build a lower-tox home', desc: 'Start with high-use laundry, cleaning and bathroom swaps rather than replacing everything.', learn: '/topics/fragrance-free', buy: '/healthy-home/low-tox-shortlist' },
  { title: 'Support a healthier life with dogs', desc: 'Complete nutrition, appropriate movement and a healthier shared home before optional wellness products.', learn: '/dogs', buy: '/dog-wellness-shortlist-uk' },
  { title: 'Handle short disruptions', desc: 'Calm household planning for water, food, power, communication and useful essentials.', learn: '/topics/resilience', buy: '/blog/72-hour-household-emergency-kit-uk' },
]

export default function Page() {
  const topicItems = [
    ['Sleep & recovery', '/topics/sleep'], ['Movement', '/topics/movement'], ['Recovery', '/topics/recovery'], ['Foot strength', '/topics/foot-strength'], ['Nutrition', '/topics/nutrition'], ['Gut health', '/topics/gut-health'], ['Hydration', '/topics/hydration'], ['Skin health', '/topics/skin-health'], ['Sun protection', '/topics/sun-protection'], ['Air quality', '/topics/air-quality'], ['Water', '/topics/water'], ['Fragrance-free cleaning & laundry', '/topics/fragrance-free'], ['Dog health & wellness', '/dogs'], ['Practical resilience', '/topics/resilience'],
  ]
  const itemList = { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Wild & Well topics', itemListElement: topicItems.map(([name, href], i) => ({ '@type': 'ListItem', position: i + 1, name, url: `${SITE_URL}${href}` })) }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={itemList} />
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Learn first. Buy second.</p>
        <h1 className="mt-2 text-4xl font-bold">Topics</h1>
        <p className="mt-3 text-zinc-700">Start with the problem you want to solve. Each core path gives you education and no-spend steps first, then a focused buying guide if a product genuinely helps.</p>
        <div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/shortlists">Browse all shortlists</Link><Link className="btn-secondary" href="/shopping-list">Free shopping list</Link><Link className="btn-secondary" href="/healthy-home">Healthy Home</Link></div>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Choose what you want to improve</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CORE_PATHS.map((path) => <article key={path.title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="font-semibold text-zinc-900">{path.title}</h3><p className="mt-2 text-sm text-zinc-600">{path.desc}</p><div className="mt-4 flex flex-wrap gap-2"><Link className="btn-secondary" href={path.learn}>Learn first</Link><Link className="btn-primary" href={path.buy}>Buying route</Link></div></article>)}
        </div>
      </section>

      <section className="mt-14">
        <div className="max-w-3xl"><h2 className="text-2xl font-semibold">Explore the full topic library</h2><p className="mt-2 text-zinc-700">More focused guides for people who want to go deeper before comparing products.</p></div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card image="/images/photography/thumbs/sleep.png" title="Sleep & recovery" desc="Light, timing, temperature and practical recovery basics." href="/topics/sleep" tag="Sleep" />
          <Card image="/images/photography/thumbs/movement.svg" title="Movement" desc="Walking, simple strength and mobility." href="/topics/movement" tag="Movement" />
          <Card image="/images/photography/thumbs/movement.svg" title="Recovery" desc="Soreness, load management and adaptation basics." href="/topics/recovery" tag="Movement" />
          <Card image="/images/photography/thumbs/movement.svg" title="Foot strength" desc="Natural movement basics and gradual transitions." href="/topics/foot-strength" tag="Movement" />
          <Card image="/images/photography/thumbs/nutrition.svg" title="Nutrition" desc="Food-first upgrades, labels and consistency." href="/topics/nutrition" tag="Nutrition" />
          <Card image="/images/photography/thumbs/nutrition.svg" title="Gut health" desc="Fibre, diversity and sensible expectations." href="/topics/gut-health" tag="Nutrition" />
          <Card image="/images/photography/thumbs/water.png" title="Hydration" desc="Habits first; electrolytes when they actually help." href="/topics/hydration" tag="Nutrition" />
          <Card title="Skin health" desc="Barrier basics, fragrance and simple routines." href="/topics/skin-health" tag="Skin" />
          <Card title="Sun protection" desc="Shade, clothing and practical sunscreen habits." href="/topics/sun-protection" tag="Skin" />
          <Card image="/images/photography/thumbs/air-quality.png" title="Air quality" desc="Particles, damp, humidity and equipment choices." href="/topics/air-quality" tag="Home" />
          <Card image="/images/photography/thumbs/water.png" title="Water" desc="Filter formats, replacement costs and buying basics." href="/topics/water" tag="Home" />
          <Card image="/images/photography/thumbs/laundry.png" title="Fragrance-free home" desc="High-contact swaps for laundry, cleaning and bathroom products." href="/topics/fragrance-free" tag="Home" />
          <Card title="Dog health & wellness" desc="Complete food, healthy weight, movement, pet allergies and a healthier shared home." href="/dogs" tag="Dogs" />
          <Card title="Practical resilience" desc="Water, power, food, communication and household essentials." href="/topics/resilience" tag="Home" />
        </div>
      </section>

      <section className="mt-14 max-w-3xl rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6"><h2 className="text-xl font-semibold">How Wild & Well approaches recommendations</h2><ol className="mt-3 list-decimal space-y-2 pl-6 text-sm text-zinc-700"><li>Understand the problem and try sensible no-spend steps first.</li><li>Decide whether a product would meaningfully improve the situation.</li><li>Use a focused shortlist rather than browsing hundreds of products.</li><li>Check current specifications, running costs, returns and price on the merchant site before buying.</li></ol></section>
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
