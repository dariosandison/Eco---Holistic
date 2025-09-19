import Link from "next/link";
import SEO from "../components/SEO";
import path from "path";

export async function getStaticProps() {
  const { promises: fs } = await import("fs");
  const postsDir = path.join(process.cwd(), "content", "posts");
  const matter = (await import("gray-matter")).default;

  let files = [];
  try { files = await fs.readdir(postsDir); } catch { files = []; }

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
  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <>
      <SEO title="Blog — Wild & Well" description="All guides from eco living to herbal wellness." />
      <main className="container">
        <h1 className="h1">All Posts</h1>
        <div className="post-grid" style={{marginTop: 12}}>
          {posts.map(p => (
            <article className="card" key={p.slug}>
              <h3 style={{margin:"0 0 8px", fontSize: "18px"}}>
                <Link href={`/posts/${p.slug}`}>{p.title}</Link>
              </h3>
              <p className="muted" style={{margin:"0 0 8px"}}>{p.description}</p>
              <div className="muted" style={{fontSize:12}}>{p.date}</div>
            </article>
          ))}
          {posts.length === 0 && <p className="muted">No posts yet.</p>}
        </div>
      </main>
    </>
  );
}

