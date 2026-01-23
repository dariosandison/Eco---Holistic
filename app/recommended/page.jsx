import Link from "next/link";

export const metadata = {
  title: "Trusted Picks | Wild & Well",
  description:
    "Curated low-tox and holistic wellness picks — best overall, budget, and sensitive-household options for air, water, cleaning, and sleep.",
};

function PickCard({ tag, title, why, href, cta = "See options" }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="text-xs font-semibold text-zinc-600 uppercase tracking-wide">{tag}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-700">{why}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link className="btn-primary" href={href}>
          {cta}
        </Link>
        <Link className="btn-secondary" href="/shopping-list">
          Get the free list
        </Link>
      </div>
    </div>
  );
}

export default function RecommendedPage() {
  const updated = "January 23, 2026";
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Trusted Picks</h1>
        <p className="text-zinc-700">
          If you want the fastest route to a good choice, start here. We focus on practical, low-tox upgrades
          without overwhelm — and we link to deeper guides when you want the detail.
        </p>

        <div className="mt-6 rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">How to use this page</h2>
          <ul className="list-disc pl-6 text-zinc-700 space-y-1">
            <li><strong>New to low-tox?</strong> Start with the “Best overall” pick in each section.</li>
            <li><strong>Sensitive household?</strong> Choose fragrance-free / low-VOC options where possible.</li>
            <li><strong>On a budget?</strong> Do one high-impact swap first (air or cleaning is often easiest).</li>
          </ul>
          <p className="mt-3 text-sm text-zinc-600">
            Want it emailed? <Link className="underline" href="/shopping-list">Get the free shopping list →</Link>
          </p>
          <p className="mt-1 text-xs text-zinc-500">Last updated: {updated}</p>
        </div>
      </header>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Air (healthy home)</h2>
        <p className="text-sm text-zinc-600 mb-6">Best for allergies, cooking fumes, and winter air quality.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <PickCard
            tag="Best overall"
            title="True HEPA purifier sized for your room"
            why="Most people see the biggest difference by choosing the right size and replacing filters on schedule."
            href="/guides/healthy-air-at-home"
            cta="Read the air guide"
          />
          <PickCard
            tag="Best budget"
            title="Measure first: hygrometer + ventilation habits"
            why="Data prevents overbuying. A simple measurement step often saves money and improves results."
            href="/guides/winter-humidity-guide"
            cta="Humidity guide"
          />
          <PickCard
            tag="Sensitive households"
            title="Low-ozone / no-ioniser approach"
            why="Prioritise particle filtration and airflow over “extra features” that can irritate sensitive homes."
            href="/guides/healthy-air-at-home"
            cta="See what to avoid"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Water (UK)</h2>
        <p className="text-sm text-zinc-600 mb-6">Best for taste, hard-water scale, and practical contaminant concerns.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <PickCard
            tag="Best overall"
            title="A UK-appropriate filter for daily drinking water"
            why="Choose something with transparent specs and realistic maintenance — consistency beats perfection."
            href="/guides/water-filter-buying-guide-uk"
            cta="Read the water guide"
          />
          <PickCard
            tag="Best budget"
            title="Start with taste + odour improvement"
            why="A simple carbon-focused option is often the best first step for most households."
            href="/guides/water-filter-buying-guide-uk"
            cta="Compare options"
          />
          <PickCard
            tag="Sensitive households"
            title="Prioritise third‑party testing and clear materials"
            why="If you’re cautious, look for transparency on materials and performance rather than marketing claims."
            href="/guides/water-filter-buying-guide-uk"
            cta="What to look for"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Cleaning (low-tox reset)</h2>
        <p className="text-sm text-zinc-600 mb-6">Best for fragrance sensitivity and everyday routines.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <PickCard
            tag="Best overall"
            title="Fragrance‑free starter kit"
            why="Simple, consistent swaps are the fastest way to reduce irritants and keep things realistic."
            href="/guides/non-toxic-cleaning-starter"
            cta="Cleaning starter"
          />
          <PickCard
            tag="Best budget"
            title="One multi‑surface product + microfibres"
            why="A minimal setup prevents cupboard clutter and still covers most everyday cleaning."
            href="/guides/non-toxic-cleaning-starter"
            cta="See the basics"
          />
          <PickCard
            tag="Sensitive households"
            title="Low fragrance + fewer additives"
            why="If you react to scent, choose fragrance‑free first and add targeted products only if needed."
            href="/guides/non-toxic-cleaning-starter"
            cta="Sensitive-friendly tips"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Sleep (clean sleep)</h2>
        <p className="text-sm text-zinc-600 mb-6">Best for comfort, materials, and keeping your bedroom calm.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <PickCard
            tag="Best overall"
            title="Breathable bedding + low‑VOC materials"
            why="Most “sleep upgrades” fail because they’re uncomfortable. Prioritise comfort so you stick with it."
            href="/guides/non-toxic-mattress-and-bedding-guide"
            cta="Read the sleep guide"
          />
          <PickCard
            tag="Best budget"
            title="Upgrade bedding first"
            why="High impact for less cost — you can improve sleep comfort without replacing a whole mattress."
            href="/guides/non-toxic-mattress-and-bedding-guide"
            cta="Bedding-first plan"
          />
          <PickCard
            tag="Sensitive households"
            title="Lower smell / fewer finishes"
            why="If you’re sensitive, focus on material transparency and give items time to air out if needed."
            href="/guides/non-toxic-mattress-and-bedding-guide"
            cta="What to prioritise"
          />
        </div>
      </section>

      <section id="starter" className="mt-14 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">Starter list (quick wins)</h2>
        <p className="text-zinc-700 mb-4">
          If you’re new, choose one category and do one swap this week. For the full “shopping list” version,
          grab it free by email.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link className="btn-primary" href="/shopping-list">Get the free shopping list</Link>
          <Link className="btn-secondary" href="/best-low-tox-products-for-beginners">Best low-tox for beginners</Link>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold mb-3">Trending guides</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><a className="underline" href="/guides/water-filter-buying-guide-uk">Water filters (UK) – buyer’s guide</a></li>
          <li><a className="underline" href="/guides/healthy-air-at-home">Healthy air at home</a></li>
          <li><a className="underline" href="/guides/winter-humidity-guide">Winter humidity – what to do & what to buy</a></li>
          <li><a className="underline" href="/guides/non-toxic-mattress-and-bedding-guide">Non-toxic mattress & bedding</a></li>
          <li><a className="underline" href="/guides/non-toxic-cleaning-starter">Non-toxic cleaning starter</a></li>
        </ul>
      </section>

      <p className="mt-12 text-sm text-zinc-500">
        Some links may earn us a small commission at no extra cost to you. We only recommend products we genuinely trust.
      </p>
    </main>
  );
}
