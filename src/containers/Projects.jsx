import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import useScrollReveal from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Projects() {
  const ref = useScrollReveal()
  const { t } = useLanguage()

  return (
    <section id="projects" className="section section--alt">
      <div className="container reveal" ref={ref}>
        <SectionHeading eyebrow={t.ui.projectsEyebrow} title={t.ui.projectsTitle} />
        <div className="projects__grid">
          {t.projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              liveDemoLabel={t.ui.liveDemo}
              sourceCodeLabel={t.ui.sourceCode}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
