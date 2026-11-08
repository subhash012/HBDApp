import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import AnimatedButton from '../components/AnimatedButton'
import BirthdayCake from '../components/BirthdayCake'

const initialCandles = [true, true, true]

function BirthdayFinale() {
  const [candles, setCandles] = useState(initialCandles)

  const allOut = useMemo(() => candles.every((item) => !item), [candles])

  const launchConfetti = () => {
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.65 },
      colors: ['#f8d3cc', '#b66575', '#f7f1e8', '#e8c6c8']
    })
  }

  const toggleCandle = (index) => {
    setCandles((current) => current.map((value, i) => (i === index ? !value : value)))
  }

  const replay = () => {
    setCandles(initialCandles)
    launchConfetti()
  }

  return (
    <section className="section-shell scroll-mt-24 pb-24" id="finale">
      <div className="relative overflow-hidden rounded-[2rem] border border-burgundy/20 bg-gradient-to-b from-[#fff8f2] to-[#f7e8e2] p-6 shadow-soft sm:p-10">
        <motion.div
          animate={{ y: [0, -8, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4.5, repeat: Infinity }}
          className="pointer-events-none absolute -right-12 -top-8 h-44 w-44 rounded-full bg-pink-300/20 blur-3xl"
        />

        <h2 className="title-font text-center text-4xl text-burgundy sm:text-6xl">VAISHUUUUUU!! 😊</h2>

        <div className="mx-auto mt-6 max-w-3xl space-y-3 text-center text-base leading-relaxed text-ink/90 sm:text-lg">
          <p>Okayyyyyyyyy</p>
          <p>It&apos;s your dayyy!</p>
          <p>
            I hope this year gives you so many happy little moments, random laughs, good food, and all the stuff you&apos;ve been
            wishing for.
          </p>
          <p>
            Keep being you, keep smiling, and don&apos;t lose the weird little things that make you... you.
          </p>
          <p>Have the happiest birthday, Kavu!! 🥳💗</p>
        </div>

        <div className="mt-10">
          <BirthdayCake candles={candles} onToggleCandle={toggleCandle} />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <AnimatedButton onClick={launchConfetti}>Celebrate 🎉</AnimatedButton>
          <AnimatedButton onClick={replay} variant="ghost">
            Replay celebration
          </AnimatedButton>
        </div>

        {allOut && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 text-center font-semibold text-burgundy"
          >
            Candles blown out! Make a wishhh ✨
          </motion.p>
        )}
      </div>
    </section>
  )
}

export default BirthdayFinale
