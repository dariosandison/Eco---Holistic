import Link from 'next/link'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'

export const metadata = {
  title: 'Organic & single‑ingredient foods — practical staples',
  description:
    'Guide to organic and single-ingredient foods: label reading, staple-building, and practical swaps you can repeat.',
}

export default function Page() {
  const faqs = [
    {
      q: 'Is organic always necessary?',
      a: 'Not always. A practical approach is to prioritise organic for foods you eat often and staples that you buy repeatedly, while keeping the overall diet centred on simple, recognisable ingredients.',
    },
    {
      q: 'What’s the difference between “organic” and “natural”?',
      a: 'Organic is a regulated certification standard. “Natural” is often a marketing term with no consistent definition—always check the ingredient list.',
    },
    {
      q: 'How do I prioritise on a budget?',
      a: 'Start with the staples you use weekly (oats, oils, beans, eggs, yoghurt, fruit/veg). Buying fewer, higher-rotation items tends to stick better than trying to upgrade everything at once.',
    },
    {
      q: 'Do frozen foods count as “good quality” staples?',
      a: 'Often, yes. Frozen fruit and vegetables can be convenient, affordable, and nutritionally solid. Check for added sugar/sauces and keep ingredient lists short.',
    },
    {
      q: 'Does storage really matter for staples?',
      a: 'Yes. Heat, light, and air degrade oils and ground seeds faster. Buy sensible sizes, store well, and use them regularly to reduce waste and keep quality higher.',
    },
    {
      q: 'Are ultra‑processed foods always “bad”?',
      a: 'They vary. The most practical lever is to make your default diet mostly whole and minimally processed staples, then treat convenience foods as occasional extras—while still checking labels.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-wide text-zinc-500">Nutrition</p>
        <h1 className="mt-2 text-4xl font-bold">Organic &amp; single‑ingredient foods</h1>
        <p className="mt-3 text-zinc-700">
          A simple strategy that scales: build most meals around <strong>single‑ingredient staples</strong>, then upgrade quality where it matters.
          This page covers label reading and practical swaps you can repeat.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/nutrition">Back to Nutrition</Link>
          <Link className="btn-secondary" href="/blog">Wellness insights</Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <a className="chip" href="#start">Start</a>
          <a className="chip" href="#pyramid">Staples pyramid</a>
          <a className="chip" href="#labels">Label checklist</a>
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
              'Build a staples list you repeat (oats, oils, beans, eggs, fruit/veg).',
              'Read the ingredient list: shorter and more recognisable is usually better.',
              'Upgrade what you eat most often (frequency matters more than perfection).',
            ],
          },
          {
            title: 'What “single‑ingredient” means',
            bullets: [
              'A simple filter: oats, olive oil, chickpeas, almonds.',
              'Packaged foods can still fit—keep the default diet built on basics.',
              'Treat convenience foods as extras, not the foundation.',
            ],
          },
          {
            title: 'Avoid',
            bullets: [
              'Health-halo marketing when ingredients are still long and sugary.',
              'Replacing real food with endless powders and bars.',
              'Trying to change everything overnight (it rarely sticks).',
            ],
          },
        ]}
      />

      <section className="mt-14" id="pyramid">
        <h2 className="section-title">A simple staples pyramid</h2>
        <div className="mt-3 max-w-3xl text-sm text-zinc-700 space-y-3">
          <p>
            If you’re on a budget (most people are), don’t spread effort evenly. Put attention where you get the most repeat value.
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Daily staples</strong>: oats, olive oil, beans/lentils, eggs, yoghurt, tinned fish, nuts/seeds.</li>
            <li><strong>Weekly staples</strong>: whole grains, frozen fruit/veg, herbs/spices.</li>
            <li><strong>Occasional extras</strong>: snacks, sauces, convenience foods (keep ingredient lists simple).</li>
          </ol>
          <p>
            Organic can be a helpful upgrade, but it’s not all-or-nothing. Start with foods you eat most often and staples you rely on.
          </p>
        </div>
      </section>

      <section className="mt-14" id="labels">
        <h2 className="section-title">Label reading (fast checklist)</h2>
        <div className="mt-3 max-w-3xl text-sm text-zinc-700 space-y-3">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Ingredients:</strong> shorter and more recognisable is usually better.</li>
            <li><strong>Sugars:</strong> watch for multiple sweeteners listed separately.</li>
            <li><strong>Oils:</strong> choose reputable oils and store them well (cool, dark, sealed).</li>
            <li><strong>Convenience foods:</strong> treat as add-ons—still check ingredient lists.</li>
          </ul>
        </div>
      </section>

      <section className="mt-14" id="shortlists">
        <h2 className="section-title">Picks shortlists (staples)</h2>
        <p className="section-subtitle">Practical notes and shortlists—start with staples you buy repeatedly.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/best-extra-virgin-olive-oil-uk">Extra virgin olive oil (UK)</Link>
          <Link className="btn-secondary" href="/best-organic-oats-uk">Organic oats (UK)</Link>
          <Link className="btn-secondary" href="/best-organic-cooking-oils-uk">Organic cooking oils (UK)</Link>
          <Link className="btn-secondary" href="/best-anti-inflammatory-foods-shopping-list">Anti‑inflammatory foods list</Link>
          <Link className="btn-secondary" href="/blog/single-ingredient-staples-that-actually-matter">Single‑ingredient staples (article)</Link>
        </div>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
