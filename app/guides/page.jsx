import Link from 'next/link'
import Card from '@/components/Card'
import { listContent } from '@/lib/content'

export const metadata = { title: 'Guides | Wild & Well' }

export default function Page() {
  const items = listContent('guides')
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Guides</h1>
          <p className="mt-1 text-sm text-zinc-700">
            Practical, calm guidance for low‑tox and holistic living — with trusted picks inside.
          </p>
        </div>
        <Link href="/recommended" className="btn-primary w-full sm:w-auto text-center">
          Shop trusted picks
        </Link>
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
