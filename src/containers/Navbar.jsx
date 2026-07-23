import NavPill from '../components/NavPill'
import ThemeToggle from '../components/ThemeToggle'
import LanguageSwitcher from '../components/LanguageSwitcher'
import useActiveSection from '../hooks/useActiveSection'
import useScrolled from '../hooks/useScrolled'
import useTheme from '../hooks/useTheme'
import { useLanguage, LANGUAGES } from '../context/LanguageContext'

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

export default function Navbar() {
  const active = useActiveSection(sectionIds)
  const scrolled = useScrolled(420)
  const [theme, toggleTheme] = useTheme()
  const { lang, setLang, t } = useLanguage()

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo">
          {scrolled ? (
            <span className="navbar__mini">
              <img className="navbar__mini-photo" src={t.profile.photo} alt="" />
              <span className="navbar__mini-text">
                <span className="navbar__mini-name">{t.profile.name}</span>
                <span className="navbar__mini-role">{t.profile.role}</span>
              </span>
            </span>
          ) : (
            <>
              {t.profile.logo.text}
              <span>{t.profile.logo.dot}</span>
            </>
          )}
        </a>
        <div className="navbar__right">
          <nav className="nav-pills" aria-label="Sections">
            {t.sections.map((s) => (
              <NavPill key={s.id} id={s.id} label={s.label} active={active === s.id} />
            ))}
          </nav>
          <LanguageSwitcher lang={lang} options={LANGUAGES} onChange={setLang} />
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </div>
    </header>
  )
}
