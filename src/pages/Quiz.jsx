import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ProgressTracker from '../components/ProgressTracker'
import AnimatedButton from '../components/AnimatedButton'
import { quizData } from '../data/quizData'

function Quiz() {
  const [index, setIndex] = useState(0)
  const [dodgePosition, setDodgePosition] = useState({ x: 0, y: 0 })
  const [resultMessage, setResultMessage] = useState('')
  const [isDone, setIsDone] = useState(false)

  const current = useMemo(() => quizData[index], [index])

  const nextQuestion = () => {
    if (index < quizData.length - 1) {
      setIndex((value) => value + 1)
      setDodgePosition({ x: 0, y: 0 })
      return
    }

    setIsDone(true)
  }

  const handlePrimary = () => {
    if (current.id === 3) {
      setResultMessage("Okayyy, that's all I wanted 🥹💗")
    }
    nextQuestion()
  }

  const handleSecondary = () => {
    if (current.id === 3) {
      setResultMessage('Excuse me?? Try again 😂 Just kidding. Your happiness matters more than anything.')
      setIsDone(true)
      return
    }

    if (current.allowSkip) {
      setResultMessage('Hahaha okay, skip accepted 😂')
      nextQuestion()
    }
  }

  const randomizeDodge = () => {
    const x = Math.floor(Math.random() * 120) - 60
    const y = Math.floor(Math.random() * 80) - 40
    setDodgePosition({ x, y })
  }

  const canDodge = current?.dodgeSecondary

  return (
    <section className="section-shell scroll-mt-24" id="quiz">
      <div className="mx-auto max-w-2xl">
        <div className="editorial-card">
          <ProgressTracker current={Math.min(index + 1, 3)} total={3} />

          <AnimatePresence mode="wait">
            {!isDone ? (
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.3 }}
                className="mt-8"
              >
                <h2 className="title-font text-3xl text-ink">{current.question}</h2>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <AnimatedButton onClick={handlePrimary}>{current.primaryLabel}</AnimatedButton>

                  <motion.div
                    animate={canDodge ? { x: dodgePosition.x, y: dodgePosition.y } : { x: 0, y: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 15 }}
                    onMouseEnter={canDodge ? randomizeDodge : undefined}
                    onMouseMove={canDodge ? randomizeDodge : undefined}
                    onTouchStart={canDodge ? randomizeDodge : undefined}
                  >
                    <AnimatedButton onClick={handleSecondary} variant="ghost">
                      {current.secondaryLabel}
                    </AnimatedButton>
                  </motion.div>

                  {current.allowSkip && (
                    <button
                      onClick={nextQuestion}
                      className="text-sm font-semibold text-burgundy/75 underline-offset-4 transition hover:text-burgundy hover:underline"
                    >
                      skip this one 😂
                    </button>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="quiz-done"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 rounded-2xl border border-burgundy/15 bg-white/70 p-6"
              >
                <h3 className="title-font text-2xl text-burgundy">Survey complete ✅</h3>
                <p className="mt-2 text-base text-ink/85">{resultMessage || "Okayyy, that's all I wanted 🥹💗"}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Quiz
