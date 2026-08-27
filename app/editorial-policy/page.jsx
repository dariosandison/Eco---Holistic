import Link from 'next/link'

export const metadata = {
  title: 'Editorial Policy — Wild & Well',
  description: 'How Wild & Well creates and updates content, evaluates products, handles affiliate relationships and corrects errors.',
}

function Section({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-3 space-y-3 text-zinc-700">{children}</div>
    </section>
  )
}

export default function EditorialPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">Editorial policy</h1>
      <p className="mt-3 text-zinc-700">
        Wild &amp; Well aims to help UK readers make useful, proportionate decisions. We separate the question “what solves the problem?” from the question “can this page earn a commission?”
      </p>

      <Section title="Editorial independence">
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>No paid ranking positions.</strong> We do not sell places in our shortlists or allow a merchant to buy a higher recommendation.</li>
          <li><strong>Affiliate availability is not the starting criterion.</strong> A free fix, non-commercial guide or no purchase can be the recommended next step.</li>
          <li><strong>We state uncertainty.</strong> Where evidence, specifications or product claims are limited, we avoid presenting certainty that is not supported.</li>
        </ul>
      </Section>

      <Section title="Affiliate income">
        <p>
          Some links are affiliate links. If you buy after following one of those links, Wild &amp; Well may earn a commission at no extra cost to you.
        </p>
        <p>
          Merchant relationships and commission rates can change. Our commercial links are disclosed and our product-evaluation criteria are described separately in <Link className="underline" href="/how-we-test">How we evaluate products</Link>.
        </p>
        <p>
          Read the full disclosure here: <Link className="underline" href="/affiliate-disclosure">Affiliate disclosure</Link>.
        </p>
      </Section>

      <Section title="How we create content">
        <p>
          We organise content around the problem a reader is trying to solve. Informational guides explain the decision first; buying guides and shortlists come later when a product is actually relevant.
        </p>
        <p>
          Unless a page explicitly says otherwise, product coverage is based on editorial research rather than hands-on laboratory or long-term testing. We do not present a manufacturer’s published claim as our own test result.
        </p>
        <p>
          We favour specific, checkable information: intended use, published specifications, relevant standards or testing claims, replacement costs, UK availability, maintenance, warranty and practical trade-offs.
        </p>
      </Section>

      <Section title="Health and wellness claims">
        <p>
          Wild &amp; Well provides general educational information. We do not diagnose or treat medical conditions and we avoid presenting consumer products as substitutes for appropriate medical care.
        </p>
        <p>
          Where a topic has meaningful health implications, our language is deliberately conservative and readers are encouraged to seek qualified professional advice when appropriate.
        </p>
      </Section>

      <Section title="Corrections and updates">
        <p>
          Products, links and specifications change. We revisit important commercial pages and update or remove options when they become stale, unavailable or no longer fit the use case.
        </p>
        <p>
          If you spot a factual error, broken link or outdated claim, use the <Link className="underline" href="/contact">contact page</Link> and include the page URL. Material corrections should be made rather than silently preserving information we know is wrong.
        </p>
      </Section>

      <Section title="Dates and freshness">
        <p>
          “Last updated” dates are intended to reflect meaningful editorial changes, not cosmetic edits or automatic refreshes. We do not deliberately change dates simply to make old material appear new.
        </p>
      </Section>

      <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Editorial transparency</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/how-we-test">How we evaluate products</Link>
          <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
          <Link className="btn-secondary" href="/product-disclosure">Product disclosure</Link>
          <Link className="btn-secondary" href="/contact">Corrections / contact</Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Last updated: August 27, 2026</p>
      </div>
    </main>
  )
}
