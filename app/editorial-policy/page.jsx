import Link from 'next/link'

export const metadata = {
  title: 'Editorial Policy — Wild & Well',
  description: 'How Wild & Well creates and updates content, evaluates products, handles affiliate relationships and corrects errors.',
}

export default function EditorialPolicy() {
  return (
    <main className="trust-page">
      <header className="trust-hero">
        <div><p className="trust-hero__kicker">Editorial standards</p><h1>Editorial policy</h1></div>
        <div className="trust-hero__lede"><p>Wild &amp; Well exists to help UK readers make useful, proportionate decisions. We separate “what solves the problem?” from “can this page earn a commission?” and make uncertainty visible where the evidence is limited.</p><div className="trust-proof"><span>No paid rankings</span><span>Evidence labelled</span><span>Meaningful updates only</span></div></div>
      </header>

      <div className="trust-grid">
        <aside className="trust-nav"><p>On this page</p><a href="#independence">Independence</a><a href="#creation">How content is made</a><a href="#health">Health claims</a><a href="#freshness">Freshness</a><a href="#commercial">Commercial relationships</a></aside>
        <div className="trust-content">
          <section className="trust-section" id="independence"><p className="trust-section__eyebrow">01 / Independence</p><h2>The problem comes before the product</h2><ul><li><strong>No paid ranking positions.</strong> Merchants cannot buy a higher editorial recommendation.</li><li><strong>Affiliate availability is not the starting criterion.</strong> A free fix, non-commercial guide or no purchase can be the recommended next step.</li><li><strong>Uncertainty stays visible.</strong> We avoid presenting certainty where specifications, evidence or claims do not support it.</li></ul></section>

          <section className="trust-section" id="creation"><p className="trust-section__eyebrow">02 / Creation</p><h2>How we create and review content</h2><p>Content is organised around the decision a reader is trying to make. Informational guides explain the problem first; buying guides and shortlists come later when a product is genuinely relevant.</p><p>Unless a page explicitly says otherwise, product coverage is based on editorial research rather than hands-on laboratory or long-term testing. Manufacturer claims are not presented as Wild &amp; Well test results.</p><p>We favour specific, checkable information: intended use, published specifications, relevant standards or testing claims, maintenance, ownership cost, warranty, UK practicality and trade-offs.</p></section>

          <section className="trust-section" id="health"><p className="trust-section__eyebrow">03 / Health</p><h2>Health and wellness claims stay conservative</h2><p>Wild &amp; Well provides general educational information. We do not diagnose or treat medical conditions and we avoid presenting consumer products as substitutes for appropriate medical care.</p><p>Where a topic has meaningful health implications, language is deliberately conservative and readers are encouraged to use qualified professional advice where appropriate.</p></section>

          <section className="trust-section" id="freshness"><p className="trust-section__eyebrow">04 / Freshness</p><h2>Updates should reflect real editorial work</h2><p>Products, links, regulations and specifications change. Important commercial pages are revisited and options can be removed when they become stale, unavailable or no longer fit the use case.</p><p>“Last updated” dates are intended to reflect meaningful editorial changes, not cosmetic edits or automated refreshes. We do not deliberately change dates merely to make old material appear new.</p><Link href="/corrections">Read the corrections standard →</Link></section>

          <div className="trust-callout" id="commercial"><div><p>05 / Commercial relationships</p><h2>Affiliate funded, not affiliate led.</h2></div><div><p>Some links may earn Wild &amp; Well a commission if a reader buys after following them. Merchant relationships and commission rates can change; the editorial criteria should not.</p><p>The affiliate disclosure and product-evaluation pages explain how recommendations, claims and commercial links are handled.</p></div></div>

          <div className="trust-links"><Link href="/how-we-test">How we evaluate products →</Link><Link href="/affiliate-disclosure">Affiliate disclosure →</Link><Link href="/corrections">Corrections →</Link></div>
          <p className="trust-updated">Last reviewed: September 3, 2026</p>
        </div>
      </div>
    </main>
  )
}
