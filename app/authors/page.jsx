import Link from 'next/link'
import { AUTHORS } from '@/lib/authors'
import StructuredData from '@/components/StructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Authors',
  description: 'Who writes and updates Wild & Well — plus our editorial approach and areas of focus.',
}

export default function Page() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Wild & Well authors',
    itemListElement: AUTHORS.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: a.name,
      url: `${SITE_URL}/authors/${a.slug}`,
    })),
  }
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={itemList} />
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Authors</h1>
        <p className="mt-3 text-zinc-700">
          Wild &amp; Well is founded and edited in‑house. We publish practical wellness content for UK homes,
          and we update key pages as products and evidence change.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/editorial-policy">Editorial policy</Link>
          <Link className="btn-secondary" href="/how-we-test">How we test</Link>
        </div>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {AUTHORS.map((a) => (
          <Link key={a.slug} href={`/authors/${a.slug}`} className="card hover:shadow-sm transition-shadow">
            <h2 className="text-lg font-semibold">{a.name}</h2>
            {a.role ? <p className="mt-1 text-sm text-zinc-600">{a.role}</p> : null}
            {a.bio ? <p className="mt-3 text-sm text-zinc-700">{a.bio}</p> : null}
            <p className="mt-3 text-xs text-zinc-500">View profile →</p>
          </Link>
        ))}
      </section>
    </main>
  )
}
