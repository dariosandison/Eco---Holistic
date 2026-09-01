import Link from 'next/link'

export const metadata = {
  title: 'Dog Health Editorial & Product Policy',
  description: 'How Wild & Well researches dog nutrition, supplements, wellness products, veterinary topics and affiliate recommendations.',
}

const LEVELS = [
  ['Established guidance', 'UK veterinary charities, professional guidance, food law and recognised nutritional standards.'],
  ['Product-level evidence', 'Evidence for the actual formulation, dose, device or material — not just an ingredient in general.'],
  ['Limited or emerging evidence', 'Promising but uncertain findings, clearly labelled without implying a proven clinical benefit.'],
  ['Manufacturer claim', 'A statement from the seller that has not been independently established by Wild & Well.'],
  ['Editorial judgement', 'Our practical assessment of usability, maintenance, cost, transparency and fit for a particular routine.'],
]

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Dog pillar policy</p>
        <h1 className="mt-2 text-4xl font-bold">How we handle dog health and product claims</h1>
        <p className="mt-4 text-lg text-zinc-700">Dog wellness sits close to veterinary medicine. Our job is to make everyday decisions clearer without diagnosing, prescribing or turning uncertainty into a sales pitch.</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Our evidence labels</h2>
        <div className="mt-5 space-y-3">
          {LEVELS.map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold text-zinc-900">{title}</h3>
              <p className="mt-1 text-sm text-zinc-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="panel">
          <h2 className="text-xl font-semibold">What we prioritise</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
            <li>UK food labels, complete nutrition and appropriate life stage.</li>
            <li>Veterinary guidance for symptoms, weight change and therapeutic diets.</li>
            <li>Product-specific evidence and meaningful ingredient amounts.</li>
            <li>Safety, contraindications, quality controls and ongoing cost.</li>
            <li>Routine changes and no-spend options before products.</li>
          </ul>
        </div>
        <div className="panel">
          <h2 className="text-xl font-semibold">What we will not do</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
            <li>Diagnose a condition or replace veterinary care.</li>
            <li>Call a food superior merely because it is raw, grain-free, premium or natural.</li>
            <li>Present a supplement as a cure or guaranteed prevention.</li>
            <li>Recommend abrupt diet changes or unsafe home remedies.</li>
            <li>Claim first-hand testing we have not performed.</li>
          </ul>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <h2 className="text-xl font-semibold">Commercial independence</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-700">Affiliate availability can influence which merchants we can link to, but it does not change the evidence threshold or guarantee inclusion. A partner relationship is disclosed, and catalogue inclusion is not the same as a top recommendation.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/affiliate-disclosure" className="btn-secondary">Affiliate disclosure</Link>
          <Link href="/how-we-test" className="btn-secondary">How we evaluate products</Link>
          <Link href="/dogs" className="btn-primary">Return to dog wellness</Link>
        </div>
      </section>
    </main>
  )
}
