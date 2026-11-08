import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import AnimatedButton from '../components/AnimatedButton'

function Welcome({ onStart }) {
  return (
    <section className="section-shell min-h-[88vh] scroll-mt-24" id="welcome">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="editorial-card"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-burgundy/80">
            Crazzyyyyyyyyyyyy
          </p>
          <h1 className="title-font text-4xl leading-tight text-burgundy sm:text-5xl">Vaishuu Aunty Birthday todayy Yayyyyyyyyy</h1>
          <h2 className="mt-3 title-font text-3xl text-ink sm:text-4xl">Odityaa? 👀</h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/85 sm:text-lg">
            Auntyyy Aunty Aunty Auntyyyy
          </p>
          <p className="mt-2 max-w-xl text-base leading-relaxed text-ink/85 sm:text-lg">
            Auntie Auntie Auntie tun tun Auntiyyy😋
          </p>

          <div className="mt-8">
            <AnimatedButton onClick={onStart}>
              Okay, nexttttt <ArrowRight size={16} />
            </AnimatedButton>
          </div>

          <p className="mt-8 text-sm text-burgundy/70">Made with a little effort and a lot of random thoughts ♡</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{ opacity: { duration: 0.8 }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
          className="relative overflow-hidden rounded-[2rem] border border-burgundy/20 bg-white/60 p-3 shadow-soft"
        >
          {/* Replace this with your preferred floral image in /public/images/polaroids */}
          <img
            src="/images/polaroids/welcome-floral.jpg"
            alt="Soft floral scene"
            className="h-[460px] w-full rounded-[1.5rem] object-cover"
            onError={(event) => {
              event.currentTarget.src =
                'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80'
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Welcome
