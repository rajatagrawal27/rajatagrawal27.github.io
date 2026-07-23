# Rajat Agrawal — Portfolio

Personal portfolio website, live at **https://rajatagrawal27.github.io/**

Built with **Vite + React** (functional components only), styled with plain CSS
design tokens, tested with **Vitest + React Testing Library**, and deployed
**automatically to GitHub Pages** on every push to `main` — hosting is 100% free.

## ✨ Features

- **6 languages** — 🇬🇧 English (default), 🇫🇷 French, 🇮🇳 Hindi, 🇩🇪 German,
  🇨🇳 Chinese, 🇯🇵 Japanese. Flag dropdown in the navbar; the choice is
  remembered (localStorage). Tech terms stay in English in every language.
- **Light & dark mode** — ☾/☀ toggle in the navbar; the choice is remembered
  between visits (localStorage), with smooth color transitions
- **Scroll mini-profile** — after scrolling past the hero, the sticky navbar
  shows photo + name + role
- **Active-section navigation** — pill navbar highlights the section in view,
  smooth-scrolls on click
- **Reveal-on-scroll animations** — sections fade in; respects
  `prefers-reduced-motion`
- **Labeled project covers** — each project card has a branded gradient cover
- Fully responsive (desktop / tablet / mobile), tested at 1280 / 768 / 375 px

---

## 📁 Project structure

```
portfolio/
├── index.html                  # HTML shell (title, meta tags)
├── vite.config.js              # Vite + Vitest config
├── public/
│   └── profile.jpg             # profile photo (hero + navbar mini-profile)
├── .github/workflows/
│   └── deploy.yml              # CI: test → build → deploy to GitHub Pages
├── docs/
│   ├── SETUP-JOURNEY.md        # 📖 how this site was created & deployed
│   ├── CHANGELOG.md            # 📖 what changed, by date
│   ├── CUSTOM-DOMAIN.md        # 📖 future: buy a domain & connect it
│   └── superpowers/            # original design spec & implementation plan
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # assembles all sections
    ├── App.test.jsx            # smoke test: all sections render
    ├── context/
    │   └── LanguageContext.jsx # language state + list of available languages
    ├── data/translations/
    │   ├── en.json             # ⭐ ALL site text — English is the master copy
    │   └── fr.json, hi.json, de.json, zh.json, ja.json
    ├── components/             # independent, reusable, props-only components
    │   ├── Button.jsx, SectionHeading.jsx, SkillBadge.jsx,
    │   ├── NavPill.jsx, ProjectCard.jsx, TimelineItem.jsx,
    │   ├── SocialLinks.jsx, ThemeToggle.jsx
    │   └── __tests__/          # component tests
    ├── containers/             # section containers: import data, compose components
    │   └── Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer
    ├── hooks/
    │   ├── useScrollReveal.js  # fade-in sections on scroll
    │   ├── useActiveSection.js # highlights current section in navbar
    │   ├── useScrolled.js      # detects scroll past the hero (mini-profile)
    │   └── useTheme.js         # dark/light mode with localStorage persistence
    ├── styles/
    │   └── global.css          # design tokens (light + dark) + all styles
    └── test/
        └── setup.js            # test environment setup
```

**Architecture rule:** `data/content.js` → containers → props → components.
Components are fully independent and reusable; containers own the data and logic.

---

## 🚀 Running the project locally

Prerequisite: **Node.js 20+** (this machine runs Node 22).

```bash
# 1. install dependencies (first time only)
npm install

# 2. start the dev server → opens at http://localhost:5173
npm run dev

# 3. run the tests
npm test

# 4. production build → outputs static files to dist/
npm run build

# 5. preview the production build locally
npm run preview
```

---

## ✏️ Editing the site content

**Everything** — name, bio, skills, projects, experience, links — lives in the
translation files:

> [`src/data/translations/en.json`](src/data/translations/en.json) — the master copy

⚠️ When you change text in `en.json`, mirror the change in the other five
files (`fr.json`, `hi.json`, `de.json`, `zh.json`, `ja.json`) — same structure,
translated values. Non-text fields (links, gradients, tech lists, photo paths)
must stay identical in every file. Adding a language = add a JSON file + one
entry in [`src/context/LanguageContext.jsx`](src/context/LanguageContext.jsx).

Common edits:

- **Projects** — the `projects` array: title, description, tech badges, links,
  plus `coverLabel` / `coverNote` (the text on the gradient cover) and
  `gradient` (the cover colors)
- **Profile photo** — replace `public/profile.jpg` (used in hero + navbar)
- **Resume** — still PLACEHOLDER: add `public/resume.pdf` and set
  `profile.cvUrl` to `/resume.pdf` (in all six JSON files) to make the
  "Download CV" button work
- **Colors / theme** — design tokens at the top of
  [`src/styles/global.css`](src/styles/global.css): `:root` for light mode,
  `:root[data-theme="dark"]` for dark mode

---

## 🌍 Publishing changes (deployment)

Deployment is fully automatic. After editing anything:

```bash
git add -A
git commit -m "update content"
git push
```

Within ~1 minute: GitHub Actions runs the tests, builds the site, and publishes
it to https://rajatagrawal27.github.io/. Watch progress in the repo's
**Actions** tab. If tests fail, the old site stays up — nothing breaks.

### Troubleshooting

| Problem | Fix |
|---|---|
| Site shows a blank page | Repo **Settings → Pages → Source** must be **"GitHub Actions"** (not "Deploy from a branch") — see [docs/SETUP-JOURNEY.md](docs/SETUP-JOURNEY.md) |
| Push rejected / auth error | Your SSH key must be added at github.com/settings/ssh — see [docs/SETUP-JOURNEY.md](docs/SETUP-JOURNEY.md#5-ssh-key) |
| Deploy failed in Actions tab | Open the failed run → read which step is red. Usually a failing test — run `npm test` locally first |
| Old content/photo showing | Hard-refresh the browser: `Ctrl+Shift+R` |

---

## 📚 Docs

- **[docs/SETUP-JOURNEY.md](docs/SETUP-JOURNEY.md)** — the complete record of how this
  site was created, configured, and deployed (repo naming rules, SSH setup,
  Pages configuration, gotchas we hit and their fixes)
- **[docs/CHANGELOG.md](docs/CHANGELOG.md)** — everything that changed, by date
- **[docs/CUSTOM-DOMAIN.md](docs/CUSTOM-DOMAIN.md)** — future plan: buying a custom
  domain (e.g. `rajatagrawal.dev`) and connecting it to this site, step by step

## 💡 Future improvement ideas

- [ ] Add `public/resume.pdf` (matching the site's frontend-developer story)
  and link it from the hero "Download CV" button
- [ ] Add a favicon (`public/favicon.svg` + `<link rel="icon">` in `index.html`)
- [ ] Add Open Graph meta tags in `index.html` (nice preview when sharing the link)
- [ ] Buy a custom domain → follow [docs/CUSTOM-DOMAIN.md](docs/CUSTOM-DOMAIN.md)
- [ ] Real project screenshots instead of gradient covers (`public/projects/*.png`)
- [ ] Retry the "photo cutout" hero with a photo taken against a plain background
  (see [docs/CHANGELOG.md](docs/CHANGELOG.md) for why the first attempt was reverted)
- [ ] Optional: blog section, analytics
