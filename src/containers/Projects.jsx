import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import useScrollReveal from '../hooks/useScrollReveal'
import { projects } from '../data/content'

export default function Projects() {
  const ref = useScrollReveal()
  return (
    <section id="projects" className="section section--alt">
      <div className="container reveal" ref={ref}>
        <SectionHeading eyebrow="Projects" title="Things I have built" />
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
