import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { narrativeBeats } from '../../data/homeNarrative'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const BASE = import.meta.env.BASE_URL
const ts = '0 2px 24px rgba(0,0,0,0.7), 0 1px 8px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.3)'

export default function TheStorySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgContainerRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const beatRefs = useRef<(HTMLDivElement | null)[]>([])
  const bgLayerRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current || !bgContainerRef.current) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 768
    let activeBg = -1

    // Deduplicate backgrounds so we don't render 23 layers
    const uniqueBgs = [...new Set(narrativeBeats.map(b => b.background))]
    const bgIndexMap = narrativeBeats.map(b => uniqueBgs.indexOf(b.background))

    const ctx = gsap.context(() => {
      // Pin the background on desktop
      if (!isMobile) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: bgContainerRef.current,
          pinSpacing: false,
        })
      }

      beatRefs.current.forEach((beatEl, i) => {
        if (!beatEl) return

        // Background crossfade
        ScrollTrigger.create({
          trigger: beatEl,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => showBg(bgIndexMap[i]),
          onEnterBack: () => showBg(bgIndexMap[i]),
        })

        // Text animations
        const textEls = beatEl.querySelectorAll('[data-line]')
        if (!prefersReduced) {
          gsap.fromTo(textEls,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
              scrollTrigger: {
                trigger: beatEl,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              },
            }
          )

          if (!isMobile) {
            gsap.to(textEls, {
              opacity: 0, y: -20, duration: 0.4, stagger: 0.05,
              scrollTrigger: {
                trigger: beatEl,
                start: 'bottom 40%',
                end: 'bottom 10%',
                scrub: 0.3,
              },
            })
          }
        } else {
          gsap.set(textEls, { opacity: 1, y: 0 })
        }
      })
    }, containerRef)

    function showBg(index: number) {
      if (index === activeBg) return
      activeBg = index

      bgLayerRefs.current.forEach((layer, li) => {
        if (!layer) return
        gsap.to(layer, {
          opacity: li === index ? 1 : 0,
          duration: 1.2,
          ease: 'power2.inOut',
        })
      })

      // Play/pause videos
      videoRefs.current.forEach((video, vi) => {
        if (!video) return
        if (vi === index) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      })
    }

    showBg(bgIndexMap[0])

    return () => { ctx.revert() }
  }, [])

  // Auto-scroll — cinematic reading pace, pauses on user interaction
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let autoTween: gsap.core.Tween | null = null
    let idleTimer: ReturnType<typeof setTimeout> | null = null
    let userInteracting = false

    const SPEED = 80 // px per second

    function startAutoScroll() {
      if (autoTween) autoTween.kill()
      const remaining = document.documentElement.scrollHeight - window.innerHeight - window.scrollY
      if (remaining <= 0) return
      autoTween = gsap.to(window, {
        scrollTo: { y: document.documentElement.scrollHeight - window.innerHeight, autoKill: true },
        duration: remaining / SPEED,
        ease: 'none',
      })
    }

    function pauseAutoScroll() {
      if (autoTween) { autoTween.kill(); autoTween = null }
      userInteracting = true
      if (idleTimer) clearTimeout(idleTimer)
      idleTimer = setTimeout(() => {
        userInteracting = false
        startAutoScroll()
      }, 4000)
    }

    const startDelay = setTimeout(() => {
      if (!userInteracting) startAutoScroll()
    }, 3000)

    const events = ['wheel', 'touchstart', 'mousedown', 'keydown'] as const
    events.forEach(evt => window.addEventListener(evt, pauseAutoScroll, { passive: true }))

    return () => {
      clearTimeout(startDelay)
      if (idleTimer) clearTimeout(idleTimer)
      if (autoTween) autoTween.kill()
      events.forEach(evt => window.removeEventListener(evt, pauseAutoScroll))
    }
  }, [])

  // Deduplicate backgrounds for rendering
  const uniqueBgs = [...new Set(narrativeBeats.map(b => b.background))]
  const bgMeta = uniqueBgs.map(bg => {
    const beat = narrativeBeats.find(b => b.background === bg)!
    return { src: bg, isVideo: beat.isVideo }
  })

  let videoIdx = 0

  return (
    <div ref={containerRef} className="relative" data-audio-zone="layer0-story">
      {/* === PINNED BACKGROUND STACK === */}
      <div
        ref={bgContainerRef}
        className="absolute md:sticky top-0 inset-x-0 w-full h-screen overflow-hidden"
        style={{ zIndex: 0 }}
      >
        {bgMeta.map((bg, i) => {
          const curVideoIdx = bg.isVideo ? videoIdx++ : -1
          return (
            <div
              key={bg.src}
              ref={el => { bgLayerRefs.current[i] = el }}
              className="absolute inset-0"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              {bg.isVideo ? (
                <video
                  ref={el => { if (curVideoIdx >= 0) videoRefs.current[curVideoIdx] = el }}
                  src={`${BASE}photos/${bg.src}`}
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster={`${BASE}photos/forest-dense-vegetation.jpeg`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 ken-burns-a">
                  <img
                    src={`${BASE}photos/${bg.src}`}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
            </div>
          )
        })}
        <div className="light-dapple" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.5) 100%)' }}
        />
      </div>

      {/* === SCROLLING TEXT BEATS === */}
      <div className="relative" style={{ zIndex: 1 }}>
        {narrativeBeats.map((beat, i) => (
          <div
            key={beat.id}
            ref={el => { beatRefs.current[i] = el }}
            className={`${beat.finale ? 'min-h-[50vh]' : beat.lines.filter(l => l !== '').length <= 4 ? 'min-h-[50vh]' : 'min-h-[60vh]'} flex items-center justify-center px-8 md:px-16 py-16`}
          >
            <div className="max-w-2xl mx-auto text-center">
              {beat.finale ? (
                <>
                  <p data-line className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight tracking-wide peacock-text mb-6">
                    Morpeace
                  </p>
                  {beat.lines.map((line, li) => (
                    <p
                      key={li}
                      data-line
                      className="font-body text-xl md:text-2xl text-sky-cream/80 italic"
                      style={{ textShadow: ts }}
                    >
                      {line}
                    </p>
                  ))}
                </>
              ) : (
                <div className="space-y-3 md:space-y-5">
                  {beat.lines.map((line, li) => {
                    if (line === '') return <div key={li} data-line className="h-4 md:h-6" />
                    return (
                      <p
                        key={li}
                        data-line
                        className={`font-body text-xl md:text-2xl lg:text-3xl leading-relaxed italic ${beat.accent || 'text-sky-cream/90'}`}
                        style={{ textShadow: ts }}
                      >
                        {line}
                      </p>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
