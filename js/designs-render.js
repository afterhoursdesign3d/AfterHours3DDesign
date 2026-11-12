/* Renders designs.html and design.html from designs-data.js. No edits needed for routine changes. */
(function(){
var esc=function(s){var d=document.createElement('div');d.textContent=s==null?'':s;return d.innerHTML;};
var ph=function(src,alt,cls){return '<img src="'+esc(src)+'" alt="'+esc(alt)+'" class="'+(cls||'')+'" onerror="this.remove()">';};
var list=document.getElementById('designs-root'),one=document.getElementById('design-root');
if(list){
 var groups=[['available','Available now','Designs available for purchase and pre-order.'],
             ['kickstarter','In the works','Kickstarter projects: designs requiring funding to launch.']];
 var html='';
 groups.forEach(function(g){
  var items=DESIGNS.filter(function(d){return d.status===g[0];});
  if(!items.length)return;   // empty section: heading and description are not rendered
  html+='<section class="product-sec"><h2>'+g[1]+'</h2><p class="lead">'+g[2]+'</p></section><div class="product-grid">'+
  items.map(function(d){var im=d.images||[];
   return '<a class="product-card" href="design.html?id='+encodeURIComponent(d.id)+'"><div class="ph r45">'+(im[0]?ph(im[0],d.name):'')+(im[1]?ph(im[1],d.name+' in use','alt'):'')+'</div>'+
   '<h3>'+esc(d.name)+'</h3><p>'+esc(d.shortDescription)+'</p><p class="price">'+(g[0]==='available'?esc(d.price):'Read more / Back this project')+'</p></a>';}).join('')+'</div>';
 });
 list.innerHTML=html||'<p class="lead">No designs yet. Check back soon.</p>';
}
if(one){
 var id=new URLSearchParams(location.search).get('id'),d=DESIGNS.filter(function(x){return x.id===id;})[0];
 if(!d){one.innerHTML='<h1>Design not found</h1><p><a href="designs.html">Back to designs</a></p>';return;}
 document.title=d.name+' | After Hours Design';
 var im=d.images||[],cur=0,ks=d.status==='kickstarter';
 one.innerHTML='<div class="design"><div><div class="ph r45 main-img" id="main-img"></div><div class="thumbs" id="thumbs"></div></div><div><h1>'+esc(d.name)+'</h1>'+
  '<h3>'+(ks?'In the works':esc(d.price))+'</h3><p>'+esc(d.description)+'</p>'+
  ((d.specs&&d.specs.length)?'<ul class="specs">'+d.specs.map(function(s){return '<li>'+esc(s)+'</li>';}).join('')+'</ul>':'')+
  '<a class="btn" href="'+esc(ks?d.kickstarterUrl:d.buyUrl)+'">'+(ks?'View on Kickstarter':'Buy now')+'</a></div></div>'+
  '<div class="lightbox" id="lb" hidden><button class="lb-close" aria-label="Close">&times;</button><button class="lb-prev" aria-label="Previous">&lsaquo;</button><img alt=""><button class="lb-next" aria-label="Next">&rsaquo;</button></div>';
 var main=document.getElementById('main-img'),th=document.getElementById('thumbs'),lb=document.getElementById('lb');
 function show(i){cur=(i+im.length)%im.length;main.innerHTML=ph(im[cur],d.name);lb.querySelector('img').src=im[cur];
  th.querySelectorAll('button').forEach(function(b,j){b.setAttribute('aria-current',j===cur);});}
 th.innerHTML=im.length>1?im.map(function(s,i){return '<button aria-label="Image '+(i+1)+'">'+ph(s,'')+'</button>';}).join(''):'';
 th.querySelectorAll('button').forEach(function(b,i){b.onclick=function(){show(i);};});
 if(im.length){show(0);
  main.onclick=function(){lb.hidden=false;};
  lb.querySelector('.lb-close').onclick=function(){lb.hidden=true;};
  lb.querySelector('.lb-prev').onclick=function(){show(cur-1);};lb.querySelector('.lb-next').onclick=function(){show(cur+1);};
  document.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')lb.hidden=true;if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1);});}
}
})();
