import SectionHeading from '../components/SectionHeading'
import useScrollReveal from '../hooks/useScrollReveal'
import { about } from '../data/content'

export default function About() {
  const ref = useScrollReveal()
  return (
    <section id="about" className="section section--alt">
      <div className="container reveal" ref={ref}>
        <SectionHeading eyebrow="About" title="A little about me" />
        <div className="about__grid">
          <div className="about__text">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="facts">
            {about.facts.map((f) => (
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
