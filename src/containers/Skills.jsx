import SectionHeading from '../components/SectionHeading'
import SkillBadge from '../components/SkillBadge'
import useScrollReveal from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Skills() {
  const ref = useScrollReveal()
  const { t } = useLanguage()

  return (
    <section id="skills" className="section">
      <div className="container reveal" ref={ref}>
        <SectionHeading eyebrow={t.ui.skillsEyebrow} title={t.ui.skillsTitle} />
        <div className="skills__groups">
          {t.skillGroups.map((group) => (
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
