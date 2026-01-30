import Link from 'next/link'

export const metadata = {
  title: 'Editorial Policy — Wild & Well',
  description: 'How Wild & Well creates content, chooses products, and keeps affiliate income from influencing recommendations.',
}

function Section({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-3 text-zinc-700 space-y-3">{children}</div>
    </section>
  )
}

export default function EditorialPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">Editorial policy</h1>
      <p className="mt-3 text-zinc-700">
        Our job is to help you decide without hype. That means clear trade-offs, transparent monetisation, and no paid placements influencing recommendations.
      </p>

      <Section title="Independence">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>No paid placements in reviews.</strong> We don’t sell placements in our shortlists.</li>
          <li><strong>Affiliate links never decide recommendations.</strong> We choose the option first, then add links.</li>
          <li><strong>We prioritise transparency.</strong> When evidence is limited, we say so.</li>
        </ul>
      </Section>

      <Section title="Affiliate income (how it works)">
        <p>
          Some links are affiliate links (often Amazon). If you buy via those links, we may earn a small commission at no extra cost to you.
        </p>
        <p>
          Read the full disclosure here: <Link className="underline" href="/affiliate-disclosure">Affiliate disclosure</Link>.
        </p>
      </Section>

      <Section title="How we create content">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Wellness Insights</strong> explain basics and help you avoid common mistakes.</li>
          <li><strong>Favourites pages</strong> are for buyer intent — shortlists, not endless lists.</li>
          <li><strong>Topics</strong> connect the two: a simple plan + the next best action.</li>
        </ul>
        <p>
          We update pages as products change and as we learn what helps real people most.
          Where possible, we prefer items with reliable availability in the UK and sensible replacement costs.
        </p>
      </Section>

      <Section title="Corrections and updates">
        <p>
          We aim to correct factual errors quickly. If you spot something wrong, contact us and include the page URL and the issue.
        </p>
        <p>
          Major pages include a “last updated” note and we will add update notes when changes materially affect recommendations.
        </p>
      </Section>

      <Section title="Health content disclaimer">
        <p>
          We provide general educational information only. We don’t diagnose, treat, or replace medical advice.
          If you’re pregnant, on medication, or managing a health condition, consult a qualified clinician.
        </p>
      </Section>

      <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Quick links</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/how-we-test">How we test</Link>
          <Link className="btn-secondary" href="/product-disclosure">Product disclosure</Link>
          <Link className="btn-secondary" href="/contact">Contact</Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Last updated: January 25, 2026</p>
      </div>
    </main>
  )
}
