
# Full-Stack Developer Portfolio

A single-page portfolio with sticky top nav and four sections: Hero, Projects, Tools & Skills, Contact.

## Design tokens (src/styles.css)

Replace the current `:root` palette with the requested colors (in oklch):
- `--background`: Deep Blue (deep saturated navy, approx `#0F2A4A`)
- `--foreground`: Floral White (`#FFFAF0`)
- `--card`: Pale Brown (`#B9915E`)
- `--card-foreground`: Floral White
- `--accent` / CTA: Powder Blue (`#AFD2FA`) with deep-blue foreground
- `--muted-foreground`: softened floral white
- `--border`: low-opacity floral white

Typography: load Inter (body) + Fraunces or Space Grotesk (display headline) via `<link>` in `__root.tsx`, register `--font-display` and `--font-sans` in `@theme`.

## Layout

`src/routes/index.tsx` becomes the portfolio page (replaces placeholder). Update `head()` with portfolio title, description, OG tags.

Sections:
1. **Top Nav** — sticky, transparent-on-deep-blue, floral white links: Home, Projects, Skills, Contact (anchor scroll to in-page sections — single page is appropriate here).
2. **Hero** — large display headline "Crafting Elegant Full-Stack Solutions," short subline, two CTAs (powder blue primary "View Projects", ghost secondary "Get in touch"). Subtle grain/gradient on deep blue.
3. **Projects (Bento grid)** — 4–5 project cards in an asymmetric bento layout (mix of large/small tiles). Each card: pale brown background, floral white project name, screenshot preview at top, then labeled rows: **Problem**, **Tech Stack** (chip list), **My Impact**.
4. **Tools & Skills** — three column groups: Frontend, Backend, DevOps. Each skill rendered as a text pill with a small lucide icon (Code2, Server, GitBranch, etc.), light on deep blue.
5. **Contact** — pale brown card centered, inputs for Name, Email, Message (shadcn Input/Textarea restyled to card tones), powder blue "Let's Talk" button. Form is presentational (no backend) — submit shows a toast via `sonner`.
6. **Footer** — minimal: name, year, social text links.

## Components

New files (all client-only, presentational):
- `src/components/portfolio/Nav.tsx`
- `src/components/portfolio/Hero.tsx`
- `src/components/portfolio/Projects.tsx` (project data inline as a typed array)
- `src/components/portfolio/Skills.tsx`
- `src/components/portfolio/Contact.tsx`
- `src/components/portfolio/Footer.tsx`

Reuse shadcn `button`, `input`, `textarea`, `label`, `sonner`.

## Images

Generate 4 project screenshot placeholders with `imagegen` (fast tier, 1280x800 jpg) into `src/assets/`:
- SaaS analytics dashboard
- E-commerce storefront
- Realtime chat app
- Developer tooling CLI landing

Imported as ES6 image imports into Projects.tsx.

## Motion

Lightweight CSS transitions only (hover lift on cards, smooth-scroll for nav anchors via `scroll-behavior: smooth`). No new dependencies.

## Out of scope

No backend, no auth, no database, no real form submission, no separate routes per section (single-page portfolio is the brief).
