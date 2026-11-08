import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Polaroid from '../components/Polaroid'
import { memories } from '../data/memories'

function sizeClass(size) {
  if (size === 'full') {
    return 'md:col-span-3'
  }

  if (size === 'centered') {
    return 'md:col-start-2'
  }

  return ''
}

function Memories() {
  const [selectedId, setSelectedId] = useState(null)

  const selectedMemory = useMemo(() => memories.find((item) => item.id === selectedId), [selectedId])

  return (
    <section className="section-shell scroll-mt-24" id="memories">
      <div className="mb-10 text-center">
        <h2 className="title-font text-4xl text-burgundy sm:text-5xl">Memory Lane</h2>
        <p className="mt-2 text-base text-ink/80">Tiny moments, random clicks, and very good chaos.</p>
      </div>

      <div className="grid auto-rows-[220px] gap-4 md:grid-cols-3">
        {memories.map((item) => (
          <div key={item.id} className={`h-full ${sizeClass(item.size)}`}>
            <div className="h-full [&>button]:h-full [&>button>div]:h-[calc(100%-3rem)]">
              <Polaroid image={item.image} caption={item.caption} onClick={() => setSelectedId(item.id)} />
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-[#251a1d]/70 p-4"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="relative w-full max-w-3xl rounded-3xl bg-white p-4 shadow-soft"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-ink transition hover:bg-black/20"
                aria-label="Close memory"
              >
                <X size={16} />
              </button>

              <img
                src={selectedMemory.image}
                alt={selectedMemory.caption}
                className="h-[70vh] w-full rounded-2xl object-cover"
                onError={(event) => {
                  event.currentTarget.src =
                    'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?auto=format&fit=crop&w=1200&q=80'
                }}
              />
              <p className="mt-4 text-center text-lg font-medium text-ink">{selectedMemory.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Memories
