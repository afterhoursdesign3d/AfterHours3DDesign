/* ===========================================================
   SITE HEADER + FOOTER - EDIT HERE ONCE, APPLIES TO EVERY PAGE
   Every page just calls writeHeader() / writeFooter().
   All page links on the site come from the PAGES list below.
   =========================================================== */
var SITE = {
  // EDIT: contact email (used in the footer, the contact page and the form error message)
  email: "hello@yourdomain.com",
  // EDIT: social links
  tiktok: "https://www.tiktok.com/@afterhours.design3d",
  instagram: "https://www.instagram.com/afterhours.design3d/",
  // EDIT: footer description
  // EDIT: true = hide ".html" in links and the address bar (services.html shows as /services).
  // Works on GitHub Pages, Netlify and Vercel. Set to false if your host shows "page not found" for /services.
  // It switches itself off when you open the files locally, so local testing still works.
  cleanUrls: true,
  footerText: "Design studio also offering Product Design, CAD and 3D Visualisation services."
};

/* ===========================================================
   PAGES - THE ONE PLACE EVERY PAGE LINK COMES FROM
   -----------------------------------------------------------
   file:  the page's file name. To rename a page: rename the file in the
          repo, then change its "file" here. Every link to it updates
          (nav, footer, buttons, cards, back links).
   title: the name shown on links (nav, footer, "Back to ..." links).
   In the HTML, a link is written as <a data-page="contact">Get a quote</a>
   and the address is filled in from here. "key" names (contact, services...)
   are what the pages use, so leave the keys alone and edit file / title.
   =========================================================== */
var PAGES = {
  "home":             { file: "index.html",                  title: "Home" },
  "designs":          { file: "designs.html",                title: "Designs" },
  "design":           { file: "design.html",                 title: "Design" },            // the one page used for every individual design
  "services":         { file: "services.html",               title: "Services" },
  "product-design":   { file: "service-product-design.html", title: "Product Design" },
  "cad-design":       { file: "service-cad-design.html",     title: "CAD Design" },
  "3d-visualisation": { file: "service-3d-visualisation.html", title: "3D Visualisation" },
  "service-detail":   { file: "service-detail.html",         title: "Service" },           // the one page used for every item inside a service
  "about":            { file: "about.html",                  title: "About" },
  "pricing":          { file: "pricing.html",                title: "Pricing" },
  "contact":          { file: "contact.html",                title: "Contact" },
  "privacy":          { file: "privacy.html",                title: "Privacy Policy" },
  "terms":            { file: "terms.html",                  title: "Terms & Conditions" },
  "cookies":          { file: "cookies.html",                title: "Cookie Policy" }
};
// EDIT: which pages appear in the header and footer nav, in order (use the keys above)
var NAV = ["designs", "services", "about", "pricing", "contact"];

// address of a page, optionally with a query like "?id=my-design"
function pageUrl(key, query) {
  if (!PAGES[key]) { console.warn("Unknown page key: " + key); return "#"; }
  return PAGES[key].file + (query || "");
}
function pageTitle(key) { return PAGES[key] ? PAGES[key].title.replace(/&/g, "&amp;") : key; }

(function () {
  // which nav item is "current": service pages count as Services, individual designs count as Designs
  var file = location.pathname.split("/").pop() || "index.html";
  if (!/\.html$/.test(file)) file += ".html";   // clean URLs (/services) still match
  var key = Object.keys(PAGES).filter(function (k) { return PAGES[k].file === file; })[0];
  var current = { "product-design": "services", "cad-design": "services", "3d-visualisation": "services", "service-detail": "services", "design": "designs" }[key] || key;

  window.writeHeader = function () {
    var links = NAV.map(function (k) {
      return '<a href="' + pageUrl(k) + '"' + (k === current ? ' aria-current="page"' : '') + '>' + pageTitle(k) + '</a>';
    }).join("");
    document.write(
      '<header class="site-header"><div class="container bar">' +
      /* EDIT: replace assets/logo.svg and assets/logo-white.svg with your logo files */
      '<a class="logo" href="' + pageUrl("home") + '"><img class="logo-dark" src="assets/logo.svg" alt="After Hours Design"><img class="logo-light" src="assets/logo-white.svg" alt=""></a>' +
      '<button class="menu-btn" aria-expanded="false" aria-controls="nav" aria-label="Menu"><span></span><span></span><span></span></button>' +
      '<nav id="nav" class="nav">' + links + '</nav></div></header>');
  };

  window.writeFooter = function () {
    // a page can hide the Follow column with <body data-footer="no-follow"> (the contact page does)
    var noFollow = document.body.dataset.footer === "no-follow";
    var links = NAV.map(function (k) { return '<a href="' + pageUrl(k) + '">' + pageTitle(k) + '</a>'; }).join("");
    document.write(
      '<footer class="site-footer"><div class="container"><div class="foot-grid' + (noFollow ? ' foot-grid--3' : '') + '">' +
      '<div><img src="assets/logo.svg" alt="After Hours Design" class="foot-logo"><p>' + SITE.footerText + '</p></div>' +
      '<div><h3>Pages</h3>' + links + '</div>' +
      (noFollow ? '' : '<div><h3>Follow</h3><a href="' + SITE.tiktok + '">TikTok</a><a href="' + SITE.instagram + '">Instagram</a></div>') +
      '<div><h3>Contact</h3><a href="mailto:' + SITE.email + '">' + SITE.email + '</a></div></div>' +
      '<div class="foot-base"><span>&copy; <span data-year></span> After Hours Design</span><span class="legal">' +
      '<a href="' + pageUrl("privacy") + '">' + pageTitle("privacy") + '</a><a href="' + pageUrl("terms") + '">' + pageTitle("terms") + '</a>' +
      /* the Cookie Policy link is shown/hidden with --cookie-link at the top of css/style.css */
      '<a href="' + pageUrl("cookies") + '" class="cookie-link">' + pageTitle("cookies") + '</a></span></div></div></footer>');
  };

  document.addEventListener("DOMContentLoaded", function () {
    // links written as <a data-page="contact"> get their address from PAGES (optional data-query="?id=...")
    document.querySelectorAll("a[data-page]").forEach(function (a) {
      a.setAttribute("href", pageUrl(a.getAttribute("data-page"), a.getAttribute("data-query") || ""));
    });

    // CLEAN URLS: tidy every internal link and the address bar (this must run after the step above)
    var local = location.protocol === "file:" || /^(localhost|127\.|192\.168\.|10\.)/.test(location.hostname);
    if (SITE.cleanUrls && !local) {
      var clean = function (u) { return u.replace(/(^|\/)index\.html(?=$|[?#])/, "$1").replace(/\.html(?=$|[?#])/, ""); };
      document.querySelectorAll("a[href]").forEach(function (a) {
        var h = a.getAttribute("href");
        if (/^(https?:|mailto:|tel:|#)/.test(h)) return;
        var c = clean(h); a.setAttribute("href", c === "" ? "./" : c);
      });
      var path = clean(location.pathname);
      if (path !== location.pathname) history.replaceState(null, "", path + location.search + location.hash);
    }

    // fill any [data-email] link (e.g. the contact page) from SITE.email
    document.querySelectorAll("[data-email]").forEach(function (a) { a.href = "mailto:" + SITE.email; a.textContent = SITE.email; });
  });
})();
