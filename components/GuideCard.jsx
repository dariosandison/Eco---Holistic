import Link from "next/link";


import Image from 'next/image';
export default function GuideCard({ guide }){
  const img = guide.cover || "/logo.png";
  const tag = guide.tags && guide.tags.length ? guide.tags[0] : null;

  return (
    <article className="card guide-card">
      <div className="guide-card__media">
        <Image
  src={img}
  alt=""
  width={800}
  height={600}
  onError={(e)=>{ e.currentTarget.src="/logo.png"; }}
/>

      </div>
      <div className="guide-card__body">
        {tag && <span className="tag">{tag}</span>}
        <h3 className="guide-card__title">
          <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
        </h3>
        <p className="guide-card__excerpt">{guide.description || ""}</p>
      </div>
    </article>
  );
}
