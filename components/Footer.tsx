// components/Footer.tsx
import site from "@/data/site.config.json";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ padding: "24px 0", borderTop: "1px solid #eee", marginTop: 32 }}>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}
      >
        <div>© {year} {site.siteName}</div>
        <nav style={{ display: "flex", gap: 16 }}>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/disclosure">Disclosure</a>
        </nav>
        <div style={{ display: "flex", gap: 16 }}>
          {site.social?.instagram && (
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          )}
          {site.social?.pinterest && (
            <a href={site.social.pinterest} target="_blank" rel="noopener noreferrer">Pinterest</a>
          )}
        </div>
      </div>
    </footer>
  );
}
