import { motion } from 'framer-motion'

function AnimatedButton({ children, onClick, className = '', variant = 'primary', type = 'button' }) {
  const base =
    variant === 'primary'
      ? 'accent-button'
      : 'ghost-button'

  return (
    <motion.button
      type={type}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${base} ${className}`}
    >
      {children}
    </motion.button>
  )
}

export default AnimatedButton
