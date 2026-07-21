import SkillBadge from './SkillBadge'

export default function ProjectCard({ title, description, tech, gradient, links }) {
  return (
    <article className="project-card">
      <div className="project-card__cover" style={{ background: gradient }} aria-hidden="true" />
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>
      <div className="badges">
        {tech.map((t) => (
          <SkillBadge key={t} label={t} />
        ))}
      </div>
      <div className="project-card__links">
        {links.demo && (
          <a href={links.demo} target="_blank" rel="noopener noreferrer">Live demo →</a>
        )}
        {links.code && (
          <a href={links.code} target="_blank" rel="noopener noreferrer">Source code →</a>
        )}
      </div>
    </article>
  )
}
