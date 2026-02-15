import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { trailChapters, trailClosingLesson } from '../../data/adventureTrail'
import type { TrailChapter } from '../../data/adventureTrail'

gsap.registerPlugin(ScrollTrigger)

const textShadow = '0 2px 20px rgba(0,0,0,0.5), 0 1px 6px rgba(0,0,0,0.3)'

export default function AdventureTrail() {
  const [selectedChapter, setSelectedChapter] = useState<TrailChapter | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const heroImgRef = useRef<HTMLImageElement>(null)
  const closingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(heroRef.current.querySelectorAll('[data-animate]'),
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            }
          }
        )
      }

      if (closingRef.current) {
        gsap.fromTo(closingRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 1.5, ease: 'power3.out',
            scrollTrigger: {
              trigger: closingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        )
      }

      mm.add('(min-width: 768px)', () => {
        if (heroImgRef.current) {
          gsap.to(heroImgRef.current, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: heroImgRef.current.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            }
          })
        }
      })
    })

    return () => { ctx.revert(); mm.revert() }
  }, [])

  return (
    <div data-audio-zone="adventure-trail">
      {/* === CINEMATIC HERO === */}
      <div ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          ref={heroImgRef}
          src={`${import.meta.env.BASE_URL}photos/forest-path.jpeg`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-forest-night" />
        <div className="relative z-10 text-center px-8 py-20">
          <h2
            data-animate
            className="font-display text-base md:text-lg tracking-[0.3em] uppercase text-canopy-light/80 mb-6"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}
          >
            The Adventure Trail
          </h2>
          <p
            data-animate
            className="font-display text-3xl md:text-5xl text-sky-cream mb-6"
            style={{ textShadow }}
          >
            A Storybook of the Land
          </p>
          <p
            data-animate
            className="font-poem text-lg md:text-xl text-sky-cream/80 italic max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}
          >
            Five young ones once wandered through my home. Here is what the land whispered to them.
          </p>
        </div>
      </div>

      {/* === HORIZONTAL SCROLL TRAIL === */}
      <div className="py-16 md:py-20 px-4 md:px-8">
        <div
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollPaddingLeft: '1rem' }}
        >
          {/* Leading spacer for centering on mobile */}
          <div className="shrink-0 w-2 md:w-4" />

          {trailChapters.map((chapter, i) => (
            <button
              key={chapter.id}
              onClick={() => setSelectedChapter(chapter)}
              className="group shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03] relative text-left snap-start"
              style={{
                background: `linear-gradient(160deg, ${chapter.accentColor}, ${chapter.accentColor}cc)`,
                boxShadow: `0 6px 28px ${chapter.accentColor}40`,
              }}
            >
              <div className="p-6">
                {/* Chapter number */}
                <p className="font-handwritten text-sm mb-2 text-white/70">
                  {i === 0 ? 'Prologue' : i === trailChapters.length - 1 ? 'Epilogue' : `Chapter ${i}`}
                </p>

                {/* Title */}
                <h3 className="font-display text-lg md:text-xl text-white group-hover:text-white/90 transition-colors leading-tight mb-3">
                  {chapter.title}
                </h3>

                {/* Lesson pill */}
                <span className="inline-block text-xs px-2.5 py-0.5 rounded-full font-display tracking-wider uppercase mb-4 bg-white/20 text-white/90 border border-white/25">
                  {chapter.lesson}
                </span>

                {/* Excerpt */}
                <p className="font-poem text-sm text-white/75 leading-relaxed line-clamp-3 mb-5">
                  {chapter.excerpt}
                </p>

                {/* Read link */}
                <span className="font-display text-xs tracking-wider uppercase text-white/50 group-hover:text-white/80 transition-colors">
                  Read the story &rarr;
                </span>
              </div>

              {/* Hover brighten */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ boxShadow: `inset 0 0 40px rgba(255,255,255,0.08), 0 12px 40px ${chapter.accentColor}50` }}
              />
            </button>
          ))}

          {/* Trailing spacer */}
          <div className="shrink-0 w-2 md:w-4" />
        </div>
      </div>

      {/* === CLOSING LESSON === */}
      <div ref={closingRef} className="max-w-3xl mx-auto px-8 pb-20 text-center">
        <div className="w-px h-10 mx-auto mb-8 bg-canopy-light/20" />
        <p className="font-poem text-xl md:text-2xl lg:text-3xl text-sky-cream/70 italic leading-relaxed">
          &ldquo;{trailClosingLesson}&rdquo;
        </p>
      </div>

      {/* === CHAPTER DETAIL OVERLAY === */}
      {selectedChapter && (
        <ChapterDetail chapter={selectedChapter} onClose={() => setSelectedChapter(null)} />
      )}
    </div>
  )
}

function ChapterDetail({ chapter, onClose }: { chapter: TrailChapter; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null)
  const chapterIndex = trailChapters.findIndex(c => c.id === chapter.id)

  useEffect(() => {
    if (!panelRef.current) return
    gsap.fromTo(panelRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    )
  }, [])

  // Prevent body scroll while overlay is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm overflow-y-auto" data-lenis-prevent onClick={onClose}>
      <div
        ref={panelRef}
        className="max-w-2xl mx-auto py-16 px-6 md:px-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button onClick={onClose} className="fixed top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-soil-deep/60 text-sky-cream/60 hover:text-sky-cream hover:bg-soil-deep/80 z-10 transition-all">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        <div
          className="rounded-2xl p-8 md:p-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #faf6ef, #f0e8d8)',
            border: `1px solid ${chapter.accentColor}30`,
            boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
          }}
        >
          {/* Accent strip */}
          <div
            className="absolute top-0 left-0 right-0 h-1.5"
            style={{ background: `linear-gradient(90deg, transparent, ${chapter.accentColor}80, transparent)` }}
          />

          {/* Header */}
          <div className="mb-10 pb-8 border-b border-soil-warm/15">
            <p
              className="font-handwritten text-lg mb-2"
              style={{ color: chapter.accentColor }}
            >
              {chapterIndex === 0 ? 'Prologue' : chapterIndex === trailChapters.length - 1 ? 'Epilogue' : `Chapter ${chapterIndex}`}
            </p>
            <h3 className="font-display text-2xl md:text-4xl text-soil-deep">{chapter.title}</h3>
            <p className="font-poem text-sm text-soil-warm/60 italic mt-2">{chapter.location}</p>
          </div>

          {/* Speaker quote */}
          <div
            className="mb-10 p-5 rounded-xl"
            style={{
              backgroundColor: `${chapter.accentColor}10`,
              border: `1px solid ${chapter.accentColor}20`,
            }}
          >
            <p className="font-poem text-lg text-soil-deep/80 italic leading-relaxed">
              &ldquo;{chapter.speakerQuote}&rdquo;
            </p>
          </div>

          {/* Full text */}
          <div className="mb-10">
            {chapter.fullText.split('\n\n').map((paragraph, i) => (
              <p key={i} className="font-poem text-base text-soil-warm/80 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Lesson */}
          <div className="pt-8 border-t border-soil-warm/15 text-center">
            <p className="font-display text-xs tracking-wider uppercase text-soil-warm/50 mb-2">The Lesson</p>
            <p
              className="font-display text-lg tracking-wider"
              style={{ color: chapter.accentColor }}
            >
              {chapter.lesson}
            </p>
          </div>
        </div>

        <p className="text-center mt-6 font-poem text-xs text-sky-cream/40">
          click outside to close
        </p>
      </div>
    </div>
  )
}
