# React Portfolio — Design Spec

**Date:** 2026-07-21
**Status:** Approved design direction: C — "Soft Studio" (chosen from 3 mockups)

## Goal

A single-page personal portfolio for Rajat Agrawal, built in React, deployed free on
GitHub Pages with automatic deploys on every push. No backend. Placeholder content
now; all text lives in one data file so Rajat can swap in real content later.

## Stack

- **Vite + React** (JavaScript, functional components + hooks only)
- **Plain CSS** with design tokens (CSS variables) — no UI framework
- **GitHub Actions → GitHub Pages** for deployment

Rejected alternatives: Create React App (deprecated), Next.js (SSR/backend not needed).

## Architecture — container/component pattern

```
src/
  components/   Independent, reusable, props-only functional components:
                Button, SectionHeading, ProjectCard, SkillBadge,
                TimelineItem, SocialLinks, NavPill
  containers/   Smart section containers that import data and compose components:
                Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer
  data/
    content.js  ALL site text/data (name, bio, skills, projects, experience, links)
  hooks/
    useScrollReveal.js   IntersectionObserver fade-in-on-scroll
    useActiveSection.js  highlights current section pill in Navbar
  styles/
    global.css  design tokens + base styles
  App.jsx       composes containers in order
  main.jsx
```

**Rules:**
- Components never import from `data/` — they receive everything via props.
- Containers own layout of their section and pass data down.
- One component per file. No class components.

## Visual design — "Soft Studio"

- Ground: soft grey `#f6f7f9`; ink `#1d2129`; muted text `#5b6270`
- Accent: teal `#0e7c72` (pill badges use tint `#e5f3f1`)
- White cards, radius 12–18px, soft shadows (`0 12px 30px -18px rgba(20,30,50,.25)`)
- Pill-shaped navbar with active-section highlight
- Rounded avatar block with teal gradient in hero
- System font stack, bold (800) headings with tight letter-spacing
- Subtle fade-in-on-scroll reveals; respects `prefers-reduced-motion`
- Fully responsive (single column under 700px)

## Sections (in order)

1. **Navbar** — logo "Rajat." + pill nav, smooth-scrolls to sections
2. **Hero** — headline, subtext, "View Projects" + "Download CV" buttons, avatar block
3. **About** — short bio + a few quick facts
4. **Skills** — grouped skill badges (Frontend / Backend / Tools)
5. **Projects** — grid of ProjectCards (image area, title, description, tech badges, links)
6. **Experience** — vertical timeline of roles (TimelineItem)
7. **Contact** — mailto CTA + SocialLinks (GitHub, LinkedIn, email)
8. **Footer** — small print

## Data flow

`data/content.js` → containers → props → components. Editing `content.js` is the
only step needed to personalize the whole site.

## Deployment

- GitHub: username `rajatagrawal27`; public repo **`rajatagrawal27.github.io`**
  (user site → served at the root URL `https://rajatagrawal27.github.io/`)
- Repo does not exist yet: Rajat creates it empty at github.com/new, then we push
  (`gh` CLI is not installed)
- `.github/workflows/deploy.yml`: on push to `main` → npm ci → vite build → upload
  `dist/` → deploy to GitHub Pages (official `actions/deploy-pages` flow)
- `vite.config.js` keeps default `base: '/'` (root user site, no subpath)
- Known real details to seed `content.js`: name Rajat Agrawal (he/him), based in
  Indore, GitHub github.com/rajatagrawal27, email agrawalrajat27@gmail.com
  (public on his GitHub profile); everything else placeholder

## Error handling / quality

- `npm run build` must pass with zero errors before any deploy
- ESLint (Vite default config) passes
- Manual responsive check at 375px / 768px / 1280px via dev server
- All external links `rel="noopener noreferrer"`

## Out of scope (YAGNI)

Backend, contact-form server, blog, CMS, dark mode toggle, i18n, analytics.
Any of these can be added later without restructuring.
