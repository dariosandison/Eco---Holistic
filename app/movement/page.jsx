import Link from "next/link";

export const metadata = {
  title: "Movement & Fitness | Wild & Well",
  description: "Strength, walking, mobility, and no‑gimmick gear recommendations (trackers, bands, shoes, mats).",
};

function Card({ title, desc, href, tag }) {
  return (
    <Link href={href} className="card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-1 text-sm text-zinc-600">{desc}</p>
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
          This section is about what works in real life: walking, basic strength, mobility, and recovery.
          No gimmicks — just practical routines and gear that supports consistency.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog">Read the blog</Link>
          <Link className="btn-secondary" href="/best-of">Browse best-of pages</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: January 27, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Best-of guides</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Straightforward roundups: what to look for, what to avoid, and a shortlist of solid options.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card title="Best fitness trackers for beginners (UK)" desc="Steps, sleep, heart-rate: what matters and what doesn’t." href="/best-fitness-trackers-beginners-uk" tag="Trackers" />
          <Card title="Best smart scales (UK)" desc="If you use one, use it for trends — not daily obsession." href="/best-smart-scales-uk" tag="Scales" />
          <Card title="Best resistance bands for home workouts" desc="A small kit that covers strength + rehab basics." href="/best-resistance-bands-home-workouts" tag="Bands" />
          <Card title="Best walking shoes for daily steps (UK)" desc="Comfort-first shoes for regular walking." href="/best-walking-shoes-daily-steps-uk" tag="Footwear" />
          <Card title="Best yoga mats for grip & comfort" desc="A mat you’ll actually want to use." href="/best-yoga-mats-grip-comfort" tag="Mobility" />
          <Card title="Best foam rollers & recovery tools" desc="Simple recovery tools for tight hips/backs." href="/best-foam-rollers-recovery-tools" tag="Recovery" />
          <Card title="Best activewear basics (UK)" desc="Comfort-first basics: tops, leggings, socks, layers." href="/best-activewear-basics-uk" tag="Clothing" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Start with routines (bodyweight first)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          We’ll publish a small library of simple routines you can repeat. Gear is optional — it’s here when it helps.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog/walking-for-health-how-much-is-enough">Walking guide</Link>
          <Link className="btn-secondary" href="/blog/home-strength-basics-busy-people">Home strength basics</Link>
          <Link className="btn-secondary" href="/blog/mobility-for-desk-workers">Mobility for desk work</Link>
        </div>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links may earn us a small commission at no extra cost to you.
      </p>
    </main>
  );
}
