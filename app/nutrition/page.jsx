import Link from "next/link";

export const metadata = {
  title: "Nutrition & Organic Food",
  description:
    "Nutrition, organic food, and single-ingredient staples — education first, with practical shortlists only after the foundations.",
};

function Card({ title, desc, href, tag, image }) {
  return (
    <Link href={href} className="card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 gap-3">
          <div className="relative mt-0.5 h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
            <img
              src={image || '/images/cards/nutrition.svg'}
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
        {tag ? (
          <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">{tag}</span>
        ) : null}
      </div>
      <p className="mt-3 text-xs text-zinc-500">Open →</p>
    </Link>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Nutrition &amp; Organic Food</h1>
        <p className="mt-3 text-zinc-700">
          Clear, practical nutrition content — focusing on the modern food environment, label reading, and simple upgrades you can repeat.
          Shortlists are optional and come after the foundations.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog">Read Wellness Insights</Link>
          <Link className="btn-secondary" href="/shopping-list">Get the free shopping list</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: February 2, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Why modern nutrition feels confusing</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Most people aren’t failing at willpower — we’re living in a food environment designed for convenience and hyper‑palatability.
          The goal here is to reduce friction and build habits that scale.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3 max-w-4xl">
          <div className="card">
            <h3 className="font-semibold">Ultra‑processed food is everywhere</h3>
            <p className="mt-1 text-sm text-zinc-600">Easy to overeat, easy to snack, and easy to lose track of protein/fibre.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Protein + fibre are often low</h3>
            <p className="mt-1 text-sm text-zinc-600">Meals become less filling, cravings rise, and energy swings are more likely.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Labels are noisy</h3>
            <p className="mt-1 text-sm text-zinc-600">Marketing terms distract from the basics: ingredients, portions, and repeatable staples.</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Start with the 3 levers</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          If you only change three things, start here:
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700 max-w-3xl">
          <li><strong>Protein at most meals</strong> (satiety, strength, recovery)</li>
          <li><strong>Fibre daily</strong> (gut health and fullness — from real food first)</li>
          <li><strong>Single‑ingredient staples</strong> you’ll actually cook and eat</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog/protein-basics-for-everyday-health-uk">Protein basics</Link>
          <Link className="btn-secondary" href="/blog/fibre-gut-health-practical-guide">Fibre & gut health</Link>
          <Link className="btn-secondary" href="/blog/single-ingredient-staples-that-actually-matter">Staples that matter</Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Explore nutrition sections</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Three deep-dive sections: fundamentals first, then practical tools and shortlists where they help.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card image="/images/cards/supplements.svg" title="Supplements" desc="A low-additive, label-reading approach — quality signals, common traps, and simple tools." href="/nutrition/supplements" tag="Education" />
          <Card image="/images/cards/kitchen.svg" title="Grow your own" desc="Home or allotment: start small, get the basics right (light, soil, watering), then scale." href="/nutrition/grow-your-own" tag="Education" />
          <Card image="/images/cards/nutrition.svg" title="Organic & single-ingredient" desc="Staples that scale: label-reading, simple swaps, and where organic upgrades make sense." href="/nutrition/organic-single-ingredient" tag="Education" />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Favourites shortlists (optional)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Straightforward roundups: label cues that matter and a shortlist of solid options.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card image="/images/cards/nutrition.svg" title="Extra virgin olive oil (UK): our favourites" desc="Freshness, storage, and label cues that actually help." href="/best-extra-virgin-olive-oil-uk" tag="Staples" />
          <Card image="/images/cards/nutrition.svg" title="Organic oats (UK): our favourites" desc="Rolled vs jumbo vs steel-cut — pick what you’ll use." href="/best-organic-oats-uk" tag="Staples" />
          <Card image="/images/cards/nutrition.svg" title="Chia seeds (UK): simple shortlist" desc="Simple seeds, easy fibre add-in, and storage tips." href="/best-chia-seeds-uk" tag="Fibre" />
          <Card image="/images/cards/nutrition.svg" title="Ground flaxseed (UK): simple shortlist" desc="Freshness matters — plus easy daily uses." href="/best-ground-flaxseed-uk" tag="Fibre" />
          <Card image="/images/cards/nutrition.svg" title="Matcha (UK): what to buy" desc="Everyday vs ceremonial-style and what to look for." href="/best-organic-matcha-uk" tag="Drinks" />
          <Card image="/images/cards/nutrition.svg" title="Fermented foods to start with" desc="Sauerkraut & kimchi: simple ingredients, realistic expectations." href="/best-fermented-foods-sauerkraut-kimchi" tag="Gut" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Read next</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Informative articles: what the issue is, how it affects health, the main causes in modern life, and practical steps.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog/ultra-processed-foods-what-they-are-and-why-they-matter">Ultra-processed foods</Link>
          <Link className="btn-secondary" href="/blog/label-reading-101">Label reading 101</Link>
          <Link className="btn-secondary" href="/blog/superfoods-worth-it-and-what-to-skip">Superfoods: worth it?</Link>
        </div>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  );
}
