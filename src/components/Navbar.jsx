import { useMemo } from 'react'
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react'

function Navbar({ sections, activeSection, onNavigate, onBack, onNext }) {
  const activeIndex = useMemo(() => sections.findIndex((item) => item.id === activeSection), [sections, activeSection])

  return (
    <header className="sticky top-0 z-40 border-b border-burgundy/10 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <button
          onClick={() => onNavigate(sections[0].id)}
          className="inline-flex items-center gap-2 rounded-full border border-burgundy/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-burgundy transition hover:bg-white/70"
        >
          <Heart size={14} />
          Vaishuuuuuuuuuu😋
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                activeSection === section.id ? 'bg-burgundy text-cream' : 'bg-white/60 text-ink hover:bg-white'
              }`}
              aria-label={`Go to ${section.label}`}
            >
              {index + 1}. {section.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            disabled={activeIndex <= 0}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-burgundy/20 text-burgundy transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Previous section"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={onNext}
            disabled={activeIndex >= sections.length - 1}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-burgundy/20 text-burgundy transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Next section"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
