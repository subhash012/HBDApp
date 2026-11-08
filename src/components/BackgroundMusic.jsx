import { useEffect, useRef, useState } from 'react'
import { Pause, Play, Music2 } from 'lucide-react'

function BackgroundMusic() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) {
      return
    }

    const onEnd = () => setIsPlaying(false)
    audio.addEventListener('ended', onEnd)

    return () => {
      audio.removeEventListener('ended', onEnd)
    }
  }, [])

  const toggleMusic = async () => {
    if (!audioRef.current) {
      return
    }

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
      return
    }

    try {
      await audioRef.current.play()
      setIsPlaying(true)
    } catch (error) {
      // Browser blocked playback until user gesture; button itself is the gesture.
      console.error('Music playback error:', error)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} loop preload="auto" src="/music/dance-with-me.mp3" />
      {/* Upload your song as /public/music/dance-with-me.mp3 to make it play automatically with this button. */}
      <button
        onClick={toggleMusic}
        className="inline-flex items-center gap-2 rounded-full border border-burgundy/30 bg-white/85 px-4 py-2 text-sm font-semibold text-burgundy shadow-soft backdrop-blur transition hover:bg-white"
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        <Music2 size={16} />
        {isPlaying ? 'Pause music' : 'Play music'}
      </button>
    </div>
  )
}

export default BackgroundMusic
