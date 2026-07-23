import SkillBadge from './SkillBadge'

export default function TimelineItem({ company, period, roles, projects, points }) {
  return (
    <li className="timeline-item">
      <span className="timeline-item__period">{period}</span>
      <h3 className="timeline-item__role">{company}</h3>
      <ul className="timeline-item__roles">
        {roles.map(({ title, period: rolePeriod }) => (
          <li key={title}>
            <strong>{title}</strong>
            <span>{rolePeriod}</span>
          </li>
        ))}
      </ul>
      {projects && projects.length > 0 && (
        <div className="timeline-item__projects">
          <span className="timeline-item__projects-label">Projects</span>
          <div className="badges">
            {projects.map((p) => (
              <SkillBadge key={p} label={p} />
            ))}
          </div>
        </div>
      )}
      <ul className="timeline-item__points">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </li>
  )
}
