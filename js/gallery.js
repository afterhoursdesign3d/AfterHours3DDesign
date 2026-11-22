/* Thumbnails and full-screen viewer on a design's page (the images are already in the page; this only adds the behaviour). */
(function(){
var main=document.getElementById('main-img'),th=document.getElementById('thumbs'),lb=document.getElementById('lb');
if(!main||!th||!lb)return;
var btns=[].slice.call(th.querySelectorAll('button')),cur=0;
var imgs=btns.map(function(b){var i=b.querySelector('img');return i?{src:i.getAttribute('src'),alt:i.alt}:null;}).filter(Boolean);
if(!imgs.length){var m=main.querySelector('img');if(m)imgs=[{src:m.getAttribute('src'),alt:m.alt}];}
if(!imgs.length)return;
function show(i){cur=(i+imgs.length)%imgs.length;
 var im=main.querySelector('img');if(!im){im=document.createElement('img');main.appendChild(im);}
 im.src=imgs[cur].src;im.alt=imgs[cur].alt;
 var l=lb.querySelector('img');l.src=imgs[cur].src;l.alt=imgs[cur].alt;
 btns.forEach(function(b,j){b.setAttribute('aria-current',j===cur);});}
btns.forEach(function(b,i){b.addEventListener('click',function(){show(i);});});
main.addEventListener('click',function(){show(cur);lb.hidden=false;});
lb.querySelector('.lb-close').addEventListener('click',function(){lb.hidden=true;});
lb.querySelector('.lb-prev').addEventListener('click',function(){show(cur-1);});
lb.querySelector('.lb-next').addEventListener('click',function(){show(cur+1);});
document.addEventListener('keydown',function(e){if(lb.hidden)return;
 if(e.key==='Escape')lb.hidden=true;if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1);});
})();
