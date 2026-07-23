import { LanguageProvider } from './context/LanguageContext'
import Navbar from './containers/Navbar'
import Hero from './containers/Hero'
import About from './containers/About'
import Skills from './containers/Skills'
import Projects from './containers/Projects'
import Experience from './containers/Experience'
import Contact from './containers/Contact'
import Footer from './containers/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
