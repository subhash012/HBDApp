import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

function Candle({ lit, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative h-20 w-8 rounded-t-lg bg-[#ffd8dc]"
      aria-label={lit ? 'Blow out candle' : 'Relight candle'}
    >
      {lit && (
        <motion.span
          initial={{ opacity: 0.6, y: 0 }}
          animate={{ opacity: [0.5, 1, 0.7], y: [-1, -4, -1] }}
          transition={{ repeat: Infinity, duration: 1.1 }}
          className="absolute -top-7 left-1/2 -translate-x-1/2 text-amber-400"
        >
          <Flame size={20} fill="currentColor" />
        </motion.span>
      )}
      <span className="absolute inset-0 mx-auto my-auto h-12 w-1 rounded-full bg-white/80" />
    </button>
  )
}

function BirthdayCake({ candles, onToggleCandle }) {
  return (
    <div className="mx-auto max-w-sm">
      <div className="mb-2 flex items-end justify-center gap-4">
        {candles.map((lit, index) => (
          <Candle key={index} lit={lit} onClick={() => onToggleCandle(index)} />
        ))}
      </div>

      <div className="rounded-[30px] border border-burgundy/20 bg-gradient-to-b from-[#f8d3cc] to-[#eab5bc] p-6 shadow-soft">
        <div className="h-6 rounded-full bg-white/80" />
        <div className="mt-3 h-20 rounded-3xl bg-gradient-to-b from-[#ffd9c4] to-[#f0b6ab]" />
      </div>
    </div>
  )
}

export default BirthdayCake
