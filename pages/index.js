import Link from "next/link";
import SEO from "../components/SEO";
import path from "path";

export async function getStaticProps() {
  // Read latest posts (up to 6) at build time (no 'fs' on client)
  const { promises: fs } = await import("fs");
  const postsDir = path.join(process.cwd(), "content", "posts");
  let files = [];
  try {
    files = await fs.readdir(postsDir);
  } catch {
    files = [];
  }
  // load front matter only
  const matter = (await import("gray-matter")).default;
  const posts = [];
  for (const file of files) {
    if (!file.endsWith(".md")) continue;
    const slug = file.replace(/\.md$/, "");
    const raw = await fs.readFile(path.join(postsDir, file), "utf8");
    const { data } = matter(raw);
    posts.push({
      slug,
      title: data.title || slug,
      date: data.date || "",
      description: data.description || ""
    });
  }
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return { props: { posts: posts.slice(0, 6) } };
}

export default function Home({ posts }) {
  return (
    <>
      <SEO
        title="Wild & Well — Eco + Holistic Blog"
        description="Natural remedies, herbal tea guides, and eco-friendly habits you can actually use."
      />
      <section className="hero">
        <div className="container" style={{paddingTop:0}}>
          <h1 className="h1">Live Wild &amp; Well</h1>
          <p>Practical eco-living & holistic wellness—no fluff, just things that work.</p>
        </div>
      </section>

      <main className="container">
        <h2 className="h2">Latest Guides</h2>
        <div className="post-grid">
          {posts.map(p => (
            <article className="card" key={p.slug}>
              <h3 style={{margin:"0 0 8px", fontSize: "18px"}}>
                <Link href={`/posts/${p.slug}`}>{p.title}</Link>
              </h3>
              <p className="muted" style={{margin:"0 0 8px"}}>{p.description}</p>
              <Link href={`/posts/${p.slug}`}>Read more →</Link>
            </article>
          ))}
          {posts.length === 0 && (
            <p className="muted">No posts yet. Add Markdown files to <code>content/posts</code>.</p>
          )}
        </div>
      </main>
    </>
  );
}

