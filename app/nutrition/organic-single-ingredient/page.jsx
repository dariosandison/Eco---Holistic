import Link from 'next/link'

export const metadata = {
  title: 'Organic & single‑ingredient foods — practical staples | Wild & Well',
  description:
    'Education-first guide to organic and single-ingredient foods: label reading, staple-building, and practical swaps you can repeat — before any product recommendations.',
}

function Card({ title, children }) {
  return (
    <div className="card">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-3 text-sm text-zinc-700 space-y-2">{children}</div>
    </div>
  )
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-wide text-zinc-500">Nutrition</p>
        <h1 className="mt-2 text-4xl font-bold">Organic &amp; single‑ingredient foods</h1>
        <p className="mt-3 text-zinc-700">
          If you want a simple nutrition strategy that scales, start with <strong>single‑ingredient staples</strong> and upgrade quality where it matters.
          This page focuses on label reading and practical swaps before any product pushing.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/nutrition">Back to Nutrition</Link>
          <Link className="btn-secondary" href="/blog">Wellness insights</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: February 1, 2026</p>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <Card title="Start here">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Build a staples list</strong> you repeat (oats, oils, beans, eggs, fruit/veg).</li>
            <li><strong>Read the ingredient list</strong>: shorter is usually better.</li>
            <li><strong>Upgrade what you eat most</strong> (frequency matters more than perfection).</li>
          </ul>
        </Card>

        <Card title="What “single‑ingredient” really means">
          <p>
            It’s not a trend — it’s a filter. A single ingredient is exactly what it says on the tin: oats, olive oil, chickpeas, almonds.
            You can still use packaged foods — just keep the default diet built on recognisable basics.
          </p>
        </Card>

        <Card title="Avoid">
          <ul className="list-disc pl-6 space-y-2">
            <li>Paying extra for “health halo” marketing when the ingredients are still long and sugary.</li>
            <li>Swapping real food for endless powders and bars.</li>
            <li>Trying to buy everything organic overnight (it rarely sticks).</li>
          </ul>
        </Card>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">A simple “staples pyramid”</h2>
        <div className="mt-3 max-w-3xl text-sm text-zinc-700 space-y-3">
          <p>
            If you’re on a budget (most people are), don’t spread effort evenly. Put your attention where you get the most repeat value.
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Daily staples</strong>: oats, olive oil, beans/lentils, eggs, yoghurt, tinned fish, nuts/seeds.</li>
            <li><strong>Weekly staples</strong>: whole grains, frozen fruit/veg, herbs/spices.</li>
            <li><strong>Occasional extras</strong>: snacks, sauces, convenience foods (keep ingredient lists simple).</li>
          </ol>
          <p>
            Organic can be a helpful upgrade, but it’s not all-or-nothing. Start with the foods you eat most often and the staples you rely on.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Label reading (the fast checklist)</h2>
        <div className="mt-3 max-w-3xl text-sm text-zinc-700 space-y-3">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Ingredients:</strong> the shorter and more recognisable, the better.</li>
            <li><strong>Sugars:</strong> watch for multiple sweeteners listed separately.</li>
            <li><strong>Oils:</strong> for everyday cooking, choose stable, reputable oils and store them well.</li>
            <li><strong>Protein powders/bars:</strong> treat as convenience, not the foundation of a diet.</li>
          </ul>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Favourites shortlists (staples)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          These pages go deeper with practical notes and shortlists — start with the staples you buy repeatedly.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/best-extra-virgin-olive-oil-uk">Extra virgin olive oil (UK)</Link>
          <Link className="btn-secondary" href="/best-organic-oats-uk">Organic oats (UK)</Link>
          <Link className="btn-secondary" href="/best-organic-cooking-oils-uk">Organic cooking oils (UK)</Link>
          <Link className="btn-secondary" href="/best-anti-inflammatory-foods-shopping-list">Anti‑inflammatory foods list</Link>
          <Link className="btn-secondary" href="/blog/single-ingredient-staples-that-actually-matter">Single‑ingredient staples (article)</Link>
        </div>
      </section>

      <p className="mt-12 text-xs text-zinc-500">Some links may earn us a commission at no extra cost to you.</p>
    </main>
  )
}
