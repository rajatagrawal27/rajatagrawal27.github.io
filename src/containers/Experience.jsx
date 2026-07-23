import SectionHeading from '../components/SectionHeading'
import TimelineItem from '../components/TimelineItem'
import useScrollReveal from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Experience() {
  const ref = useScrollReveal()
  const { t } = useLanguage()

  return (
    <section id="experience" className="section">
      <div className="container reveal" ref={ref}>
        <SectionHeading eyebrow={t.ui.experienceEyebrow} title={t.ui.experienceTitle} />
        <ul className="timeline">
          {t.experience.map((job) => (
            <TimelineItem key={job.company} {...job} projectsLabel={t.ui.projectsLabel} />
          ))}
        </ul>
      </div>
    </section>
  )
}
