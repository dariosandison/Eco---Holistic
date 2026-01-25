import Link from 'next/link'

export const metadata = {
  title: 'How We Test — Wild & Well',
  description: 'Our repeatable process for choosing and reviewing low-tox, natural wellness, and holistic health products.',
}

function Section({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-3 text-zinc-700 space-y-3">{children}</div>
    </section>
  )
}

export default function HowWeTest() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">How we test (and how we choose)</h1>
      <p className="mt-3 text-zinc-700">
        Wild &amp; Well is built for people who want calmer decisions: fewer products, clearer trade-offs, and recommendations you can trust.
      </p>

      <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">The short version</h2>
        <ol className="mt-3 list-decimal pl-6 text-sm text-zinc-700 space-y-2">
          <li><strong>Define the job:</strong> what problem this product solves (and what it can’t).</li>
          <li><strong>Screen for dealbreakers:</strong> hidden ongoing costs, vague claims, poor availability.</li>
          <li><strong>Compare alternatives:</strong> price, usability, and replacement parts/filters.</li>
          <li><strong>Choose a shortlist:</strong> best overall, best budget, best for a specific situation.</li>
          <li><strong>Update:</strong> we revise pages as products change or better options appear.</li>
        </ol>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/editorial-policy">Editorial policy</Link>
          <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Last updated: January 25, 2026</p>
      </div>

      <Section title="What “testing” means for us">
        <p>
          We’re not a laboratory. Our goal is to answer the questions real people ask before they spend money:
          <strong> will it work in a normal UK home, is it easy to live with, and is it worth the ongoing cost?</strong>
        </p>
        <p>
          When we can’t test every model, we use a consistent evaluation rubric (below) and prioritise brands with transparent specs and replacement parts.
        </p>
      </Section>

      <Section title="Our evaluation rubric">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Performance:</strong> does it do the job it claims to do?</li>
          <li><strong>Safety &amp; transparency:</strong> clear materials/ingredients, credible certifications where relevant.</li>
          <li><strong>Ongoing costs:</strong> filters, refills, consumables, and realistic replacement schedules.</li>
          <li><strong>Ease:</strong> setup, cleaning, daily use, and whether you’ll actually keep using it.</li>
          <li><strong>Value:</strong> cost vs what you get (including durability and warranty).</li>
        </ul>
      </Section>

      <Section title="Category-specific checks">
        <h3 className="text-lg font-semibold">Air purifiers</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Room coverage / CADR suitability (we prioritise “right size for the room”).</li>
          <li>Filter type (HEPA + carbon for odours) and replacement availability/cost.</li>
          <li>Noise (especially for bedrooms) and auto/night modes.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6">Water filters</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Type fit: jug vs under-sink vs countertop gravity.</li>
          <li>Replacement filter costs (often the hidden expense).</li>
          <li>Specificity of claims: “what it removes” vs vague marketing.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6">Laundry &amp; cleaning</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Fragrance-free options (for sensitive households).</li>
          <li>Concentration and dosing (residue and overdosing are common problems).</li>
          <li>Availability in the UK (easy to repurchase matters).</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6">Supplements &amp; natural remedies</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>We focus on general education and common use cases, not medical treatment.</li>
          <li>We prefer clear labelling, reputable manufacturing, and conservative claims.</li>
          <li>We always advise checking with a clinician if you’re pregnant, on medication, or managing a condition.</li>
        </ul>
      </Section>

      <Section title="Updates, corrections, and feedback">
        <p>
          If you spot an error, a broken link, or a better option, tell us via the <Link className="underline" href="/contact">contact page</Link>.
          We keep pages current by revisiting key “money pages” regularly (especially seasonal topics like allergies and winter humidity).
        </p>
      </Section>

      <p className="mt-12 text-xs text-zinc-500">
        Some links may earn us a small commission at no extra cost to you. We never accept paid placements in reviews.
      </p>
    </main>
  )
}
