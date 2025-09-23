// pages/500.js
import Head from "next/head";
import Link from "next/link";

export default function ServerError() {
  const title = "Something went wrong | Wild & Well";
  const desc = "An unexpected error occurred.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Head>

      <main className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Oops — something went wrong
        </h1>
        <p className="mt-3 text-slate-600">
          Please try again or come back later.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
          >
            Go home
          </Link>
        </div>
      </main>
    </>
  );
}
