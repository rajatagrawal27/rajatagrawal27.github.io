# Rajat Agrawal — Portfolio

Personal portfolio website, live at **https://rajatagrawal27.github.io/**

Built with **Vite + React** (functional components only), styled with plain CSS
design tokens, tested with **Vitest + React Testing Library**, and deployed
**automatically to GitHub Pages** on every push to `main` — hosting is 100% free.

---

## 📁 Project structure

```
portfolio/
├── index.html                  # HTML shell (title, meta tags)
├── vite.config.js              # Vite + Vitest config
├── package.json                # scripts + dependencies
├── .github/workflows/
│   └── deploy.yml              # CI: test → build → deploy to GitHub Pages
├── docs/
│   ├── SETUP-JOURNEY.md        # 📖 how this site was created & deployed (full story)
│   ├── CUSTOM-DOMAIN.md        # 📖 future: buy a domain & connect it (step by step)
│   └── superpowers/            # original design spec & implementation plan
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # assembles all sections
    ├── App.test.jsx            # smoke test: all sections render
    ├── data/
    │   └── content.js          # ⭐ ALL site text lives here — edit this file
    ├── components/             # independent, reusable, props-only components
    │   ├── Button.jsx            (never import data — receive everything via props)
    │   ├── SectionHeading.jsx
    │   ├── SkillBadge.jsx
    │   ├── NavPill.jsx
    │   ├── ProjectCard.jsx
    │   ├── TimelineItem.jsx
    │   ├── SocialLinks.jsx
    │   └── __tests__/          # component tests
    ├── containers/             # section containers: import data, compose components
    │   ├── Navbar.jsx, Hero.jsx, About.jsx, Skills.jsx,
    │   ├── Projects.jsx, Experience.jsx, Contact.jsx, Footer.jsx
    ├── hooks/
    │   ├── useScrollReveal.js  # fade-in sections on scroll
    │   └── useActiveSection.js # highlights current section in navbar
    ├── styles/
    │   └── global.css          # design tokens (colors, radius, shadows) + all styles
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

**Everything** — name, bio, skills, projects, experience, links — lives in one file:

> [`src/data/content.js`](src/data/content.js)

Search for `PLACEHOLDER` in that file to find what still needs your real details:

- [ ] Bio paragraphs (About section)
- [ ] Fact numbers (years of experience, projects shipped…)
- [ ] The 4 project cards (titles, descriptions, tech, demo/code links)
- [ ] Work experience (companies, periods, bullet points)
- [ ] LinkedIn profile URL
- [ ] Resume PDF link (`cvUrl`) — put a `resume.pdf` in the `public/` folder and set `cvUrl: '/resume.pdf'`

To change colors/spacing/shadows: edit the design tokens at the top of
[`src/styles/global.css`](src/styles/global.css) (e.g. `--accent: #0e7c72`).

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
| Old content showing | Hard-refresh the browser: `Ctrl+Shift+R` |

---

## 📚 Docs

- **[docs/SETUP-JOURNEY.md](docs/SETUP-JOURNEY.md)** — the complete record of how this
  site was created, configured, and deployed (repo naming rules, SSH setup,
  Pages configuration, gotchas we hit and their fixes).
- **[docs/CUSTOM-DOMAIN.md](docs/CUSTOM-DOMAIN.md)** — future plan: buying a custom
  domain (e.g. `rajatagrawal.dev`) and connecting it to this site, step by step.

## 💡 Future improvement ideas

- [ ] Replace all `PLACEHOLDER` content with real details
- [ ] Add `public/resume.pdf` and link it from the hero button
- [ ] Add a favicon (`public/favicon.svg` + `<link rel="icon">` in `index.html`)
- [ ] Add Open Graph meta tags in `index.html` (nice preview when sharing the link)
- [ ] Buy a custom domain → follow [docs/CUSTOM-DOMAIN.md](docs/CUSTOM-DOMAIN.md)
- [ ] Real project screenshots instead of gradient covers (`public/projects/*.png`)
- [ ] Optional: dark mode toggle, blog section, analytics
