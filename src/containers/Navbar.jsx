import NavPill from '../components/NavPill'
import ThemeToggle from '../components/ThemeToggle'
import useActiveSection from '../hooks/useActiveSection'
import useScrolled from '../hooks/useScrolled'
import useTheme from '../hooks/useTheme'
import { profile, sections } from '../data/content'

const sectionIds = sections.map((s) => s.id)

export default function Navbar() {
  const active = useActiveSection(sectionIds)
  const scrolled = useScrolled(420)
  const [theme, toggleTheme] = useTheme()

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo">
          {scrolled ? (
            <span className="navbar__mini">
              <img className="navbar__mini-photo" src={profile.photo} alt="" />
              <span className="navbar__mini-text">
                <span className="navbar__mini-name">{profile.name}</span>
                <span className="navbar__mini-role">{profile.role}</span>
              </span>
            </span>
          ) : (
            <>
              {profile.logo.text}
              <span>{profile.logo.dot}</span>
            </>
          )}
        </a>
        <div className="navbar__right">
          <nav className="nav-pills" aria-label="Sections">
            {sections.map((s) => (
              <NavPill key={s.id} id={s.id} label={s.label} active={active === s.id} />
            ))}
          </nav>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </div>
    </header>
  )
}
