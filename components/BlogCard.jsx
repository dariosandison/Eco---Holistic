import Link from "next/link";

export default function BlogCard({ post }){
  const img = post.cover || "/logo.png";
  const d = post.date ? new Date(post.date) : null;
  const dateStr = d ? d.toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "2-digit" }) : "";

  return (
    <article className="card guide-card">
      <div className="guide-card__media">
        <img src={img} alt="" onError={(e)=>{ e.currentTarget.src="/logo.png"; }} />
      </div>
      <div className="guide-card__body">
        <span className="tag">Latest</span>
        <h3 className="guide-card__title">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="guide-card__excerpt">{post.description || ""}</p>
        {dateStr && <div style={{fontSize:12, color:"#455248"}}>{dateStr}</div>}
      </div>
    </article>
  );
}
