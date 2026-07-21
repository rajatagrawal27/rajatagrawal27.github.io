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
