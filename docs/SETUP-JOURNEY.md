# How this portfolio was built & deployed — the full journey

_Recorded 2026-07-21. This is the complete record of every step, decision, and
gotcha, so future-you (or anyone else) can repeat or debug the setup._

---

## 1. The goal

A personal portfolio in **React**, deployed **for free** with a public URL.
Decision: no backend needed for a portfolio — a static React site is enough.
Free hosting: **GitHub Pages** (free for public repositories, HTTPS included).

## 2. Design

Three design directions were mocked up and compared; the chosen one is
**"Soft Studio"**: soft grey background `#f6f7f9`, teal accent `#0e7c72`,
white rounded cards with soft shadows, pill-shaped navbar.
Full spec: [superpowers/specs/2026-07-21-react-portfolio-design.md](superpowers/specs/2026-07-21-react-portfolio-design.md)

## 3. Tech decisions

| Choice | Why |
|---|---|
| **Vite** (not Create React App) | CRA is deprecated; Vite is the modern standard, much faster |
| **No Next.js** | Overkill — no server rendering/backend needed for a static portfolio |
| **Plain CSS with tokens** | No framework needed; design tokens in `:root` keep it consistent |
| **Container/component split** | `components/` are props-only & reusable; `containers/` own data & logic |
| **All text in `src/data/content.js`** | Personalizing the site = editing one file |
| **Vitest + React Testing Library** | Tests run in CI before every deploy — broken code never ships |

## 4. The GitHub repository

- **Name must be exactly `<username>.github.io`** → `rajatagrawal27.github.io`.
  That exact name is what makes GitHub serve it at the root URL
  `https://rajatagrawal27.github.io/`. Any other name (e.g. `portfolio`) would
  serve at `https://rajatagrawal27.github.io/portfolio/` instead.
- **Must be Public** — GitHub Pages is not available on private repos in the
  free plan.
- Created empty at github.com/new: no README, no .gitignore, no license
  (we pushed an existing local repository into it).

## 5. SSH key

Pushing needs authentication. This machine already had an SSH key
(`~/.ssh/id_ed25519.pub`) but it wasn't linked to the GitHub account.

1. Copy the public key: `cat ~/.ssh/id_ed25519.pub`
2. GitHub → https://github.com/settings/ssh/new → paste → **Add SSH key**
   - The email label at the end of the key line is just a comment — it can be
     removed and has no effect on authentication.
3. Test: `ssh -T git@github.com` → should greet you by username.
4. The remote uses SSH form: `git@github.com:rajatagrawal27/rajatagrawal27.github.io.git`

## 6. Git identity (important gotcha)

The laptop's global git config used the **work identity**
(`rajat.agrawal@infobeans.com`) — commits with that email don't link to the
personal GitHub profile (no contribution squares).

Fix, applied **only to this repo** (global/work config untouched):

```bash
git config user.name  "Rajat Agrawal"
git config user.email "agrawalrajat27@gmail.com"
```

Existing commits were rewritten to the personal identity **before** the first
push (never rewrite already-pushed history).

## 7. Automatic deployment (GitHub Actions → Pages)

[`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) runs on every
push to `main`:

```
npm ci  →  npm test  →  npm run build  →  upload dist/  →  deploy to Pages
```

If tests fail, deployment stops and the live site is untouched.

## 8. ⚠️ The blank-page gotcha (and its fix)

**Symptom:** first deployment "succeeded" but the live site was blank.

**Cause:** when a `<username>.github.io` repo is created, GitHub auto-enables
Pages in legacy **"Deploy from a branch"** mode — it served the *raw source
files* (where `index.html` points to `/src/main.jsx`, which only works in dev)
instead of our *built* site from the workflow.

**Fix (one dropdown):**
Repo → **Settings → Pages → Build and deployment → Source** →
change **"Deploy from a branch"** to **"GitHub Actions"**.
Then re-trigger a deploy (any push, or an empty commit:
`git commit --allow-empty -m "redeploy" && git push`).

**How to verify it's right:** `curl -s https://rajatagrawal27.github.io/ | grep script`
should show `/assets/index-….js` (built) — **not** `/src/main.jsx` (source).

## 9. Verification done at launch

- `npm test` — 5 tests green (components + app smoke test), also runs in CI
- `npm run build` — clean production build
- Visual check at 1280px / 768px / 375px widths — layout, nav pills,
  scroll-reveal animations, and the `prefers-reduced-motion` fallback
- Live check after deploy — page renders, built assets return HTTP 200

## 10. Everyday workflow from now on

```bash
# edit src/data/content.js (or anything else)
npm run dev        # check locally at http://localhost:5173
npm test           # make sure tests still pass
git add -A && git commit -m "update content" && git push
# → live in ~1 minute
```

## 11. What's next (when ready)

- Swap `PLACEHOLDER` content in `src/data/content.js` for real details
- Add `public/resume.pdf` and set `cvUrl` in content.js
- Custom domain — full guide: [CUSTOM-DOMAIN.md](CUSTOM-DOMAIN.md)
