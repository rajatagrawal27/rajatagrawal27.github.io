import SectionHeading from '../components/SectionHeading'
import useScrollReveal from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const ref = useScrollReveal()
  const { t } = useLanguage()

  return (
    <section id="about" className="section section--alt">
      <div className="container reveal" ref={ref}>
        <SectionHeading eyebrow={t.ui.aboutEyebrow} title={t.ui.aboutTitle} />
        <div className="about__grid">
          <div className="about__text">
            {t.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="facts">
            {t.about.facts.map((f) => (
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
