import SectionHeading from '../components/SectionHeading'
import SkillBadge from '../components/SkillBadge'
import useScrollReveal from '../hooks/useScrollReveal'
import { skillGroups } from '../data/content'

export default function Skills() {
  const ref = useScrollReveal()
  return (
    <section id="skills" className="section">
      <div className="container reveal" ref={ref}>
        <SectionHeading eyebrow="Skills" title="What I work with" />
        <div className="skills__groups">
          {skillGroups.map((group) => (
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
