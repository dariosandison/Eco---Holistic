// components/AuthorCard.js
export default function AuthorCard({ name, title, bio, avatar }) {
  if (!name && !bio) return null;
  return (
    <aside className="author" aria-label="About the author">
      {avatar ? <img src={avatar} alt="" loading="lazy" /> : <div style={{width:48,height:48,borderRadius:999,background:'#efe7d4'}} />}
      <div>
        {name && <strong>{name}</strong>}
        {title && <small>{title}</small>}
        {bio && <p style={{margin:'6px 0 0'}}>{bio}</p>}
      </div>
    </aside>
  );
}
