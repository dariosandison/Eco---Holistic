function withAmazonTag(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes('amazon.')) {
      if (!u.searchParams.get('tag')) {
        u.searchParams.set('tag', 'wildandwell0c-21');
      }
      return u.toString();
    }
    return url;
  } catch {
    return url;
  }
}

export default function ProductCard({ title, description, image, href, badge, price, rating = 0 }) {
  const link = withAmazonTag(href || '#');

  return (
    <article className="card">
      {badge && <span className="kicker">{badge}</span>}
      <a href={link} target="_blank" rel="noreferrer" style={{display:'block',marginTop:8}}>
        {/* Use <img> to avoid Image domain issues if next.config isn't applied yet */}
        <img src={image} alt={title} style={{width:'100%',height:180,objectFit:'cover',borderRadius:12,border:'1px solid #e2e8f0'}} />
      </a>
      <div className="title">{title}</div>
      <div className="muted" style={{minHeight:48}}>{description}</div>
      <div style={{display:'flex',alignItems:'center',gap:8,marginTop:8}}>
        {rating ? <span aria-label={`Rating ${rating} / 5`}>{'★'.repeat(rating)}{'☆'.repeat(5-rating)}</span> : null}
        {price && <span className="muted">· {price}</span>}
      </div>
      <a href={link} target="_blank" rel="noreferrer" style={{display:'inline-block',marginTop:10,fontWeight:700}}>
        View on Amazon →
      </a>
    </article>
  );
}
