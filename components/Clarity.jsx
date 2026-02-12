export default function Clarity() {
  const id = process.env.NEXT_PUBLIC_CLARITY_ID
  if (!id) return null

  const requireConsent = process.env.NEXT_PUBLIC_REQUIRE_CONSENT !== 'false'

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(){
            var REQUIRE = ${requireConsent ? 'true' : 'false'};
            var ID = '${id}';

            function loadClarity(){
              if(!ID) return;
              if(window.__wildwell_clarity_loaded) return;
              window.__wildwell_clarity_loaded = true;

              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r); t.async=1; t.src='https://www.clarity.ms/tag/'+i;
                y=l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t,y);
              })(window, document, 'clarity', 'script', ID);
            }

            window.__wildwell_load_clarity = loadClarity;

            try {
              var consent = localStorage.getItem('consent_analytics');
              if(!REQUIRE || consent === 'granted') loadClarity();
            } catch(e) {}
          })();
        `,
      }}
    />
  )
}
