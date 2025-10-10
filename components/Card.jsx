import Link from 'next/link';
import Image from 'next/image';

export default function Card({ href, title, excerpt, image='/placeholder.png', cta='Read more' }) {
  return (
    <Link href={href} className="group block rounded-2xl border bg-white hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative h-48 w-full bg-neutral-100">
        <Image src={image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold group-hover:underline">{title}</h3>
        {excerpt && <p className="mt-1 text-sm text-neutral-600">{excerpt}</p>}
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium">{cta} →</span>
      </div>
    </Link>
  );
}
