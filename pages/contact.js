// pages/contact.js
import SEO from '../components/SEO';

export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: 'Contact — Wild & Well',
        description: 'Get in touch with the Wild & Well team.',
        url: 'https://www.wild-and-well.store/contact',
        type: 'website',
        breadcrumbs: [
          { name: 'Home', item: 'https://www.wild-and-well.store/' },
          { name: 'Contact', item: 'https://www.wild-and-well.store/contact' }
        ]
      }
    },
    revalidate: 60 * 60 * 24
  };
}

export default function Contact({ seo }) {
  return (
    <>
      <SEO {...seo} />
      <div className="container" style={{ marginTop: 22 }}>
        <article className="post">
          <h1 className="post-title">Contact</h1>
          <p>We’d love to hear from you.</p>
          <p>
            Email: <a href="mailto:hello@wild-and-well.store">hello@wild-and-well.store</a>
          </p>
          <p>Media or partnership inquiries: <a href="mailto:press@wild-and-well.store">press@wild-and-well.store</a></p>
        </article>
      </div>
    </>
  );
}
