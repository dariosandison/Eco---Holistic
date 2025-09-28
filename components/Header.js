import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col items-center justify-center gap-3">
          <Link href="/" aria-label="Wild & Well Home" className="inline-flex">
            <Image
              src="/logo.svg"
              alt="Wild & Well"
              width={160}
              height={160}
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
