import { getAllPosts, getPost } from "../../lib/posts";
import { remark } from "remark";
import html from "remark-html";

export default function Post({ post }) {
  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", fontFamily: "Georgia, serif", lineHeight: "1.7" }}>
      <article>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{post.title}</h1>
        <p style={{ color: "#777", fontSize: "0.9rem" }}>{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPost(params.slug);

  // Convert Markdown to HTML
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return { props: { post: { ...post, contentHtml } } };
}

