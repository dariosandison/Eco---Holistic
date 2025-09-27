// pages/guides/index.js
import Card from '../../components/Card';
import { getAllDocs } from '../../lib/content';

export async function getStaticProps() {
  const guides = getAllDocs({
    dir: 'content/guides',
    fields: ['slug', 'title', 'excerpt', 'date', 'badge', 'deal'],
  });
  return { props: { guides } };
}

export default function GuidesIndex({ guides }) {
  return (
    <>
      <h1>Guides</h1>
      {guides.length === 0 ? (
        <p>No guides published yet.</p>
      ) : (
        <div className="grid">
          {guides.map((g) => <Card key={g.slug} {...g} />)}
        </div>
      )}
    </>
  );
}
