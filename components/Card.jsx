export default function Card({ href, title, excerpt, image }) {
  return (
    <a href={href} className="group block rounded-2xl bg-[var(--card)] shadow-sm hover:shadow-md transition">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" className="aspect-[16/10] w-full object-cover rounded-t-2xl" loading="lazy" />
      <div className="p-4">
        <h3 className="font-semibold tracking-tight group-hover:underline">{title}</h3>
        {excerpt && <p className="text-sm text-neutral-600 mt-1">{excerpt}</p>}
      </div>
    </a>
  )
}
