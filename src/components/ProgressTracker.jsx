import { motion } from 'framer-motion'

function ProgressTracker({ current, total, label = 'VERY SERIOUS SURVEY' }) {
  const percentage = Math.round((current / total) * 100)

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-burgundy/80">
        <span>{label}</span>
        <span>
          {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-burgundy/10">
        <motion.div
          className="h-full rounded-full bg-burgundy"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default ProgressTracker
