export default function GA(){
  const id = process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if(!id) return null;
  const requireConsent = process.env.NEXT_PUBLIC_REQUIRE_CONSENT === 'true';
  return (
    <>
      <script dangerouslySetInnerHTML={{__html:`
        (function(){
          var REQUIRE=${requireConsent ? 'true' : 'false'};
          var ID='${id}';
          function loadGA(){
            var s=document.createElement('script'); s.async=true;
            s.src='https://www.googletagmanager.com/gtag/js?id='+ID;
            document.head.appendChild(s);
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);} window.gtag=gtag;
            gtag('js', new Date());
            gtag('config', ID, { anonymize_ip: true });
          }
          if(!REQUIRE || localStorage.getItem('consent_analytics')==='granted'){ loadGA(); }
        })();
      `}}/>
    </>
  );
}
