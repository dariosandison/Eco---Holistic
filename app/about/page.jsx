import Link from 'next/link'

export const metadata = {
  title: 'About | Wild & Well',
  description: 'What Wild & Well is, how we choose what we recommend, and how we keep things honest.',
}

export default function Page(){
  return (
    <main className='mx-auto max-w-3xl px-4 py-12 prose'>
      <h1>About Wild &amp; Well</h1>
      <p>
        Wild &amp; Well is a practical wellness site focused on low‑tox living, better sleep, food-first nutrition,
        and simple movement habits.
      </p>
      <p>
        We publish two main types of pages:
      </p>
      <ul>
        <li><strong>Wellness Insights</strong> — explainers and articles that help you understand what matters.</li>
        <li><strong>Favourites</strong> — shortlists with clear trade‑offs, so you can compare options quickly.</li>
      </ul>
      <p>
        We aim to keep recommendations straightforward: fewer items, clearer reasoning, and no paid placements disguised as advice.
      </p>
      <p>
        If you’re new, start with the <Link href='/shopping-list'>free shopping list</Link> and the
        <Link href='/blog'> Wellness Insights</Link> hub.
      </p>
    </main>
  )
}
