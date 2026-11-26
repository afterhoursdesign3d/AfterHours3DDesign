/* Header behaviour, mobile menu, footer year, contact form */
(function(){
var h=document.querySelector('.site-header'),mode=document.body.dataset.header,last=0;
function onScroll(){var y=window.scrollY;
 if(mode==='transparent'){h.classList.toggle('solid',y>40||!!document.querySelector('.nav.open'));}
 else{h.classList.toggle('hidden',y>last&&y>80&&!document.querySelector('.nav.open'));}
 last=y;}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);if(mode==='transparent')h.classList.toggle('solid',o||window.scrollY>40);});
function closeNav(){n.classList.remove('open');b.setAttribute('aria-expanded',false);document.body.classList.remove('nav-open');if(mode==='transparent')h.classList.toggle('solid',window.scrollY>40);}
b.addEventListener('click',function(){document.body.classList.toggle('nav-open',n.classList.contains('open'));});
document.addEventListener('click',function(e){if(document.body.classList.contains('nav-open')&&!e.target.closest('.nav,.menu-btn'))closeNav();});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeNav();});
document.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear();});
var f=document.getElementById('contact-form');
if(f)f.addEventListener('submit',function(e){e.preventDefault();
 var s=document.getElementById('form-status'),btn=f.querySelector('button'),t=btn.textContent;
 btn.disabled=true;btn.textContent='Sending...';s.textContent='';
 fetch(f.action,{method:'POST',headers:{Accept:'application/json'},body:new FormData(f)})
 .then(function(r){return r.json();}).then(function(d){
  if(d.success){s.textContent='Thanks, your message has been sent.';f.reset();}else{throw 0;}})
 .catch(function(){s.textContent='Something went wrong. Please email us directly at '+SITE.email+'.';})
 .finally(function(){btn.disabled=false;btn.textContent=t;});});
var g=document.querySelectorAll('.gallery .ph');
if(g.length){var lb=document.createElement('div');lb.className='lightbox';lb.hidden=true;lb.innerHTML='<button class="lb-close" aria-label="Close">&times;</button><img alt="">';document.body.appendChild(lb);
 g.forEach(function(p){p.style.cursor='zoom-in';p.addEventListener('click',function(){var i=p.querySelector('img');if(!i)return;lb.querySelector('img').src=i.src;lb.hidden=false;});});
 lb.addEventListener('click',function(){lb.hidden=true;});document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.hidden=true;});}
})();

/* Cloudflare Web Analytics (cookieless, so no banner is needed). The token is SITE.analyticsToken in js/layout.js. */
(function(){
var t=window.SITE&&SITE.analyticsToken;if(!t)return;
var s=document.createElement('script');s.type='module';s.src='https://static.cloudflareinsights.com/beacon.min.js';
s.setAttribute('data-cf-beacon',JSON.stringify({token:t}));document.head.appendChild(s);
})();
