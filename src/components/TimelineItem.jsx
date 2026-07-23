import SkillBadge from './SkillBadge'

export default function TimelineItem({ company, period, roles, projects, projectsLabel = 'Projects' }) {
  return (
    <li className="timeline-item">
      <span className="timeline-item__period">{period}</span>
      <h3 className="timeline-item__role">{company}</h3>
      {projects && projects.length > 0 && (
        <div className="timeline-item__projects">
          <span className="timeline-item__projects-label">{projectsLabel}</span>
          <div className="badges">
            {projects.map((p) => (
              <SkillBadge key={p} label={p} />
            ))}
          </div>
        </div>
      )}
      <div className="timeline-item__stints">
        {roles.map(({ title, period: rolePeriod, points }) => (
          <div className="stint" key={title}>
            <div className="stint__head">
              <strong>{title}</strong>
              <span>{rolePeriod}</span>
            </div>
            {points && points.length > 0 && (
              <ul className="timeline-item__points">
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </li>
  )
}
