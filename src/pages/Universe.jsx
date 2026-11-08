import { motion } from 'framer-motion'
import { universeCards } from '../data/universeData'

function Universe() {
  return (
    <section className="section-shell scroll-mt-24" id="universe">
      <div className="mb-10 text-center">
        <h2 className="title-font text-4xl text-burgundy sm:text-5xl">Somewhere Between Vaishnavi and Kavu</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {universeCards.map((card, index) => (
          <motion.article
            key={card.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="editorial-card"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-burgundy/70">label</p>
            <h3 className="mt-2 title-font text-2xl text-ink">{card.label}</h3>
            <p className="mt-3 leading-relaxed text-ink/80">{card.text}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="editorial-card overflow-hidden p-3">
          {/* Replace with your portrait in /public/images/polaroids */}
          <img
            src="/images/polaroids/universe-1.jpg"
            alt="Portrait placeholder"
            className="h-[330px] w-full rounded-2xl object-cover"
            onError={(event) => {
              event.currentTarget.src =
                'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1100&q=80'
            }}
          />
        </div>

        <div className="editorial-card overflow-hidden p-3">
          {/* Replace with your candid photo in /public/images/polaroids */}
          <img
            src="/images/polaroids/universe-2.jpg"
            alt="Candid placeholder"
            className="h-[330px] w-full rounded-2xl object-cover"
            onError={(event) => {
              event.currentTarget.src =
                'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1100&q=80'
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Universe
