export default function LanguageSwitcher({ lang, options, onChange }) {
  return (
    <select
      className="lang-select"
      value={lang}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Language"
    >
      {options.map(({ code, flag, label }) => (
        <option key={code} value={code}>
          {flag} {label}
        </option>
      ))}
    </select>
  )
}
