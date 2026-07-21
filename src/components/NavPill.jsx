export default function NavPill({ id, label, active }) {
  return (
    <a href={`#${id}`} className={`nav-pill${active ? ' nav-pill--active' : ''}`}>
      {label}
    </a>
  )
}
