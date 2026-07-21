# React Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Rajat's single-page portfolio (Soft Studio design) in Vite + React and set up auto-deploy to `https://rajatagrawal27.github.io/` via GitHub Actions + Pages.

**Architecture:** Container/component pattern — props-only functional components in `src/components/`, data-owning section containers in `src/containers/`, all site text in `src/data/content.js`, design tokens in one `src/styles/global.css`. No backend, no router, no UI framework.

**Tech Stack:** Vite 7, React 19, plain CSS, Vitest + React Testing Library (jsdom), GitHub Actions → GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-07-21-react-portfolio-design.md`

---

### Task 1: Scaffold the Vite + React project

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `.gitignore`, `src/main.jsx`, `src/App.jsx`, `src/test/setup.js`

- [ ] **Step 1: Write `package.json`**

```json
{
  "name": "rajat-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run"
  },
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.3.0",
    "@vitejs/plugin-react": "^4.5.0",
    "jsdom": "^26.1.0",
    "vite": "^7.0.0",
    "vitest": "^3.2.0"
  }
}
```

- [ ] **Step 2: Write `.gitignore`**

```
node_modules
dist
*.local
.DS_Store
```

- [ ] **Step 3: Write `vite.config.js`** (default `base: '/'` — root user site; `test` block is read by Vitest)

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
  },
})
```

- [ ] **Step 4: Write `index.html`**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Rajat Agrawal — Full-stack developer portfolio" />
    <title>Rajat Agrawal — Full-Stack Developer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Write `src/main.jsx`**

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 6: Write placeholder `src/App.jsx`** (replaced in Task 6)

```jsx
export default function App() {
  return <h1>Portfolio coming up</h1>
}
```

- [ ] **Step 7: Write `src/test/setup.js`** (jest-dom matchers + IntersectionObserver mock — jsdom has no IO)

```js
import '@testing-library/jest-dom/vitest'

class MockIntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.IntersectionObserver = MockIntersectionObserver
```

- [ ] **Step 8: Create empty `src/styles/global.css`** (filled in Task 2), then install and build

Run: `npm install`
Expected: completes with no errors (lockfile created)

Run: `npm run build`
Expected: `✓ built in …s`, `dist/` created

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "chore: scaffold Vite + React project with Vitest"
```

---

### Task 2: Design tokens and global styles (Soft Studio)

**Files:**
- Modify: `src/styles/global.css` (whole file)

- [ ] **Step 1: Write the full stylesheet**

```css
/* ============ Design tokens (Soft Studio) ============ */
:root {
  --bg: #f6f7f9;
  --surface: #ffffff;
  --ink: #1d2129;
  --muted: #5b6270;
  --accent: #0e7c72;
  --accent-strong: #0a5f57;
  --accent-soft: #e5f3f1;
  --radius-sm: 12px;
  --radius-md: 18px;
  --radius-pill: 999px;
  --shadow-card: 0 12px 30px -18px rgba(20, 30, 50, 0.25);
  --shadow-soft: 0 2px 10px rgba(20, 30, 50, 0.07);
  --container: 1080px;
  --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

/* ============ Reset & base ============ */
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
a:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; border-radius: 4px; }

/* ============ Layout utilities ============ */
.container { max-width: var(--container); margin: 0 auto; padding: 0 24px; }
.section { padding: 96px 0; }
.section--alt { background: var(--surface); }

/* ============ Reveal-on-scroll ============ */
.reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.visible { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .reveal { opacity: 1; transform: none; transition: none; }
}

/* ============ Buttons ============ */
.btn {
  display: inline-block;
  font-weight: 600;
  font-size: 15px;
  padding: 13px 26px;
  border-radius: var(--radius-sm);
  transition: transform 0.15s ease, background 0.15s ease;
}
.btn--primary { background: var(--accent); color: #fff; box-shadow: 0 8px 20px -8px rgba(14, 124, 114, 0.55); }
.btn--primary:hover { background: var(--accent-strong); transform: translateY(-2px); }
.btn--ghost { background: var(--surface); color: var(--ink); box-shadow: var(--shadow-soft); }
.btn--ghost:hover { transform: translateY(-2px); }

/* ============ Section heading ============ */
.section-heading { margin-bottom: 48px; }
.section-heading__eyebrow {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-soft);
  border-radius: var(--radius-pill);
  padding: 6px 14px;
  margin-bottom: 14px;
}
.section-heading__title { font-size: clamp(28px, 4vw, 38px); font-weight: 800; letter-spacing: -0.02em; }

/* ============ Navbar ============ */
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(246, 247, 249, 0.85);
  backdrop-filter: blur(10px);
}
.navbar__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--container);
  margin: 0 auto;
  padding: 16px 24px;
}
.navbar__logo { font-weight: 800; font-size: 18px; }
.navbar__logo span { color: var(--accent); }
.nav-pills {
  display: flex;
  gap: 4px;
  background: var(--surface);
  border-radius: var(--radius-pill);
  padding: 5px;
  box-shadow: var(--shadow-soft);
}
.nav-pill {
  font-size: 14px;
  padding: 7px 16px;
  border-radius: var(--radius-pill);
  color: var(--muted);
  transition: background 0.2s ease, color 0.2s ease;
  white-space: nowrap;
}
.nav-pill:hover { color: var(--ink); }
.nav-pill--active { background: var(--accent); color: #fff; }

/* ============ Hero ============ */
.hero { padding: 88px 0 96px; }
.hero__inner { display: grid; grid-template-columns: 1.5fr 1fr; gap: 48px; align-items: center; }
.hero__greeting { display: inline-block; color: var(--accent); font-weight: 700; margin-bottom: 10px; }
.hero__title { font-size: clamp(34px, 5vw, 52px); line-height: 1.08; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 18px; }
.hero__title em { font-style: normal; color: var(--accent); }
.hero__subtitle { color: var(--muted); font-size: 17px; max-width: 46ch; margin-bottom: 28px; }
.hero__actions { display: flex; gap: 14px; flex-wrap: wrap; }
.hero__avatar {
  width: min(230px, 60vw);
  aspect-ratio: 1;
  border-radius: 36px;
  margin-left: auto;
  background: linear-gradient(140deg, #c9ece8, var(--accent));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 56px;
  font-weight: 800;
}

/* ============ About ============ */
.about__grid { display: grid; grid-template-columns: 1.6fr 1fr; gap: 40px; }
.about__text p { color: var(--muted); margin-bottom: 16px; font-size: 16px; }
.facts { display: grid; gap: 14px; align-content: start; }
.fact { background: var(--bg); border-radius: var(--radius-sm); padding: 16px 20px; }
.fact__value { font-size: 22px; font-weight: 800; color: var(--accent); }
.fact__label { font-size: 13px; color: var(--muted); }

/* ============ Skills ============ */
.skills__groups { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
.skill-group { background: var(--surface); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-card); }
.skill-group h3 { font-size: 17px; margin-bottom: 16px; }
.badges { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-badge {
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
  background: var(--accent-soft);
  border-radius: var(--radius-pill);
  padding: 6px 14px;
}

/* ============ Projects ============ */
.projects__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.project-card {
  background: var(--surface);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
}
.project-card__cover { height: 140px; border-radius: var(--radius-sm); margin-bottom: 18px; }
.project-card__title { font-size: 19px; font-weight: 700; margin-bottom: 8px; }
.project-card__desc { color: var(--muted); font-size: 15px; margin-bottom: 16px; flex: 1; }
.project-card__links { display: flex; gap: 16px; margin-top: 16px; }
.project-card__links a { font-size: 14px; font-weight: 600; color: var(--accent); }
.project-card__links a:hover { color: var(--accent-strong); }

/* ============ Experience (timeline) ============ */
.timeline { position: relative; padding-left: 28px; max-width: 720px; }
.timeline::before {
  content: "";
  position: absolute;
  left: 8px;
  top: 4px;
  bottom: 4px;
  width: 2px;
  background: var(--accent-soft);
}
.timeline-item { position: relative; padding-bottom: 36px; }
.timeline-item:last-child { padding-bottom: 0; }
.timeline-item::before {
  content: "";
  position: absolute;
  left: -25px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
}
.timeline-item__period { font-size: 13px; font-weight: 700; color: var(--accent); }
.timeline-item__role { font-size: 18px; font-weight: 700; margin: 4px 0 2px; }
.timeline-item__company { color: var(--muted); font-size: 15px; margin-bottom: 10px; }
.timeline-item__points li { color: var(--muted); font-size: 15px; padding-left: 18px; position: relative; margin-bottom: 6px; }
.timeline-item__points li::before { content: "—"; position: absolute; left: 0; color: var(--accent); }

/* ============ Contact ============ */
.contact__card {
  background: var(--surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  padding: 48px;
  text-align: center;
}
.contact__title { font-size: clamp(24px, 3vw, 32px); font-weight: 800; margin-bottom: 12px; }
.contact__text { color: var(--muted); max-width: 52ch; margin: 0 auto 28px; }
.social-links { display: flex; justify-content: center; gap: 14px; margin-top: 28px; flex-wrap: wrap; }
.social-links a {
  font-weight: 600;
  font-size: 14px;
  color: var(--ink);
  background: var(--bg);
  padding: 10px 18px;
  border-radius: var(--radius-pill);
  transition: background 0.2s ease, color 0.2s ease;
}
.social-links a:hover { background: var(--accent-soft); color: var(--accent-strong); }

/* ============ Footer ============ */
.footer { padding: 28px 0 36px; text-align: center; color: var(--muted); font-size: 14px; }
.footer span { color: var(--accent); }

/* ============ Responsive ============ */
@media (max-width: 800px) {
  .section { padding: 72px 0; }
  .hero__inner, .about__grid, .skills__groups, .projects__grid { grid-template-columns: 1fr; }
  .hero__avatar { margin: 0 auto; }
}
@media (max-width: 700px) {
  .navbar__inner { flex-direction: column; gap: 10px; padding: 12px 16px; }
  .nav-pills { max-width: 100%; overflow-x: auto; }
}
```

- [ ] **Step 2: Verify build still passes**

Run: `npm run build`
Expected: `✓ built` with the CSS in the output bundle

- [ ] **Step 3: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: add Soft Studio design tokens and global styles"
```

---

### Task 3: Content data file

**Files:**
- Create: `src/data/content.js`

- [ ] **Step 1: Write `src/data/content.js`** (single source of ALL site text; placeholder items marked so Rajat can find them)

```js
// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to personalize the whole site.
// Anything marked "PLACEHOLDER" should be replaced with your
// real details. Nothing else in src/ needs to change.
// ─────────────────────────────────────────────────────────────

export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const profile = {
  name: 'Rajat Agrawal',
  initials: 'RA',
  logo: { text: 'Rajat', dot: '.' },
  role: 'Full-Stack Developer',
  heroGreeting: "Hi, I'm Rajat.",
  heroTitle: { before: 'I build ', highlight: 'web apps', after: ' people enjoy using.' },
  heroSubtitle:
    'Full-stack developer specialising in React and Node — from quick prototypes to production systems.',
  email: 'agrawalrajat27@gmail.com',
  location: 'Indore, India',
  cvUrl: '#', // PLACEHOLDER: link to your resume PDF
}

export const about = {
  paragraphs: [
    // PLACEHOLDER bio — replace with your own story
    "I'm a full-stack developer based in Indore, India. I enjoy taking products from idea to launch: designing clean APIs, building fast interfaces, and shipping software that holds up in production.",
    'Lately I have been working with React on the frontend and Node and Go services on the backend, with a growing interest in security and identity tooling.',
  ],
  facts: [
    { value: '4+', label: 'Years of experience' }, // PLACEHOLDER
    { value: '20+', label: 'Projects shipped' }, // PLACEHOLDER
    { value: '10+', label: 'Technologies used daily' }, // PLACEHOLDER
  ],
}

export const skillGroups = [
  { title: 'Frontend', skills: ['React', 'JavaScript', 'HTML & CSS', 'Redux', 'Vite'] },
  { title: 'Backend', skills: ['Node.js', 'Express', 'Go', 'PostgreSQL', 'REST APIs'] },
  { title: 'Tools', skills: ['Git & GitHub', 'Docker', 'Linux', 'GitHub Actions', 'Figma'] },
]

// PLACEHOLDER projects — swap for your real work (keep 2–6 items)
export const projects = [
  {
    title: 'Certificate Manager',
    description: 'Dashboard for issuing and monitoring PKI certificates at scale, built for security teams.',
    tech: ['React', 'Node', 'PostgreSQL'],
    gradient: 'linear-gradient(135deg, #d9f0ee, #9fd8d2)',
    links: { demo: '#', code: 'https://github.com/rajatagrawal27' },
  },
  {
    title: 'DevMetrics',
    description: 'Real-time engineering analytics with custom charting and alerting.',
    tech: ['React', 'D3', 'Go'],
    gradient: 'linear-gradient(135deg, #fde8d7, #f6c39a)',
    links: { demo: '#', code: 'https://github.com/rajatagrawal27' },
  },
  {
    title: 'TaskFlow',
    description: 'Kanban-style task manager with offline support and keyboard-first UX.',
    tech: ['React', 'IndexedDB', 'PWA'],
    gradient: 'linear-gradient(135deg, #e3e9f7, #aebfe8)',
    links: { demo: '#', code: 'https://github.com/rajatagrawal27' },
  },
  {
    title: 'PMFBY Automation',
    description: 'Automation tooling for crop-insurance workflows, cutting manual processing time.',
    tech: ['Go', 'PostgreSQL', 'CI/CD'],
    gradient: 'linear-gradient(135deg, #e8f2e4, #b9d8ac)',
    links: { demo: '#', code: 'https://github.com/rajatagrawal27' },
  },
]

// PLACEHOLDER roles — replace with your real history
export const experience = [
  {
    role: 'Software Engineer',
    company: 'Your Current Company',
    period: '2024 — Present',
    points: [
      'Build and maintain identity and security tooling used in production.',
      'Own features end to end: design, implementation, tests, and rollout.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Previous Company',
    period: '2022 — 2024',
    points: [
      'Developed React frontends and Node services for client projects.',
      'Introduced CI checks that cut regressions release over release.',
    ],
  },
]

export const contact = {
  title: 'Let’s build something together.',
  text: 'I’m open to interesting projects, full-time roles, and good conversations. The fastest way to reach me is email.',
}

export const socials = [
  { label: 'GitHub', url: 'https://github.com/rajatagrawal27' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/' }, // PLACEHOLDER: your profile URL
  { label: 'Email', url: 'mailto:agrawalrajat27@gmail.com' },
]
```

- [ ] **Step 2: Commit**

```bash
git add src/data/content.js
git commit -m "feat: add content data file (placeholder copy, real identity)"
```

---

### Task 4: Hooks

**Files:**
- Create: `src/hooks/useScrollReveal.js`, `src/hooks/useActiveSection.js`

- [ ] **Step 1: Write `src/hooks/useScrollReveal.js`** (adds `.visible` to a `.reveal` element when it enters the viewport)

```js
import { useEffect, useRef } from 'react'

export default function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('visible')
          observer.unobserve(node)
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
```

- [ ] **Step 2: Write `src/hooks/useActiveSection.js`** (tracks which section is in the middle of the viewport, for navbar highlighting)

```js
import { useEffect, useState } from 'react'

export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
```

- [ ] **Step 3: Commit**

```bash
git add src/hooks/
git commit -m "feat: add scroll-reveal and active-section hooks"
```

---

### Task 5: Independent components (TDD)

**Files:**
- Test: `src/components/__tests__/Button.test.jsx`, `src/components/__tests__/ProjectCard.test.jsx`
- Create: `src/components/Button.jsx`, `src/components/SectionHeading.jsx`, `src/components/SkillBadge.jsx`, `src/components/NavPill.jsx`, `src/components/ProjectCard.jsx`, `src/components/TimelineItem.jsx`, `src/components/SocialLinks.jsx`

All components are props-only — none of them imports from `src/data/`.

- [ ] **Step 1: Write the failing tests**

`src/components/__tests__/Button.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import Button from '../Button'

test('renders a link with the given href and text', () => {
  render(<Button href="#projects">View Projects</Button>)
  const link = screen.getByRole('link', { name: 'View Projects' })
  expect(link).toHaveAttribute('href', '#projects')
  expect(link).toHaveClass('btn', 'btn--primary')
})

test('applies the ghost variant class', () => {
  render(<Button href="#" variant="ghost">Download CV</Button>)
  expect(screen.getByRole('link', { name: 'Download CV' })).toHaveClass('btn--ghost')
})
```

`src/components/__tests__/ProjectCard.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import ProjectCard from '../ProjectCard'

const props = {
  title: 'Certificate Manager',
  description: 'Dashboard for issuing certificates.',
  tech: ['React', 'Node'],
  gradient: 'linear-gradient(135deg, #fff, #000)',
  links: { demo: 'https://example.com', code: 'https://github.com/rajatagrawal27' },
}

test('renders title, description, and tech badges', () => {
  render(<ProjectCard {...props} />)
  expect(screen.getByRole('heading', { name: 'Certificate Manager' })).toBeInTheDocument()
  expect(screen.getByText('Dashboard for issuing certificates.')).toBeInTheDocument()
  expect(screen.getByText('React')).toBeInTheDocument()
  expect(screen.getByText('Node')).toBeInTheDocument()
})

test('external links open safely in a new tab', () => {
  render(<ProjectCard {...props} />)
  const demo = screen.getByRole('link', { name: /live demo/i })
  expect(demo).toHaveAttribute('target', '_blank')
  expect(demo).toHaveAttribute('rel', 'noopener noreferrer')
})
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test`
Expected: FAIL — `Cannot find module '../Button'` (and `'../ProjectCard'`)

- [ ] **Step 3: Implement all seven components**

`src/components/Button.jsx`:

```jsx
export default function Button({ href, variant = 'primary', children }) {
  return (
    <a className={`btn btn--${variant}`} href={href}>
      {children}
    </a>
  )
}
```

`src/components/SectionHeading.jsx`:

```jsx
export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="section-heading">
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2 className="section-heading__title">{title}</h2>
    </div>
  )
}
```

`src/components/SkillBadge.jsx`:

```jsx
export default function SkillBadge({ label }) {
  return <span className="skill-badge">{label}</span>
}
```

`src/components/NavPill.jsx`:

```jsx
export default function NavPill({ id, label, active }) {
  return (
    <a href={`#${id}`} className={`nav-pill${active ? ' nav-pill--active' : ''}`}>
      {label}
    </a>
  )
}
```

`src/components/ProjectCard.jsx`:

```jsx
import SkillBadge from './SkillBadge'

export default function ProjectCard({ title, description, tech, gradient, links }) {
  return (
    <article className="project-card">
      <div className="project-card__cover" style={{ background: gradient }} aria-hidden="true" />
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>
      <div className="badges">
        {tech.map((t) => (
          <SkillBadge key={t} label={t} />
        ))}
      </div>
      <div className="project-card__links">
        {links.demo && (
          <a href={links.demo} target="_blank" rel="noopener noreferrer">Live demo →</a>
        )}
        {links.code && (
          <a href={links.code} target="_blank" rel="noopener noreferrer">Source code →</a>
        )}
      </div>
    </article>
  )
}
```

`src/components/TimelineItem.jsx`:

```jsx
export default function TimelineItem({ role, company, period, points }) {
  return (
    <li className="timeline-item">
      <span className="timeline-item__period">{period}</span>
      <h3 className="timeline-item__role">{role}</h3>
      <p className="timeline-item__company">{company}</p>
      <ul className="timeline-item__points">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </li>
  )
}
```

`src/components/SocialLinks.jsx`:

```jsx
export default function SocialLinks({ links }) {
  return (
    <div className="social-links">
      {links.map(({ label, url }) => (
        <a key={label} href={url} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ))}
    </div>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test`
Expected: PASS — 4 tests, 2 files

- [ ] **Step 5: Commit**

```bash
git add src/components/
git commit -m "feat: add independent props-only components with tests"
```

---

### Task 6: Containers + App assembly (TDD)

**Files:**
- Test: `src/App.test.jsx`
- Create: `src/containers/Navbar.jsx`, `src/containers/Hero.jsx`, `src/containers/About.jsx`, `src/containers/Skills.jsx`, `src/containers/Projects.jsx`, `src/containers/Experience.jsx`, `src/containers/Contact.jsx`, `src/containers/Footer.jsx`
- Modify: `src/App.jsx` (replace placeholder entirely)

Containers import from `src/data/content.js` and pass props down to components.

- [ ] **Step 1: Write the failing smoke test** — `src/App.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders every section of the portfolio', () => {
  render(<App />)
  for (const id of ['home', 'about', 'skills', 'projects', 'experience', 'contact']) {
    expect(document.getElementById(id)).toBeInTheDocument()
  }
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'View Projects' })).toBeInTheDocument()
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL — App renders only the placeholder `<h1>`, section ids missing

- [ ] **Step 3: Implement the containers**

`src/containers/Navbar.jsx`:

```jsx
import NavPill from '../components/NavPill'
import useActiveSection from '../hooks/useActiveSection'
import { profile, sections } from '../data/content'

const sectionIds = sections.map((s) => s.id)

export default function Navbar() {
  const active = useActiveSection(sectionIds)
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo">
          {profile.logo.text}
          <span>{profile.logo.dot}</span>
        </a>
        <nav className="nav-pills" aria-label="Sections">
          {sections.map((s) => (
            <NavPill key={s.id} id={s.id} label={s.label} active={active === s.id} />
          ))}
        </nav>
      </div>
    </header>
  )
}
```

`src/containers/Hero.jsx`:

```jsx
import Button from '../components/Button'
import useScrollReveal from '../hooks/useScrollReveal'
import { profile } from '../data/content'

export default function Hero() {
  const ref = useScrollReveal()
  return (
    <section id="home" className="hero">
      <div className="container hero__inner reveal" ref={ref}>
        <div>
          <span className="hero__greeting">{profile.heroGreeting}</span>
          <h1 className="hero__title">
            {profile.heroTitle.before}
            <em>{profile.heroTitle.highlight}</em>
            {profile.heroTitle.after}
          </h1>
          <p className="hero__subtitle">{profile.heroSubtitle}</p>
          <div className="hero__actions">
            <Button href="#projects">View Projects</Button>
            <Button href={profile.cvUrl} variant="ghost">Download CV</Button>
          </div>
        </div>
        <div className="hero__avatar" aria-hidden="true">{profile.initials}</div>
      </div>
    </section>
  )
}
```

`src/containers/About.jsx`:

```jsx
import SectionHeading from '../components/SectionHeading'
import useScrollReveal from '../hooks/useScrollReveal'
import { about } from '../data/content'

export default function About() {
  const ref = useScrollReveal()
  return (
    <section id="about" className="section section--alt">
      <div className="container reveal" ref={ref}>
        <SectionHeading eyebrow="About" title="A little about me" />
        <div className="about__grid">
          <div className="about__text">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="facts">
            {about.facts.map((f) => (
              <div className="fact" key={f.label}>
                <div className="fact__value">{f.value}</div>
                <div className="fact__label">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

`src/containers/Skills.jsx`:

```jsx
import SectionHeading from '../components/SectionHeading'
import SkillBadge from '../components/SkillBadge'
import useScrollReveal from '../hooks/useScrollReveal'
import { skillGroups } from '../data/content'

export default function Skills() {
  const ref = useScrollReveal()
  return (
    <section id="skills" className="section">
      <div className="container reveal" ref={ref}>
        <SectionHeading eyebrow="Skills" title="What I work with" />
        <div className="skills__groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="badges">
                {group.skills.map((s) => (
                  <SkillBadge key={s} label={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

`src/containers/Projects.jsx`:

```jsx
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import useScrollReveal from '../hooks/useScrollReveal'
import { projects } from '../data/content'

export default function Projects() {
  const ref = useScrollReveal()
  return (
    <section id="projects" className="section section--alt">
      <div className="container reveal" ref={ref}>
        <SectionHeading eyebrow="Projects" title="Things I have built" />
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

`src/containers/Experience.jsx`:

```jsx
import SectionHeading from '../components/SectionHeading'
import TimelineItem from '../components/TimelineItem'
import useScrollReveal from '../hooks/useScrollReveal'
import { experience } from '../data/content'

export default function Experience() {
  const ref = useScrollReveal()
  return (
    <section id="experience" className="section">
      <div className="container reveal" ref={ref}>
        <SectionHeading eyebrow="Experience" title="Where I have worked" />
        <ul className="timeline">
          {experience.map((job) => (
            <TimelineItem key={`${job.role}-${job.company}`} {...job} />
          ))}
        </ul>
      </div>
    </section>
  )
}
```

`src/containers/Contact.jsx`:

```jsx
import Button from '../components/Button'
import SocialLinks from '../components/SocialLinks'
import useScrollReveal from '../hooks/useScrollReveal'
import { contact, profile, socials } from '../data/content'

export default function Contact() {
  const ref = useScrollReveal()
  return (
    <section id="contact" className="section section--alt">
      <div className="container reveal" ref={ref}>
        <div className="contact__card">
          <h2 className="contact__title">{contact.title}</h2>
          <p className="contact__text">{contact.text}</p>
          <Button href={`mailto:${profile.email}`}>Say Hello</Button>
          <SocialLinks links={socials} />
        </div>
      </div>
    </section>
  )
}
```

`src/containers/Footer.jsx`:

```jsx
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        Designed &amp; built by <span>{profile.name}</span> · {profile.location}
      </div>
    </footer>
  )
}
```

- [ ] **Step 4: Replace `src/App.jsx`**

```jsx
import Navbar from './containers/Navbar'
import Hero from './containers/Hero'
import About from './containers/About'
import Skills from './containers/Skills'
import Projects from './containers/Projects'
import Experience from './containers/Experience'
import Contact from './containers/Contact'
import Footer from './containers/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 5: Run all tests and the build**

Run: `npm test`
Expected: PASS — 5 tests, 3 files

Run: `npm run build`
Expected: `✓ built`

- [ ] **Step 6: Commit**

```bash
git add src/
git commit -m "feat: add section containers and assemble App"
```

---

### Task 7: Visual verification

**Files:** none (manual check)

- [ ] **Step 1: Start the dev server**

Run: `npm run dev`
Expected: `Local: http://localhost:5173/`

- [ ] **Step 2: Check in browser** at 1280px, 768px, and 375px widths:
  - Navbar pills highlight as you scroll; clicking a pill smooth-scrolls
  - Sections fade in on scroll; layout collapses to one column on mobile
  - No horizontal scrollbar at any width

- [ ] **Step 3: Fix anything broken, re-run `npm test && npm run build`, commit fixes if any**

```bash
git add -A
git commit -m "fix: visual polish from responsive check"
```

---

### Task 8: GitHub Actions deploy workflow + README

**Files:**
- Create: `.github/workflows/deploy.yml`, `README.md`

- [ ] **Step 1: Write `.github/workflows/deploy.yml`**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm test
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Write `README.md`**

````markdown
# Rajat Agrawal — Portfolio

Personal portfolio, live at **https://rajatagrawal27.github.io/**

Built with Vite + React (functional components, container/component pattern),
plain CSS design tokens, tested with Vitest + React Testing Library, and
deployed automatically to GitHub Pages on every push to `main`.

## Editing content

All site text lives in [`src/data/content.js`](src/data/content.js) —
name, bio, skills, projects, experience, and links. Edit that one file to
personalize the site; search for `PLACEHOLDER` to find what needs replacing.

## Development

```bash
npm install
npm run dev      # local dev server
npm test         # run tests
npm run build    # production build to dist/
```
````

- [ ] **Step 3: Commit**

```bash
git add .github/ README.md
git commit -m "ci: add GitHub Pages deploy workflow and README"
```

---

### Task 9: Create the GitHub repo and deploy

**Files:** none (GitHub setup — needs Rajat for repo creation + push auth)

- [ ] **Step 1: Rajat creates the empty repo**

Open: https://github.com/new
- Repository name: `rajatagrawal27.github.io`
- Visibility: **Public**
- Do NOT initialize with README/.gitignore/license (we push existing history)

- [ ] **Step 2: Add remote and push**

```bash
git remote add origin https://github.com/rajatagrawal27/rajatagrawal27.github.io.git
git push -u origin main
```
(Git will ask for GitHub login — username + a Personal Access Token, or the browser credential flow.)

- [ ] **Step 3: Ensure Pages uses the Actions source**

On GitHub: repo → Settings → Pages → "Build and deployment" → Source: **GitHub Actions** (usually auto-selected after the workflow runs; set manually if the first run errors with "Pages not enabled").

- [ ] **Step 4: Verify deployment**

- Repo → Actions tab → "Deploy to GitHub Pages" run is green
- Open https://rajatagrawal27.github.io/ — the portfolio loads
- Spot-check on a phone

- [ ] **Step 5: Done — hand off**

Tell Rajat: edit `src/data/content.js` (search `PLACEHOLDER`), commit, push — the site redeploys automatically.
