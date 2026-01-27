import Link from 'next/link'
import Card from '@/components/Card'
import { listContent } from '@/lib/content'

export const metadata = { title: 'Wellness Insights | Wild & Well' }

export default function Page() {
  const items = listContent('blog')
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Wellness Insights</h1>
          <p className="mt-1 text-sm text-zinc-700">
            Evidence‑informed wellness notes, routines, and product guidance — without the overwhelm.
          </p>
        </div>
        <Link href="/best-of" className="rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 w-full sm:w-auto text-center">
          Browse guides
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((i) => (
          <Card
            key={i.slug}
            href={`/blog/${i.slug}`}
            title={i.title}
            excerpt={i.description}
            image={i.image || '/placeholder.png'}
          />
        ))}
      </div>
    </div>
  )
}
