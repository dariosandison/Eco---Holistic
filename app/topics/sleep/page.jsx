import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Sleep Topics — Wild & Well',
  description: 'A calm, practical sleep topic: the few habits that move the needle, plus a shortlist of products that help when you’re ready.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Sleep &amp; Recovery</h1>
        <p className="mt-3 text-zinc-700">
          The goal isn’t “perfect sleep”. It’s fewer bad nights — with the smallest changes first.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog/sleep-naturally-simple-guide">Start with the cornerstone guide</Link>
          <Link className="btn-secondary" href="/best-natural-sleep-support">Natural sleep support: shortlist</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        </div>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card">
          <h2 className="text-lg font-semibold">Start here (7-day reset)</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
            <li>Morning light within 1 hour of waking.</li>
            <li>Caffeine cut-off: ~8 hours before bed.</li>
            <li>Cool bedroom (aim ~17–19°C) + darkness.</li>
            <li>Same wind-down cue nightly (shower, reading, stretch).</li>
          </ul>
          <p className="mt-4 text-xs text-zinc-500">If you only do one thing: morning light + a consistent wake time.</p>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold">What to buy (only if needed)</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
            <li>Blackout curtains/eye mask (light control).</li>
            <li>White noise (if you’re noise sensitive).</li>
            <li>Magnesium glycinate (gentler form; check with your GP if pregnant/medicated).</li>
            <li>Breathable bedding (temperature control).</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold">Avoid (common money-wasters)</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
            <li>Anything promising “knockout” results.</li>
            <li>Overcomplicated stacks of supplements.</li>
            <li>Strong fragrance in the bedroom (often backfires).</li>
          </ul>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Shortlist (buyer topics)</h2>
        <p className="mt-2 text-sm text-zinc-600">
          These are intentionally broad “search links” so you can choose the best price/size for your needs.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Magnesium glycinate (capsules)"
            badge="Gentle form"
            description="Commonly used for evening wind-down. Choose a reputable brand and start low."
            href={amazonSearchUrl('magnesium glycinate capsules UK')}
            bullets={[
              'Look for magnesium glycinate (or bisglycinate) rather than oxide',
              'Start low and assess tolerance',
              'Avoid if it conflicts with medication advice',
            ]}
          />
          <ProductPick
            title="Blackout eye mask"
            badge="Light control"
            description="A £10 fix that often beats expensive gadgets."
            href={amazonSearchUrl('blackout sleep mask contoured')}
            bullets={['Choose a comfortable, no-pressure design', 'Washable is a plus']}
          />
          <ProductPick
            title="White noise machine"
            badge="Noise buffer"
            description="Great for city flats and light sleepers."
            href={amazonSearchUrl('white noise machine bedside')}
            bullets={['Look for a simple interface', 'Timer + continuous modes help']}
          />
          <ProductPick
            title="Breathable duvet (all-season)"
            badge="Temperature"
            description="Temperature is the hidden lever for most sleep problems."
            href={amazonSearchUrl('all season duvet breathable cotton wool')}
            bullets={['Consider natural fills if you run hot', 'Prioritise easy returns']}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/best-natural-sleep-support">See the full shortlist page →</Link>
          <Link className="btn-secondary" href="/blog/magnesium-for-sleep-basics">Read: magnesium basics</Link>
        </div>
      </section>

      <p className="mt-12 text-xs text-zinc-500">
        This content is for general education and isn’t medical advice. If you’re pregnant, on medication, or managing a health condition, check with a qualified clinician first.
      </p>
    </main>
  )
}
