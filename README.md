# After Hours Design website

**Add or remove a design:** open `js/designs-data.js`, copy or delete one `{ ... }` block. Nothing else to touch. Put images in `assets/images/designs/<id>/`.
**Contact form:** paste your Web3Forms access key in `contact.html` (search `PASTE YOUR WEB3FORMS`). Also update the fallback email in `js/main.js`.
**Replace:** `assets/logo.svg` and `logo-white.svg`, `assets/video/hero.mp4`, `assets/images/hero-poster.jpg`, service/about images (paths are in each page's `<!-- EDIT -->` comments).
**Links and email:** search every file for `EDIT:`. Header and footer are repeated on each page.
**Colours, fonts, radius, spacing:** variables at the top of `css/style.css`.
**Host:** upload the whole folder to any static host (Netlify, GitHub Pages, etc.).

**Cookie Policy link:** hidden in the footer for now. To show it, set `--cookie-link: inline;` at the top of `css/style.css`.
**Favicon:** `assets/favicon.svg` (grey, switches for dark mode). If a browser keeps the old icon, bump the `?v=3` number in the `<link rel="icon">` tags.

**Header, footer, nav links, email and social links:** edit `js/layout.js` once. It applies to every page.

**Pages inside each service (e.g. "Product Renders" inside 3D Visualisation):** edit `js/services-data.js` only. Copy or delete one `{ ... }` block. Each one appears as a row on its service page and gets its own page automatically. If a service has none, the list section disappears.

**Clean URLs:** links and the address bar show /services instead of /services.html automatically. Switch it off with `cleanUrls: false` at the top of `js/layout.js`.

**Page names and links:** every link to a page comes from the `PAGES` list at the top of `js/layout.js`. To rename a page, rename the file, then change its `file` there. Nav, footer, buttons, cards and back links all follow. In HTML, write links as `<a data-page="contact">Get a quote</a>`.

**Analytics (Google Analytics 4):** paste your measurement ID (like `G-XXXXXXXXXX`) into `googleAnalyticsId` in `js/layout.js`. A cookie banner appears at the bottom of the screen, and Google Analytics only loads after a visitor presses Accept. The choice is stored in their browser (no server needed). Leave the ID blank to switch analytics and the banner off. The Cookie Policy page should list the Google Analytics cookies (`_ga` and `_ga_<your id>`).

**Video and image sizes:** hero video 1920x1080, 24-30fps, H.264 MP4, no audio, 8-15 second loop, under about 6MB. A second `hero-mobile.mp4` at 1280x720, under about 2.5MB, is used on phones. Photos: 4:5 design images about 1600x2000, 4:3 gallery images about 1600x1200, saved as WebP or JPG at about 80% quality (150-300KB each).

**New pages for designs and service items are created automatically.** When you push a change to GitHub, `.github/workflows/build.yml` runs `node tools/build.js`, which creates a page for every design (`/designs/<id>`) and every service item (`/services/<service>/<id>`), updates the sitemap and the search/share tags, and commits the result. Wait a minute or two after pushing for the new pages to appear. Don't edit the files in `designs/` or in `services/<service>/` by hand. To use it, the repo needs Settings > Actions > General > Workflow permissions set to allow the workflow to write (the workflow asks for this itself, but some accounts need it enabled).

**Page addresses:** `/services/product-design`, `/services/3d-visualisation/<item>`, `/designs/<design>`. To rename a service's address, change its `file` in `PAGES` in `js/layout.js` and rename its file and folder to match.
