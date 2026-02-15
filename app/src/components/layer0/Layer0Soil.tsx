import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const textShadowStrong = '0 2px 24px rgba(0,0,0,0.7), 0 1px 8px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.3)'

interface Stanza {
  text: string[]
  bg:
    | { type: 'video'; src: string }
    | { type: 'image'; src: string; grayscale?: boolean }
    | { type: 'gradient'; style: string; breathe?: boolean }
  overlay?: string
}

const BASE = import.meta.env.BASE_URL

const stanzas: Stanza[] = [
  {
    text: [
      "Isn't it ironic that a forest\u2026 has chosen its tiniest plant as its spokesperson?",
      "When Morpeace needed a voice, she chose the most sensitive one.",
    ],
    bg: { type: 'video', src: `${BASE}photos/golden-hour-leaves.mp4` },
    overlay: 'bg-gradient-to-b from-black/55 via-black/45 to-black/70',
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
      "Then the machines came. And everything fell.",
      "The canopies vanished. The pond was silenced.",
      "Concrete replaced breath.",
    ],
    bg: { type: 'image', src: `${BASE}photos/tree-stump-fog.jpeg`, grayscale: true },
    overlay: 'bg-gradient-to-b from-black/50 via-black/40 to-black/65',
  },
  {
    text: [
      "Years later, the same child returned.",
      "He did not come to build. He came to listen.",
    ],
    bg: { type: 'image', src: `${BASE}photos/forest-path.jpeg` },
    overlay: 'bg-gradient-to-b from-black/60 via-black/55 to-black/80',
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
    bg: {
      type: 'gradient',
      style: 'radial-gradient(ellipse at 50% 50%, #1b3316 0%, #0a0f07 100%)',
    },
  },
]

export default function Layer0Soil() {
  const containerRef = useRef<HTMLDivElement>(null)
  const openingRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current || !outerRef.current || !innerRef.current) return

    const ctx = gsap.context(() => {
      // Opening fade in
      if (openingRef.current) {
        gsap.fromTo(openingRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 3, delay: 1.5, ease: 'power2.inOut' }
        )
      }

      // Horizontal scroll pin
      const inner = innerRef.current!
      const outer = outerRef.current!

      gsap.to(inner, {
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
    }, containerRef)

    return () => ctx.revert()
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
    <div ref={containerRef} className="relative">
      {/* === THE DARKNESS — Opening === */}
      <section
        className="h-screen flex items-center justify-center relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, #2a4a20 0%, #1b3316 40%, #122410 70%, #0a0f07 100%)' }}
      >
        {/* Breathing glow orbs */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="absolute forest-breathe-outer rounded-full"
            style={{
              width: '80vmin',
              height: '80vmin',
              background: 'radial-gradient(circle, rgba(107,143,60,0.3) 0%, rgba(42,74,32,0.15) 50%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />
          <div
            className="absolute forest-breathe-inner rounded-full"
            style={{
              width: '40vmin',
              height: '40vmin',
              background: 'radial-gradient(circle, rgba(168,194,86,0.45) 0%, rgba(107,143,60,0.2) 50%, transparent 80%)',
              filter: 'blur(20px)',
            }}
          />
        </div>
        <div
          className="absolute inset-0 forest-breathe-vignette pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(10,15,7,0.7) 100%)',
          }}
        />

        <div ref={openingRef} className="opacity-0 relative z-10 max-w-3xl px-8 text-center">
          <p className="font-poem text-2xl md:text-3xl lg:text-4xl leading-relaxed text-sky-cream/90 italic forest-breathe-text">
            "Morpeace is not being built &mdash; it will become.
            <br />This is the story of Morpeace."
          </p>
          <div className="mt-12">
            <p className="text-sm tracking-[0.3em] uppercase text-sky-cream/30 font-display">
              scroll to hear the story
            </p>
            <div className="mt-4 animate-bounce">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mx-auto opacity-25">
                <path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* === HORIZONTAL SCROLL — Stanza Panels === */}
      <div ref={outerRef} className="overflow-hidden">
        <div ref={innerRef} className="flex" style={{ width: `${stanzas.length * 100}vw` }}>
          {stanzas.map((stanza, i) => {
            const isLast = i === stanzas.length - 1
            const currentVideoIdx = stanza.bg.type === 'video' ? videoIndex++ : -1

            return (
              <div
                key={i}
                className="relative flex items-center justify-center overflow-hidden shrink-0"
                style={{ width: '100vw', height: '100vh' }}
              >
                {/* Background */}
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
                    <img
                      src={stanza.bg.src}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                      style={stanza.bg.grayscale ? { filter: 'grayscale(0.85) brightness(0.45) contrast(1.1)' } : undefined}
                      loading="lazy"
                    />
                    {stanza.overlay && <div className={`absolute inset-0 ${stanza.overlay}`} />}
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

                {/* Text content */}
                <div className={`relative z-10 max-w-3xl px-8 md:px-16 ${isLast ? 'text-center' : 'text-center'}`}>
                  {isLast ? (
                    /* Final panel — large typographic reveal */
                    <>
                      <p
                        className="font-display text-6xl md:text-8xl lg:text-9xl text-sky-cream leading-tight tracking-wide"
                        style={{ textShadow: '0 0 60px rgba(168,194,86,0.4), 0 4px 30px rgba(0,0,0,0.7), 0 2px 10px rgba(0,0,0,0.5)' }}
                      >
                        Morpeace
                      </p>
                      <p className="font-poem text-xl md:text-2xl text-sky-cream/80 italic mt-6" style={{ textShadow: textShadowStrong }}>
                        And that is where Morpeace began.
                      </p>
                      {/* Canopy-light glow */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: 'radial-gradient(ellipse at 50% 50%, rgba(168,194,86,0.08) 0%, transparent 60%)',
                        }}
                      />
                    </>
                  ) : (
                    <div className="space-y-6">
                      {stanza.text.map((line, li) => (
                        <p
                          key={li}
                          className="font-poem text-2xl md:text-3xl lg:text-4xl leading-relaxed text-sky-cream/90 italic"
                          style={{ textShadow: textShadowStrong }}
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
    </div>
  )
}
