(function(){
  function init(){
    document.querySelectorAll('form[data-newsletter]').forEach(function(form){
      var cfg=(window.__siteconfig||{}); var magic=(cfg.newsletter&&cfg.newsletter.magicLink)||'';
      var endpoint = form.getAttribute('data-endpoint') || (magic? '' : '/api/subscribe');
      var input=form.querySelector('input[type="email"]'); var status=form.querySelector('[data-status]');
      function setStatus(msg, ok){ if(status){ status.textContent=msg; status.style.color=ok?'green':'crimson'; } }
      form.addEventListener('submit', function(e){
        e.preventDefault();
        var email=input&&input.value||''; if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ setStatus('Enter a valid email.', false); return; }
        if(magic){ var url=magic.replace('{{email}}', encodeURIComponent(email)); window.location.href=url; setStatus('Thanks! Check your email.', true); form.reset(); return; }
        if(!endpoint){ setStatus('Setup required.', false); return; }
        setStatus('Sending…', true);
        fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:email,doubleOptIn:true})})
          .then(function(r){ if(!r.ok) throw new Error('Bad response'); setStatus('Thanks! Check your email.', true); form.reset(); })
          .catch(function(){ setStatus('Something went wrong.', false); });
      });
    });
  }
  document.addEventListener('DOMContentLoaded', init);
})();