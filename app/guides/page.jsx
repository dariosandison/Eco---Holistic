import Link from 'next/link'
import Card from '@/components/Card'
import { listContent } from '@/lib/content'

export const metadata = { title: 'How-to Guides | Wild & Well' }

export default function Page() {
  const items = listContent('guides')
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">How-to Guides</h1>
          <p className="mt-2 text-sm text-zinc-700">
            Step‑by‑step explainers: how to choose, what to avoid, and what actually matters.
            For product shortlists, use our <Link href="/best-of" className="underline">Guides</Link>.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Link href="/best-of" className="btn-primary w-full sm:w-auto text-center">Browse Guides</Link>
          <Link href="/picks" className="btn-secondary w-full sm:w-auto text-center">Start with Picks</Link>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((i) => (
          <Card
            key={i.slug}
            href={`/guides/${i.slug}`}
            title={i.title}
            excerpt={i.description}
            image={i.image || '/placeholder.png'}
          />
        ))}
      </div>
    </div>
  )
}
