import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OurDream from '../components/shared/OurDream'
import TheUnfolding from '../components/shared/TheUnfolding'
import TouchMeNotClosing from '../components/shared/TouchMeNotClosing'
import OurPromise from '../components/shared/OurPromise'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL

const textShadow = '0 2px 24px rgba(0,0,0,0.7), 0 1px 8px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.3)'

interface StanzaData {
  text: string[]
  bg:
    | { type: 'video'; src: string }
    | { type: 'image'; src: string }
    | { type: 'gradient'; style: string; breathe?: boolean }
  overlay?: string
  kenBurns?: 'a' | 'b' | 'c'
  effect?: 'light-dapple' | 'fog-drift'
}

const stanzas: StanzaData[] = [
  {
    text: [
      "Isn\u2019t it ironic that a forest\u2026 has chosen its tiniest plant as its spokesperson?",
      "When Morpeace needed a voice, she chose the most sensitive one.",
    ],
    bg: { type: 'video', src: `${BASE}photos/golden-hour-leaves.mp4` },
    overlay: 'bg-gradient-to-b from-black/55 via-black/45 to-black/70',
  },
  {
    text: [
      "I am never meant to be grand. I do not tower.",
      "But I\u2019m sensitive. I feel it first.",
    ],
    bg: {
      type: 'gradient',
      style: 'radial-gradient(ellipse at 50% 60%, #2a4a20 0%, #1b3316 40%, #122410 70%, #0a0f07 100%)',
      breathe: true,
    },
  },
  {
    text: [
      "Long ago, a child planted me beside his ancestral home.",
      "I grew among grand neighbours \u2014 tamarind, guava, roses\u2026",
    ],
    bg: { type: 'video', src: `${BASE}photos/hands-planting.mp4` },
    overlay: 'bg-black/55',
  },
  {
    text: [
      "I am the Touch-Me-Not.",
      "I fold when touched, to reopen again.",
      "And this is my story.",
    ],
    bg: { type: 'video', src: `${BASE}photos/mimosa-shy-plant.mp4` },
    overlay: 'bg-black/55',
  },
  {
    text: [
      "Then the machines came. And everything fell.",
      "The canopies vanished. The pond was silenced.",
      "Concrete replaced breath.",
    ],
    bg: { type: 'image', src: `${BASE}photos/tree-stump-fog.jpeg` },
    overlay: 'bg-gradient-to-b from-black/50 via-black/40 to-black/65',
    kenBurns: 'a',
    effect: 'fog-drift',
  },
  {
    text: [
      "Years later, the same child returned.",
      "He did not come to build. He came to listen.",
    ],
    bg: { type: 'image', src: `${BASE}photos/forest-path.jpeg` },
    overlay: 'bg-gradient-to-b from-black/60 via-black/55 to-black/80',
    kenBurns: 'b',
    effect: 'light-dapple',
  },
  {
    text: [
      "When he touched my leaves, I folded.",
      "Not in fear. But in recognition.",
      "He remembered. I remembered.",
    ],
    bg: { type: 'video', src: `${BASE}photos/mimosa-shy-plant.mp4` },
    overlay: 'bg-black/55',
  },
  {
    text: ["And that is where Morpeace began."],
    bg: { type: 'image', src: `${BASE}photos/peacock-plumage.jpeg` },
    overlay: 'bg-black/50',
    kenBurns: 'c',
  },
]

const kenBurnsClass = { a: 'ken-burns-a', b: 'ken-burns-b', c: 'ken-burns-c' } as const

export default function TheBecomingPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const stanzaRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current || !outerRef.current || !innerRef.current) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      // DESKTOP: horizontal scroll pin (768px+)
      mm.add('(min-width: 768px)', () => {
        const inner = innerRef.current!
        const outer = outerRef.current!
        gsap.set(inner, { width: stanzas.length * 100 + 'vw', display: 'flex', flexDirection: 'row' })

        const horizontalTween = gsap.to(inner, {
          x: () => -(inner.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: outer,
            pin: true,
            scrub: 1,
            end: () => '+=' + (inner.scrollWidth - window.innerWidth),
            invalidateOnRefresh: true,
          },
        })

        if (!prefersReduced) {
          stanzaRefs.current.forEach((stanza) => {
            if (!stanza) return
            const bgWrapper = stanza.querySelector('[data-bg-wrapper]')
            const textContent = stanza.querySelector('[data-text-content]')
            if (!bgWrapper || !textContent) return

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: stanza,
                containerAnimation: horizontalTween,
                start: 'left 80%',
                end: 'left 20%',
                scrub: 0.5,
              },
            })
            tl.fromTo(bgWrapper, { filter: 'grayscale(1)' }, { filter: 'grayscale(0)', duration: 0.6 })
            tl.fromTo(textContent, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.4)
          })
        }
      })

      // MOBILE: vertical stanza animations (<768px)
      mm.add('(max-width: 767px)', () => {
        stanzaRefs.current.forEach((stanza) => {
          if (!stanza) return
          const bgWrapper = stanza.querySelector('[data-bg-wrapper]')
          const textContent = stanza.querySelector('[data-text-content]')

          if (prefersReduced) {
            if (bgWrapper) gsap.set(bgWrapper, { filter: 'grayscale(0)' })
            if (textContent) gsap.set(textContent, { opacity: 1 })
            return
          }

          if (!bgWrapper || !textContent) return

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: stanza,
              start: 'top 85%',
              end: 'top 30%',
              scrub: 0.5,
            },
          })
          tl.fromTo(bgWrapper, { filter: 'grayscale(1)' }, { filter: 'grayscale(0)', duration: 0.6 })
          tl.fromTo(textContent, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.4 }, 0.4)
        })
      })
    }, containerRef)

    return () => { mm.revert(); ctx.revert() }
  }, [])

  // IntersectionObserver for video play/pause
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    videoRefs.current.forEach((video) => {
      if (!video) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) video.play().catch(() => {})
          else video.pause()
        },
        { threshold: 0.15 }
      )
      observer.observe(video)
      observers.push(observer)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  let videoIndex = 0

  return (
    <div ref={containerRef}>
      {/* === HERO === */}
      <section
        data-audio-zone="layer0-story"
        className="h-[60vh] md:h-[70vh] flex items-center justify-center relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, #2a4a20 0%, #1b3316 40%, #122410 70%, #0a0f07 100%)' }}
      >
        <div className="relative z-10 text-center px-8">
          <p className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-canopy-light/60 mb-6">
            The Becoming
          </p>
          <p className="font-display text-3xl md:text-5xl text-sky-cream mb-4" style={{ textShadow }}>
            How a forest returned
          </p>
          <p className="font-body text-lg md:text-xl text-sky-cream/70 italic max-w-xl mx-auto">
            The Touch-Me-Not speaks.
          </p>
        </div>
      </section>

      {/* === STANZA PANELS === */}
      <div ref={outerRef} data-audio-zone="layer0-story" className="overflow-hidden">
        <div ref={innerRef} className="flex flex-col md:flex-row">
          {stanzas.map((stanza, i) => {
            const isLast = i === stanzas.length - 1
            const currentVideoIdx = stanza.bg.type === 'video' ? videoIndex++ : -1

            return (
              <div
                key={i}
                ref={el => { stanzaRefs.current[i] = el }}
                className="relative flex items-center justify-center overflow-hidden shrink-0 w-screen min-h-screen md:h-screen"
              >
                <div data-bg-wrapper className="absolute inset-0">
                  {stanza.bg.type === 'video' && (
                    <>
                      <video
                        ref={el => { videoRefs.current[currentVideoIdx] = el as HTMLVideoElement }}
                        src={stanza.bg.src}
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {stanza.overlay && <div className={`absolute inset-0 ${stanza.overlay}`} />}
                    </>
                  )}

                  {stanza.bg.type === 'image' && (
                    <>
                      {stanza.kenBurns ? (
                        <div className="absolute inset-0 overflow-hidden">
                          <div className={`${kenBurnsClass[stanza.kenBurns]} absolute inset-0`}>
                            <img src={stanza.bg.src} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                          </div>
                        </div>
                      ) : (
                        <img src={stanza.bg.src} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                      )}
                      {stanza.overlay && <div className={`absolute inset-0 ${stanza.overlay}`} />}
                      {stanza.effect === 'light-dapple' && <div className="light-dapple" />}
                      {stanza.effect === 'fog-drift' && <div className="fog-drift" />}
                    </>
                  )}

                  {stanza.bg.type === 'gradient' && (
                    <>
                      <div className="absolute inset-0" style={{ background: stanza.bg.style }} />
                      {stanza.bg.breathe && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div
                            className="absolute forest-breathe-outer rounded-full"
                            style={{
                              width: '60vmin',
                              height: '60vmin',
                              background: 'radial-gradient(circle, rgba(107,143,60,0.25) 0%, rgba(42,74,32,0.1) 50%, transparent 70%)',
                              filter: 'blur(25px)',
                            }}
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div data-text-content className="relative z-10 max-w-3xl px-8 md:px-16 text-center">
                  {isLast ? (
                    <>
                      <p className="font-display text-6xl md:text-8xl lg:text-9xl leading-tight tracking-wide peacock-text">
                        Morpeace
                      </p>
                      <p className="font-body text-xl md:text-2xl text-sky-cream/80 italic mt-6" style={{ textShadow }}>
                        And that is where Morpeace began.
                      </p>
                    </>
                  ) : (
                    <div className="space-y-6">
                      {stanza.text.map((line, li) => (
                        <p
                          key={li}
                          className="font-body text-2xl md:text-3xl lg:text-4xl leading-relaxed text-sky-cream/90 italic"
                          style={{ textShadow }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* === NARRATIVE SECTIONS === */}
      <div data-audio-zone="our-dream">
        <OurDream />
      </div>

      <div data-audio-zone="the-unfolding">
        <TheUnfolding />
      </div>

      <div data-audio-zone="touch-me-not">
        <TouchMeNotClosing />
      </div>

      {/* === DRONE VIDEO BREAK === */}
      <DroneVideoBreak />

      <div data-audio-zone="our-promise">
        <OurPromise />
      </div>
    </div>
  )
}

function DroneVideoBreak() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.2 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} data-audio-zone="drone-video" className="relative h-[70vh] md:h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${BASE}photos/drone-shot.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-soil-deep/60 via-transparent to-soil-deep/80" />
      <div className="absolute inset-0 flex items-end justify-center pb-16 md:pb-24 px-8">
        <p className="font-body text-xl md:text-2xl lg:text-3xl text-sky-cream/70 text-center italic max-w-xl">
          From above, the canopy tells its own story
        </p>
      </div>
    </section>
  )
}
