export default function SocialLinks({ links }) {
  return (
    <div className="social-links">
      {links.map(({ label, url }) => (
        <a key={label} href={url} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ))}
    </div>
  )
}
