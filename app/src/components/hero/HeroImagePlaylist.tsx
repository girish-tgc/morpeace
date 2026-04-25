import { useEffect, useState } from 'react'

const BASE = import.meta.env.BASE_URL
const FADE_MS = 1800
const DEFAULT_DURATION_MS = 7000

export interface ImagePlaylistItem {
  src: string
  alt: string
  durationMs?: number
}

interface Props {
  items: ImagePlaylistItem[]
}

export default function HeroImagePlaylist({ items }: Props) {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    if (items.length <= 1) return
    const duration = items[activeIdx]?.durationMs ?? DEFAULT_DURATION_MS
    const t = window.setTimeout(() => {
      setActiveIdx((i) => (i + 1) % items.length)
    }, duration)
    return () => window.clearTimeout(t)
  }, [activeIdx, items])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {items.map((it, idx) => {
        const isActive = idx === activeIdx
        // Stagger each slide's drift phase so neighbouring frames don't share the same Ken-Burns position
        const phaseSec = -(idx * 4)
        return (
          <img
            key={it.src}
            src={`${BASE}${it.src}`}
            alt={it.alt}
            loading={idx === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className="hero-slide absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: isActive ? 1 : 0,
              transitionDuration: `${FADE_MS}ms`,
              animationDelay: `${phaseSec}s`,
            }}
          />
        )
      })}
    </div>
  )
}
