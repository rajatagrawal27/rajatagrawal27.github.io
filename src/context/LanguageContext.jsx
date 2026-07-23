import { createContext, useContext, useEffect, useState } from 'react'
import en from '../data/translations/en.json'
import fr from '../data/translations/fr.json'
import hi from '../data/translations/hi.json'
import de from '../data/translations/de.json'
import zh from '../data/translations/zh.json'
import ja from '../data/translations/ja.json'

export const LANGUAGES = [
  { code: 'en', flag: '🇬🇧', label: 'EN' },
  { code: 'fr', flag: '🇫🇷', label: 'FR' },
  { code: 'hi', flag: '🇮🇳', label: 'हिंदी' },
  { code: 'de', flag: '🇩🇪', label: 'DE' },
  { code: 'zh', flag: '🇨🇳', label: '中文' },
  { code: 'ja', flag: '🇯🇵', label: '日本語' },
]

const CONTENT = { en, fr, hi, de, zh, ja }

const LanguageContext = createContext({ lang: 'en', setLang: () => {}, t: en })

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang')
    return CONTENT[saved] ? saved : 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: CONTENT[lang] || en }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
