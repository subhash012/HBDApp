import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'

function StarWish({ text, open, onToggle }) {
  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.94 }}
        onClick={onToggle}
        className="group inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-amber-200 shadow-[0_0_40px_rgba(250,214,122,0.22)] backdrop-blur"
        aria-label="Reveal wish"
      >
        <Star className="transition group-hover:rotate-12" size={24} fill="currentColor" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="absolute left-1/2 top-16 z-20 w-48 -translate-x-1/2 rounded-2xl border border-white/25 bg-[#2c2030]/90 p-3 text-center text-sm text-amber-50 shadow-soft"
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default StarWish
