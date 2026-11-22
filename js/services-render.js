/* Renders the "Within ..." list on each service page from services-data.js. No edits needed for routine changes.
   (Each item's own page is created by tools/build.js.) */
(function(){
var box=document.querySelector('[data-work-service]');
if(!box)return;
var esc=function(s){var d=document.createElement('div');d.textContent=s==null?'':s;return d.innerHTML;};
var norm=function(i){return typeof i==='string'?{src:i,alt:''}:i;};
var ph=function(src,alt){return '<img src="'+esc(src)+'" alt="'+esc(alt)+'" onerror="this.remove()">';};
var ARR='<svg class="arr" viewBox="0 0 16 16" aria-hidden="true"><path d="M1.5 8h13M9 2.5 14.5 8 9 13.5"/></svg>';
var key=box.getAttribute('data-work-service'),sp=SERVICE_PAGES[key];
var items=SERVICE_WORK.filter(function(w){return w.service===key;});
if(!sp||!PAGES[key]||!items.length){box.remove();return;}   // nothing to show: the whole section disappears
box.innerHTML='<h2>Within '+esc(PAGES[key].title)+'</h2>'+(sp.intro?'<p class="lead">'+esc(sp.intro)+'</p>':'')+
 '<div class="work-list">'+items.map(function(w){var im=(w.images||[]).map(norm)[0];
  return '<a class="work-row" href="'+itemUrl('service',w.id)+'"><div class="ph r32">'+(im?ph(im.src,im.alt||w.name):'')+'</div>'+
   '<div class="work-text"><h3>'+esc(w.name)+'</h3><p>'+esc(w.shortDescription)+'</p><span class="more">Read more'+ARR+'</span></div></a>';}).join('')+'</div>';
})();
