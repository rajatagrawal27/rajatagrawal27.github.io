import { useState } from 'react'
import Button from '../components/Button'
import useScrollReveal from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const ref = useScrollReveal()
  const [photoOk, setPhotoOk] = useState(true)
  const { t } = useLanguage()
  const { profile, ui } = t

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
            <Button href="#projects">{ui.viewProjects}</Button>
            <Button href={profile.cvUrl} variant="ghost">{ui.downloadCv}</Button>
          </div>
        </div>
        {profile.photo && photoOk ? (
          <img
            className="hero__avatar hero__avatar--photo"
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            onError={() => setPhotoOk(false)}
          />
        ) : (
          <div className="hero__avatar" aria-hidden="true">{profile.initials}</div>
        )}
      </div>
    </section>
  )
}
