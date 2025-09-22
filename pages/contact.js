// /pages/contact.js
import Head from 'next/head';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Eco & Holistic</title>
        <meta name="description" content="Questions, partnerships, feedback — contact Eco & Holistic." />
      </Head>

      <main style={main}>
        <section style={hero}>
          <h1 style={h1}>Contact us</h1>
          <p style={sub}>Questions, partnerships, or feedback — we’d love to hear from you.</p>
        </section>

        <section>
          <ContactForm />
        </section>
      </main>
    </>
  );
}

const main = { maxWidth: 960, margin: '0 auto', padding: '32px 16px', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' };
const hero = { marginBottom: 24 };
const h1 = { margin: '0 0 8px', fontSize: 34, lineHeight: 1.1 };
const sub = { margin: 0, color: '#475569' };
