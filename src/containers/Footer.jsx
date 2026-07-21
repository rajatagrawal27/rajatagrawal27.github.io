import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        Designed &amp; built by <span>{profile.name}</span> · {profile.location}
      </div>
    </footer>
  )
}
