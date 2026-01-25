import Link from "next/link";

export const metadata = {
  title: "Trusted Picks | Wild & Well",
  description:
    "A calm decision hub — quick links to our best guides, buyer-intent pages, and beginner-friendly starting points.",
};

function HubCard({ title, desc, href, tag }) {
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
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-zinc-500">Open</span>
      </div>
    </Link>
  );
}

function TrustBox() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">What “Trusted Picks” means here</h2>
      <p className="mt-2 text-sm text-zinc-700">
        This page is intentionally short. It’s a <strong>map</strong> to the pages that help you decide quickly — without hype, panic-buying,
        or endless lists.
      </p>
      <ul className="mt-4 space-y-2 text-sm text-zinc-700 list-disc pl-6">
        <li><strong>Guides</strong> explain the “why” and the basics.</li>
        <li><strong>Best-of pages</strong> help you choose when you’re ready to buy.</li>
        <li><strong>Products</strong> (ours) are optional shortcuts — never a requirement.</li>
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link className="btn-secondary" href="/how-we-test">How we choose</Link>
        <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
      </div>
      <p className="mt-4 text-xs text-zinc-500">Last updated: January 25, 2026</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Trusted Picks</h1>
        <p className="mt-3 text-zinc-700">
          If you don’t want to research for hours, start here. Pick one goal, open one page, make one change.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a className="btn-secondary" href="#start-here">Start here</a>
          <a className="btn-secondary" href="#sleep-stress">Sleep &amp; stress</a>
          <a className="btn-secondary" href="#low-tox">Low-tox home</a>
          <a className="btn-secondary" href="#nutrition">Nutrition</a>
        </div>
      </header>

      <section id="start-here" className="mt-12">
        <h2 className="text-2xl font-semibold">Start here (choose one path)</h2>
        <p className="mt-2 text-sm text-zinc-600">
          These are the simplest “first steps” — designed for beginners and busy weeks.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <HubCard
            title="Low-tox starter swaps"
            desc="Fragrance-free and high-contact swaps that give the biggest comfort wins first."
            href="/best-low-tox-products-for-beginners"
            tag="Home"
          />
          <HubCard
            title="Sleep better naturally (cornerstone)"
            desc="A calm, step-by-step sleep plan — what to fix first, what to skip, and why."
            href="/guides/sleep-naturally-without-overwhelm"
            tag="Rest"
          />
          <HubCard
            title="Anti-inflammatory foods (shopping guide)"
            desc="Simple grocery upgrades — food-first foundations, not restrictive diet trends."
            href="/best-anti-inflammatory-foods-shopping-list"
            tag="Food"
          />
        </div>
      </section>

      <section className="mt-12">
        <TrustBox />
      </section>

      <section id="sleep-stress" className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">Sleep &amp; stress</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Start with comfort and consistency. Then add gentle supports if you want them.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <HubCard
            title="Best natural sleep support"
            desc="A shopping-style page with clear beginner picks (best overall/budget/sensitive)."
            href="/best-natural-sleep-support"
            tag="Best-of"
          />
          <HubCard
            title="Natural sleep remedies (non‑pharma)"
            desc="Low-cost options and routines — no extreme supplement stacks."
            href="/best-natural-sleep-remedies-non-pharma"
            tag="Best-of"
          />
          <HubCard
            title="Wind-down routine that sticks"
            desc="A simple 20-minute routine you can repeat nightly without willpower."
            href="/guides/sleep-wind-down-routine"
            tag="Guide"
          />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <HubCard
            title="Caffeine timing (big lever)"
            desc="A simple plan to adjust caffeine timing without headaches."
            href="/guides/caffeine-and-sleep-timing"
            tag="Guide"
          />
          <HubCard
            title="Bedroom temperature & bedding"
            desc="The comfort stack: cooler room, breathable bedding, and easy upgrades."
            href="/guides/bedroom-temperature-bedding"
            tag="Guide"
          />
          <HubCard
            title="Herbal remedies for stress & anxiety"
            desc="A gentle overview with beginner-friendly options and what to avoid."
            href="/best-herbal-remedies-for-stress-anxiety"
            tag="Best-of"
          />
        </div>
      </section>

      <section id="low-tox" className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">Low-tox home</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Focus on what you breathe, what touches skin, and what you use daily.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <HubCard
            title="Low-tox products for beginners"
            desc="The simplest swaps to reduce fragrance load and irritation triggers."
            href="/best-low-tox-products-for-beginners"
            tag="Best-of"
          />
          <HubCard
            title="Fragrance-free laundry detergents (UK)"
            desc="A high-impact swap because laundry sits on skin for hours."
            href="/best-fragrance-free-laundry-detergents-uk"
            tag="Best-of"
          />
          <HubCard
            title="Healthy air at home"
            desc="Comfort-focused air quality guidance and practical next steps."
            href="/guides/healthy-air-at-home"
            tag="Guide"
          />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <HubCard
            title="Best water filters (UK)"
            desc="UK-friendly picks and simple decision rules."
            href="/best-water-filters-uk"
            tag="Best-of"
          />
          <HubCard
            title="Shower filters (UK hard water)"
            desc="For hair/skin comfort, especially in hard-water areas."
            href="/best-shower-filters-uk-hard-water"
            tag="Best-of"
          />
          <HubCard
            title="Non-toxic cookware starter"
            desc="A simple path to safer cookware without replacing everything at once."
            href="/best-non-toxic-cookware-starter"
            tag="Best-of"
          />
        </div>
      </section>

      <section id="nutrition" className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">Nutrition foundations</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Keep it simple: food-first, stable energy, and repeatable basics.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <HubCard
            title="Anti-inflammatory foods (shopping guide)"
            desc="Simple staples and swaps to build better meals without restrictive rules."
            href="/best-anti-inflammatory-foods-shopping-list"
            tag="Best-of"
          />
          <HubCard
            title="Organic cooking oils (UK)"
            desc="One high-impact pantry swap that’s easy to stick with."
            href="/best-organic-cooking-oils-uk"
            tag="Best-of"
          />
          <HubCard
            title="Organic protein powders (UK)"
            desc="Busy schedules and training support — clean ingredients, no hype."
            href="/best-organic-protein-powders-uk"
            tag="Best-of"
          />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <HubCard
            title="Organic snacks (healthy)"
            desc="Easy additions for satiety and better “between meals” choices."
            href="/best-organic-snacks-healthy"
            tag="Best-of"
          />
          <HubCard
            title="Detox support foods"
            desc="Food-first support — skip the extreme “detox” marketing."
            href="/best-detox-support-foods"
            tag="Best-of"
          />
          <HubCard
            title="Nutrition hub"
            desc="Browse nutrition basics, guides, and category pages."
            href="/nutrition"
            tag="Hub"
          />
        </div>
      </section>

      <section className="mt-16">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Prefer a done-for-you plan?</h2>
          <p className="mt-2 text-sm text-zinc-700">
            Our first digital guide is a calm 30‑day reset that combines low‑tox essentials, sleep basics, and nutrition foundations.
            It’s optional — a shortcut for people who want a simple weekly checklist.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link className="btn-primary" href="/products/holistic-home-reset" data-track="product-from-recommended">
              View The Holistic Home Reset
            </Link>
            <Link className="btn-secondary" href="/shopping-list" data-track="newsletter-from-recommended">
              Get the free shopping list
            </Link>
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            Some links across the site may earn us a small commission at no extra cost to you. We keep recommendations limited and practical.
          </p>
        </div>
      </section>
    </main>
  );
}
