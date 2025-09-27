// pages/blog/[slug].js
import SeoHead from '../../components/SeoHead';
import { getAllDocs, getDocBySlug } from '../../lib/content';

export async function getStaticPaths() {
  const posts = getAllDocs({ dir: 'content/blog', fields: ['slug'] });
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getDocBySlug({
    dir: 'content/blog',
    slug: params.slug,
    // Ask for both; lib may provide contentHtml or content
    fields: [
      'slug',
      'title',
      'excerpt',
      'date',
      'image',
      'tags',
      'author',
      'content',
      'contentHtml',
    ],
  });

  return { props: { post } };
}

export default function BlogPost({ post }) {
  const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';
  const url = `${SITE}/blog/${post.slug}`;
  const ogImage = post.image || '/images/placeholder-16x9.jpg';

  return (
    <>
      <SeoHead
        title={`${post.title} — Wild & Well`}
        description={post.excerpt || 'Wild & Well blog post'}
        url={url}
        type="article"
        image={ogImage}
      />

      <article className="card prose" style={{ marginTop: 20, padding: 16 }}>
        <header>
          <h1 style={{ marginTop: 0 }}>{post.title}</h1>
          <div style={{ color: '#4b553d' }}>
            {post.date && new Date(post.date).toLocaleDateString()}
            {post.author ? ` · ${post.author}` : ''}
          </div>
          {post.image ? (
            <img
              src={post.image}
              alt=""
              className="card-img"
              style={{ marginTop: 12 }}
              onError={(e) => {
                e.currentTarget.src = '/images/placeholder-16x9.jpg';
                e.currentTarget.onerror = null;
              }}
            />
          ) : null}
          {post.excerpt ? <p style={{ marginTop: 12 }}>{post.excerpt}</p> : null}
        </header>

        {/* Prefer sanitized HTML if provided by your lib; otherwise show plain text safely */}
        {post.contentHtml ? (
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        ) : (
          <div className="prose">
            {post.content
              ? post.content.split('\n').map((line, i) => <p key={i}>{line}</p>)
              : null}
          </div>
        )}
      </article>

      {/* Simple disclosure footer (good for affiliate transparency) */}
      <div className="note" style={{ marginTop: 16 }}>
        This article may contain affiliate links. If you purchase through them, we may earn a small
        commission at no extra cost to you. We only recommend products we genuinely believe in.
      </div>
    </>
  );
}
