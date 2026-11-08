import Envelope from '../components/Envelope'
import { letters } from '../data/letters'

function Letters() {
  return (
    <section className="section-shell scroll-mt-24" id="letters">
      <div className="mb-10 text-center">
        <h2 className="title-font text-4xl text-burgundy sm:text-5xl">Open when...</h2>
      </div>

      <div className="mx-auto grid max-w-3xl gap-4">
        {letters.map((letter) => (
          <Envelope key={letter.id} title={letter.title} message={letter.message} />
        ))}
      </div>
    </section>
  )
}

export default Letters
