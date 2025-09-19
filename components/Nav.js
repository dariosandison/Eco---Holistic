import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="site-header">
      <nav className="inner">
        <Link href="/" className="logo" aria-label="Wild & Well home">
          <Image src="/logo.jpg" alt="Wild & Well" width={160} height={48} priority />
        </Link>
        <ul className="menu">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>
      <style jsx>{`
        .site-header { border-bottom: 1px solid #eee; }
        .inner { max-width: 1000px; margin: 0 auto; padding: 12px 16px;
                 display: flex; align-items: center; gap: 24px; }
        .menu { margin-left: auto; display: flex; gap: 18px; list-style: none; }
        .logo { display: inline-flex; align-items: center; }
      `}</style>
    </header>
  );
}
