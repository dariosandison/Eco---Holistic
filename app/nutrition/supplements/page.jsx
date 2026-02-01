import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Supplements — a simple, low‑additive approach | Wild & Well',
  description:
    'Supplements guide: how to read labels, spot quality signals, and avoid common traps when choosing minimal-additive options.',
}

function MiniCard({ title, children }) {
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
        <h1 className="mt-2 text-4xl font-bold">Supplements (simple + low‑additive)</h1>
        <p className="mt-3 text-zinc-700">
          Supplements can be useful, but marketing often runs ahead of evidence. This guide covers label reading, quality signals, and common traps, with a focus on simple formulas and clear dosing.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/nutrition">Back to Nutrition</Link>
          <Link className="btn-secondary" href="/how-we-test">How we choose favourites</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: February 1, 2026</p>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <MiniCard title="Start here">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Food first.</strong> Supplements work best as a small add‑on, not a replacement for basics.</li>
            <li><strong>One change at a time.</strong> It’s the easiest way to spot what helps and what doesn’t.</li>
            <li><strong>Prefer simple formulas.</strong> Single‑ingredient or minimal blends are easier to assess.</li>
          </ul>
        </MiniCard>

        <MiniCard title="Quality signals that matter">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Clear dosing</strong> (amount per serving) and transparent ingredient lists.</li>
            <li><strong>Third‑party testing</strong> (look for credible programs — and verify on the label/brand site).</li>
            <li><strong>Minimal additives</strong>: fewer colours, flavours, sweeteners, and “extras”.</li>
          </ul>
        </MiniCard>

        <MiniCard title="Avoid">
          <ul className="list-disc pl-6 space-y-2">
            <li>“Proprietary blends” that hide individual ingredient amounts.</li>
            <li>Extreme health claims (“detox”, “burn fat fast”, “cure”) — red flag.</li>
            <li>Massive stacks: buying 8–10 supplements at once before you’ve tested any.</li>
          </ul>
        </MiniCard>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">A simple shopping framework</h2>
        <div className="mt-3 max-w-3xl text-sm text-zinc-700 space-y-3">
          <p>
            If you’re going to buy supplements, aim for a setup that’s easy to maintain and easy to audit.
            That usually means <strong>fewer products</strong>, <strong>simpler formulas</strong>, and <strong>clear reasons</strong> for each.
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Define the goal in plain English</strong> (e.g., “protein convenience” or “sleep routine support”).</li>
            <li><strong>Choose the simplest form</strong> that matches the goal (single ingredient where possible).</li>
            <li><strong>Check the label</strong>: dose, serving size, other ingredients, allergens, and any testing claims.</li>
            <li><strong>Test for 2–4 weeks</strong> before changing anything else (and stop if you feel worse).</li>
          </ol>
          <p className="text-xs text-zinc-500">
            Note: This is general information, not medical advice. If you’re pregnant, taking medication, or managing a condition, check with a qualified clinician.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Tools (low‑risk, high‑use)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Before buying more supplements, make the habit frictionless. These are “boring” items that help consistency.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="Weekly pill organiser"
            badge="Habit"
            description="The simplest way to stay consistent and avoid doubling doses."
            href={amazonSearchUrl('weekly pill organiser large compartments')}
            bullets={['Choose compartments you can actually open', 'Look for easy cleaning', 'Keep it visible (not buried in a drawer)']}
          />
          <ProductPick
            title="Digital kitchen scale"
            badge="Accuracy"
            description="Useful for powders (and for food, too)."
            href={amazonSearchUrl('digital kitchen scale 0.1g')}
            bullets={['0.1g precision helps for small amounts', 'Tare function is essential', 'Simple is fine']}
          />
          <ProductPick
            title="Shaker bottle"
            badge="Convenience"
            description="For protein powders or simple drink mixes — without clumps."
            href={amazonSearchUrl('shaker bottle leakproof')}
            bullets={['Leakproof lid matters', 'Dishwasher safe is a plus', 'Pick a size you’ll actually carry']}
          />
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Favourites shortlists (when you’re ready)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          These pages go deeper: what to look for, what to avoid, and a shortlist of sensible options.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/best-organic-supplements-beginners">Organic supplements: beginner shortlist</Link>
          <Link className="btn-secondary" href="/best-gut-health-supplements-beginners">Gut health supplements: beginner shortlist</Link>
          <Link className="btn-secondary" href="/best-adaptogens-beginners-guide">Adaptogens: beginner guide</Link>
        </div>
      </section>

      <p className="mt-12 text-xs text-zinc-500">Some links may earn us a commission at no extra cost to you.</p>
    </main>
  )
}
