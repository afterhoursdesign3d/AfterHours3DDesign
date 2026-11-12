/* Header behaviour, mobile menu, footer year, contact form */
(function(){
var h=document.querySelector('.site-header'),mode=document.body.dataset.header,last=0;
function onScroll(){var y=window.scrollY;
 if(mode==='transparent'){h.classList.toggle('solid',y>40||!!document.querySelector('.nav.open'));}
 else{h.classList.toggle('hidden',y>last&&y>80);}
 last=y;}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);if(mode==='transparent')h.classList.toggle('solid',o||window.scrollY>40);});
document.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear();});
var f=document.getElementById('contact-form');
if(f)f.addEventListener('submit',function(e){e.preventDefault();
 var s=document.getElementById('form-status'),btn=f.querySelector('button'),t=btn.textContent;
 btn.disabled=true;btn.textContent='Sending...';s.textContent='';
 fetch(f.action,{method:'POST',headers:{Accept:'application/json'},body:new FormData(f)})
 .then(function(r){return r.json();}).then(function(d){
  if(d.success){s.textContent='Thanks, your message has been sent.';f.reset();}else{throw 0;}})
 .catch(function(){s.textContent='Something went wrong. Please email us directly at hello@yourdomain.com.';})  /* EDIT: your email */
 .finally(function(){btn.disabled=false;btn.textContent=t;});});
var g=document.querySelectorAll('.gallery .ph');
if(g.length){var lb=document.createElement('div');lb.className='lightbox';lb.hidden=true;lb.innerHTML='<button class="lb-close" aria-label="Close">&times;</button><img alt="">';document.body.appendChild(lb);
 g.forEach(function(p){p.style.cursor='zoom-in';p.addEventListener('click',function(){var i=p.querySelector('img');if(!i)return;lb.querySelector('img').src=i.src;lb.hidden=false;});});
 lb.addEventListener('click',function(){lb.hidden=true;});document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.hidden=true;});}
})();
