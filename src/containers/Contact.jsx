import Button from '../components/Button'
import SocialLinks from '../components/SocialLinks'
import useScrollReveal from '../hooks/useScrollReveal'
import { contact, profile, socials } from '../data/content'

export default function Contact() {
  const ref = useScrollReveal()
  return (
    <section id="contact" className="section section--alt">
      <div className="container reveal" ref={ref}>
        <div className="contact__card">
          <h2 className="contact__title">{contact.title}</h2>
          <p className="contact__text">{contact.text}</p>
          <Button href={`mailto:${profile.email}`}>Say Hello</Button>
          <SocialLinks links={socials} />
        </div>
      </div>
    </section>
  )
}
