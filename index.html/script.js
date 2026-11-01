(function(){var tr=document.getElementById('track');[].slice.call(tr.children).forEach(function(f){var c=f.cloneNode(true);c.setAttribute('aria-hidden','true');c.querySelector('img').alt='';tr.appendChild(c)})})();
document.getElementById('f').addEventListener('submit',function(ev){
 ev.preventDefault();
 document.getElementById('ok').textContent='Mulțumim! Mesajul a fost trimis (demo).';
 this.reset();
});
 