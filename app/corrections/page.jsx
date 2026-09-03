import Link from 'next/link'

export const metadata = {
  title: 'Corrections — Wild & Well',
  description: 'How Wild & Well handles factual corrections, broken links, stale product information and meaningful editorial updates.',
}

export default function Page(){
  return (
    <main className="trust-page">
      <header className="trust-hero">
        <div><p className="trust-hero__kicker">Editorial standards</p><h1>Corrections</h1></div>
        <div className="trust-hero__lede"><p>Useful guidance depends on being willing to change it. When we find a material error, stale commercial detail or misleading wording, the job is to correct it—not defend the old version.</p><div className="trust-proof"><span>Material errors corrected</span><span>Meaningful dates only</span><span>Reader reports welcomed</span></div></div>
      </header>

      <div className="trust-grid">
        <aside className="trust-nav"><p>On this page</p><a href="#what-we-correct">What we correct</a><a href="#process">Our process</a><a href="#dates">Dates and updates</a><a href="#report">Report an issue</a></aside>
        <div className="trust-content">
          <section className="trust-section" id="what-we-correct"><p className="trust-section__eyebrow">01 / Scope</p><h2>What counts as a correction</h2><p>We correct factual errors, materially misleading wording, broken or misdirected links, stale product or merchant information, and claims that no longer reflect the evidence or source cited.</p><p>Minor spelling, formatting or layout changes are normal maintenance and do not justify presenting an article as newly updated.</p></section>

          <section className="trust-section" id="process"><p className="trust-section__eyebrow">02 / Process</p><h2>What happens when something is wrong</h2><ol className="correction-process"><li>Check the reported point against the strongest available source.</li><li>Correct or remove the information where the evidence supports a change.</li><li>Review nearby copy so the correction does not leave a misleading conclusion behind.</li><li>Update the page date only when the editorial change is meaningful.</li><li>For important commercial pages, re-check related specifications, links and availability while the page is open.</li></ol></section>

          <section className="trust-section" id="dates"><p className="trust-section__eyebrow">03 / Freshness</p><h2>Dates should mean something</h2><p>“Last updated” is intended to signal meaningful editorial work, not an automated timestamp. We do not deliberately refresh dates simply to make old material appear recent.</p><p>Products, standards and guidance can change at different speeds. High-intent buying pages and topics with changing safety or regulatory information deserve more frequent review than stable background explainers.</p></section>

          <div className="trust-callout" id="report"><div><p>04 / Reader reports</p><h2>Found something we should fix?</h2></div><div><p>Use the contact page and include the page URL, the statement or link you think is wrong, and—if you have it—the source that raised the concern. We will assess the substance rather than the tone of the report.</p><Link className="btn-secondary" href="/contact">Report an issue</Link></div></div>

          <div className="trust-links"><Link href="/editorial-policy">Editorial policy →</Link><Link href="/how-we-test">How we evaluate products →</Link><Link href="/affiliate-disclosure">Affiliate disclosure →</Link></div>
          <p className="trust-updated">Last reviewed: September 3, 2026</p>
        </div>
      </div>
    </main>
  )
}
