// components/Footer.js
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-2">
        <div>
          <div className="text-lg font-semibold">Wild & Well</div>
          <div className="text-sm text-gray-600">
            Practical wellness & low-tox living.
          </div>
          <div className="mt-2 text-sm">
            Contact: <a className="underline" href="mailto:hello@wild-and-well.store">hello@wild-and-well.store</a>
          </div>
        </div>

        <div className="flex gap-6 text-sm justify-start md:justify-end">
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="/terms" className="hover:underline">Terms</Link>
          <Link href="/disclosures" className="hover:underline">Disclosures</Link>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-6">
        © {year} Wild & Well. All rights reserved.
      </div>
    </footer>
  );
}
