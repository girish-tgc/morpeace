import { useEffect, useRef, useState } from 'react'

const BASE = import.meta.env.BASE_URL
const FADE_MS = 900
const DEFAULT_MAX = 10

export interface PlaylistItem {
  src: string
  poster: string
  maxSeconds?: number
}

interface Props {
  items: PlaylistItem[]
  alt: string
}

export default function HeroVideoPlaylist({ items, alt }: Props) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [activeSlot, setActiveSlot] = useState<'a' | 'b'>('a')
  const [slotA, setSlotA] = useState<PlaylistItem>(items[0])
  const [slotB, setSlotB] = useState<PlaylistItem>(items[1 % items.length])
  const videoA = useRef<HTMLVideoElement>(null)
  const videoB = useRef<HTMLVideoElement>(null)
  const nextTimer = useRef<number | null>(null)
  const isTransitioning = useRef(false)

  // Active/idle orchestration: reset active to t=0 and play, pause the other
  useEffect(() => {
    const activeVideo = activeSlot === 'a' ? videoA.current : videoB.current
    const idleVideo = activeSlot === 'a' ? videoB.current : videoA.current
    idleVideo?.pause()
    if (activeVideo) {
      try {
        activeVideo.currentTime = 0
      } catch {}
      const p = activeVideo.play()
      if (p && typeof p.catch === 'function') p.catch(() => {})
    }
  }, [activeSlot])

  // Reload a slot's video element when its source changes so the browser fetches the new clip
  useEffect(() => {
    videoA.current?.load()
  }, [slotA.src])

  useEffect(() => {
    videoB.current?.load()
  }, [slotB.src])

  // Schedule next transition when currentIdx changes
  useEffect(() => {
    if (nextTimer.current) window.clearTimeout(nextTimer.current)
    const clipLength = items[currentIdx].maxSeconds ?? DEFAULT_MAX
    nextTimer.current = window.setTimeout(advance, clipLength * 1000)
    return () => {
      if (nextTimer.current) window.clearTimeout(nextTimer.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIdx])

  function advance() {
    if (isTransitioning.current) return
    isTransitioning.current = true
    const nextIdx = (currentIdx + 1) % items.length
    const preloadIdx = (nextIdx + 1) % items.length
    const nextSlot: 'a' | 'b' = activeSlot === 'a' ? 'b' : 'a'
    setActiveSlot(nextSlot)
    setCurrentIdx(nextIdx)
    window.setTimeout(() => {
      if (nextSlot === 'a') setSlotB(items[preloadIdx])
      else setSlotA(items[preloadIdx])
      isTransitioning.current = false
    }, FADE_MS + 50)
  }

  const aClasses = `absolute inset-0 w-full h-full object-cover transition-opacity ease-linear ${
    activeSlot === 'a' ? 'opacity-100' : 'opacity-0'
  }`
  const bClasses = `absolute inset-0 w-full h-full object-cover transition-opacity ease-linear ${
    activeSlot === 'b' ? 'opacity-100' : 'opacity-0'
  }`
  const fadeStyle = { transitionDuration: `${FADE_MS}ms` }

  return (
    <>
      <img
        src={`${BASE}${items[currentIdx].poster}`}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />
      <div className="absolute inset-0 hidden md:block">
        <video
          ref={videoA}
          className={aClasses}
          style={fadeStyle}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster={`${BASE}${slotA.poster}`}
          aria-label={alt}
          onEnded={advance}
        >
          <source src={`${BASE}${slotA.src}`} type="video/mp4" />
        </video>
        <video
          ref={videoB}
          className={bClasses}
          style={fadeStyle}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster={`${BASE}${slotB.poster}`}
          aria-label={alt}
          onEnded={advance}
        >
          <source src={`${BASE}${slotB.src}`} type="video/mp4" />
        </video>
      </div>
    </>
  )
}
