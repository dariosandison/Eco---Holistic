import Head from 'next/head'

export default function Newsletter() {
  return (
    <>
      <Head>
        <title>Join the Wild & Well Newsletter</title>
        <meta name="description" content="Weekly tips on holistic health, natural healing, and eco living." />
      </Head>
      <main className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold mb-4">Join the newsletter</h1>
        <p className="mb-6">Get one thoughtful email per week with practical tips, research-backed insights, and product picks that align with holistic living.</p>
        {/* Replace this with your Beehiiv/ConvertKit embed */}
        <form action="https://example.com/subscribe" method="post" className="flex gap-2">
          <input type="email" name="email" placeholder="you@domain.com" required className="border px-3 py-2 rounded flex-1" />
          <button className="px-4 py-2 rounded bg-black text-white">Subscribe</button>
        </form>
        <p className="text-sm opacity-70 mt-3">We respect your privacy. Unsubscribe anytime.</p>
      </main>
    </>
  )
}
