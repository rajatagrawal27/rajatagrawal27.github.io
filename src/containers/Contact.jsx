import Button from '../components/Button'
import SocialLinks from '../components/SocialLinks'
import useScrollReveal from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const ref = useScrollReveal()
  const { t } = useLanguage()

  return (
    <section id="contact" className="section section--alt">
      <div className="container reveal" ref={ref}>
        <div className="contact__card">
          <h2 className="contact__title">{t.contact.title}</h2>
          <p className="contact__text">{t.contact.text}</p>
          <Button href={`mailto:${t.profile.email}`}>{t.ui.sayHello}</Button>
          <SocialLinks links={t.socials} />
        </div>
      </div>
    </section>
  )
}
