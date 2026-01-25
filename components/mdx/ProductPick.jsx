import Image from 'next/image'
import AmazonButton from '@/components/mdx/AmazonButton'

export default function ProductPick({
  title,
  description,
  asin,
  href,
  image = '/og-default.jpg',
  badge,
  bullets = [],
}) {
  return (
    <div className="not-prose overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
          <Image src={image} alt="" fill className="object-cover" sizes="96px" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
            {badge ? (
              <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-700">
                {badge}
              </span>
            ) : null}
          </div>
          {description ? <p className="mt-1 text-sm text-zinc-700">{description}</p> : null}

          {bullets?.length ? (
            <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          ) : null}

          <div className="mt-4">
            <AmazonButton asin={asin} href={href}>Check price on Amazon</AmazonButton>
          </div>
        </div>
      </div>
    </div>
  )
}
