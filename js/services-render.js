/* Renders the work list on each service page and the service-detail.html page from services-data.js.
   No edits needed for routine changes. */
(function(){
var esc=function(s){var d=document.createElement('div');d.textContent=s==null?'':s;return d.innerHTML;};
var norm=function(i){return typeof i==='string'?{src:i,alt:''}:i;};
var ph=function(src,alt){return '<img src="'+esc(src)+'" alt="'+esc(alt)+'" onerror="this.remove()">';};
var ARR='<svg class="arr" viewBox="0 0 16 16" aria-hidden="true"><path d="M1.5 8h13M9 2.5 14.5 8 9 13.5"/></svg>';
var ARL=ARR.replace('class="arr"','class="arr arr-l"');

/* 1) List of pages on a service page (the empty <section data-work-service="..."> on that page) */
var box=document.querySelector('[data-work-service]');
if(box){
 var key=box.getAttribute('data-work-service'),sp=SERVICE_PAGES[key];
 var items=SERVICE_WORK.filter(function(w){return w.service===key;});
 if(!sp||!PAGES[key]||!items.length){box.remove();}   // nothing to show: the whole section disappears
 else{
  box.innerHTML='<h2>Within '+esc(PAGES[key].title)+'</h2>'+(sp.intro?'<p class="lead">'+esc(sp.intro)+'</p>':'')+
   '<div class="work-list">'+items.map(function(w){var im=(w.images||[]).map(norm)[0];
    return '<a class="work-row" href="'+pageUrl('service-detail','?id='+encodeURIComponent(w.id))+'"><div class="ph r32">'+(im?ph(im.src,im.alt||w.name):'')+'</div>'+
     '<div class="work-text"><h3>'+esc(w.name)+'</h3><p>'+esc(w.shortDescription)+'</p><span class="more">Read more'+ARR+'</span></div></a>';}).join('')+'</div>';
 }
}

/* 2) The individual page (service-detail.html?id=...) */
var root=document.getElementById('work-root');
if(root){
 var id=new URLSearchParams(location.search).get('id'),w=SERVICE_WORK.filter(function(x){return x.id===id;})[0];
 if(!w||!PAGES[w.service]){
  root.innerHTML='<section class="container page-head"><h1>Page not found</h1><p><a href="'+pageUrl('services')+'">Back to '+pageTitle('services')+'</a></p></section>';return;}
 var im=(w.images||[]).map(norm),main=im[0],gal=im.slice(1);
 document.title=w.name+' | After Hours Design';
 root.innerHTML='<section class="container svc-hero"><div class="svc-text"><a class="back" href="'+pageUrl(w.service)+'">'+ARL+'Back to '+esc(PAGES[w.service].title)+'</a>'+
  '<div class="svc-body"><h1>'+esc(w.name)+'</h1><p>'+esc(w.description)+'</p><a class="btn" href="'+pageUrl('contact')+'">Get a quote</a></div></div>'+
  '<div class="ph r45">'+(main?ph(main.src,main.alt||w.name):'')+'</div></section>'+
  (gal.length?'<section class="container gallery-sec'+(w.galleryText?'':' no-text')+'">'+(w.galleryText?'<p>'+esc(w.galleryText)+'</p>':'')+'<div class="gallery">'+
   gal.map(function(g){return '<div class="ph r43">'+ph(g.src,g.alt||w.name)+'</div>';}).join('')+'</div></section>':'');
}
})();
