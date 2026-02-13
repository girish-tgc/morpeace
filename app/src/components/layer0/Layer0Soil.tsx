import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const textShadow = '0 2px 20px rgba(0,0,0,0.5), 0 1px 6px rgba(0,0,0,0.3)'
const textShadowStrong = '0 2px 24px rgba(0,0,0,0.7), 0 1px 8px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.3)'
const textShadowLight = '0 1px 12px rgba(0,0,0,0.4)'

export default function Layer0Soil() {
  const containerRef = useRef<HTMLDivElement>(null)
  const openingRef = useRef<HTMLDivElement>(null)
  const textRefs = useRef<(HTMLDivElement | null)[]>([])
  const bgRefs = useRef<(HTMLImageElement | HTMLVideoElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return
    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      // Opening fade in
      if (openingRef.current) {
        gsap.fromTo(openingRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 3, delay: 1.5, ease: 'power2.inOut' }
        )
      }

      // Staggered text reveals
      textRefs.current.forEach((ref) => {
        if (!ref) return
        gsap.fromTo(ref,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              end: 'top 40%',
              toggleActions: 'play none none reverse',
            }
          }
        )
      })

      // Parallax on background images (disabled on mobile for perf)
      mm.add('(min-width: 768px)', () => {
        bgRefs.current.forEach((ref) => {
          if (!ref) return
          gsap.to(ref, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: ref.closest('section') || ref.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            }
          })
        })
      })
    }, containerRef)

    return () => { ctx.revert(); mm.revert() }
  }, [])

  return (
    <div ref={containerRef} className="relative">
      {/* === THE DARKNESS === */}
      <section
        className="h-screen flex items-center justify-center relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, #2a4a20 0%, #1b3316 40%, #122410 70%, #0a0f07 100%)' }}
      >
        {/* Breathing glow — layered orbs for depth */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Outer soft glow */}
          <div
            className="absolute forest-breathe-outer rounded-full"
            style={{
              width: '80vmin',
              height: '80vmin',
              background: 'radial-gradient(circle, rgba(107,143,60,0.3) 0%, rgba(42,74,32,0.15) 50%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />
          {/* Inner bright core */}
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
        {/* Breathing vignette — darkens edges on exhale, opens on inhale */}
        <div
          className="absolute inset-0 forest-breathe-vignette pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(10,15,7,0.7) 100%)',
          }}
        />

        <div ref={openingRef} className="opacity-0 relative z-10 max-w-3xl px-8 text-center">
          <p className="font-poem text-3xl md:text-4xl lg:text-5xl leading-relaxed text-sky-cream/90 italic forest-breathe-text">
            "Touch my leaves, and I fold into myself — a shy greeting, a soft boundary."
          </p>
          <div className="mt-12">
            <p className="text-sm tracking-[0.3em] uppercase text-sky-cream/30 font-display">
              scroll to enter the forest
            </p>
            <div className="mt-4 animate-bounce">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mx-auto opacity-25">
                <path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* === CHAPTER 1: A CHILDHOOD IN BLOOM === */}
      <section className="relative overflow-hidden">
        {/* Full-bleed background video — golden hour leaves */}
        <div className="absolute inset-0">
          <video
            ref={el => { bgRefs.current[0] = el as HTMLVideoElement }}
            src={`${import.meta.env.BASE_URL}photos/golden-hour-leaves.mp4`}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70" />
        </div>

        <div
          ref={el => { textRefs.current[0] = el }}
          className="relative z-10 flex items-center min-h-screen"
        >
          <div className="w-full max-w-4xl mx-auto px-8 md:px-16 py-32">
            <h2
              className="font-display text-2xl md:text-4xl tracking-[0.2em] uppercase text-mango-gold mb-14 text-center"
              style={{ textShadow: textShadowStrong }}
            >
              A Childhood in Bloom
            </h2>

            <div className="space-y-10 text-center">
              <p className="font-poem text-2xl md:text-3xl lg:text-4xl leading-relaxed text-sky-cream" style={{ textShadow: textShadowStrong }}>
                Let's rewind to the early 80s. Picture a child in a small town, growing up
                in a joint family with a large ancestral home.
              </p>

              <p className="font-poem text-2xl md:text-3xl leading-relaxed text-sky-cream" style={{ textShadow: textShadowStrong }}>
                A home surrounded by lush greenery —{' '}
                <span className="text-canopy-light italic">mangoes</span>,{' '}
                <span className="text-bark-sienna italic">tamarind</span>,{' '}
                <span className="text-canopy-light italic">gooseberries</span>,{' '}
                <span className="text-mango-green italic">figs</span>,{' '}
                <span className="text-flower-pink italic">guavas</span>, and more.
              </p>

              <p className="font-poem text-2xl md:text-3xl leading-relaxed text-sky-cream" style={{ textShadow: textShadowStrong }}>
                A pond with blooming water lilies, and a tamarind tree so grand it took{' '}
                <span className="font-display italic text-mango-gold">five people</span>{' '}
                to embrace its girth.
              </p>

              <div className="max-w-xl mx-auto pt-6">
                <div className="border-t border-b border-mango-gold/30 py-8">
                  <p className="font-poem text-xl md:text-2xl italic text-sky-cream/90 leading-relaxed" style={{ textShadow: textShadowStrong }}>
                    These weren't just trees; they were companions to a childhood rich in innocence and wonder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === CHAPTER 2: THE PAIN OF PROGRESS === */}
      <section className="relative overflow-hidden">
        {/* Grayscale image — desolation, loss */}
        <div className="absolute inset-0">
          <img
            ref={el => { bgRefs.current[1] = el }}
            src={`${import.meta.env.BASE_URL}photos/tree-stump-fog.jpeg`}
            alt=""
            className="w-full h-full object-cover scale-110"
            style={{ filter: 'grayscale(0.85) brightness(0.45) contrast(1.1)' }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/65" />
        </div>

        <div
          ref={el => { textRefs.current[1] = el }}
          className="relative z-10 flex items-center min-h-screen"
        >
          <div className="w-full max-w-4xl mx-auto px-8 md:px-16 py-32">
            <div className="text-center">
              <h2
                className="font-display text-2xl md:text-4xl tracking-[0.2em] uppercase text-sky-cream mb-14"
                style={{ textShadow: textShadowStrong }}
              >
                The Pain of Progress
              </h2>

              <div className="space-y-10">
                <p className="font-poem text-2xl md:text-3xl leading-relaxed text-sky-cream" style={{ textShadow: textShadowStrong }}>
                  Fast forward to 2005-06. A newly married youth, now in Mumbai,
                  burdened with loans. The ancestral home needed redevelopment.
                </p>
                <p className="font-poem text-2xl md:text-3xl leading-relaxed text-sky-cream/90" style={{ textShadow: textShadowStrong }}>
                  The developer promised to retain the trees, especially the beloved tamarind.
                </p>
                <p className="font-poem text-xl md:text-2xl leading-relaxed text-sky-cream/80 italic" style={{ textShadow: textShadowStrong }}>
                  Trusting those words, the property was handed over.
                </p>

                <div className="max-w-2xl mx-auto py-10 border-y border-strawberry/40">
                  <p className="text-sky-cream text-3xl md:text-5xl font-display leading-snug" style={{ textShadow: textShadowStrong }}>
                    Within a week, every tree was gone —{' '}
                    <span className="text-strawberry italic">uprooted mercilessly</span>.
                  </p>
                  <p className="mt-8 font-poem text-xl md:text-2xl text-sky-cream/80" style={{ textShadow: textShadowStrong }}>
                    The pond was destroyed, and the lilies discarded like debris.
                  </p>
                </div>

                <p className="font-poem text-xl md:text-2xl text-sky-cream/70 italic" style={{ textShadow: textShadowStrong }}>
                  The ground lay barren, a graveyard of childhood memories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === CHAPTER 3: A SILENT VOW === */}
      <section className="relative overflow-hidden">
        {/* Mimosa pudica (touch-me-not) video background — Pexels CC0 */}
        <div className="absolute inset-0">
          <video
            ref={el => { bgRefs.current[2] = el as HTMLVideoElement }}
            src={`${import.meta.env.BASE_URL}photos/mimosa-shy-plant.mp4`}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div
          ref={el => { textRefs.current[2] = el }}
          className="relative z-10 flex items-center justify-center min-h-screen"
        >
          <div className="max-w-3xl mx-auto px-8 md:px-16 py-32 text-center">
            <h2
              className="font-display text-2xl md:text-4xl tracking-[0.2em] uppercase text-leaf-new mb-16"
              style={{ textShadow: textShadowStrong }}
            >
              A Silent Vow
            </h2>

            <div className="space-y-8 font-poem text-xl md:text-2xl leading-relaxed text-sky-cream">
              <p style={{ textShadow }}>
                I stumbled upon a <span className="text-leaf-new font-semibold">'touch-me-not'</span> plant that I had planted —
                a sole survivor in the concrete onslaught.
              </p>
              <p className="text-sky-cream/80 italic" style={{ textShadow }}>
                It was as though an old friend had returned
                to remind me of resilience and hope.
              </p>

              <div className="py-10">
                <p className="font-display text-3xl md:text-5xl text-canopy-light leading-tight" style={{ textShadow }}>
                  A silent vow emerged — a dream to rebuild what had been lost
                  but on a much grander scale.
                </p>
              </div>

              <p style={{ textShadow }}>
                I envisioned a forest — a sanctuary of life, color, and peace.
              </p>
              <p className="text-leaf-new italic" style={{ textShadow }}>
                I carried a part of 'touch me not' with me and planted it in a pot.
                The first step was taken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === CHAPTER 4: THE DREAM TAKES ROOT === */}
      <section className="relative overflow-hidden">
        {/* Roots/seedling growing timelapse video background */}
        <div className="absolute inset-0">
          <video
            ref={el => { bgRefs.current[3] = el as HTMLVideoElement }}
            src={`${import.meta.env.BASE_URL}photos/hands-planting.mp4`}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div
          ref={el => { textRefs.current[3] = el }}
          className="relative z-10 flex items-center min-h-screen"
        >
          <div className="w-full max-w-5xl mx-auto px-8 md:px-16 py-32">
            <h2
              className="font-display text-2xl md:text-4xl tracking-[0.2em] uppercase text-canopy-light mb-12"
              style={{ textShadow: textShadowStrong }}
            >
              The Dream Takes Root
            </h2>

            {/* Organic growth timeline — each era is a verse */}
            <div className="max-w-3xl mx-auto space-y-6">
              <GrowthEra
                year="2009"
                accentColor="#6b8f3c"
                icon="seed"
                align="left"
              >
                Purchased 2.5 acres of agricultural land near Satara.
                Obsessed, I immersed myself in learning about soil, water, and forests.
              </GrowthEra>

              <GrowthEra
                year="2010–15"
                accentColor="#a8c256"
                icon="sprout"
                align="right"
              >
                My parents lovingly joined this journey. We planted tamarind, mangoes,
                wild vegetables, and seasonal flora.
              </GrowthEra>

              <GrowthEra
                year="2015–20"
                accentColor="#5a7247"
                icon="tree"
                align="left"
              >
                The dream expanded. The forest grew to 10 acres,
                complete with a 35,000 sq. ft. lake.
              </GrowthEra>

              <GrowthEra
                year="Today"
                accentColor="#d4a017"
                icon="forest"
                align="right"
              >
                This forest is alive, vibrant, and healing.
                It boasts over 40 varieties of mangoes alone.
              </GrowthEra>
            </div>

            <p className="mt-20 text-center font-display text-2xl md:text-3xl text-sky-cream/80 italic max-w-xl mx-auto" style={{ textShadow }}>
              This no longer remained just a project; it was redemption.
            </p>
          </div>
        </div>
      </section>

      {/* === CHAPTER 5: TODAY — THE REVEAL === */}
      <section className="relative overflow-hidden">
        {/* Forest path as full hero — highly visible */}
        <div className="absolute inset-0">
          <img
            ref={el => { bgRefs.current[4] = el }}
            src={`${import.meta.env.BASE_URL}photos/forest-path.jpeg`}
            alt=""
            className="w-full h-full object-cover scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/80" />
        </div>

        <div
          ref={el => { textRefs.current[4] = el }}
          className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-32"
        >
          <h2
            className="font-display text-2xl md:text-4xl tracking-[0.2em] uppercase text-canopy-light mb-16"
            style={{ textShadow: textShadowStrong }}
          >
            Today
          </h2>

          <p className="font-poem text-2xl md:text-3xl leading-relaxed text-sky-cream mb-16 text-center max-w-xl" style={{ textShadow: textShadowStrong }}>
            This forest appeals to every sense:
          </p>

          {/* Sense cards — single row, artistic circular photos */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-20 w-full px-4">
            <SenseCard sense="Sight" description="Colourful blooms" color="text-flower-pink" accentColor="#d94f6b" photo={`${import.meta.env.BASE_URL}photos/flower-red-closeup.jpeg`} />
            <SenseCard sense="Sound" description="Birdsong & water" color="text-canopy-light" accentColor="#4a7c59" photo={`${import.meta.env.BASE_URL}photos/fish-pond.jpeg`} />
            <SenseCard sense="Smell" description="Fragrant flowers" color="text-sky-cream" accentColor="#b882d4" photo={`${import.meta.env.BASE_URL}photos/flowers-purple-pink.jpeg`} />
            <SenseCard sense="Touch" description="Soothing winds" color="text-canopy-light" accentColor="#a8c256" photo={`${import.meta.env.BASE_URL}photos/forest-dense-vegetation.jpeg`} />
            <SenseCard sense="Taste" description="Ripened fruits" color="text-mango-gold" accentColor="#d4a017" photo={`${import.meta.env.BASE_URL}photos/mangoes-sunlight.jpeg`} />
          </div>

          {/* The big reveal */}
          <div className="text-center">
            <p
              className="font-display text-7xl md:text-9xl text-sky-cream leading-tight tracking-wide"
              style={{ textShadow: '0 0 60px rgba(168,194,86,0.4), 0 4px 30px rgba(0,0,0,0.7), 0 2px 10px rgba(0,0,0,0.5)' }}
            >
              Morpeace
            </p>
            <p
              className="font-poem text-2xl md:text-3xl text-sky-cream italic mt-6"
              style={{ textShadow: textShadowStrong }}
            >
              A place to find more peace
            </p>
            <p className="font-handwritten text-2xl text-mango-gold mt-10" style={{ textShadow: textShadowStrong }}>
              — Rohit Talwalkar
            </p>
          </div>

          <div className="mt-20 animate-bounce text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-sky-cream/40" style={{ textShadow: textShadowLight }}>
              explore the forest below
            </p>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mx-auto mt-2 opacity-30">
              <path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  )
}

// Growth stage SVG icons — seed → sprout → tree → forest
function growthIcon(stage: string, color: string): string {
  const c = color
  if (stage === 'seed') {
    return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="28" rx="8" ry="10" fill="${c}" opacity="0.8"/>
      <path d="M24 18 C24 12 28 8 32 6" stroke="${c}" stroke-width="1.5" fill="none" opacity="0.6"/>
      <circle cx="32" cy="6" r="2" fill="${c}" opacity="0.5"/>
    </svg>`
  }
  if (stage === 'sprout') {
    return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="23" y="24" width="2" height="16" rx="1" fill="${c}" opacity="0.6"/>
      <ellipse cx="18" cy="22" rx="6" ry="8" fill="${c}" opacity="0.7" transform="rotate(-20 18 22)"/>
      <ellipse cx="30" cy="20" rx="5" ry="7" fill="${c}" opacity="0.6" transform="rotate(15 30 20)"/>
      <ellipse cx="24" cy="42" rx="8" ry="2" fill="${c}" opacity="0.2"/>
    </svg>`
  }
  if (stage === 'tree') {
    return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="28" width="4" height="14" rx="2" fill="${c}" opacity="0.5"/>
      <circle cx="24" cy="18" r="12" fill="${c}" opacity="0.7"/>
      <circle cx="18" cy="22" r="7" fill="${c}" opacity="0.5"/>
      <circle cx="30" cy="21" r="8" fill="${c}" opacity="0.5"/>
      <circle cx="21" cy="14" r="3" fill="rgba(255,255,255,0.15)"/>
      <ellipse cx="24" cy="44" rx="10" ry="2" fill="${c}" opacity="0.15"/>
    </svg>`
  }
  // forest
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="30" width="3" height="10" rx="1" fill="${c}" opacity="0.4"/>
    <circle cx="14" cy="22" r="9" fill="${c}" opacity="0.6"/>
    <circle cx="10" cy="26" r="5" fill="${c}" opacity="0.4"/>
    <rect x="30" y="28" width="3" height="12" rx="1" fill="${c}" opacity="0.5"/>
    <circle cx="32" cy="18" r="11" fill="${c}" opacity="0.7"/>
    <circle cx="37" cy="22" r="6" fill="${c}" opacity="0.5"/>
    <rect x="22" y="32" width="2" height="8" rx="1" fill="${c}" opacity="0.35"/>
    <circle cx="23" cy="26" r="7" fill="${c}" opacity="0.5"/>
    <circle cx="20" cy="15" r="3" fill="rgba(255,255,255,0.12)"/>
    <circle cx="34" cy="13" r="2.5" fill="rgba(255,255,255,0.12)"/>
    <ellipse cx="24" cy="44" rx="18" ry="2.5" fill="${c}" opacity="0.12"/>
  </svg>`
}

function GrowthEra({ year, accentColor, icon, align, children }: {
  year: string
  accentColor: string
  icon: string
  align: 'left' | 'right'
  children: React.ReactNode
}) {
  const isRight = align === 'right'
  return (
    <div className={`flex items-start gap-6 ${isRight ? 'flex-row-reverse text-right' : ''}`}>
      {/* Icon */}
      <div
        className="shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
        style={{ backgroundColor: `${accentColor}18`, border: `1px solid ${accentColor}40` }}
        dangerouslySetInnerHTML={{ __html: growthIcon(icon, accentColor) }}
      />
      {/* Content */}
      <div className="flex-1 py-1">
        <p
          className="font-display text-3xl md:text-5xl tracking-wide mb-3"
          style={{ color: accentColor, textShadow: `0 2px 20px ${accentColor}40, 0 1px 6px rgba(0,0,0,0.5)` }}
        >
          {year}
        </p>
        <p
          className="font-poem text-lg md:text-xl text-sky-cream/90 leading-relaxed"
          style={{ textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}
        >
          {children}
        </p>
      </div>
    </div>
  )
}

function SenseCard({ sense, description, color, accentColor, photo }: { sense: string; description: string; color: string; accentColor: string; photo: string }) {
  return (
    <div className="text-center group w-32 md:flex-1 md:min-w-0">
      {/* Outer glow ring */}
      <div
        className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto mb-3 md:mb-4 rounded-full p-[3px] transition-all duration-500 group-hover:scale-105"
        style={{
          background: `linear-gradient(135deg, ${accentColor}80, transparent 50%, ${accentColor}60)`,
          boxShadow: `0 0 30px ${accentColor}30, 0 8px 32px rgba(0,0,0,0.5)`,
        }}
      >
        <div className="w-full h-full rounded-full overflow-hidden">
          <img
            src={photo}
            alt={sense}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
        </div>
      </div>
      <p
        className={`font-display text-base md:text-xl tracking-[0.15em] uppercase ${color} mt-2 font-semibold`}
        style={{ textShadow: `0 0 24px ${accentColor}90, 0 2px 12px rgba(0,0,0,0.9)` }}
      >
        {sense}
      </p>
      <p
        className="font-poem text-base md:text-xl text-sky-cream/90 mt-1"
        style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}
      >
        {description}
      </p>
    </div>
  )
}
