# Crochet by Dracilla 🧶

A handmade crochet clothing & home decor storefront — a static, responsive homepage built with plain HTML, CSS and vanilla JS (no frameworks, no build step).

**Live preview:** open `index.html` directly in a browser, or serve the folder with any static file server.

![Made with HTML](https://img.shields.io/badge/HTML-5-orange)
![Made with CSS](https://img.shields.io/badge/CSS-3-blue)
![Vanilla JS](https://img.shields.io/badge/JavaScript-vanilla-yellow)
![No build step](https://img.shields.io/badge/build-none-lightgrey)

---

## About

Crochet by Dracilla is a one-page storefront for a small, hand-stitched crochet brand — cropped tops, accessories, and hanging floral decor, made to order in small batches. This repo contains the front-end for the site's home page: hero, categories, shop grid with filtering, a slide-out cart, and a newsletter/footer.

## Features

- 🎨 **Brand palette as CSS custom properties** — six colors (Vanilla Cream, Blush Petal, Rosewood, Sage Leaf, Misty Sky, Midnight Lagoon) defined once in `style.css` under `:root` and used throughout
- 🛍️ **Shop grid with category filtering** — All / Tops / Accessories / Home Decor, no page reload
- 🛒 **Slide-out cart drawer** (opens from the left) — add to bag, adjust quantities, remove items, live subtotal, empty-state messaging
- 📱 **Fully responsive** — tested at desktop (1440px), tablet (820px), and mobile (390px) breakpoints, with a slide-in mobile nav drawer
- ♿ **Accessible by default** — semantic HTML, visible focus states, aria-labels on icon buttons, `prefers-reduced-motion` respected
- 🧵 **Signature details** — a hand-drawn scallop-edge SVG divider and stitched hover states that nod to the craft itself
- ⚡ **Zero dependencies** — Google Fonts only; everything else is hand-written HTML/CSS/JS

## Tech stack

| Layer      | Choice                                   |
|------------|-------------------------------------------|
| Markup     | Semantic HTML5                             |
| Styling    | Plain CSS3 (custom properties, Grid, Flexbox) |
| Behavior   | Vanilla JavaScript (no framework, no bundler) |
| Fonts      | [Fraunces](https://fonts.google.com/specimen/Fraunces), [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans), [Caveat](https://fonts.google.com/specimen/Caveat) via Google Fonts |

## Project structure

```
crochet-by-dracilla/
├── index.html              # Homepage markup (single page)
├── style.css                # All styling, incl. brand palette as CSS variables
├── README.md
└── images/
    ├── hero-crochet-plushies.jpg
    └── products/
        ├── beanie-pink-pompom.jpg
        ├── cocoa-button-cami.jpg
        ├── heart-granny-cardigan.jpg
        ├── lavender-crop-top.jpg
        ├── marigold-vine-wallhanging.jpg
        ├── merlot-crop-top.jpg
        ├── rosebud-hanging-pot.jpg
        ├── striped-crop-top.jpg
        ├── sweetpea-hanging-jar.jpg
        ├── vanilla-halter-top.jpg
        └── violet-ribbed-vest.jpg
```

## Getting started

No build tools or package installs required.

```bash
# Clone the repo
git clone <your-repo-url>
cd crochet-by-dracilla

# Option 1 — just open it
open index.html          # macOS
start index.html         # Windows

# Option 2 — serve it locally (recommended, avoids file:// quirks)
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Customizing

- **Colors** — edit the six variables at the top of `style.css` (`:root { ... }`) to reskin the whole site at once
- **Products** — each product card in `index.html` is a self-contained `<article class="product-card">` with `data-id`, `data-name`, `data-price`, and `data-image` attributes that feed the cart; duplicate a card and update its content/image to add a new item
- **Prices** — shown in LKR by default (`formatLKR()` in the inline `<script>` at the bottom of `index.html`); adjust the currency prefix there
- **Copy** — hero text, feature strip, quote strip, and newsletter copy are all plain text in `index.html`

## Browser support

Built with modern, broadly-supported CSS (Grid, Flexbox, `aspect-ratio`, custom properties) — works in current Chrome, Firefox, Safari, and Edge. No polyfills included.

## Roadmap / Future Plans

This is currently a front-end-only homepage — the cart lives in memory and resets on refresh, and there's no backend behind it yet. Planned next steps:

- [ ] **Real checkout flow** — wire the "Checkout" button to an actual order flow (WhatsApp order handoff, or a payment gateway like Stripe/PayHere for LKR)
- [ ] **Persistent cart** — save cart contents across page reloads (`localStorage`, or a backend session once one exists)
- [ ] **Product detail pages** — a dedicated page per item (larger photos, size/colour options, full description) instead of quick-add only
- [ ] **Inventory & stock status** — mark made-to-order pieces as sold out / limited stock, ideally from a small CMS or spreadsheet-backed source instead of hardcoded HTML
- [ ] **Search** — a simple product search/autocomplete in the header
- [ ] **Wishlist / save for later** — separate from the cart, for pieces someone's still deciding on
- [ ] **Order tracking page** — for made-to-order pieces with a multi-day turnaround
- [ ] **Additional pages** — About/Dracilla's story, Shipping & Care, Size Guide, and Contact currently link to `#` placeholders in the footer
- [ ] **Newsletter integration** — connect the signup form to an actual email provider (Mailchimp, Buttondown, etc.) instead of a no-op submit
- [ ] **Image optimization** — serve responsive `srcset` images and next-gen formats (WebP/AVIF) for faster mobile loads
- [ ] **Analytics** — lightweight, privacy-respecting page/conversion tracking once the store is live
- [ ] **Multi-currency support** — if selling beyond Sri Lanka, add currency conversion alongside the current LKR-only pricing

Contributions or suggestions toward any of the above are welcome — open an issue or a PR.

## License

All product photography and the hero image belong to their respective owners. Site code is free to adapt for the Crochet by Dracilla brand.
