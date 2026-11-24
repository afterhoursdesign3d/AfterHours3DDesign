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

/* Google Analytics + cookie banner. Nothing is loaded until the visitor presses Accept.
   The choice is remembered in this browser only (localStorage), so no server or database is needed.
   The measurement ID is SITE.googleAnalyticsId in js/layout.js. */
(function(){
var id=window.SITE&&SITE.googleAnalyticsId,KEY='ahd-cookie-choice',bar;
if(!id){document.querySelectorAll('[data-cookie-settings]').forEach(function(e){e.remove();});return;}
function get(){try{return localStorage.getItem(KEY);}catch(e){return null;}}
function set(v){try{localStorage.setItem(KEY,v);}catch(e){}}
function load(){
 if(window.__ahdAnalytics)return;window.__ahdAnalytics=true;
 var g=document.createElement('script');g.async=true;g.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(id);document.head.appendChild(g);
 window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments);};window.gtag('js',new Date());window.gtag('config',id);
}
function show(){
 if(bar){bar.hidden=false;return;}
 bar=document.createElement('div');bar.className='cookie-banner';bar.setAttribute('role','region');bar.setAttribute('aria-label','Cookie consent');
 bar.innerHTML='<div class="inner"><p>We use Google Analytics cookies to understand how the site is used. <a href="'+pageUrl('cookies')+'">Cookie Policy</a></p>'+
  '<div class="cookie-actions"><button type="button" class="btn btn-alt" data-choice="declined">Decline</button><button type="button" class="btn" data-choice="accepted">Accept</button></div></div>';
 document.body.appendChild(bar);
 bar.addEventListener('click',function(e){var c=e.target.getAttribute&&e.target.getAttribute('data-choice');if(!c)return;
  var was=get();set(c);bar.hidden=true;
  if(c==='accepted')load();else if(was==='accepted')location.reload();});   // declining after accepting reloads so nothing keeps running
}
var saved=get();
if(saved==='accepted')load();else if(!saved)show();
document.querySelectorAll('[data-cookie-settings]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();show();});});
})();
