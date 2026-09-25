# Crochet by Dracilla 🧶

A handmade crochet clothing & home decor storefront — a static, responsive site built with plain HTML, CSS and vanilla JS (no frameworks, no build step), deployed on Vercel.

**Live preview:** open `index.html` directly in a browser, or serve the folder with any static file server.

![Made with HTML](https://img.shields.io/badge/HTML-5-orange)
![Made with CSS](https://img.shields.io/badge/CSS-3-blue)
![Vanilla JS](https://img.shields.io/badge/JavaScript-vanilla-yellow)
![No build step](https://img.shields.io/badge/build-none-lightgrey)

---

## About

Crochet by Dracilla is a small storefront for a hand-stitched crochet brand — cropped tops, accessories, and hanging floral decor, made to order in small batches. The site covers browsing, cart, checkout (handed off to WhatsApp), custom order requests, and a lightweight product admin tool.

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Homepage — hero, categories, New Arrivals preview, newsletter/footer |
| `shop.html` | Full catalog — live search, filters (category/price/tag), sort, cart |
| `custom-orders.html` | Request a made-to-order piece — form + inspo gallery, sends to WhatsApp |
| `admin.html` | Password-protected tool to build/edit `products.json` |
| `admin-login.html` | Passcode entry screen that gates `admin.html` |

## Features

- 🎨 **Brand palette as CSS custom properties** — six colors (Vanilla Cream, Blush Petal, Rosewood, Sage Leaf, Misty Sky, Midnight Lagoon) and the type scale defined once in `style.css` under `:root`, reused by `shop.css` and `custom-orders.css` — reskin once, every page updates
- 🔍 **Full shop page** (`shop.html`) — every product in one searchable, filterable grid:
  - Live text search by product name
  - Filter by category, price range, and tag (New / Bestseller), combinable
  - Sort by Featured, Price (low↔high), or Name
  - Removable "active filter" chips + result count that update live
  - Category links from the header/footer deep-link into the shop with a filter pre-applied (`shop.html?category=tops`)
  - Empty state when a search/filter combo matches nothing
  - Filters live in a right-side drawer on mobile/tablet, a sticky sidebar on desktop
- 🛍️ **Shop grid with category filtering** on the homepage's New Arrivals preview — All / Tops / Accessories / Home Decor, no page reload
- 🛒 **Slide-out cart drawer** (opens from the left, shared across `index.html`, `shop.html` and `custom-orders.html`) — add to bag, adjust quantities, remove items, live subtotal, empty-state messaging; cart contents are saved to `localStorage`, so the bag persists as you move between pages
- 💬 **Checkout via WhatsApp** — the cart's Checkout button builds a formatted order summary (items, quantities, subtotal) and opens it as a pre-filled WhatsApp message to the studio number; shipping and payment are confirmed there, no payment gateway involved
- ✂️ **Custom order requests** (`custom-orders.html`) — a form (name, description, optional reference photos) that opens straight into a pre-filled WhatsApp message; on devices that support the Web Share API it shares photos directly into WhatsApp, otherwise it falls back to a text-only WhatsApp link and the person attaches photos themselves
- 🗂️ **Product admin tool** (`admin.html`) — no database behind it; it's a client-side form that loads the current `products.json`, lets you add/edit/remove products, and outputs the updated JSON to copy or download. Publishing a change still means manually replacing `products.json` (and any new images) and pushing to git — see [Managing products](#managing-products) below
- 🔒 **Passcode-gated admin** — `middleware.js` runs server-side on Vercel, checks an `admin_auth` cookie against the `ADMIN_PASSCODE` environment variable before `admin.html` is ever sent to the browser, and fails **closed** (blocks everyone) if the env var isn't set; `admin-login.html` just sets the cookie and lets the middleware do the real check
- 📱 **Fully responsive** — tested at desktop (1440px), tablet (820px), and mobile (390px) breakpoints, with slide-in nav and filter drawers
- ♿ **Accessible by default** — semantic HTML, visible focus states, aria-labels on icon buttons, `prefers-reduced-motion` respected
- 🧵 **Signature details** — a hand-drawn scallop-edge SVG divider and stitched hover states that nod to the craft itself
- ⚡ **Near-zero dependencies** — Google Fonts only; everything else is hand-written HTML/CSS/JS

## Tech stack

| Layer      | Choice                                   |
|------------|-------------------------------------------|
| Markup     | Semantic HTML5                             |
| Styling    | Plain CSS3 (custom properties, Grid, Flexbox) |
| Behavior   | Vanilla JavaScript (no framework, no bundler) |
| Data       | `products.json`, fetched at runtime (with an inline `PRODUCTS` array fallback in `shop.html` for local/offline viewing) |
| Auth       | Vercel Edge Middleware (`middleware.js`) checking a passcode cookie — no user accounts, single shared studio passcode |
| Ordering   | WhatsApp deep links (`wa.me`) — no payment gateway or order database |
| Fonts      | [Fraunces](https://fonts.google.com/specimen/Fraunces), [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans), [Caveat](https://fonts.google.com/specimen/Caveat) via Google Fonts |
| Hosting    | Vercel |

## Project structure

```
CrochetByDracilla/
├── index.html               # Homepage — hero, categories, New Arrivals preview
├── shop.html                 # Full catalog — search, filters, sort
├── custom-orders.html        # Custom order form → WhatsApp
├── admin.html                 # Product admin tool (passcode-gated)
├── admin-login.html           # Passcode entry for admin.html
├── middleware.js               # Vercel Edge Middleware — gates /admin.html
├── products.json                # Product catalog, edited via admin.html
├── style.css                     # Shared: brand palette (:root), fonts, header/nav,
│                                  #   buttons, product-card, cart drawer, footer
├── shop.css                       # shop.html-only: search bar, sidebar/drawer
│                                  #   filters, active-filter chips, empty state
├── custom-orders.css              # custom-orders.html-only: form, inspo gallery
├── package.json
├── README.md
├── docs/
│   └── screenshots/            # home-page, shop-page, cart, custom-orders
└── assets/
    ├── hero.jpg, hero2.jpg, hero3.jpg, hero4.jpg, crochet-plush.jpg, custom-order-hero.jpg
    ├── products/                # product photos, referenced from products.json
    └── inspo/                   # custom-orders.html gallery photos
```

`shop.html` and `custom-orders.html` link `style.css` first, then their own page-specific stylesheet — those stylesheets have no color or font values of their own, they only read the `--variables` defined in `style.css`'s `:root`. Keep that link order if you ever split styles further.

## Getting started

No build tools or package installs required.

```bash
# Clone the repo
git clone <your-repo-url>
cd CrochetByDracilla

# Option 1 — just open it
open index.html          # macOS
start index.html         # Windows

# Option 2 — serve it locally (recommended, avoids file:// quirks and
# lets products.json and the admin tool's fetch() calls actually work)
python3 -m http.server 8080
# then visit http://localhost:8080
```

To test the admin login locally, set `ADMIN_PASSCODE` in your environment (or in a Vercel dev setup) before hitting `/admin.html` — without it, middleware blocks access entirely rather than letting it through.

## Managing products

`products.json` is the single source of truth for the catalog, fetched by both `index.html` and `shop.html` at runtime.

1. Go to `/admin.html` (passcode required) and click **Load Current products.json**.
2. Add, edit, or remove products using the form — each product needs a name, price (LKR), category, optional badge (New/Bestseller), image path, and alt text.
3. Upload any new photos into `assets/products/` in the repo yourself; the admin tool only records the path you type, it doesn't upload files.
4. Click **Download file**, replace the existing `products.json` with the downloaded one, then commit and push — Vercel redeploys automatically and the change goes live.

There's no database and no write access from the browser — `admin.html` is a JSON-building convenience, not a live CMS.

## Customizing

- **Colors** — edit the six variables at the top of `style.css` (`:root { ... }`) to reskin every page at once (`shop.css` and `custom-orders.css` inherit them automatically)
- **Products** — edit via `admin.html` (see above), or directly in `products.json`
- **Prices** — shown in LKR by default (`formatLKR()` in each page's inline `<script>`); adjust the currency prefix there
- **WhatsApp number** — set as `WHATSAPP_NUMBER` in the inline `<script>` of `index.html`, `shop.html`, and `custom-orders.html`. In this public copy it's a placeholder (`REPLACE_WITH_YOUR_WHATSAPP_NUMBER`) — checkout and custom orders won't open WhatsApp correctly until you replace it in all three files with a real number in `country code + number` format, no `+` or leading `0` (e.g. `947XXXXXXXX`)
- **Admin passcode** — set/change the `ADMIN_PASSCODE` environment variable in your Vercel project settings; there's no passcode stored in the code itself
- **Filter categories/price bands** — edit the checkbox lists in `shop.html`'s sidebar and mobile drawer (`name="category"`, `name="price"`, `name="tag"`, plus their `-m` mobile twins) — values must match the `category` field and price bands used in `products.json`
- **Copy** — hero text, feature strip, quote strip, and newsletter copy are all plain text in `index.html`

## Browser support

Built with modern, broadly-supported CSS (Grid, Flexbox, `aspect-ratio`, custom properties) — works in current Chrome, Firefox, Safari, and Edge. No polyfills included. Custom order photo-sharing relies on the Web Share API where available, with a text-only WhatsApp link as a fallback everywhere else.

## Roadmap / Future Plans

The storefront, cart, custom-order flow, and a basic admin/product-management pipeline are in place. No payment gateway or order database exists yet — checkout and custom orders are both handed off to WhatsApp for a human to confirm. Planned next steps:

- [ ] **True checkout flow** — an actual payment step (e.g. Stripe or PayHere for LKR) instead of relying entirely on WhatsApp
- [ ] **Product detail pages** — a dedicated page per item (larger photos, size/colour options, full description) instead of quick-add only
- [ ] **Inventory & stock status** — mark made-to-order pieces as sold out / limited stock, ideally from a small CMS or spreadsheet-backed source instead of manually edited `products.json`
- [ ] **A real admin backend** — replace the copy/download/commit workflow in `admin.html` with something that writes to `products.json` (or a database) directly
- [ ] **Wishlist / save for later** — separate from the cart, for pieces someone's still deciding on
- [ ] **Order tracking page** — for made-to-order pieces with a multi-day turnaround
- [ ] **Additional pages** — About/Dracilla's story, Shipping & Care, Size Guide, and Contact currently link to `#` placeholders in the footer
- [ ] **Newsletter integration** — connect the signup form to an actual email provider (Mailchimp, Buttondown, etc.) instead of a no-op submit
- [ ] **Image optimization** — serve responsive `srcset` images and next-gen formats (WebP/AVIF); several product photos are currently uncompressed PNGs (~1.5–2MB each), which is worth revisiting for mobile load times
- [ ] **Analytics** — lightweight, privacy-respecting page/conversion tracking once the store is live
- [ ] **Multi-currency support** — if selling beyond Sri Lanka, add currency conversion alongside the current LKR-only pricing
- [ ] **Server-backed cart** — the cart is `localStorage`-only today (per-browser, not per-account); move it server-side once accounts/checkout exist so it survives a cleared cache or a new device
- [ ] **Social links** — Instagram/TikTok/WhatsApp icons in the footer currently link to `#` placeholders

Contributions or suggestions toward any of the above are welcome — open an issue or a PR.

## License

© 2026 Shehani Kavindi. All rights reserved.

This repository is shared publicly for portfolio and demonstration purposes only. No part of the code, design, or content may be copied, modified, redistributed, or used to build another site or product — in whole or in part — without prior written permission from the author. Product photography and imagery under `assets/` belong to their respective owners and are not covered by any permission granted above.

## Developer

Shehani Kavindi — Software Engineering undergraduate, Birmingham City University
