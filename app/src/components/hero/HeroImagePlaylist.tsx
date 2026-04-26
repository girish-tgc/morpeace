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
  const [tick, setTick] = useState(0)

  useEffect(() => {
    if (items.length <= 1) return
    const duration = items[activeIdx]?.durationMs ?? DEFAULT_DURATION_MS
    const t = window.setTimeout(() => {
      setActiveIdx((i) => (i + 1) % items.length)
    }, duration)
    return () => window.clearTimeout(t)
  }, [activeIdx, items, tick])

  const go = (delta: number) => {
    setActiveIdx((i) => (i + delta + items.length) % items.length)
    setTick((t) => t + 1)
  }

  const goTo = (idx: number) => {
    setActiveIdx(idx)
    setTick((t) => t + 1)
  }

  const showControls = items.length > 1

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

      {showControls && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => go(-1)}
            className="group absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 h-11 w-11 md:h-12 md:w-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
            style={{
              backgroundColor: 'rgba(1, 46, 67, 0.35)',
              border: '1px solid rgba(245, 235, 208, 0.35)',
              color: '#F5EBD0',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => go(1)}
            className="group absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 h-11 w-11 md:h-12 md:w-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
            style={{
              backgroundColor: 'rgba(1, 46, 67, 0.35)',
              border: '1px solid rgba(245, 235, 208, 0.35)',
              color: '#F5EBD0',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-5 md:bottom-7 z-20 flex items-center gap-2"
            role="tablist"
            aria-label="Hero image"
          >
            {items.map((it, idx) => {
              const isActive = idx === activeIdx
              return (
                <button
                  key={it.src}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to image ${idx + 1}`}
                  onClick={() => goTo(idx)}
                  className="h-2.5 rounded-full transition-all duration-300"
                  style={{
                    width: isActive ? 22 : 10,
                    backgroundColor: isActive
                      ? 'rgba(245, 235, 208, 0.95)'
                      : 'rgba(245, 235, 208, 0.45)',
                    border: '1px solid rgba(1, 46, 67, 0.3)',
                  }}
                />
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
