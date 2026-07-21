import Button from '../components/Button'
import useScrollReveal from '../hooks/useScrollReveal'
import { profile } from '../data/content'

export default function Hero() {
  const ref = useScrollReveal()
  return (
    <section id="home" className="hero">
      <div className="container hero__inner reveal" ref={ref}>
        <div>
          <span className="hero__greeting">{profile.heroGreeting}</span>
          <h1 className="hero__title">
            {profile.heroTitle.before}
            <em>{profile.heroTitle.highlight}</em>
            {profile.heroTitle.after}
          </h1>
          <p className="hero__subtitle">{profile.heroSubtitle}</p>
          <div className="hero__actions">
            <Button href="#projects">View Projects</Button>
            <Button href={profile.cvUrl} variant="ghost">Download CV</Button>
          </div>
        </div>
        <div className="hero__avatar" aria-hidden="true">{profile.initials}</div>
      </div>
    </section>
  )
}
