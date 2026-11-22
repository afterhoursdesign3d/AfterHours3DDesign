/* Renders the list of designs on designs.html from designs-data.js. No edits needed for routine changes.
   (Each design's own page is created by tools/build.js.) */
(function(){
var list=document.getElementById('designs-root');
if(!list)return;
var esc=function(s){var d=document.createElement('div');d.textContent=s==null?'':s;return d.innerHTML;};
var norm=function(i){return typeof i==='string'?{src:i,alt:''}:i;};
var ph=function(src,alt,cls){return '<img src="'+esc(src)+'" alt="'+esc(alt)+'" class="'+(cls||'')+'" onerror="this.remove()">';};
var ARR='<svg class="arr" viewBox="0 0 16 16" aria-hidden="true"><path d="M1.5 8h13M9 2.5 14.5 8 9 13.5"/></svg>';
var groups=[['available','Available now','Designs available for purchase and pre-order.'],
            ['kickstarter','In the works','Kickstarter projects: designs requiring funding to launch.']];
var html='';
groups.forEach(function(g){
 var items=DESIGNS.filter(function(d){return d.status===g[0];});
 if(!items.length)return;   // empty section: heading and description are not rendered
 html+='<section class="product-group"><div class="product-sec"><h2>'+g[1]+'</h2><p class="lead">'+g[2]+'</p></div><div class="product-grid">'+
 items.map(function(d){var im=(d.images||[]).map(norm);
  return '<a class="product-card" href="'+itemUrl('design',d.id)+'"><div class="ph r45">'+(im[0]?ph(im[0].src,im[0].alt||d.name):'')+(im[1]?ph(im[1].src,im[1].alt||d.name+' in use','alt'):'')+'</div>'+
  '<h3>'+esc(d.name)+'</h3><p>'+esc(d.shortDescription)+'</p><p class="meta">'+(g[0]==='available'?'<span class="price">'+esc(d.price)+'</span>':'<span class="more">Back this project'+ARR+'</span>')+'</p></a>';}).join('')+'</div></section>';
});
list.innerHTML=html||'<p class="lead">No designs yet. Check back soon.</p>';
})();
