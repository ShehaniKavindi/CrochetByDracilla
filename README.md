# Crochet by Dracilla 🧶

A handmade crochet clothing & home decor storefront — a static, responsive homepage built with plain HTML, CSS and vanilla JS (no frameworks, no build step).

**Live preview:** open `index.html` directly in a browser, or serve the folder with any static file server.

![Made with HTML](https://img.shields.io/badge/HTML-5-orange)
![Made with CSS](https://img.shields.io/badge/CSS-3-blue)
![Vanilla JS](https://img.shields.io/badge/JavaScript-vanilla-yellow)
![No build step](https://img.shields.io/badge/build-none-lightgrey)

---

## About

Crochet by Dracilla is a small storefront for a hand-stitched crochet brand — cropped tops, accessories, and hanging floral decor, made to order in small batches. This repo contains the front-end for two pages: the **home page** (hero, categories, a New Arrivals preview, newsletter/footer) and the **shop page** (searchable, filterable catalog of every piece).

## Features

- 🎨 **Brand palette as CSS custom properties** — six colors (Vanilla Cream, Blush Petal, Rosewood, Sage Leaf, Misty Sky, Midnight Lagoon) and the type scale defined once in `style.css` under `:root`, and reused by `shop.css` — reskin once, both pages update
- 🔍 **Full shop page** (`shop.html`) — every product in one searchable, filterable grid:
  - Live text search by product name
  - Filter by category, price range, and tag (New / Bestseller), combinable
  - Sort by Featured, Price (low↔high), or Name
  - Removable "active filter" chips + result count that update live
  - Category links from the header/footer deep-link into the shop with a filter pre-applied (`shop.html?category=tops`)
  - Empty state when a search/filter combo matches nothing
  - Filters live in a right-side drawer on mobile/tablet, a sticky sidebar on desktop
- 🛍️ **Shop grid with category filtering** on the homepage's New Arrivals preview — All / Tops / Accessories / Home Decor, no page reload
- 🛒 **Slide-out cart drawer** (opens from the left) — add to bag, adjust quantities, remove items, live subtotal, empty-state messaging; cart contents are saved to `localStorage`, so the bag persists as you move between `index.html` and `shop.html`
- 📱 **Fully responsive** — tested at desktop (1440px), tablet (820px), and mobile (390px) breakpoints, with slide-in nav and filter drawers
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
├── index.html               # Homepage — hero, categories, New Arrivals preview
├── shop.html                 # Full catalog — search, filters, sort
├── style.css                  # Shared: brand palette (:root), fonts, header/nav,
│                               #   buttons, product-card, cart drawer, footer
├── shop.css                    # shop.html-only: search bar, sidebar/drawer
│                               #   filters, active-filter chips, empty state
├── README.md
└── assets/
    ├── hero4.jpg
    └── products/
        ├── beanie-pink-pompom.png
        ├── cocoa-button-cami.png
        ├── heart-granny-cardigan.png
        ├── lavender-crop-top.png
        ├── marigold-vine-wallhanging.jpeg
        ├── merlot-crop-top.png
        ├── rosebud-hanging-pot.jpeg
        ├── striped-crop-top.png
        ├── sweetpea-hanging-jar.jpeg
        ├── vanilla-halter-top.png
        └── violet-ribbed-vest.png
```

`shop.html` links `style.css` first, then `shop.css` — `shop.css` has no color or font values of its own, it only reads the `--variables` defined in `style.css`'s `:root`. Keep that link order if you ever split styles further.

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

- **Colors** — edit the six variables at the top of `style.css` (`:root { ... }`) to reskin both pages at once (`shop.css` inherits them automatically)
- **Products on the homepage** — each card in `index.html`'s New Arrivals section is a self-contained `<article class="product-card">` with `data-id`, `data-name`, `data-price`, and `data-image` attributes that feed the cart; duplicate a card and update its content/image to add a new item
- **Products on the shop page** — `shop.html` renders its grid from a single `PRODUCTS` array near the top of its inline `<script>`; add, remove, or edit an item there (id, name, price, category, image, alt, badge) and it flows through to search, filters, sort, and the cart automatically — no HTML editing needed
- **Prices** — shown in LKR by default (`formatLKR()` in each page's inline `<script>`); adjust the currency prefix there
- **Filter categories/price bands** — edit the checkbox lists in `shop.html`'s sidebar and mobile drawer (`name="category"`, `name="price"`, `name="tag"`, plus their `-m` mobile twins) — values must match the `category` field and price bands used in the `PRODUCTS` array
- **Copy** — hero text, feature strip, quote strip, and newsletter copy are all plain text in `index.html`

## Browser support

Built with modern, broadly-supported CSS (Grid, Flexbox, `aspect-ratio`, custom properties) — works in current Chrome, Firefox, Safari, and Edge. No polyfills included.

## Roadmap / Future Plans

This is still a front-end-only site — no backend behind the cart, search, or filters yet (everything runs client-side against the hardcoded `PRODUCTS` array). Planned next steps:

- [ ] **Real checkout flow** — wire the "Checkout" button to an actual order flow (WhatsApp order handoff, or a payment gateway like Stripe/PayHere for LKR)
- [ ] **Product detail pages** — a dedicated page per item (larger photos, size/colour options, full description) instead of quick-add only
- [ ] **Inventory & stock status** — mark made-to-order pieces as sold out / limited stock, ideally from a small CMS or spreadsheet-backed source instead of the hardcoded `PRODUCTS` array
- [ ] **Wishlist / save for later** — separate from the cart, for pieces someone's still deciding on
- [ ] **Order tracking page** — for made-to-order pieces with a multi-day turnaround
- [ ] **Additional pages** — About/Dracilla's story, Shipping & Care, Size Guide, and Contact currently link to `#` placeholders in the footer
- [ ] **Newsletter integration** — connect the signup form to an actual email provider (Mailchimp, Buttondown, etc.) instead of a no-op submit
- [ ] **Image optimization** — serve responsive `srcset` images and next-gen formats (WebP/AVIF); several product photos are currently uncompressed PNGs (~1.5–2MB each), which is worth revisiting for mobile load times
- [ ] **Analytics** — lightweight, privacy-respecting page/conversion tracking once the store is live
- [ ] **Multi-currency support** — if selling beyond Sri Lanka, add currency conversion alongside the current LKR-only pricing
- [ ] **Server-backed cart** — the cart is `localStorage`-only today (per-browser, not per-account); move it server-side once accounts/checkout exist so it survives a cleared cache or a new device

Contributions or suggestions toward any of the above are welcome — open an issue or a PR.

## License

All product photography and the hero image belong to their respective owners. Site code is free to adapt for the Crochet by Dracilla brand.