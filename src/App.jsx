import { useMemo, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import BackgroundMusic from './components/BackgroundMusic'
import Welcome from './pages/Welcome'
import Quiz from './pages/Quiz'
import Memories from './pages/Memories'
import Wishes from './pages/Wishes'
import BirthdayFinale from './pages/BirthdayFinale'

const sections = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'quiz', label: 'Quiz' },
  { id: 'memories', label: 'Memories' },
  { id: 'wishes', label: 'Wishes' },
  { id: 'finale', label: 'Finale' }
]

function App() {
  const [activeSection, setActiveSection] = useState('welcome')
  const sectionRefs = useRef({})

  const activeIndex = useMemo(() => sections.findIndex((section) => section.id === activeSection), [activeSection])
  const progress = Math.round(((activeIndex + 1) / sections.length) * 100)

  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveSection(id)
  }

  const handleNext = () => {
    if (activeIndex < sections.length - 1) {
      scrollToSection(sections[activeIndex + 1].id)
    }
  }

  const handleBack = () => {
    if (activeIndex > 0) {
      scrollToSection(sections[activeIndex - 1].id)
    }
  }

  return (
    <div className="min-h-screen bg-soft-gradient pb-12">
      <Navbar sections={sections} activeSection={activeSection} onNavigate={scrollToSection} onBack={handleBack} onNext={handleNext} />

      <div className="sticky top-[62px] z-30 border-b border-burgundy/10 bg-cream/65 px-4 py-2 backdrop-blur sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-burgundy/80">
            {String(activeIndex + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
          </span>
          <div className="h-1.5 flex-1 rounded-full bg-burgundy/10">
            <div className="h-full rounded-full bg-burgundy transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <main>
        <div ref={(element) => (sectionRefs.current.welcome = element)}>
          <Welcome onStart={() => scrollToSection('quiz')} />
        </div>

        <div ref={(element) => (sectionRefs.current.quiz = element)}>
          <Quiz />
        </div>

        <div ref={(element) => (sectionRefs.current.memories = element)}>
          <Memories />
        </div>

        <div ref={(element) => (sectionRefs.current.wishes = element)}>
          <Wishes />
        </div>

        <div ref={(element) => (sectionRefs.current.finale = element)}>
          <BirthdayFinale />
        </div>
      </main>

      <div className="mx-auto max-w-5xl px-4 pb-8 pt-2 text-center text-[10px] uppercase tracking-[0.18em] text-burgundy/55">
        🚬 Smoking is injurious to health
      </div>

      <BackgroundMusic />
    </div>
  )
}

export default App
