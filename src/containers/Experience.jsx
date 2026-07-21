import SectionHeading from '../components/SectionHeading'
import TimelineItem from '../components/TimelineItem'
import useScrollReveal from '../hooks/useScrollReveal'
import { experience } from '../data/content'

export default function Experience() {
  const ref = useScrollReveal()
  return (
    <section id="experience" className="section">
      <div className="container reveal" ref={ref}>
        <SectionHeading eyebrow="Experience" title="Where I have worked" />
        <ul className="timeline">
          {experience.map((job) => (
            <TimelineItem key={`${job.role}-${job.company}`} {...job} />
          ))}
        </ul>
      </div>
    </section>
  )
}
