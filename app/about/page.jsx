import Link from 'next/link'

export const metadata = {
  title: 'About',
  description: 'What Wild & Well is, how we choose what we recommend, and how we keep things honest.',
}

export default function Page(){
  return (
    <main className='mx-auto max-w-3xl px-4 py-16 prose'>
      <h1>About Wild &amp; Well</h1>
      <p>
        Wild &amp; Well is a practical wellness site for UK homes: low‑tox living, better sleep, food-first nutrition,
        and simple movement habits. We focus on the stuff that actually changes your day-to-day — and we keep the advice conservative.
      </p>

      <h2>How the site is organised</h2>
      <ul>
        <li><strong>Wellness Insights</strong> — explainers and articles that help you understand what matters.</li>
        <li><strong>Favourites</strong> — shortlists with clear trade‑offs, so you can compare options quickly.</li>
        <li><strong>Topics</strong> — curated paths (sleep, air quality, water, fragrance‑free) to help you start in the right place.</li>
      </ul>

      <h2>How we make money (and what we don’t do)</h2>
      <p>
        Some pages include affiliate links. If you buy through those links, we may earn a small commission at no extra cost to you.
        We don’t accept paid placements in reviews or “ranking” pages.
      </p>
      <p>
        You can read the full policies here: <Link href='/affiliate-disclosure'>affiliate disclosure</Link>,
        <Link href='/editorial-policy'> editorial policy</Link>, and <Link href='/how-we-test'>how we test</Link>.
      </p>

      <h2>What “testing” means for us</h2>
      <p>
        We’re not a laboratory. Our goal is to answer real buying questions: will this work in a normal home, is it easy to live with,
        and is the ongoing cost worth it? When we can’t test every model, we use a consistent rubric and prioritise transparent brands.
      </p>

      <h2>Start here</h2>
      <p>
        If you’re new, start with the <Link href='/shopping-list'>free shopping list</Link>, then browse <Link href='/topics'>Topics</Link>
        to choose a single area to improve this week.
      </p>

      <h2>Who’s behind Wild &amp; Well</h2>
      <p>
        Wild &amp; Well is founded and edited in‑house. You can read the <Link href='/authors/wild-and-well-founder'>Founder &amp; Editor profile</Link>
        and see other contributors on the <Link href='/authors'>Authors</Link> page.
      </p>

      <p>
        Have feedback, corrections, or a product you’d like us to consider? Use the <Link href='/contact'>contact page</Link>.
      </p>
    </main>
  )
}
