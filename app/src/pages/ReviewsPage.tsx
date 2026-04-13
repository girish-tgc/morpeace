import { useState, useRef, useEffect, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { guestReviews, type ReviewTag } from '../data/reviews'

gsap.registerPlugin(ScrollTrigger)

const ALL_TAGS: ReviewTag[] = ['hospitality', 'food', 'nature', 'architecture', 'peace']
const TAG_LABELS: Record<ReviewTag, string> = {
  hospitality: 'Hospitality',
  food: 'Cuisine',
  nature: 'Nature',
  architecture: 'Architecture',
  peace: 'Serenity',
}

const BOOKING_URL = 'https://www.stayvista.com/villa/rustic-haven?adult=6&child=0&infant=0&pax_selected=false&rooms_booked=3&reference_number=prop673b7f18be369lqw7kij&from=card'

function Stars({ count = 5, size = 14 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-mango-gold">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  const [activeTag, setActiveTag] = useState<ReviewTag | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)
  const filterRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const featured = guestReviews.find(r => r.featured)!
  const filtered = useMemo(() => {
    const others = guestReviews.filter(r => !r.featured)
    if (!activeTag) return others
    return others.filter(r => r.tags.includes(activeTag))
  }, [activeTag])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero elements stagger in
      if (heroRef.current) {
        const els = heroRef.current.querySelectorAll('[data-hero-animate]')
        gsap.fromTo(els,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, stagger: 0.18, ease: 'power3.out' }
        )
      }

      // Featured card
      if (featuredRef.current) {
        gsap.fromTo(featuredRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1, y: 0, scale: 1, duration: 1.4, ease: 'power3.out',
            scrollTrigger: { trigger: featuredRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )
      }

      // Filter bar
      if (filterRef.current) {
        gsap.fromTo(filterRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: filterRef.current, start: 'top 88%', toggleActions: 'play none none reverse' },
          }
        )
      }
    })
    return () => ctx.revert()
  }, [])

  // Animate cards on filter change
  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('[data-review-card]')
    gsap.fromTo(cards,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out' }
    )
  }, [filtered])

  return (
    <div
      className="min-h-screen"
      style={{ background: 'linear-gradient(180deg, #0a0f07 0%, #0f2313 8%, #162a14 40%, #0f2313 85%, #0a0f07 100%)' }}
    >
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 px-6 md:px-8 overflow-hidden">
        {/* Subtle dot texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(245,240,232,0.5) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Light dapple atmosphere */}
        <div className="light-dapple" />

        <div ref={heroRef} className="relative max-w-4xl mx-auto text-center">
          {/* Decorative oversized quote mark */}
          <div data-hero-animate className="mb-4">
            <span
              className="inline-block font-display text-[120px] md:text-[180px] leading-none text-mango-gold/[0.08] select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
          </div>

          <h1
            data-hero-animate
            className="font-display text-4xl md:text-6xl lg:text-7xl text-sky-cream/95 tracking-tight -mt-20 md:-mt-32 mb-6"
            style={{ textShadow: '0 2px 40px rgba(0,0,0,0.5)' }}
          >
            Guest Voices
          </h1>

          <p
            data-hero-animate
            className="font-body text-lg md:text-xl text-sky-cream/50 italic max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Heartfelt reflections from those who found their sanctuary among the trees
          </p>

          {/* Rating summary pill */}
          <div data-hero-animate className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-mango-gold/20 bg-mango-gold/5">
            <Stars size={16} />
            <span className="font-display text-sm text-mango-gold/80 tracking-wide">5.0</span>
            <span className="w-px h-4 bg-sky-cream/15" />
            <span className="font-body text-sm text-sky-cream/50">{guestReviews.length} Reviews</span>
          </div>

          {/* Golden divider */}
          <div data-hero-animate className="mt-14 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-mango-gold/40 to-transparent" />
        </div>
      </section>

      {/* ═══ FEATURED REVIEW ═══ */}
      <section className="px-6 md:px-8 pb-16 md:pb-24">
        <div ref={featuredRef} className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl border border-mango-gold/15 bg-gradient-to-br from-mango-gold/[0.06] to-sky-cream/[0.02] backdrop-blur-sm p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 border-t border-l border-mango-gold/20 rounded-tl-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 border-b border-r border-mango-gold/20 rounded-br-3xl pointer-events-none" />

            {/* Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-mango-gold" />
              <span className="font-display text-[10px] md:text-xs tracking-[0.3em] uppercase text-mango-gold/70">
                Featured Review
              </span>
            </div>

            <Stars size={18} />

            <blockquote className="mt-6 font-body text-lg md:text-xl lg:text-2xl text-sky-cream/85 leading-relaxed italic">
              &ldquo;{featured.text}&rdquo;
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-mango-gold/15 border border-mango-gold/25 flex items-center justify-center shrink-0">
                <span className="font-display text-lg text-mango-gold/80">{featured.name.charAt(0)}</span>
              </div>
              <div>
                <p className="font-display text-sm md:text-base text-sky-cream/90">{featured.name}</p>
                <p className="font-body text-xs md:text-sm text-sky-cream/40 italic">{featured.date}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {featured.tags.map(tag => (
                <span key={tag} className="font-display text-[10px] tracking-[0.15em] uppercase text-sky-cream/30 px-3 py-1 rounded-full border border-sky-cream/10">
                  {TAG_LABELS[tag]}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FILTER BAR ═══ */}
      <section className="px-6 md:px-8 pb-12 md:pb-16">
        <div ref={filterRef} className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2 md:gap-3">
          <button
            onClick={() => setActiveTag(null)}
            className={`font-display text-[11px] md:text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
              activeTag === null
                ? 'border-mango-gold/50 bg-mango-gold/15 text-mango-gold'
                : 'border-sky-cream/10 text-sky-cream/40 hover:border-sky-cream/25 hover:text-sky-cream/60'
            }`}
          >
            All
          </button>
          {ALL_TAGS.map(tag => {
            const count = guestReviews.filter(r => !r.featured && r.tags.includes(tag)).length
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`font-display text-[11px] md:text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                  activeTag === tag
                    ? 'border-mango-gold/50 bg-mango-gold/15 text-mango-gold'
                    : 'border-sky-cream/10 text-sky-cream/40 hover:border-sky-cream/25 hover:text-sky-cream/60'
                }`}
              >
                {TAG_LABELS[tag]}&nbsp;&nbsp;{count}
              </button>
            )
          })}
        </div>
      </section>

      {/* ═══ REVIEW GRID ═══ */}
      <section className="px-6 md:px-8 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filtered.map((review) => (
              <div
                key={review.name}
                data-review-card
                className="group rounded-2xl border border-sky-cream/[0.06] bg-sky-cream/[0.03] backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:border-sky-cream/15 hover:bg-sky-cream/[0.06] hover:-translate-y-1"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
              >
                <Stars size={13} />

                <blockquote className="mt-4 font-body text-sm md:text-[15px] text-sky-cream/70 leading-relaxed italic line-clamp-6 group-hover:line-clamp-none transition-all">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                <div className="mt-6 pt-4 border-t border-sky-cream/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-canopy-light/10 border border-canopy-light/20 flex items-center justify-center shrink-0">
                      <span className="font-display text-xs text-canopy-light/70">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-display text-xs md:text-sm text-sky-cream/80">{review.name}</p>
                      <p className="font-body text-[11px] text-sky-cream/35 italic">{review.date}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {review.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-display text-[9px] tracking-[0.12em] uppercase text-sky-cream/25 px-2 py-0.5 rounded-full border border-sky-cream/[0.06]"
                      >
                        {TAG_LABELS[tag]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-lg text-sky-cream/40 italic">No reviews match this filter</p>
              <button
                onClick={() => setActiveTag(null)}
                className="mt-4 font-display text-xs tracking-[0.15em] uppercase text-mango-gold/60 hover:text-mango-gold transition-colors cursor-pointer"
              >
                Show all reviews
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ═══ CLOSING CTA ═══ */}
      <section className="py-20 md:py-28 text-center px-6">
        <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-mango-gold/30 to-transparent mb-10" />
        <p className="font-body text-lg md:text-xl text-sky-cream/40 italic max-w-xl mx-auto leading-relaxed mb-8">
          Every visit writes a new chapter in the story of Morpeace
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-display text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-full border border-mango-gold/40 text-mango-gold/80 hover:bg-mango-gold/10 hover:border-mango-gold/60 transition-all duration-300"
        >
          Write Your Own Story
        </a>
      </section>
    </div>
  )
}
