import Link from 'next/link'

export const metadata = {
  title: 'How We Evaluate Products — Wild & Well',
  description: 'How Wild & Well researches and evaluates products, what we do not claim to have tested, and how we separate editorial judgement from affiliate income.',
}

export default function HowWeTest() {
  return (
    <main className="trust-page">
      <header className="trust-hero">
        <div><p className="trust-hero__kicker">Product standards</p><h1>How we evaluate products</h1></div>
        <div className="trust-hero__lede"><p>Buying decisions should start with the job, not the brand. We compare the practical trade-offs, ownership burden and evidence behind a product before deciding whether it deserves a place in a guide.</p><div className="trust-proof"><span>Research labelled clearly</span><span>Ownership cost considered</span><span>No-spend alternatives included</span></div></div>
      </header>

      <div className="trust-grid">
        <aside className="trust-nav"><p>On this page</p><a href="#distinction">Research vs testing</a><a href="#process">Evaluation process</a><a href="#categories">Category criteria</a><a href="#sources">Source hierarchy</a><a href="#commercial">Affiliate relationships</a></aside>
        <div className="trust-content">
          <div className="trust-callout" id="distinction"><div><p>01 / Important distinction</p><h2>Editorial research is not hands-on testing.</h2></div><div><p>Unless a page explicitly says otherwise, Wild &amp; Well product guides are based on editorial research rather than laboratory or long-term hands-on testing.</p><p>We do not present manufacturer claims as our own results. Published specifications, certification or testing information are labelled for what they are and weighed alongside ownership cost, UK practicality and alternatives.</p></div></div>

          <section className="trust-section" id="process"><p className="trust-section__eyebrow">02 / Process</p><h2>Our evaluation sequence</h2><ol className="correction-process"><li><strong>Define the job.</strong> What problem is the product intended to solve, and what sits outside its scope?</li><li><strong>Check the evidence.</strong> Look for specific specifications, standards, testing language and limitations rather than broad marketing claims.</li><li><strong>Check ownership cost.</strong> Filters, cartridges, refills, energy use, servicing and other recurring costs matter.</li><li><strong>Check UK practicality.</strong> Availability, replacement parts, installation requirements, warranty and ease of use.</li><li><strong>Compare alternatives.</strong> Including buying nothing, using a simpler product or solving the problem upstream.</li><li><strong>Maintain the shortlist.</strong> Remove stale options and update routes when fit, evidence or availability changes.</li></ol></section>

          <section className="trust-section" id="categories"><p className="trust-section__eyebrow">03 / Categories</p><h2>What matters changes with the job</h2><h3>Air purifiers</h3><ul><li>Room suitability and meaningful airflow or CADR information where supplied.</li><li>Particle filtration, carbon stage where odours matter, and replacement-filter availability.</li><li>Noise at useful operating speeds and realistic ongoing cost.</li></ul><h3>Water filters</h3><ul><li>Whether the format fits the job: portable, jug, countertop, under-sink, RO or gravity.</li><li>Specific reduction claims and relevant testing or certification information.</li><li>Replacement-filter cost, availability and maintenance burden.</li></ul><h3>Dehumidifiers</h3><ul><li>Whether moisture is genuinely the problem rather than particles or ventilation alone.</li><li>Capacity, use case, noise, drainage options and power consumption.</li><li>Whether a non-product fix should come first.</li></ul><h3>Sleep, movement and nutrition</h3><ul><li>Products stay secondary to the behaviour or environment they are meant to support.</li><li>Consumer wellness products are not presented as treatments for medical conditions.</li><li>Claims remain conservative and tied to the specific use case.</li></ul></section>

          <section className="trust-section" id="sources"><p className="trust-section__eyebrow">04 / Sources</p><h2>Our UK source hierarchy</h2><p>For health, safety, regulation and consumer standards we prefer primary or authoritative UK sources where available. That can include the Drinking Water Inspectorate, NHS and UK government guidance, UKHSA, the Food Standards Agency, ASA/CAP guidance and the relevant technical standard behind a product claim.</p><p>Manufacturer information remains useful for dimensions, power use, warranties and maintenance. It is treated as manufacturer information rather than independent evidence, and stronger support is preferred before repeating performance or health claims.</p></section>

          <section className="trust-section" id="commercial"><p className="trust-section__eyebrow">05 / Commercial relationships</p><h2>A partner relationship does not create a recommendation</h2><p>Some merchants pay Wild &amp; Well a commission if a reader buys after following an affiliate link. That commercial relationship does not change the evaluation sequence above.</p><p>If there is no suitable partner product for a problem, a free solution, non-commercial guide or no product at all can be the better next step.</p><Link href="/affiliate-disclosure">Read the affiliate disclosure →</Link></section>

          <div className="trust-links"><Link href="/editorial-policy">Editorial policy →</Link><Link href="/affiliate-disclosure">Affiliate disclosure →</Link><Link href="/corrections">Corrections →</Link></div>
          <p className="trust-updated">Last reviewed: September 3, 2026</p>
        </div>
      </div>
    </main>
  )
}
