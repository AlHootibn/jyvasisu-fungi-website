# Design System — JyväSisu Fungi

## Vibe & Aesthetic Direction

**Core feeling:** Quiet, earthy, trustworthy. Like picking up a basket of fresh chanterelles in a Finnish pine forest at golden hour.

**Style reference:** Scandinavian minimalism meets artisan food brand. Think Oatly restraint, Finnish design sensibility (Artek, Marimekko structure), and the warmth of a farmstead market stall. No noise, no clutter — nature does the talking.

**Mood words:** Grounded. Honest. Seasonal. Alive. Unhurried.

---

## Color Palette

### Primary
| Name | Hex | Use |
|---|---|---|
| Forest Floor | `#2C3A2E` | Primary text, nav background, strong CTAs |
| Birch Cream | `#F5F0E8` | Page background, light sections |
| Harvest Amber | `#B5762A` | Accent, CTA hover, seasonal highlights |

### Secondary
| Name | Hex | Use |
|---|---|---|
| Oyster Grey | `#C2BAB0` | Borders, dividers, subtle backgrounds |
| Spore White | `#FDFAF5` | Cards, hero overlays, form fields |
| Lichen Green | `#7A8C6E` | Secondary accent, icons, tags |

### Dark mode (optional)
- Background: `#1A211B`
- Text: `#EDE8DF`
- Accent: `#C8872E`

---

## Typography

### Typefaces
- **Heading:** `Playfair Display` (serif) — elegant, editorial, evokes printed Finnish nature guides
- **Body:** `Inter` or `DM Sans` (sans-serif) — clean, legible, modern Finnish design feel
- **Labels/Tags:** `DM Mono` or `Space Mono` — for mushroom Latin names, prices, small metadata

### Scale
| Role | Size | Weight |
|---|---|---|
| Hero headline | 56–72px | 700 |
| Section heading | 36–48px | 600 |
| Sub-heading | 22–28px | 500 |
| Body copy | 16–18px | 400 |
| Caption / label | 12–14px | 400–500 |

### Line height
- Headings: 1.15
- Body: 1.65

---

## Layout & Spacing

- Max content width: **1200px**
- Section vertical padding: **80–120px** desktop, **48px** mobile
- Grid: **12-column**, 24px gutters
- Card gap: **24–32px**
- Border radius: **4px** (subtle — not bubbly, not sharp)

---

## Imagery Style

- **Photography:** Natural light only — no studio flash. Golden hour preferred.
- **Subjects:** Close-up textures (gills, mycelium threads), hands holding harvest, growing rooms with soft light, Finnish forest floor
- **Palette:** Warm amber and green tones dominant — no heavy saturation or filters
- **Avoid:** Stock photo aesthetic, overly styled food photography, white backgrounds with isolated product shots
- **Aspect ratios:** 4:3 for cards, 16:9 for hero, 1:1 for team portraits

---

## Components

### Hero
- Full-bleed image (overlay: `Forest Floor` at 40% opacity)
- Headline in `Birch Cream`, left-aligned
- Single CTA button: filled `Harvest Amber` with white text

### Product Card
- White (`Spore White`) card background
- Top: square or 4:3 image (slight rounded corners: 4px)
- Bottom: mushroom name (heading font, 20px), Latin name (mono, `Oyster Grey`), flavor tag chips
- No drop shadows — use a 1px `Oyster Grey` border instead

### Navigation
- Background: `Forest Floor` 
- Logo: wordmark in `Birch Cream`
- Links: `Birch Cream` at 80% opacity, full on hover
- Sticky on scroll, no mega-menus

### Buttons
- Primary: filled `Harvest Amber`, white text, 4px radius, 12px 24px padding
- Secondary: outlined `Forest Floor`, no fill
- Hover state: 10% darker fill, no scale transforms

### Section dividers
- Use generous whitespace rather than lines
- Occasionally: a single full-width botanical illustration (SVG, sparse)

---

## Motion & Interaction

- Subtle only: fade-in on scroll (`opacity 0 → 1`, `translateY 16px → 0`, `duration 400ms ease-out`)
- No parallax, no aggressive scroll effects
- Image hover: gentle `scale(1.02)` with `overflow: hidden` on the container
- Page transitions: simple fade, not slide

---

## Iconography

- Style: thin-line, hand-drawn-feel SVG icons (not filled, not Material Design)
- Stroke weight: 1.5px
- Subjects: leaf, spore, water drop, compost cycle, hands, map pin, sun cycle
- Color: `Lichen Green` as default, `Harvest Amber` on active/accent

---

## Voice & Copy Tone

- Finnish directness — no hyperbole, no filler adjectives
- Warm but not sentimental
- Short sentences. White space in prose as much as in layout.
- Product descriptions: sensory first (smell, texture, taste), then use case
- Avoid: "premium", "artisanal", "world-class" — let the product speak

---

## Responsive Behavior

- **Desktop (1200px+):** Full grid, side-by-side layouts, large hero
- **Tablet (768–1199px):** 2-column cards, stacked hero text
- **Mobile (<768px):** Single column, collapsed nav (hamburger), full-width cards
- Font sizes scale down ~15% on mobile

---

## Accessibility

- Minimum contrast ratio: 4.5:1 for body text (WCAG AA)
- Focus rings: visible, `Harvest Amber` outline
- All images: meaningful alt text in Finnish
- Form labels: always visible (no placeholder-only labels)
