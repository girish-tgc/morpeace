'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { guestReviews, type ReviewTag } from '@/data/reviews'
import PairedBookingCTAs from '@/components/nav/PairedBookingCTAs'

gsap.registerPlugin(ScrollTrigger)

const ALL_TAGS: ReviewTag[] = ['hospitality', 'food', 'nature', 'architecture', 'peace']
const TAG_LABELS: Record<ReviewTag, string> = {
  hospitality: 'Hospitality',
  food: 'Cuisine',
  nature: 'Nature',
  architecture: 'Architecture',
  peace: 'Serenity',
}

type GuestMedia =
  | { kind: 'video'; src: string; alt: string; aspect: string }
  | { kind: 'image'; src: string; alt: string; aspect: string }
  | { kind: 'youtube'; id: string; alt: string; aspect: string }

const GUEST_MEDIA: GuestMedia[] = [
  { kind: 'video', src: '/media/guests/guest-compose-reel.mp4', alt: 'Guest reel — moments around the property', aspect: '16/9' },
  { kind: 'youtube', id: 'if5a9Swih7w', alt: 'Guest YouTube reflection', aspect: '16/9' },
  { kind: 'video', src: '/media/guests/guest-portrait-walk.mp4', alt: 'A morning walk on the trail, filmed by a guest', aspect: '9/16' },
  { kind: 'image', src: '/media/guests/guest-snapshot-01.webp', alt: 'A snapshot a guest sent us', aspect: '3/4' },
  { kind: 'video', src: '/media/guests/guest-cottage-at-night.mp4', alt: 'The cottage at night, captured by a guest', aspect: '16/9' },
]

function GuestMediaTile({ item }: { item: GuestMedia }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (item.kind !== 'video' || !videoRef.current) return
    const el = videoRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {})
        else el.pause()
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [item.kind])

  return (
    <div
      data-guest-tile
      className="group relative mb-5 md:mb-6 overflow-hidden rounded-2xl bg-[#012E43]/40 ring-1 ring-sky-cream/12 hover:ring-mango-gold/45 transition-all duration-500"
      style={{ aspectRatio: item.aspect }}
    >
      {item.kind === 'image' && (
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      )}

      {item.kind === 'video' && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={item.alt}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={item.src} type="video/mp4" />
        </video>
      )}

      {item.kind === 'youtube' && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${item.id}?rel=0&modestbranding=1`}
          title={item.alt}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      )}

      {item.kind !== 'image' && (
        <span className="absolute top-3 right-3 eyebrow text-sky-cream/85 bg-[#012E43]/70 backdrop-blur-sm px-2.5 py-1 rounded-full pointer-events-none">
          {item.kind === 'youtube' ? 'youtube' : 'video'}
        </span>
      )}
    </div>
  )
}

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

export default function ReviewsPageClient() {
  const [activeTag, setActiveTag] = useState<ReviewTag | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)
  const filterRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)

  const featured = guestReviews.find(r => r.featured)!
  const filtered = useMemo(() => {
    const others = guestReviews.filter(r => !r.featured)
    if (!activeTag) return others
    return others.filter(r => r.tags.includes(activeTag))
  }, [activeTag])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        const els = heroRef.current.querySelectorAll('[data-hero-animate]')
        gsap.fromTo(els,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, stagger: 0.18, ease: 'power3.out' }
        )
      }

      if (featuredRef.current) {
        gsap.fromTo(featuredRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1, y: 0, scale: 1, duration: 1.4, ease: 'power3.out',
            scrollTrigger: { trigger: featuredRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )
      }

      if (filterRef.current) {
        gsap.fromTo(filterRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: filterRef.current, start: 'top 88%', toggleActions: 'play none none reverse' },
          }
        )
      }

      if (mediaRef.current) {
        const tiles = mediaRef.current.querySelectorAll('[data-guest-tile]')
        gsap.fromTo(tiles,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: mediaRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )
      }
    })
    return () => ctx.revert()
  }, [])

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
      style={{ background: 'linear-gradient(180deg, #012E43 0%, #014066 12%, #096C6C 50%, #014066 100%)' }}
    >
      <section className="pt-32 md:pt-44 px-6 md:px-8 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-mango-gold" />
              <span className="eyebrow text-mango-gold/75">Through Their Lens</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-sky-cream/95 tracking-tight mb-4">
              Captured by Guests
            </h2>
            <p className="font-body text-base md:text-lg text-sky-cream/55 italic max-w-2xl mx-auto leading-relaxed">
              The frames they sent us afterwards — quiet mornings, lit nights, and the small things they wanted to remember.
            </p>
          </div>

          <div ref={mediaRef} className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6">
            {GUEST_MEDIA.map((item, i) => (
              <GuestMediaTile key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative pt-8 md:pt-12 pb-16 md:pb-24 px-6 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(245,240,232,0.5) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="light-dapple" />

        <div ref={heroRef} className="relative max-w-4xl mx-auto text-center">
          <h1
            data-hero-animate
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-sky-cream/95 tracking-tight mb-6"
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

          <div data-hero-animate className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-mango-gold/20 bg-mango-gold/5">
            <Stars size={16} />
            <span className="font-display text-sm text-mango-gold/80 tracking-wide">5.0</span>
            <span className="w-px h-4 bg-sky-cream/15" />
            <span className="font-body text-sm text-sky-cream/50">{guestReviews.length} Reviews</span>
          </div>

          <div data-hero-animate className="mt-14 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-mango-gold/40 to-transparent" />
        </div>
      </section>

      <section className="px-6 md:px-8 pb-16 md:pb-24">
        <div ref={featuredRef} className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl border border-mango-gold/15 bg-gradient-to-br from-mango-gold/[0.06] to-sky-cream/[0.02] backdrop-blur-sm p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 border-t border-l border-mango-gold/20 rounded-tl-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 border-b border-r border-mango-gold/20 rounded-br-3xl pointer-events-none" />

            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-mango-gold" />
              <span className="eyebrow text-mango-gold/75">Featured Review</span>
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
                <span key={tag} className="eyebrow text-sky-cream/35 px-3 py-1 rounded-full border border-sky-cream/10">
                  {TAG_LABELS[tag]}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 pb-12 md:pb-16">
        <div ref={filterRef} className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2 md:gap-3">
          <button
            onClick={() => setActiveTag(null)}
            className={`cta-text px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
              activeTag === null
                ? 'border-mango-gold/55 bg-mango-gold/18 text-mango-gold'
                : 'border-sky-cream/10 text-sky-cream/45 hover:border-sky-cream/25 hover:text-sky-cream/65'
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
                className={`cta-text px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                  activeTag === tag
                    ? 'border-mango-gold/55 bg-mango-gold/18 text-mango-gold'
                    : 'border-sky-cream/10 text-sky-cream/45 hover:border-sky-cream/25 hover:text-sky-cream/65'
                }`}
              >
                {TAG_LABELS[tag]}&nbsp;&nbsp;{count}
              </button>
            )
          })}
        </div>
      </section>

      <section className="px-6 md:px-8 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filtered.map((review, i) => (
              <div
                key={`${review.name}-${review.date}-${i}`}
                data-review-card
                className="group rounded-2xl border border-sky-cream/15 bg-sky-cream/[0.06] backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:border-sky-cream/30 hover:bg-sky-cream/[0.1] hover:-translate-y-1"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
              >
                <Stars size={15} />

                <blockquote className="mt-4 font-body text-base md:text-lg text-sky-cream/90 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                <div className="mt-6 pt-4 border-t border-sky-cream/15">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-canopy-light/15 border border-canopy-light/30 flex items-center justify-center shrink-0">
                      <span className="font-display text-sm text-canopy-light">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-display text-sm md:text-base text-sky-cream">{review.name}</p>
                      <p className="font-body text-xs md:text-sm text-sky-cream/65 italic">{review.date}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {review.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-display text-xs tracking-[0.2em] uppercase text-sky-cream/70 px-2.5 py-1 rounded-full border border-sky-cream/20"
                      >
                        {TAG_LABELS[tag]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-lg text-sky-cream/40 italic">Try a different filter to see more stories</p>
              <button
                onClick={() => setActiveTag(null)}
                className="mt-4 cta-text text-mango-gold/65 hover:text-mango-gold transition-colors cursor-pointer"
              >
                Show all reviews
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 md:py-28 text-center px-6">
        <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-mango-gold/30 to-transparent mb-10" />
        <p className="font-body text-lg md:text-xl text-sky-cream/40 italic max-w-xl mx-auto leading-relaxed mb-8">
          Every visit writes a new chapter in the story of Morpeace
        </p>
        <div className="flex justify-center">
          <PairedBookingCTAs size="md" tone="light" />
        </div>
      </section>
    </div>
  )
}
