import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Topics — Wild & Well',
  description: 'Education-first topic insights for sleep, movement, nutrition, skin health, air quality, water, and low-tox home habits in the UK.',
}

function Card({ title, desc, href, tag, image }) {
  return (
    <Link href={href} className="card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 gap-3">
          <div className="relative mt-0.5 h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
            <img
              src={image || '/images/cards/neutral.svg'}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-1 text-sm text-zinc-600">{desc}</p>
          </div>
        </div>
        <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">
          {tag}
        </span>
      </div>
      <p className="mt-3 text-xs text-zinc-500">Open →</p>
    </Link>
  )
}

export default function Page() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Wild & Well topics',
    itemListElement: [
      { name: 'Sleep & recovery', url: `${SITE_URL}/topics/sleep` },
      { name: 'Movement (walking + strength)', url: `${SITE_URL}/topics/movement` },
      { name: 'Recovery (training + soreness)', url: `${SITE_URL}/topics/recovery` },
      { name: 'Foot strength (natural movement)', url: `${SITE_URL}/topics/foot-strength` },
      { name: 'Nutrition (food + labels)', url: `${SITE_URL}/topics/nutrition` },
      { name: 'Gut health (fibre + diversity)', url: `${SITE_URL}/topics/gut-health` },
      { name: 'Hydration (habits + electrolytes)', url: `${SITE_URL}/topics/hydration` },
      { name: 'Skin health (barrier basics)', url: `${SITE_URL}/topics/skin-health` },
      { name: 'Sun protection (SPF + habits)', url: `${SITE_URL}/topics/sun-protection` },
      { name: 'Air quality (allergies + damp)', url: `${SITE_URL}/topics/air-quality` },
      { name: 'Water (filters + hydration)', url: `${SITE_URL}/topics/water` },
      { name: 'Fragrance-free cleaning & laundry', url: `${SITE_URL}/topics/fragrance-free` },
    ].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: it.url,
    })),
  }
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={itemList} />
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Topics</h1>
        <p className="mt-3 text-zinc-700">
          Education-first topic pages for UK homes: what the issue is, why it matters, common causes, and no-spend first steps — then optional shortlists.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/shortlists">Browse shortlists</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
          <Link className="btn-secondary" href="/nutrition">Nutrition</Link>
          <Link className="btn-secondary" href="/movement">Movement</Link>
        </div>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Card image="/images/photography/thumbs/sleep.png" title="Sleep & recovery" desc="Light, timing, temperature, and practical options." href="/topics/sleep" tag="Sleep" />
        <Card image="/images/photography/thumbs/movement.svg" title="Movement (walking + strength)" desc="Build a base layer: steps, simple strength, and mobility." href="/topics/movement" tag="Movement" />
        <Card image="/images/photography/thumbs/movement.svg" title="Recovery" desc="Soreness, load management, and the basics that drive adaptation." href="/topics/recovery" tag="Movement" />
        <Card image="/images/photography/thumbs/movement.svg" title="Foot strength" desc="Natural movement basics and how to transition gradually." href="/topics/foot-strength" tag="Movement" />
        <Card image="/images/photography/thumbs/nutrition.svg" title="Nutrition (food + labels)" desc="Food-first upgrades, label reading, and consistency tools." href="/topics/nutrition" tag="Nutrition" />
        <Card image="/images/photography/thumbs/nutrition.svg" title="Gut health" desc="Fibre, diversity, fermented foods, and sensible expectations." href="/topics/gut-health" tag="Nutrition" />
        <Card image="/images/photography/thumbs/water.png" title="Hydration" desc="Habits first, then electrolytes when they actually help." href="/topics/hydration" tag="Nutrition" />
        <Card image="/images/cards/neutral.svg" title="Skin health" desc="Barrier basics, fragrance triggers, and simple routines." href="/topics/skin-health" tag="Skin" />
        <Card image="/images/cards/neutral.svg" title="Sun protection" desc="Shade + clothing habits, then a sunscreen you will use." href="/topics/sun-protection" tag="Skin" />
        <Card image="/images/photography/thumbs/air-quality.png" title="Air quality (allergies + damp)" desc="HEPA basics, placement, and shortlists for common rooms." href="/topics/air-quality" tag="Home" />
        <Card image="/images/photography/thumbs/water.png" title="Water (filters + drinking)" desc="Under-sink vs jugs, replacement filters, and buying basics." href="/topics/water" tag="Kitchen" />
        <Card image="/images/photography/thumbs/laundry.png" title="Fragrance-free cleaning & laundry" desc="Ingredient checks and the quickest swaps for sensitive households." href="/topics/fragrance-free" tag="Cleaning" />
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="section-title">Suggested order</h2>
        <ol className="mt-3 list-decimal pl-6 text-zinc-700 space-y-2">
          <li>Choose one topic (sleep, movement, nutrition, skin, air, water, cleaning).</li>
          <li>Skim the “At a glance” section and choose one practical next step.</li>
          <li>When you want options, use the shortlist links to compare a few solid choices.</li>
        </ol>
      </section>

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
