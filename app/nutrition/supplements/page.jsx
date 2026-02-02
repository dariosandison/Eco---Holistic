import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Supplements — a simple, low‑additive approach',
  description:
    'Supplements guide: how to read labels, spot quality signals, and avoid common traps when choosing minimal-additive options.',
}

export default function Page() {
  const faqs = [
    {
      q: 'Do most people need supplements?',
      a: 'Many people do fine without them. Supplements are usually most useful when they solve a specific, practical problem (for example: protein convenience) or when a clinician has identified a deficiency.',
    },
    {
      q: 'What does “third‑party tested” actually mean?',
      a: 'It usually means an independent lab or programme has tested the product or ingredients. Look for the name of the programme/lab and verify it on the label or brand website—vague claims without details are less meaningful.',
    },
    {
      q: 'Why are “proprietary blends” a red flag?',
      a: 'They often hide the amount of each ingredient, so you can’t judge dose, compare products, or assess whether the formula is plausible.',
    },
    {
      q: 'How long should you trial a supplement?',
      a: 'A simple approach is 2–4 weeks for a single change (if it’s safe for you), while keeping everything else stable. Stop if you feel worse or develop new symptoms.',
    },
    {
      q: 'Are gummies “worse” than capsules?',
      a: 'Not always, but gummies often include sugars, flavours, colours, and stabilisers. If you want fewer additives, capsules/tablets and simple powders are usually easier to keep minimal.',
    },
    {
      q: 'Can I take multiple supplements together?',
      a: 'It’s easier to learn what helps if you add one change at a time. Some ingredients can interact with medication or conditions, so check with a qualified clinician if you’re pregnant, medicated, or managing a condition.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-wide text-zinc-500">Nutrition</p>
        <h1 className="mt-2 text-4xl font-bold">Supplements (simple + low‑additive)</h1>
        <p className="mt-3 text-zinc-700">
          Supplements can be useful, but marketing often runs ahead of evidence. This guide focuses on label reading, quality signals,
          and common traps—so you can choose simple formulas with clear dosing.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/nutrition">Back to Nutrition</Link>
          <Link className="btn-secondary" href="/how-we-test">How we choose favourites</Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <a className="chip" href="#start">Start</a>
          <a className="chip" href="#framework">Framework</a>
          <a className="chip" href="#tools">Tools</a>
          <a className="chip" href="#shortlists">Shortlists</a>
          <a className="chip" href="#faqs">FAQs</a>
        </div>

        <p className="mt-3 text-xs text-zinc-500">Last updated: February 1, 2026</p>
      </header>

      <div id="start" />
      <TopicAtAGlance
        items={[
          {
            title: 'Start here',
            bullets: [
              'Food first: supplements work best as a small add‑on, not a replacement for basics.',
              'Change one thing at a time so you can see what helps (or doesn’t).',
              'Prefer simple formulas with a clear reason for use.',
            ],
          },
          {
            title: 'Quality signals',
            bullets: [
              'Clear dosing (amount per serving) and transparent ingredient lists.',
              'Testing details that are specific (programme/lab name, batch info when available).',
              'Fewer colours, flavours, sweeteners, and “extras”.',
            ],
          },
          {
            title: 'Avoid',
            bullets: [
              'Proprietary blends that hide ingredient amounts.',
              'Extreme claims (“detox”, “cure”, “burn fat fast”).',
              'Buying large stacks before you’ve tested anything.',
            ],
          },
        ]}
      />

      <section className="mt-14" id="framework">
        <h2 className="section-title">A simple shopping framework</h2>
        <div className="mt-3 max-w-3xl text-sm text-zinc-700 space-y-3">
          <p>
            If you buy supplements, aim for a setup that is easy to maintain and easy to audit. That usually means fewer products,
            simpler formulas, and clear reasons for each.
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Define the goal</strong> in plain English (e.g., “protein convenience” or “support a sleep routine”).</li>
            <li><strong>Choose the simplest form</strong> that matches the goal (single ingredient where possible).</li>
            <li><strong>Check the label</strong>: dose, serving size, other ingredients, allergens, and testing claims.</li>
            <li><strong>Trial one change</strong> for 2–4 weeks before adding anything else (stop if you feel worse).</li>
          </ol>
          <p className="text-xs text-zinc-500">
            Note: This is general information, not medical advice. If you’re pregnant, taking medication, or managing a condition,
            check with a qualified clinician.
          </p>
        </div>
      </section>

      <section className="mt-14" id="tools">
        <h2 className="section-title">Tools (low‑risk, high‑use)</h2>
        <p className="section-subtitle">Practical items that make consistency and dosing simpler.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="Weekly pill organiser"
            badge="Habit"
            description="A straightforward way to avoid missed or doubled doses."
            href={amazonSearchUrl('weekly pill organiser large compartments')}
            bullets={['Choose compartments you can open easily', 'Look for easy cleaning', 'Keep it visible']}
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
            description="For protein powders or simple drink mixes."
            href={amazonSearchUrl('shaker bottle leakproof')}
            bullets={['Leakproof lid matters', 'Dishwasher safe is a plus', 'Pick a size you’ll carry']}
          />
        </div>
      </section>

      <section className="mt-14" id="shortlists">
        <h2 className="section-title">Favourites shortlists</h2>
        <p className="section-subtitle">Pages with label cues and shortlists for common supplement categories.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/best-organic-supplements-beginners">Organic supplements: beginner shortlist</Link>
          <Link className="btn-secondary" href="/best-gut-health-supplements-beginners">Gut health supplements: beginner shortlist</Link>
          <Link className="btn-secondary" href="/best-adaptogens-beginners-guide">Adaptogens: beginner guide</Link>
        </div>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
