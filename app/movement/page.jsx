import Link from "next/link";

export const metadata = {
  title: "Movement & Fitness | Wild & Well",
  description: "Strength, walking, mobility, and gear basics (trackers, bands, shoes, mats).",
};

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
        <h1 className="text-4xl font-bold">Movement &amp; Fitness</h1>
        <p className="mt-3 text-zinc-700">
          Walking, basic strength, mobility, and recovery — with optional gear when it helps.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog">Read Wellness Insights</Link>
          <Link className="btn-secondary" href="/favourites">Browse favourites</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: February 1, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Explore movement styles</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Pick a lane and build a repeatable routine before adding equipment.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card image="/images/cards/bands.svg" title="Stretches & mobility" desc="A simple 10‑minute routine for desk bodies, stiff hips, and tight backs — plus optional tools." href="/movement/stretches" tag="Guide" />
          <Card image="/images/cards/scale.svg" title="Hypertrophy" desc="Build muscle with a simple plan, progressive overload, and minimal equipment." href="/movement/hypertrophy" tag="Guide" />
          <Card image="/images/cards/tracker.svg" title="Cardio" desc="Start with walking, build a base, then add gentle intervals when ready." href="/movement/cardio" tag="Guide" />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Favourites shortlists</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Straightforward roundups: what to look for, what to avoid, and a shortlist of solid options.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card image="/images/cards/tracker.svg" title="Fitness trackers for beginners (UK): shortlist" desc="Steps, sleep, heart-rate: what matters for most people." href="/best-fitness-trackers-beginners-uk" tag="Trackers" />
          <Card image="/images/cards/scale.svg" title="Smart scales (UK): shortlist" desc="If you use one, use it for trends — not daily readings." href="/best-smart-scales-uk" tag="Scales" />
          <Card image="/images/cards/bands.svg" title="Resistance bands for home workouts: shortlist" desc="A small kit that covers strength + rehab basics." href="/best-resistance-bands-home-workouts" tag="Bands" />
          <Card image="/images/cards/shoe.svg" title="Walking shoes for daily steps (UK): shortlist" desc="Comfort-first shoes for regular walking." href="/best-walking-shoes-daily-steps-uk" tag="Footwear" />
          <Card image="/images/cards/bands.svg" title="yoga mats for grip & comfort" desc="Grip and cushioning for floor work." href="/best-yoga-mats-grip-comfort" tag="Mobility" />
          <Card image="/images/cards/bands.svg" title="foam rollers & recovery tools" desc="Simple recovery tools for tight hips/backs." href="/best-foam-rollers-recovery-tools" tag="Recovery" />
          <Card image="/images/cards/neutral.svg" title="activewear basics (UK)" desc="Comfort-first basics: tops, leggings, socks, layers." href="/best-activewear-basics-uk" tag="Clothing" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Start with routines (bodyweight first)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Start with simple routines you can repeat. Equipment is optional.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog/walking-for-health-how-much-is-enough">Walking guide</Link>
          <Link className="btn-secondary" href="/blog/home-strength-basics-busy-people">Home strength basics</Link>
          <Link className="btn-secondary" href="/blog/mobility-for-desk-workers">Mobility for desk work</Link>
        </div>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  );
}
