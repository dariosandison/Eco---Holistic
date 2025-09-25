import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ className = '', dark = false }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Image
        src={dark ? '/logo-dark.svg' : '/logo.svg'}
        alt="Wild & Well"
        width={28}
        height={28}
        priority
      />
      <span className="font-semibold tracking-tight">Wild & Well</span>
    </Link>
  );
}
