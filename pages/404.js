// pages/404.js
import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  const title = "Page Not Found | Wild & Well";
  const desc = "We couldn't find that page.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Head>

      <main className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">404</h1>
        <p className="mt-3 text-slate-600">
          Sorry, we couldn't find that page.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/"
            className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
          >
            Go home
          </Link>
          <Link
            href="/guides"
            className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-50"
          >
            Browse guides
          </Link>
        </div>
      </main>
    </>
  );
}
