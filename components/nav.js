// /components/Nav.js
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50, background: "#fff",
      borderBottom: "1px solid #eee", padding: "10px 16px",
      display: "flex", alignItems: "center", gap: "16px"
    }}>
      <Link href="/" style={{ display: "inline-flex", alignItems: "center" }}>
        <Image
          src="/logo.jpg"      // 👈 matches the file you just renamed
          alt="Wild & Well logo"
          width={160}
          height={48}
          priority
        />
      </Link>
      <nav style={{ marginLeft: "auto", display: "flex", gap: "14px" }}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
