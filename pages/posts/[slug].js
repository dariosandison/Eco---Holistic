import SEO from "../../components/SEO";
import path from "path";

export async function getStaticPaths() {
  const { promises: fs } = await import("fs");
  const postsDir = path.join(process.cwd(), "content", "posts");
  let files = [];
  try { files = await fs.readdir(postsDir); } catch { files = []; }
  const paths = files
    .filter(f => f.endsWith(".md"))
    .map(f => ({ params: { slug: f.replace(/\.md$/, "") } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { promises: fs } = await import("fs");
  const matter = (await import("gray-matter")).default;
  const { marked } = await import("marked");

  const filePath = path.join(process.cwd(), "content", "posts", `${params.slug}.md`);
  const raw = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  const html = marked.parse(content);

  return {
    props: {
      front: {
        title: data.title || params.slug,
        description: data.description || "",
        date: data.date || ""
      },
      html
    }
  };
}

export default function Post({ front, html }) {
  return (
    <>
      <SEO title={`${front.title} — Wild & Well`} description={front.description} />
      <main className="container">
        <h1 className="h1">{front.title}</h1>
        {front.date ? <div className="muted" style={{marginBottom:16}}>{front.date}</div> : null}
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </>
  );
}

