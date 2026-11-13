/* ===========================================================
   SITE HEADER + FOOTER - EDIT HERE ONCE, APPLIES TO EVERY PAGE
   Every page just calls writeHeader() / writeFooter().
   =========================================================== */
var SITE = {
  // EDIT: contact email (used in the footer, the contact page and the form error message)
  email: "hello@yourdomain.com",
  // EDIT: social links
  tiktok: "https://www.tiktok.com/@afterhours.design3d",
  instagram: "https://www.instagram.com/afterhours.design3d/",
  // EDIT: footer description
  footerText: "Design studio also offering product design, CAD and 3D Visualisation services."
};
// EDIT: navigation links (same list is used in the header and the footer)
var NAV = [["designs","Designs"],["services","Services"],["about","About"],["pricing","Pricing"],["contact","Contact"]];

(function () {
  // which nav item is "current": service pages count as Services, design.html counts as Designs
  var p = location.pathname.split("/").pop().replace(".html","") || "index";
  var current = p.indexOf("service-") === 0 ? "services" : p === "design" ? "designs" : p;

  window.writeHeader = function () {
    var links = NAV.map(function (n) {
      return '<a href="' + n[0] + '.html"' + (n[0] === current ? ' aria-current="page"' : '') + '>' + n[1] + '</a>';
    }).join("");
    document.write(
      '<header class="site-header"><div class="container bar">' +
      /* EDIT: replace assets/logo.svg and assets/logo-white.svg with your logo files */
      '<a class="logo" href="index.html"><img class="logo-dark" src="assets/logo.svg" alt="After Hours Design"><img class="logo-light" src="assets/logo-white.svg" alt=""></a>' +
      '<button class="menu-btn" aria-expanded="false" aria-controls="nav" aria-label="Menu"><span></span><span></span><span></span></button>' +
      '<nav id="nav" class="nav">' + links + '</nav></div></header>');
  };

  window.writeFooter = function () {
    // a page can hide the Follow column with <body data-footer="no-follow"> (the contact page does)
    var noFollow = document.body.dataset.footer === "no-follow";
    var links = NAV.map(function (n) { return '<a href="' + n[0] + '.html">' + n[1] + '</a>'; }).join("");
    document.write(
      '<footer class="site-footer"><div class="container"><div class="foot-grid' + (noFollow ? ' foot-grid--3' : '') + '">' +
      '<div><img src="assets/logo.svg" alt="After Hours Design" class="foot-logo"><p>' + SITE.footerText + '</p></div>' +
      '<div><h3>Pages</h3>' + links + '</div>' +
      (noFollow ? '' : '<div><h3>Follow</h3><a href="' + SITE.tiktok + '">TikTok</a><a href="' + SITE.instagram + '">Instagram</a></div>') +
      '<div><h3>Contact</h3><a href="mailto:' + SITE.email + '">' + SITE.email + '</a></div></div>' +
      '<div class="foot-base"><span>&copy; <span data-year></span> After Hours Design</span><span class="legal">' +
      '<a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms &amp; Conditions</a>' +
      /* the Cookie Policy link is shown/hidden with --cookie-link at the top of css/style.css */
      '<a href="cookies.html" class="cookie-link">Cookie Policy</a></span></div></div></footer>');
  };

  // fill any [data-email] link elsewhere (e.g. the contact page) from SITE.email
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-email]").forEach(function (a) { a.href = "mailto:" + SITE.email; a.textContent = SITE.email; });
  });
})();
