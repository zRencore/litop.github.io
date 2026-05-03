# AGENTS.md

- Static site only: plain HTML/CSS/vanilla JS. There is no `package.json`, build step, test runner, or codegen.
- Main entrypoints are `index.html`, `quienes-somos.html`, `nuestros-servicios.html`, and `contacto.html`.
- `style.css` and `script.js` are shared by every page; keep repeated header/footer markup in sync across pages.
- `script.js` depends on these IDs/classes: `#menu-toggle`, `#site-nav`, `.hero-slide`, `.dot`, `#hero-prev`, `#hero-next`, and `#contact-form`.
- `contacto.html` is the only page with the form and Google Maps embed.
- Theme colors live in the CSS custom properties at the top of `style.css`.
- Responsive behavior changes at `900px` and `640px`; that is where the mobile nav, slider controls, and page grids change.
- External assets are loaded from Google Fonts, Google Maps, and `centinel-ingenieros.com`; do not assume the site works offline.
- The floating WhatsApp contact button appears on every page.
- For visual changes, check `index.html`, `nuestros-servicios.html`, and `contacto.html` in a browser before handing off.
