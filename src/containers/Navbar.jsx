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
