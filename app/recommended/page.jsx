import Link from "next/link";

export const metadata = {
  title: "Recommended Picks | Wild & Well",
  description:
    "Curated low-tox, holistic wellness, and nutrition picks — designed to reduce overwhelm and help you choose confidently.",
};

function PillarCard({ title, desc, href, tag }) {
  return (
    <Link href={href} className="card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-zinc-600">{desc}</p>
        </div>
        <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">
          {tag}
        </span>
      </div>
    </Link>
  );
}

function PickCard({ badge, title, who, why, href, track }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-zinc-500">{badge}</p>
          <h3 className="mt-1 text-lg font-semibold">{title}</h3>
        </div>
        <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-600">
          Pick
        </span>
      </div>

      <p className="mt-3 text-sm text-zinc-700">
        <strong>Best for:</strong> {who}
      </p>
      <p className="mt-2 text-sm text-zinc-700">
        <strong>Why:</strong> {why}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <Link href={href} className="btn-primary" data-track={track}>
          See our guide
        </Link>
        <Link href="/shopping-list" className="btn-secondary" data-track="newsletter-cta">
          Get the free list
        </Link>
      </div>
    </div>
  );
}

function HowWeChoose() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">How we choose (and what we avoid)</h2>
      <p className="mt-2 text-sm text-zinc-700">
        Wild &amp; Well keeps recommendations calm and practical. We’d rather give you 3 good choices than 30 confusing ones.
      </p>
      <ul className="mt-4 grid gap-3 md:grid-cols-2 text-sm text-zinc-700">
        <li className="rounded-xl border bg-white p-4">
          <strong>We prioritise:</strong> clear materials/ingredients, realistic maintenance, beginner-friendly choices, and good value over hype.
        </li>
        <li className="rounded-xl border bg-white p-4">
          <strong>We avoid:</strong> miracle claims, fear-based marketing, unclear ingredient lists, and products with “mystery blends”.
        </li>
        <li className="rounded-xl border bg-white p-4">
          <strong>We keep it simple:</strong> best overall, best budget, best sensitive/minimalist.
        </li>
        <li className="rounded-xl border bg-white p-4">
          <strong>We update regularly:</strong> when guidance changes or products disappear, we refresh pages rather than leaving stale lists.
        </li>
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link className="btn-secondary" href="/how-we-test">
          Read our approach
        </Link>
        <Link className="btn-secondary" href="/affiliate-disclosure">
          Affiliate disclosure
        </Link>
      </div>
      <p className="mt-4 text-xs text-zinc-500">Last updated: January 25, 2026</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Recommended Picks</h1>
        <p className="mt-3 text-zinc-700">
          The fastest way to make progress: pick <strong>one</strong> category, make <strong>one</strong> change.
          Below are our most practical starting points across low-tox living, holistic health, and nutrition.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a className="btn-secondary" href="#start-here">Start here</a>
          <a className="btn-secondary" href="#low-tox">Low-tox</a>
          <a className="btn-secondary" href="#sleep-stress">Sleep &amp; stress</a>
          <a className="btn-secondary" href="#nutrition">Nutrition</a>
        </div>
      </header>

      <section id="start-here" className="mt-12">
        <h2 className="text-2xl font-semibold">Start here (choose one path)</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Each path takes you to a short guide with clear next steps and a “best overall / budget / sensitive” recommendation.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <PillarCard
            title="Low-tox starter swaps"
            desc="The easiest home upgrades to reduce irritation triggers and simplify shopping."
            href="/best-low-tox-products-for-beginners"
            tag="Home"
          />
          <PillarCard
            title="Sleep & stress support"
            desc="Comfort-first upgrades and gentle habits you can actually stick with."
            href="/best-natural-sleep-support"
            tag="Rest"
          />
          <PillarCard
            title="Nutrition foundations"
            desc="Food-first basics: simple swaps, shopping ideas, and beginner-friendly guidance."
            href="/nutrition"
            tag="Food"
          />
        </div>
      </section>

      <section className="mt-12">
        <HowWeChoose />
      </section>

      <section id="low-tox" className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">Low-tox home picks</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Prioritise the categories that touch skin, affect air, and impact sleep. One change per week is plenty.
          </p>
        </div>

        <div id="starter" className="mt-6 grid gap-4 md:grid-cols-3">
          <PickCard
            badge="Best overall"
            title="Low-tox starter swaps"
            who="Beginners who want the biggest wins with the least overwhelm"
            why="A short list of fragrance-free, practical swaps that don’t require perfection."
            href="/best-low-tox-products-for-beginners"
            track="affiliate-lowtox-starter"
          />
          <PickCard
            badge="Best budget"
            title="Fragrance-free laundry detergents (UK)"
            who="Sensitive skin households and anyone reducing fragrance load"
            why="Laundry sits on skin for hours — switching here is often a noticeable win."
            href="/best-fragrance-free-laundry-detergents-uk"
            track="affiliate-laundry"
          />
          <PickCard
            badge="Best for sensitive households"
            title="Air quality at home (guide)"
            who="Allergies, irritation, or “stuffy room” symptoms"
            why="Better filtration and simple habits can improve comfort quickly."
            href="/guides/healthy-air-at-home"
            track="affiliate-air"
          />
        </div>

        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Want a UK-specific quick win?</h3>
          <p className="mt-2 text-sm text-zinc-700">
            Water filter confusion is common — we keep this guide practical and UK-appropriate.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link className="btn-primary" href="/best-water-filters-uk" data-track="affiliate-water-bestof">
              Best water filters (UK)
            </Link>
            <Link className="btn-secondary" href="/guides/water-filter-buying-guide-uk">
              Water filter buying guide
            </Link>
          </div>
        </div>
      </section>

      <section id="sleep-stress" className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">Sleep &amp; stress picks</h2>
          <p className="mt-2 text-sm text-zinc-600">
            The goal isn’t hacks — it’s a calm routine and a comfortable environment.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <PickCard
            badge="Best overall"
            title="Natural sleep support (comfort-first)"
            who="Anyone who wants a simple, non-overwhelming sleep upgrade plan"
            why="Focuses on environment + habits first, with gentle add-ons where helpful."
            href="/best-natural-sleep-support"
            track="affiliate-sleep-bestof"
          />
          <PickCard
            badge="Best budget"
            title="Natural sleep remedies (non-pharma)"
            who="People who want low-cost, food-first or tea-first options"
            why="Practical basics that don’t rely on a big supplement stack."
            href="/best-natural-sleep-remedies-non-pharma"
            track="affiliate-sleep-remedies"
          />
          <PickCard
            badge="Best for stress support"
            title="Herbal remedies for stress & anxiety"
            who="Gentle support alongside routines and lifestyle changes"
            why="A beginner-friendly approach that avoids exaggerated claims."
            href="/best-herbal-remedies-for-stress-anxiety"
            track="affiliate-stress-herbs"
          />
        </div>
      </section>

      <section id="nutrition" className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">Nutrition &amp; organic food picks</h2>
          <p className="mt-2 text-sm text-zinc-600">
            We keep nutrition simple: add more whole foods, stabilise energy, and avoid extreme rules.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <PickCard
            badge="Best overall"
            title="Anti-inflammatory foods (shopping guide)"
            who="Anyone who wants practical grocery upgrades"
            why="Focused on easy staples (not restrictive diet trends)."
            href="/best-anti-inflammatory-foods-shopping-list"
            track="affiliate-food-antiinflam"
          />
          <PickCard
            badge="Best budget"
            title="Organic cooking oils (UK)"
            who="People who want one high-impact pantry swap"
            why="Choosing the right everyday oil is simple and widely useful."
            href="/best-organic-cooking-oils-uk"
            track="affiliate-oils"
          />
          <PickCard
            badge="Best for training / satiety"
            title="Organic protein powders (UK)"
            who="Busy schedules, gym routines, or higher protein needs"
            why="A clean ingredient list and digestibility matter more than hype."
            href="/best-organic-protein-powders-uk"
            track="affiliate-protein"
          />
        </div>

        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Want a full holistic reset path?</h3>
          <p className="mt-2 text-sm text-zinc-700">
            If you’re starting from scratch, this is our calm, step-by-step starter kit.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link className="btn-primary" href="/best-holistic-wellness-starter-kit" data-track="affiliate-holistic-starter">
              Holistic wellness starter kit
            </Link>
            <Link className="btn-secondary" href="/natural-remedies">
              Natural remedies hub
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Want the fastest progress?</h2>
          <p className="mt-2 text-sm text-zinc-700">
            Grab the free shopping list and pick one category to start this week.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link className="btn-primary" href="/shopping-list" data-track="newsletter-primary">
              Get the free shopping list
            </Link>
            <Link className="btn-secondary" href="/guides">
              Browse guides
            </Link>
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            Some links may earn us a small commission at no extra cost to you. We only recommend products we genuinely trust.
          </p>
        </div>
      </section>
    </main>
  );
}
