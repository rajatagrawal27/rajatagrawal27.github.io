// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to update the whole site.
// Remaining PLACEHOLDER item: resume PDF link (cvUrl).
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
  logo: { text: 'Rajat Agrawal', dot: '.' },
  role: 'Frontend Developer (React.js)',
  heroGreeting: "Hi, I'm Rajat.",
  heroTitle: { before: 'I build ', highlight: 'component-driven', after: ' web apps in React.' },
  heroSubtitle:
    'Frontend developer with 7 years of experience across fintech and identity security — from reusable component libraries to enterprise SaaS dashboards.',
  email: 'agrawalrajat27@gmail.com',
  location: 'Indore, India',
  photo: '/profile.jpg', // save your photo as public/profile.jpg — falls back to initials if missing
  cvUrl: '#', // PLACEHOLDER: add public/resume.pdf and change this to '/resume.pdf'
}

export const about = {
  paragraphs: [
    "I'm a frontend developer based in Indore, India, with 7 years of experience building responsive, component-driven web applications using React.js, JavaScript, and TypeScript. I specialise in architecting independent, reusable component libraries with client-side routing, and I back my UIs with thorough Jest unit tests.",
    'I have shipped enterprise platforms in fintech and identity security — most recently Axiad Mesh, a multi-tenant SaaS platform for identity risk management. I hold a Bachelor of Engineering in Computer Science from LNCT Indore (2019), and I enjoy leading frontend architecture, estimating timelines, and working directly with clients.',
  ],
  facts: [
    { value: '7', label: 'Years of industry experience' },
    { value: '2', label: 'Enterprise platforms: fintech & identity security' },
    { value: '0', label: 'Critical defects in last major launch' },
  ],
}

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React.js', 'TypeScript', 'JavaScript', 'HTML5 & CSS', 'Material UI', 'Bootstrap', 'React Router'],
  },
  {
    title: 'Testing & APIs',
    skills: ['Jest', 'Unit Testing', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Git & Bitbucket', 'Jira', 'Docker', 'Go', 'Claude AI', 'Team Leadership'],
  },
]

export const projects = [
  {
    title: 'Mesh Identity Risk (Axiad)',
    coverLabel: 'Mesh',
    coverNote: 'Identity Risk SaaS',
    description:
      'Multi-tenant SaaS platform for enterprise identity risk management — dashboards for identity correlation, cryptographic asset tracking, and risk assessment.',
    tech: ['React.js', 'TypeScript', 'GraphQL'],
    gradient: 'linear-gradient(135deg, #d9f0ee, #9fd8d2)',
    links: {},
  },
  {
    title: 'Loan Origination System',
    coverLabel: 'LOS',
    coverNote: 'Fintech Platform',
    description:
      'End-to-end loan automation for financial institutions — application intake, document verification, underwriting, and approval workflow screens.',
    tech: ['React.js', 'TypeScript', 'Material UI'],
    gradient: 'linear-gradient(135deg, #e3e9f7, #aebfe8)',
    links: {},
  },
  {
    title: 'Sacunxt — ServiceNow Plugin',
    coverLabel: 'Sacunxt',
    coverNote: 'ServiceNow Plug-in',
    description:
      'Third-party ServiceNow plugin developed in JavaScript, extending platform functionality for external integrations.',
    tech: ['JavaScript', 'ServiceNow'],
    gradient: 'linear-gradient(135deg, #fde8d7, #f6c39a)',
    links: {},
  },
  {
    title: 'This Portfolio',
    coverLabel: 'RA.',
    coverNote: 'React + Vite + CI',
    description:
      'The site you are looking at — a component-driven React portfolio with CI-tested builds, deployed automatically to GitHub Pages.',
    tech: ['React', 'Vite', 'GitHub Actions'],
    gradient: 'linear-gradient(135deg, #e8f2e4, #b9d8ac)',
    links: { code: 'https://github.com/rajatagrawal27/rajatagrawal27.github.io' },
  },
]

export const experience = [
  {
    company: 'InfoBeans Technologies Ltd',
    period: 'Jul 2025 — Present',
    roles: [
      { title: 'Senior Software Engineer', period: 'Jul 2025 — Present' },
    ],
    projects: ['Mesh Identity Risk (Axiad) · team of 12'],
    points: [
      'Build independent, reusable React + TypeScript components and containers for identity correlation, cryptographic asset tracking, and risk assessment dashboards on a multi-tenant SaaS platform, consuming REST and GraphQL APIs.',
      'Shipped the end-to-end agent identity ingestion UI flow — 12 integration tests, zero critical defects post-deployment — along with a new incidents dashboard page.',
      'Led frontend architecture alignment across 8 microservice-backed UI modules ahead of a major release, and resolved a critical production data-integrity bug.',
    ],
  },
  {
    company: 'Sigma Infosolutions Ltd',
    period: 'Aug 2019 — Jul 2025',
    roles: [
      { title: 'Senior Software Engineer', period: 'Nov 2024 — Jul 2025' },
      { title: 'Software Engineer', period: 'Sep 2021 — Nov 2024' },
      { title: 'Associate Software Engineer', period: 'Aug 2019 — Aug 2021' },
    ],
    projects: ['Loan Origination System (LOS) · fintech · team of 7'],
    points: [
      'Architected an independent React + TypeScript component library covering application intake, document verification, underwriting, and approval workflow screens, styled with Material UI and Bootstrap.',
      'Implemented client-side routing and containerized frontend modules with React Router, letting business teams adjust approval workflows without backend code changes.',
      'Integrated graph-based data views for fraud detection and cross-application risk correlation, optimizing rendering performance for high-volume loan processing.',
    ],
  },
]

export const contact = {
  title: 'Let’s build something together.',
  text: 'I’m open to frontend roles, interesting projects, and good conversations — fintech and identity security are home turf. The fastest way to reach me is email.',
}

export const socials = [
  { label: 'GitHub', url: 'https://github.com/rajatagrawal27' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rajat-agrawal-957255187' },
  { label: 'Email', url: 'mailto:agrawalrajat27@gmail.com' },
]
