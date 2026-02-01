import Link from "next/link";

export const metadata = {
  title: "Nutrition & Organic Food | Wild & Well",
  description:
    "Nutrition, organic food, and single-ingredient staples — with practical guidance and product shortlists when you’re ready to buy.",
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
          When it helps, we link to “favourites” product shortlists (single-ingredient foods, organic staples, and sensible add-ons).
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog">Read Wellness Insights</Link>
          <Link className="btn-secondary" href="/favourites">Browse favourites</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: February 1, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Explore nutrition sections</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Education comes first. These sections go deeper before we ever talk products.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card image="/images/cards/supplements.svg" title="Supplements" desc="A low-additive, label-reading approach — quality signals, common traps, and simple tools." href="/nutrition/supplements" tag="Education" />
          <Card image="/images/cards/kitchen.svg" title="Grow your own" desc="Home or allotment: start small, get the basics right (light, soil, watering), then scale." href="/nutrition/grow-your-own" tag="Education" />
          <Card image="/images/cards/nutrition.svg" title="Organic & single-ingredient" desc="Staples that scale: label-reading, simple swaps, and where organic upgrades make sense." href="/nutrition/organic-single-ingredient" tag="Education" />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Favourites shortlists</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Straightforward roundups: label cues that matter and a shortlist of solid options.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card image="/images/cards/nutrition.svg" title="Extra virgin olive oil (UK): our favourites" desc="Freshness, storage, and label cues that actually help." href="/best-extra-virgin-olive-oil-uk" tag="Staples" />
          <Card image="/images/cards/nutrition.svg" title="Organic oats (UK): our favourites" desc="Rolled vs jumbo vs steel-cut — pick what you’ll use." href="/best-organic-oats-uk" tag="Staples" />
          <Card image="/images/cards/nutrition.svg" title="Chia seeds (UK): simple shortlist" desc="Simple seeds, easy fibre add-in, and storage tips." href="/best-chia-seeds-uk" tag="Superfoods" />
          <Card image="/images/cards/nutrition.svg" title="Ground flaxseed (UK): simple shortlist" desc="Freshness matters — plus easy daily uses." href="/best-ground-flaxseed-uk" tag="Superfoods" />
          <Card image="/images/cards/nutrition.svg" title="Matcha (UK): what to buy" desc="Everyday vs ceremonial-style and what to look for." href="/best-organic-matcha-uk" tag="Drinks" />
          <Card image="/images/cards/nutrition.svg" title="Fermented foods to start with" desc="Sauerkraut & kimchi: simple ingredients, realistic expectations." href="/best-fermented-foods-sauerkraut-kimchi" tag="Gut" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Read next</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Informative articles: what the issue is, where it shows up in modern life, what research suggests, and practical steps.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog/ultra-processed-foods-what-they-are-and-why-they-matter">Ultra-processed foods</Link>
          <Link className="btn-secondary" href="/blog/fibre-gut-health-practical-guide">Fibre & gut health</Link>
          <Link className="btn-secondary" href="/blog/single-ingredient-staples-that-actually-matter">Single-ingredient staples</Link>
          <Link className="btn-secondary" href="/blog/superfoods-worth-it-and-what-to-skip">Superfoods: worth it?</Link>
        </div>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links may earn us a small commission at no extra cost to you.
      </p>
    </main>
  );
}
