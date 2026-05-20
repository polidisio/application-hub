# ApplicationHub — Redesign Spec

## Concept & Vision

An editorial-meets-utility app hub. The personality: a curated catalog from a developer who takes craft seriously — like a personal Monocle magazine issue, but for software. Dark canvas, glassmorphism cards, but with the structural confidence of a printed editorial piece. Purple/green are the accent system (not the background wash). The grid does the work, not the gradients.

## Design Language

### Aesthetic Direction
Editorial + Tech utility hybrid. Large serif display headings with tight sans-serif body. Monospace for metadata (category labels, counts). The glassmorphism stays but is refined — less gradient-wash, more precise frosted-glass surfaces with clear borders.

### Color Palette
```css
--bg:          #09090b;      /* zinc-950 */
--surface:     #18181b;      /* zinc-900 */
--surface-2:   #27272a;      /* zinc-800 */
--fg:          #fafafa;      /* zinc-50 */
--muted:       #71717a;      /* zinc-500 */
--border:      rgba(255,255,255,0.08);
--accent:      #a78bfa;      /* violet-400 — primary accent */
--accent-2:    #34d399;     /* emerald-400 — secondary */
```

### Typography
- **Display**: `'Iowan Old Style', Georgia, serif` — for the main title and section headers. Large, confident, editorial.
- **Body**: system-ui / Inter — for descriptions and UI text. Clean and readable.
- **Mono**: `ui-monospace, monospace` — for category badges, stats, timestamps.

### Spatial System
- Max-width: 1200px centered
- Grid: 12-column on desktop, 2-col on tablet, 1-col on mobile
- Section padding: 80px desktop, 48px tablet, 32px mobile
- Card padding: 32px
- Gap: 24px

### Motion Philosophy
- Cards: subtle lift on hover (translateY -2px) with border brightening. No bounce.
- Modal: fade-in with scale from 0.95 → 1. 200ms ease-out.
- Header logo: gentle float animation (already exists, keep it).
- No scroll animations — the content is the decoration.

### Visual Assets
- App icons: real screenshots/icons from the project assets
- Category badges: monospace, small caps, border-only style
- No emoji as icons (already in data as fallback, prefer iconImage)
- No generic stock photos

## Layout & Structure

### Homepage
```
[Header: Logo + animated gradient text title + subtitle]
[Category Filter Bar: All | iOS | Mac | Desarrollo — sticky on scroll]
[App Grid: 3-col desktop, 2-col tablet, 1-col mobile — masonry-inspired but consistent heights]
[Footer: minimal — copyright + privacy link]
```

### App Card (redesigned)
```
┌─────────────────────────────────────┐
│  [Icon Image / Emoji]               │
│  Name (serif, large)                │
│  Category badge (mono, small)      │
│  Description (sans, muted)          │
│  [View Details →]                   │
└─────────────────────────────────────┘
```
- Icon: 64×64, contained in a subtle glass circle
- Name: Iowan Old Style, 24px, white
- Category: monospace badge, border-only, small
- Description: system-ui, 14px, zinc-400, max 2 lines
- Hover: border brightens to violet, subtle lift

### App Modal (redesigned)
```
┌─────────────────────────────────────────┐
│ [×]                                     │
│ [Icon] Name                    [Badge]  │
│ Description (large, white)              │
│                                        │
│ ── Features ──────────────────────────  │
│ ✓ feature 1                            │
│ ✓ feature 2                            │
│                                        │
│ ── How it Works ──────────────────────  │
│ Step-by-step in a clean list            │
│                                        │
│ [Manual / Screenshots tabs if exist]   │
│                                        │
│ [Visit Website] [App Store] [Privacy]  │
└─────────────────────────────────────────┘
```

### Privacy Page
- Clean editorial layout: back link, title, last updated, sections with clear hierarchy
- Glass modal card for the content
- Legal-document feel but not cold

### Responsive Strategy
- Mobile-first with clamp() for type scales
- Category filter becomes horizontally scrollable on mobile
- Cards stack to single column below 640px
- Modal becomes full-screen on mobile

## Features & Interactions

### Category Filter
- Tabs: All, iOS, Mac, Desarrollo
- Active tab: violet underline, white text
- Inactive: muted text, hover brightens
- Click filters grid instantly (no page reload, client-side)

### App Card Hover
- Border: rgba(255,255,255,0.15) → rgba(167,139,250,0.5) (violet glow)
- Transform: translateY(-2px)
- Transition: 200ms ease-out

### App Modal
- Opens on card click
- Escape key or backdrop click to close
- Body scroll locked when open
- Close button top-right

### Language Toggle
- Already exists: ES/EN toggle (keep it)
- Position: top-right of header area

## Component Inventory

### Header
- States: default (scrolled = slightly more opaque backdrop)
- Logo: 64×64 image, glass circle background, float animation
- Title: "ApplicationHub" in gradient text (violet→emerald)
- Subtitle: muted text, system-ui

### CategoryFilter
- States: default, hover (muted→white), active (violet underline)
- Sticky behavior on scroll

### AppCard
- States: default, hover (border glow + lift), focus (keyboard nav)
- Contains: icon, name, badge, description, CTA

### AppModal
- States: opening (scale 0.95→1, opacity 0→1), open, closing (reverse)
- Sections: header, description, features list, how-it-works, manual (if exists), screenshots (if exist), action links

### PrivacyPage
- Clean card layout with section headers
- Back link with arrow icon
- Legal typography hierarchy

## Technical Approach

- **Framework**: Next.js (keep, already deployed on Vercel)
- **Styling**: Tailwind CSS v4 (already in use) + CSS custom properties for the color system
- **State**: React useState for modal and filter
- **i18n**: Already exists with useTranslation hook — keep it
- **No external dependencies** beyond what already exists

## Pages to Update

1. `src/app/page.tsx` — main grid with category filter
2. `src/app/components/AppCard.tsx` — redesigned card
3. `src/app/components/AppModal.tsx` — redesigned modal
4. `src/app/components/Header.tsx` — refined header
5. `src/app/globals.css` — new token system, refined glassmorphism
6. `src/app/privacy/page.tsx` — refined privacy page (minor adjustments)
7. `src/data/apps.ts` — add category colors for badges

## Quality Checklist

- [ ] All 9 apps display correctly with icons
- [ ] Category filter works (All/iOS/Mac/Desarrollo)
- [ ] Modal opens/closes correctly with all content
- [ ] Language toggle works (ES/EN)
- [ ] Privacy page accessible from modal and footer
- [ ] No horizontal scroll at any breakpoint
- [ ] No broken images (use real icon paths from project)
- [ ] Keyboard navigation works (tab through cards, escape closes modal)
- [ ] Mobile responsive at 360px, 390px, 430px, 768px, 1024px