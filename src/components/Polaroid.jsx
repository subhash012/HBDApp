import { motion } from 'framer-motion'

function Polaroid({ image, caption, onClick }) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -6, rotate: 0.5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full rounded-2xl bg-white p-3 text-left shadow-polaroid"
    >
      <div className="relative overflow-hidden rounded-xl bg-warmBeige/30">
        <img
          src={image}
          alt={caption}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80'
          }}
        />
      </div>
      <p className="mt-3 text-sm font-medium text-ink/85">{caption}</p>
    </motion.button>
  )
}

export default Polaroid
