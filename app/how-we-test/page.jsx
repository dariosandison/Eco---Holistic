import Link from 'next/link'

export const metadata = {
  title: 'How We Evaluate Products — Wild & Well',
  description: 'How Wild & Well researches and evaluates products, what we do not claim to have tested, and how we separate editorial judgement from affiliate income.',
}

function Section({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-3 space-y-3 text-zinc-700">{children}</div>
    </section>
  )
}

export default function HowWeTest() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">How we evaluate products</h1>
      <p className="mt-3 text-zinc-700">
        Wild &amp; Well is designed to make buying decisions calmer: define the problem first, compare the practical trade-offs, and only recommend a product where it has a clear job to do.
      </p>

      <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">The important distinction</h2>
        <p className="mt-3 text-sm text-zinc-700">
          Unless a page explicitly says otherwise, our product guides are based on editorial research rather than hands-on laboratory or long-term product testing. We do not present manufacturer claims as our own test results.
        </p>
        <p className="mt-3 text-sm text-zinc-700">
          We compare published specifications, stated testing or certification details where relevant, UK availability, replacement costs, warranties, maintenance requirements and practical fit for the use case.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/editorial-policy">Editorial policy</Link>
          <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Last updated: August 27, 2026</p>
      </div>

      <Section title="Our evaluation process">
        <ol className="list-decimal space-y-2 pl-6">
          <li><strong>Define the job:</strong> what problem is the product intended to solve, and what is outside its scope?</li>
          <li><strong>Check the evidence:</strong> look for specific specifications, standards, testing language and limitations rather than broad marketing claims.</li>
          <li><strong>Check ownership cost:</strong> filters, cartridges, refills, energy use, servicing and other recurring costs.</li>
          <li><strong>Check UK practicality:</strong> availability, replacement parts, installation requirements, warranty and likely ease of use.</li>
          <li><strong>Compare alternatives:</strong> including the option of buying nothing, using a simpler product, or solving the problem upstream.</li>
          <li><strong>Maintain the shortlist:</strong> remove stale products and update routes as better-fitting options or partner availability changes.</li>
        </ol>
      </Section>

      <Section title="What we look for by category">
        <h3 className="text-lg font-semibold">Air purifiers</h3>
        <ul className="list-disc space-y-1 pl-6">
          <li>Room suitability and meaningful airflow or CADR information where supplied.</li>
          <li>Particle filtration, carbon stage where odours matter, and replacement-filter availability.</li>
          <li>Noise at useful operating speeds and realistic ongoing cost.</li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold">Water filters</h3>
        <ul className="list-disc space-y-1 pl-6">
          <li>Whether the format fits the job: portable, jug, countertop, under-sink, RO or gravity.</li>
          <li>Specific reduction claims and any relevant testing or certification information.</li>
          <li>Replacement-filter cost, availability and maintenance burden.</li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold">Dehumidifiers</h3>
        <ul className="list-disc space-y-1 pl-6">
          <li>Whether moisture is genuinely the problem rather than particles or ventilation alone.</li>
          <li>Capacity, room/use case, noise, drainage options and power consumption.</li>
          <li>Whether a smaller unit or a non-product fix could solve the problem first.</li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold">Sleep, movement and nutrition products</h3>
        <ul className="list-disc space-y-1 pl-6">
          <li>Products are secondary to the basic behaviour or environment they are meant to support.</li>
          <li>We avoid presenting wellness products as treatments for medical conditions.</li>
          <li>Claims are kept conservative and tied to the specific use case described on the page.</li>
        </ul>
      </Section>

      <Section title="Our UK source hierarchy">
        <p>We prefer primary UK sources for health, safety, regulation and consumer standards. Depending on the topic, that normally means:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Drinking water:</strong> the <a className="underline" href="https://www.dwi.gov.uk/" target="_blank" rel="noopener noreferrer">Drinking Water Inspectorate</a>, water-company reports and the specific standard or test method behind a product claim.</li>
          <li><strong>Health and supplements:</strong> the <a className="underline" href="https://www.nhs.uk/" target="_blank" rel="noopener noreferrer">NHS</a>, UK government guidance and relevant systematic reviews. Merchant copy is not treated as clinical evidence.</li>
          <li><strong>Indoor air, damp and mould:</strong> UKHSA and current GOV.UK housing-health guidance, followed by recognised technical standards where they apply.</li>
          <li><strong>Food and food-contact products:</strong> the Food Standards Agency and applicable UK legislation.</li>
          <li><strong>Commercial and health claims:</strong> ASA/CAP guidance. Affiliate content must remain identifiable and must not imply that a supplement or consumer product treats disease.</li>
        </ul>
        <p>Manufacturer specifications remain useful for dimensions, power use, warranties and maintenance instructions. We label them as manufacturer information and look for independent support before repeating performance or health claims.</p>
      </Section>

      <Section title="Affiliate relationships">
        <p>
          Some merchants pay Wild &amp; Well a commission if a reader buys after following an affiliate link. That commercial relationship does not change the evaluation criteria above.
        </p>
        <p>
          If there is no suitable partner product for a problem, we would rather link to a free solution, a non-commercial guide or no product at all than force an irrelevant recommendation.
        </p>
      </Section>

      <Section title="Corrections and updates">
        <p>
          Products, prices and specifications change. If you spot an error, broken link or outdated claim, use the <Link className="underline" href="/contact">contact page</Link> and include the page URL.
        </p>
      </Section>

      <p className="mt-12 text-xs text-zinc-500">
        Some links are affiliate links. If you buy via them, Wild &amp; Well may earn a commission at no extra cost to you.
      </p>
    </main>
  )
}
