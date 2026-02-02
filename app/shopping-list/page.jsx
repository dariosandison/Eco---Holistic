import Link from "next/link";
import SignupFormTracker from "@/components/SignupFormTracker";

export const metadata = {
  title: "Free Low‑Tox Shopping List | Wild & Well",
  description:
    "Download our simple low‑tox shopping list: trusted swaps for air, water, cleaning, and everyday wellness.",
};

const ERROR_COPY = {
  invalid_email: "Please enter a valid email address.",
  not_configured:
    "Newsletter is not configured yet. In Vercel → Environment Variables, either add NEWSLETTER_FORM_ACTION (embed form action URL) OR set Beehiiv credentials (BEEHIV_API_KEY + BEEHIV_PUBLICATION_ID). Then redeploy.",
  beehiiv_auth:
    "Subscription failed (Beehiiv auth). Double‑check BEEHIV_API_KEY in Vercel, then redeploy and try again.",
  beehiiv_publication:
    "Subscription failed (Beehiiv publication ID). Make sure BEEHIV_PUBLICATION_ID is the API v2 publication id (often starts with 'pub_'). Then redeploy and try again.",
  beehiiv_rate_limited:
    "Beehiiv is rate‑limiting requests right now. Please try again in a minute.",
  beehiiv_bad_request:
    "Subscription failed (Beehiiv rejected the request). Please try again — if it persists, contact us.",
  subscribe_failed:
    "Something went wrong subscribing you. Please try again in a moment — or use the contact page.",
};

export default function ShoppingListPage({ searchParams }) {
  const error = searchParams?.error;
  const errorMsg = error ? (ERROR_COPY[error] || "Something went wrong. Please try again.") : null;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Free: Low‑Tox Shopping List</h1>
      <p className="text-zinc-700 mb-8">
        A calm, beginner-friendly shortcut to healthier choices — in plain English. Get our trusted swaps for
        <strong> air</strong>, <strong>water</strong>, <strong>cleaning</strong>, and <strong>everyday wellness</strong>.
      </p>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Get the list</h2>
        <p className="text-sm text-zinc-600 mb-4">
          Enter your email and we’ll send the list. (No spam — unsubscribe anytime.)
        </p>

        <div className="mb-5 rounded-2xl border bg-zinc-50 p-4">
          <div className="text-sm font-semibold text-zinc-900">Quick preview (examples)</div>
          <ul className="mt-2 list-disc pl-6 text-sm text-zinc-700 space-y-1">
            <li>Air: what “true HEPA” means and how to size a purifier for your room</li>
            <li>Water: jug vs under‑sink vs countertop — a simple way to choose</li>
            <li>Cleaning: fragrance‑free laundry + all‑purpose starter swaps</li>
            <li>Sleep: light, caffeine timing, and a few low‑risk upgrades</li>
            <li>Kitchen: a small “swap next” checklist (no overhaul required)</li>
          </ul>
        </div>

        {errorMsg ? (
          <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
            {errorMsg}{" "}
            {error === "subscribe_failed" ? (
              <Link className="underline" href="/contact">
                Contact us
              </Link>
            ) : null}
          </div>
        ) : null}

        <SignupFormTracker formId="shopping-list-form" placement="shopping-list" />
        <form id="shopping-list-form" className="flex flex-col sm:flex-row gap-2" action="/api/subscribe" method="post">
          <input type="hidden" name="source" value="shopping-list" />
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            aria-label="Email address"
            autoComplete="email"
            inputMode="email"
            className="w-full rounded-xl border px-3 py-2"
          />
          <button type="submit" className="btn-primary">
            Send me the list
          </button>
        </form>

        <p className="mt-3 text-xs text-zinc-600">
          What happens next: the email arrives within a couple of minutes. If you don’t see it, check promotions/spam.
          After you subscribe, you’ll land on the{" "}
          <Link className="underline" href="/shopping-list/thanks">
            thank‑you page
          </Link>
          . Prefer to browse now? Start with our{" "}
          <Link className="underline" href="/favourites">
            Favourites
          </Link>
          .
        </p>
      </div>

      <section className="mt-12 space-y-3">
        <h2 className="text-2xl font-semibold">What’s inside</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>Air: purifiers, filters, humidity basics</li>
          <li>Water: UK-friendly filter considerations</li>
          <li>Cleaning: fragrance-free starter swaps</li>
          <li>Sleep: simple upgrades that make a difference</li>
        </ul>
      </section>

      <p className="mt-12 text-sm text-zinc-500">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  );
}
