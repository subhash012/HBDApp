import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

function Envelope({ title, message }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div layout className="editorial-card p-0">
      <button
        onClick={() => setOpen((value) => !value)}
        className="w-full px-5 py-5 text-left"
        aria-expanded={open}
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="title-font text-xl text-burgundy">{title}</h3>
          <span className="rounded-full border border-burgundy/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-burgundy">
            {open ? 'Close' : 'Open'}
          </span>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-t border-burgundy/10 bg-white/70 px-5 py-5"
          >
            <p className="leading-relaxed text-ink/90">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Envelope
