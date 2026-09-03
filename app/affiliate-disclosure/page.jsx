import Link from 'next/link'

export const metadata = {
  title: 'Affiliate Disclosure',
  description: 'How Wild & Well uses affiliate links, keeps editorial decisions separate from commissions, and updates recommendations.',
}

export default function Page() {
  return (
    <main className="trust-page">
      <header className="trust-hero">
        <div><p className="trust-hero__kicker">Commercial transparency</p><h1>Affiliate disclosure</h1></div>
        <div className="trust-hero__lede"><p>Some links on Wild &amp; Well are affiliate links. If you buy after following one, we may earn a commission at no extra cost to you. That revenue helps fund the site, but it does not buy a recommendation.</p><div className="trust-proof"><span>No paid rankings</span><span>Problem before product</span><span>Research labelled clearly</span></div></div>
      </header>

      <div className="trust-grid">
        <aside className="trust-nav"><p>On this page</p><a href="#independence">Editorial independence</a><a href="#selection">Selection</a><a href="#testing">Research vs testing</a><a href="#links">How links work</a></aside>
        <div className="trust-content">
          <section className="trust-section" id="independence"><p className="trust-section__eyebrow">01 / Independence</p><h2>Commission does not buy position</h2><p>We do not sell paid ranking positions in editorial shortlists. A higher commission does not automatically move a product higher, and affiliate availability is not the starting criterion for whether we cover a product or problem.</p><p>A free fix, lower-cost alternative, non-commercial guide or no purchase at all can be the right recommendation.</p></section>

          <section className="trust-section" id="selection"><p className="trust-section__eyebrow">02 / Selection</p><h2>How recommendations earn a place</h2><ul><li>Start with the problem and whether a purchase is necessary.</li><li>Compare no-cost and lower-cost alternatives first.</li><li>Prefer clear specifications, checkable evidence and realistic ownership costs.</li><li>Keep health, environmental and performance claims conservative.</li><li>Remove or replace options when evidence, fit or availability changes.</li></ul></section>

          <section className="trust-section" id="testing"><p className="trust-section__eyebrow">03 / Evidence</p><h2>Research is not the same as testing</h2><p>Unless a page explicitly says otherwise, buying guides are based on editorial research rather than laboratory or long-term hands-on testing. We do not present manufacturer claims as our own test results.</p><p>Our full product-evaluation process explains the distinction, the information we compare and how ownership costs and alternatives are considered.</p><Link href="/how-we-test">Read how we evaluate products →</Link></section>

          <div className="trust-callout" id="links"><div><p>04 / Affiliate links</p><h2>What happens when you click</h2></div><div><p>An affiliate link may contain tracking information that lets a merchant attribute a qualifying purchase to Wild &amp; Well. The price you pay is not increased because we may receive a commission.</p><p>Merchant prices, availability and terms can change. Where we cannot verify a current price, we direct readers to check retailer details rather than presenting stale or invented pricing.</p></div></div>

          <div className="trust-links"><Link href="/editorial-policy">Editorial policy →</Link><Link href="/how-we-test">How we evaluate products →</Link><Link href="/corrections">Corrections →</Link></div>
          <p className="trust-updated">Last reviewed: September 3, 2026</p>
        </div>
      </div>
    </main>
  )
}
