import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Wild & Well</title>
        <meta
          name="description"
          content="Learn more about Wild & Well – a holistic living and eco-friendly wellness blog inspiring natural, sustainable lifestyles."
        />
      </Head>

      <div className="container" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>🌿 About Wild & Well</h1>
        <p>
          Welcome to <strong>Wild & Well</strong>, a space dedicated to holistic living,
          eco-friendly health, and mindful wellness. 🌱
        </p>

        <h2>✨ Our Mission</h2>
        <p>
          We believe small, sustainable choices can create big impacts — for your health
          and for the planet. Our goal is to share practical tips, natural remedies, and
          inspiring ideas to help you live in harmony with nature.
        </p>

        <h2>🌍 What We Write About</h2>
        <ul>
          <li>Herbal teas and natural remedies</li>
          <li>Eco-friendly home and lifestyle tips</li>
          <li>Mindfulness and holistic health practices</li>
        </ul>

        <h2>📲 Connect With Us</h2>
        <p>
          Follow us for updates, tips, and inspiration:
        </p>
        <ul>
          <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
          <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
          <li><a href="https://www.twitter.com/" target="_blank">Twitter</a></li>
        </ul>
      </div>
    </>
  );
}
