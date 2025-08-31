import Link from "next/link";

export default function Nav() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
      <Link href="/" style={{ marginRight: "1rem" }}>
        Home
      </Link>
      <Link href="/blog" style={{ marginRight: "1rem" }}>
        Blog
      </Link>
      <Link href="/about">
        About
      </Link>
    </nav>
  );
}
