export default function TimelineItem({ role, company, period, points }) {
  return (
    <li className="timeline-item">
      <span className="timeline-item__period">{period}</span>
      <h3 className="timeline-item__role">{role}</h3>
      <p className="timeline-item__company">{company}</p>
      <ul className="timeline-item__points">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </li>
  )
}
