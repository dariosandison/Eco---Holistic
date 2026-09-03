import Link from 'next/link'

export const metadata = { title: 'Page not found', robots: { index: false, follow: true } }

const ROUTES = [
  ['Start here', '/start-here', 'Use the guided route if you are not sure which topic or comparison you need.'],
  ['Explore the seven journeys', '/topics', 'Water, air, sleep, nutrition, movement, healthy home and practical resilience.'],
  ['Read guides', '/blog', 'Find practical explainers and problem-solving articles.'],
  ['Compare options', '/shortlists', 'Use curated buying guidance when a product genuinely helps.'],
]

export default function NotFound() {
  return (
    <main className="trust-page">
      <header className="trust-hero">
        <div><p className="trust-hero__kicker">404 / Moved or unavailable</p><h1>That page is not here.</h1></div>
        <div className="trust-hero__lede"><p>Wild &amp; Well consolidates older pages when a clearer guide or maintained comparison becomes the better destination. Use one of the routes below rather than starting again.</p><div className="trust-proof"><span>Useful routes first</span><span>Legacy pages redirected where possible</span></div></div>
      </header>

      <section className="author-directory mt-12" aria-label="Recovery routes">
        {ROUTES.map(([title, href, copy], index) => (
          <Link key={href} href={href} className="author-directory__row">
            <span>0{index + 1}</span>
            <div><h2>{title}</h2><small>{copy}</small></div>
            <b>Open →</b>
          </Link>
        ))}
      </section>

      <div className="trust-callout"><div><p>Still looking?</p><h2>Search the site directly.</h2></div><div><p>Search across guides, journeys, comparisons, tools and standards pages.</p><Link className="btn-secondary" href="/search">Search Wild &amp; Well</Link></div></div>
    </main>
  )
}
