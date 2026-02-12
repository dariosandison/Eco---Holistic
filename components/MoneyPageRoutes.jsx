import Link from 'next/link'

export default function MoneyPageRoutes({ routes = [], title = 'Pick your route' }) {
  if (!routes || routes.length === 0) return null

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
        Not sure what to do next? Choose the path that fits your home and your goals.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {routes.map((r) => (
          <Link key={r.href} href={r.href} className="card hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-zinc-900">{r.title}</h3>
              {r.badge ? (
                <span className="rounded-full border border-zinc-200 bg-white px-2 py-0.5 text-xs font-medium text-zinc-700">
                  {r.badge}
                </span>
              ) : null}
            </div>
            {r.description ? <p className="mt-2 text-sm text-zinc-700">{r.description}</p> : null}
          </Link>
        ))}
      </div>
    </section>
  )
}
