# Changelog

Everything that changed on the site, newest first.

## 2026-07-23

**Experience section restructured by company:**

- Timeline entries are now companies (not roles): **InfoBeans Technologies Ltd**
  (Jul 2025 — Present) and **Sigma Infosolutions Ltd** (Aug 2019 — Jul 2025)
- Career progression shown inside each company: Associate Software Engineer →
  Software Engineer → Senior Software Engineer at Sigma; Senior Software
  Engineer at InfoBeans
- Projects listed inside each company as pills (Mesh Identity Risk / LOS)
- Each role carries its own achievement bullets, growing in responsibility
  from ASE (UI screens, unit tests) → SE (reusable components, routing,
  graph views) → SSE (component library architecture, performance, guiding
  the team)

**New features (live):**

- **Favicon** — browser-tab icon made from the profile photo: circular face
  crop with a teal ring (`public/favicon.png` + `apple-touch-icon.png`)

- **Full name in the navbar** — logo now reads "Rajat Agrawal." instead of "Rajat."
- **Scroll mini-profile** — after scrolling past the hero, the sticky navbar
  shows a compact profile: round photo, name, and "Frontend Developer (React.js)"
- **Dark / light mode** — ☾/☀ toggle button in the navbar; switches the whole
  site theme with smooth transitions and remembers the choice (localStorage)
- **Project cover labels** — the gradient covers on project cards now show a
  bold label + caption ("Mesh / Identity Risk SaaS", "LOS / Fintech Platform",
  "Sacunxt / ServiceNow Plug-in", "RA. / React + Vite + CI") instead of being
  blank. Editable via `coverLabel` / `coverNote` in `src/data/content.js`.

**Tried and reverted:**

- A Dribbble-style hero where the photo (background removed) "pops out" of a
  gradient panel with floating info chips. Background removal worked, but the
  café photo has a speaker column and a hanging cable pressed directly against
  the hair — removing them cleanly without damaging the hair silhouette proved
  impractical, so the whole experiment was reverted before deploying.
  **Lesson for a retry:** use a photo with clear space around the head and
  shoulders (plain wall background works best) — then the effect is easy.

## 2026-07-21 — Launch day 🚀

- Designed the site: 3 mockup directions compared, **"Soft Studio"** chosen
  (soft grey ground, teal accent, rounded cards, pill navbar)
- Built with Vite + React: props-only `components/`, data-owning `containers/`,
  all text in `src/data/content.js`, Vitest + RTL tests
- Created public repo `rajatagrawal27.github.io`, linked SSH key, set git
  identity to the personal account
- Set up GitHub Actions → GitHub Pages auto-deploy (fixed the "blank page"
  gotcha: Pages source must be **GitHub Actions**, not "Deploy from a branch")
- Replaced placeholder copy with real resume content (7 years frontend,
  Mesh Identity Risk / LOS / Sacunxt, education, skills)
- Added profile photo to the hero (with initials fallback) and LinkedIn link
- Wrote docs: README, SETUP-JOURNEY.md, CUSTOM-DOMAIN.md

**Still open:** "Download CV" button needs `public/resume.pdf` (a version that
matches the site's frontend-developer framing).
