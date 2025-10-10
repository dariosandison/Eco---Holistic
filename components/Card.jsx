export default function Card({ href, title, excerpt, image, tag }) {
  return (
    <a
      href={href}
      className="group block rounded-2xl bg-[var(--card)] shadow-sm ring-1 ring-black/5 hover:shadow-md hover:-translate-y-0.5 transition"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" className="aspect-[16/10] w-full object-cover rounded-t-2xl" loading="lazy" />
      <div className="p-4">
        {tag && (
          <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs text-neutral-700 mb-2">
            {tag}
          </span>
        )}
        <h3 className="font-semibold tracking-tight group-hover:underline">{title}</h3>
        {excerpt && <p className="text-sm text-neutral-600 mt-1">{excerpt}</p>}
        <span className="mt-3 inline-flex items-center text-sm text-[var(--brand)]">Read more →</span>
      </div>
    </a>
  )
}
