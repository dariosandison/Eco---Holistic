export default function Home({ posts }) {
  return (
    <div style={{padding:"2rem", fontFamily:"sans-serif"}}>
      <h1>Eco + Holistic Blog</h1>
      <p>Welcome 🌱 Natural living & holistic health tips.</p>

      <p>DEBUG: Found {posts.length} posts.</p>

      <h2>Latest Posts</h2>
      <ul>
        {posts.map(p => (
          <li key={p.slug}>
            {p.title} – {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

