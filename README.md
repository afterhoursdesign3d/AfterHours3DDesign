# After Hours Design website

**Add or remove a design:** open `js/designs-data.js`, copy or delete one `{ ... }` block. Nothing else to touch. Put images in `assets/images/designs/<id>/`.
**Contact form:** paste your Web3Forms access key in `contact.html` (search `PASTE YOUR WEB3FORMS`). Also update the fallback email in `js/main.js`.
**Replace:** `assets/logo.svg` and `logo-white.svg`, `assets/video/hero.mp4`, `assets/images/hero-poster.jpg`, service/about images (paths are in each page's `<!-- EDIT -->` comments).
**Links and email:** search every file for `EDIT:`. Header and footer are repeated on each page.
**Colours, fonts, radius, spacing:** variables at the top of `css/style.css`.
**Host:** upload the whole folder to any static host (Netlify, GitHub Pages, etc.).

**Cookie Policy link:** hidden in the footer for now. To show it, set `--cookie-link: inline;` at the top of `css/style.css`.
**Favicon:** `assets/favicon.svg` (grey, switches for dark mode). If a browser keeps the old icon, bump the `?v=2` number in the `<link rel="icon">` tags.
