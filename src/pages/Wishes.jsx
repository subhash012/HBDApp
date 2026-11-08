import { useState } from 'react'
import { motion } from 'framer-motion'
import StarWish from '../components/StarWish'
import { wishes } from '../data/wishes'

function Wishes() {
  const [openId, setOpenId] = useState(null)

  return (
    <section
      className="section-shell scroll-mt-24"
      id="wishes"
    >
      <div className="overflow-hidden rounded-[2rem] border border-[#8f6b7d]/40 bg-[radial-gradient(circle_at_20%_20%,#5d4568,#2d2135_55%,#1f1728)] p-8 text-white shadow-soft">
        <h2 className="title-font text-4xl text-amber-100 sm:text-5xl">A little wish for you ✨</h2>
        <p className="mt-3 max-w-xl text-amber-50/85">Tap stars and collect your tiny sky notes.</p>

        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-6">
          {wishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex justify-center"
            >
              <StarWish text={wish.text} open={openId === wish.id} onToggle={() => setOpenId(openId === wish.id ? null : wish.id)} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Wishes
