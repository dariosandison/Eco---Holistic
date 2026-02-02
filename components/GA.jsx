export default function GA() {
  const id = process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  if (!id) return null

  const requireConsent = process.env.NEXT_PUBLIC_REQUIRE_CONSENT !== 'false'

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(){
            var REQUIRE = ${requireConsent ? 'true' : 'false'};
            var ID = '${id}';

            function loadGA(){
              if(!ID) return;
              if(window.__wildwell_ga_loaded) return;
              window.__wildwell_ga_loaded = true;

              var s = document.createElement('script');
              s.async = true;
              s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ID);
              document.head.appendChild(s);

              window.dataLayer = window.dataLayer || [];
              function gtag(){ window.dataLayer.push(arguments); }
              window.gtag = window.gtag || gtag;

              gtag('js', new Date());
              gtag('config', ID, { anonymize_ip: true });
            }

            // Expose for cookie banner/preferences toggles
            window.__wildwell_load_ga = loadGA;

            try {
              var consent = localStorage.getItem('consent_analytics');
              if(!REQUIRE || consent === 'granted') loadGA();
            } catch(e) {}
          })();
        `,
      }}
    />
  )
}
