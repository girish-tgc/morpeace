import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL
const ts = '0 2px 24px rgba(0,0,0,0.7), 0 1px 8px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.3)'

/*
 * Each "beat" is a narrative moment.  The background crossfades between
 * media as the user scrolls, while the text fades in and out.
 * This gives a short-film feel without requiring 8 separate full-screen slides.
 */
interface Beat {
  lines: string[]
  /** Which background layer (0-based index into bgLayers) should be visible */
  bgIndex: number
  /** Optional: accent color for the text */
  accent?: string
  /** Final beat — show Morpeace peacock text instead of italic lines */
  finale?: boolean
}

const bgLayers = [
  { type: 'video' as const, src: `${BASE}photos/golden-hour-leaves.mp4` },
  { type: 'video' as const, src: `${BASE}photos/mimosa-shy-plant.mp4` },
  { type: 'video' as const, src: `${BASE}photos/hands-planting.mp4` },
  { type: 'image' as const, src: `${BASE}photos/tree-stump-fog.jpeg` },
  { type: 'image' as const, src: `${BASE}photos/forest-path.jpeg` },
  { type: 'video' as const, src: `${BASE}photos/roots-growing.mp4` },
  { type: 'image' as const, src: `${BASE}photos/peacock-plumage.jpeg` },
  { type: 'video' as const, src: `${BASE}photos/drone-shot.mp4` },
  { type: 'image' as const, src: `${BASE}photos/forest-dense-vegetation.jpeg` },
]

const beats: Beat[] = [
  // Act I — The Voice
  {
    lines: [
      "Isn\u2019t it ironic that a forest\u2026",
      "has chosen its tiniest plant",
      "as its spokesperson?",
    ],
    bgIndex: 0,
  },
  {
    lines: [
      "I am the Touch-Me-Not.",
      "I fold when touched, to reopen again.",
      "And this is my story.",
    ],
    bgIndex: 1,
  },
  // Act II — The Memory
  {
    lines: [
      "Long ago, a child planted me",
      "beside his ancestral home.",
      "I grew among grand neighbours \u2014",
      "tamarind, guava, roses\u2026",
    ],
    bgIndex: 2,
  },
  {
    lines: [
      "Then the machines came.",
      "And everything fell.",
      "The canopies vanished.",
      "Concrete replaced breath.",
    ],
    bgIndex: 3,
    accent: 'text-sky-cream/70',
  },
  // Act III — The Return
  {
    lines: [
      "Years later, the same child returned.",
      "He did not come to build.",
      "He came to listen.",
    ],
    bgIndex: 4,
  },
  {
    lines: [
      "When he touched my leaves, I folded.",
      "Not in fear. But in recognition.",
      "He remembered. I remembered.",
    ],
    bgIndex: 1,
  },
  // Act IV — The Dream
  {
    lines: [
      "To let the soil return to its own breath.",
      "To see life unfold in rhythm and grace.",
      "Where roots speak to roots,",
      "and every being finds its place.",
    ],
    bgIndex: 5,
    accent: 'text-canopy-light/90',
  },
  {
    lines: [
      "Morpeace will not be built \u2014",
      "it will become.",
    ],
    bgIndex: 8,
    accent: 'text-canopy-light',
  },
  // Act V — The Unfolding
  {
    lines: [
      "This is not a project.",
      "It is a patient unfolding.",
    ],
    bgIndex: 5,
  },
  {
    lines: [
      "Saplings are placed with centuries in mind.",
      "Water is guided, not forced.",
      "Birdsong is invited, not engineered.",
    ],
    bgIndex: 0,
  },
  // Act VI — Sensitivity
  {
    lines: [
      "I don\u2019t see sensitivity as weakness.",
      "It is awareness.",
      "And awareness is how forests return.",
    ],
    bgIndex: 1,
    accent: 'text-canopy-light/90',
  },
  // Act VII — The Promise
  {
    lines: [
      "We will plant with centuries in mind.",
      "We will guard the quiet and the unseen.",
      "We will listen more than we speak,",
    ],
    bgIndex: 7,
  },
  {
    lines: [
      "\u2026and leave this Earth richer",
      "than we found it.",
    ],
    bgIndex: 7,
    accent: 'text-mango-gold',
  },
  // Finale
  {
    lines: ["And that is where Morpeace began."],
    bgIndex: 6,
    finale: true,
  },
]

export default function TheBecomingPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgContainerRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const beatRefs = useRef<(HTMLDivElement | null)[]>([])
  const bgLayerRefs = useRef<(HTMLDivElement | null)[]>([])

  // Background crossfade on scroll
  useEffect(() => {
    if (!containerRef.current || !bgContainerRef.current) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let activeBg = -1

    const ctx = gsap.context(() => {
      // Pin the background container for the duration of all beats
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: bgContainerRef.current,
        pinSpacing: false,
      })

      // Each beat: fade in text, crossfade background
      beatRefs.current.forEach((beatEl, i) => {
        if (!beatEl) return
        const beat = beats[i]
        const textEls = beatEl.querySelectorAll('[data-line]')

        // Background crossfade
        ScrollTrigger.create({
          trigger: beatEl,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => showBg(beat.bgIndex),
          onEnterBack: () => showBg(beat.bgIndex),
        })

        // Text fade in/out
        if (!prefersReduced) {
          // Fade in
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

          // Fade out as user scrolls past
          gsap.to(textEls, {
            opacity: 0, y: -20, duration: 0.4, stagger: 0.05,
            scrollTrigger: {
              trigger: beatEl,
              start: 'bottom 40%',
              end: 'bottom 10%',
              scrub: 0.3,
            },
          })
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
        if (li === index) {
          gsap.to(layer, { opacity: 1, duration: 1.2, ease: 'power2.inOut' })
        } else {
          gsap.to(layer, { opacity: 0, duration: 1.2, ease: 'power2.inOut' })
        }
      })

      // Play/pause videos accordingly
      videoRefs.current.forEach((video) => {
        if (!video) return
        const layerForVideo = bgLayers.findIndex(
          (l) => l.type === 'video' && l.src === video.src
        )
        if (layerForVideo === index) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      })
    }

    // Show first bg immediately
    showBg(beats[0].bgIndex)

    return () => { ctx.revert() }
  }, [])

  let videoIdx = 0

  return (
    <div ref={containerRef} className="relative" data-audio-zone="layer0-story">
      {/* === PINNED BACKGROUND STACK === */}
      <div ref={bgContainerRef} className="absolute inset-0 w-screen h-screen overflow-hidden" style={{ zIndex: 0 }}>
        {bgLayers.map((layer, i) => {
          const curVideoIdx = layer.type === 'video' ? videoIdx++ : -1
          return (
            <div
              key={i}
              ref={el => { bgLayerRefs.current[i] = el }}
              className="absolute inset-0"
              style={{ opacity: 0 }}
            >
              {layer.type === 'video' ? (
                <video
                  ref={el => { if (curVideoIdx >= 0) videoRefs.current[curVideoIdx] = el }}
                  src={layer.src}
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className={`absolute inset-0 ${i === 6 ? 'ken-burns-c' : i === 4 ? 'ken-burns-b' : 'ken-burns-a'}`}>
                  <img src={layer.src} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                </div>
              )}
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
            </div>
          )
        })}
        {/* Light dapple over everything */}
        <div className="light-dapple" />
        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.5) 100%)' }}
        />
      </div>

      {/* === SCROLLING TEXT BEATS === */}
      <div className="relative" style={{ zIndex: 1 }}>
        {/* Opening spacer — let the first bg breathe */}
        <div className="h-[70vh] flex items-center justify-center">
          <div className="text-center px-8">
            <p className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-canopy-light/60 mb-6">
              The Becoming
            </p>
            <p className="font-display text-4xl md:text-6xl lg:text-7xl text-sky-cream mb-4" style={{ textShadow: ts }}>
              How a forest returned
            </p>
            <p className="font-body text-lg md:text-xl text-sky-cream/70 italic max-w-xl mx-auto">
              The Touch-Me-Not speaks.
            </p>
            <div className="mt-12 animate-bounce">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mx-auto opacity-25 text-sky-cream">
                <path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Beats */}
        {beats.map((beat, i) => (
          <div
            key={i}
            ref={el => { beatRefs.current[i] = el }}
            className="min-h-[80vh] flex items-center justify-center px-8 md:px-16"
          >
            <div className="max-w-3xl mx-auto text-center">
              {beat.finale ? (
                <>
                  <p data-line className="font-display text-6xl md:text-8xl lg:text-9xl leading-tight tracking-wide peacock-text">
                    Morpeace
                  </p>
                  <p data-line className="font-body text-xl md:text-2xl text-sky-cream/80 italic mt-6" style={{ textShadow: ts }}>
                    {beat.lines[0]}
                  </p>
                </>
              ) : (
                <div className="space-y-4 md:space-y-6">
                  {beat.lines.map((line, li) => (
                    <p
                      key={li}
                      data-line
                      className={`font-body text-2xl md:text-3xl lg:text-4xl leading-relaxed italic ${beat.accent || 'text-sky-cream/90'}`}
                      style={{ textShadow: ts }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Closing spacer */}
        <div className="h-[40vh]" />
      </div>
    </div>
  )
}
