import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <div className="container">
        {t.ui.footerPrefix} <span>{t.profile.name}</span> · {t.profile.location}
      </div>
    </footer>
  )
}
