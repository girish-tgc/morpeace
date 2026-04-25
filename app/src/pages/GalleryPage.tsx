import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead from '../components/SeoHead'
import { breadcrumbSchema } from '../lib/seo/schema'
import { gallerySections } from '../data/gallery'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL

function MediaTile({ src, alt, type, poster }: { src: string; alt: string; type: 'image' | 'video'; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (type !== 'video' || !videoRef.current) return
    const el = videoRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {})
        else el.pause()
      },
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [type])

  return (
    <div
      data-gallery-tile
      className="group relative overflow-hidden rounded-xl aspect-[3/2] md:aspect-[4/3] bg-[#014066]/40 ring-1 ring-sky-cream/10 hover:ring-[#F5EBD0]/40 transition-all duration-500"
    >
      {type === 'image' ? (
        <img
          src={`${BASE}${src}`}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      ) : (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster ? `${BASE}${poster}` : undefined}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={`${BASE}${src}`} type="video/mp4" />
        </video>
      )}
      {/* Cool wash to pull warm images into palette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(50,104,114,0.14)', mixBlendMode: 'multiply' }}
      />
      {/* Video badge */}
      {type === 'video' && (
        <span className="absolute top-3 right-3 eyebrow text-sky-cream/80 bg-[#012E43]/70 backdrop-blur-sm px-2.5 py-1 rounded-full">
          video
        </span>
      )}
    </div>
  )
}

export default function GalleryPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!pageRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (prefersReduced) return

      if (heroRef.current) {
        const lines = heroRef.current.querySelectorAll('[data-hero-line]')
        gsap.fromTo(lines,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1.1, stagger: 0.12, ease: 'power3.out' },
        )
      }

      const tiles = pageRef.current!.querySelectorAll('[data-gallery-tile]')
      tiles.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
          },
        )
      })

      const headers = pageRef.current!.querySelectorAll('[data-section-header]')
      headers.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
          },
        )
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={pageRef}
      className="text-sky-cream"
      style={{ background: 'linear-gradient(180deg, #012E43 0%, #014066 10%, #096C6C 50%, #014066 100%)' }}
    >
      <SeoHead
        title="Gallery — Morpeace | The Villa, The Forest, The Land at Night"
        description="Photographs and film from Morpeace — the villa and its glass-wall interiors, the 10-acre regenerated forest, the pool and lake, the watchtower, and the land at night."
        path="/gallery"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery' },
        ])}
      />
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_top,_rgba(1,103,149,0.25),_transparent_60%)]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-cream/15 to-transparent" />
        </div>

        <div ref={heroRef} className="relative z-10 mx-auto max-w-4xl px-6 md:px-8 text-center">
          <p data-hero-line className="mb-8 eyebrow text-[#F5EBD0]">
            Morpeace &nbsp;&mdash;&nbsp; the archive
          </p>
          <h1
            data-hero-line
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-sky-cream leading-[1.05]"
            style={{ textShadow: '0 2px 20px rgba(1,46,67,0.5)' }}
          >
            Gallery
          </h1>
          <p
            data-hero-line
            className="mt-6 max-w-2xl mx-auto font-body text-lg md:text-xl italic text-sky-cream/75"
          >
            The land, as it reveals itself — section by section.
          </p>
          <div data-hero-line className="mt-10 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#E94A3C]/50 to-transparent" />
        </div>
      </section>

      {/* Anchor nav */}
      <nav className="sticky top-[calc(4rem+env(safe-area-inset-top))] md:top-[calc(5rem+env(safe-area-inset-top))] z-40 bg-[#012E43]/85 backdrop-blur-md border-y border-sky-cream/10 overflow-x-auto scrollbar-hide">
        <div className="flex justify-start md:justify-center gap-6 md:gap-8 px-6 py-3.5 min-w-max">
          {gallerySections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="eyebrow text-sky-cream/55 hover:text-[#F5EBD0] transition-colors whitespace-nowrap"
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Sections */}
      <div className="pb-24 md:pb-32">
        {gallerySections.map((section) => (
          <section key={section.id} id={section.id} className="relative scroll-mt-28 py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-6 md:px-8">
              <div data-section-header className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
                <p className="eyebrow text-[#F5EBD0]/75 mb-3">{section.label}</p>
                <h2 className="font-display text-3xl md:text-4xl text-sky-cream mb-4">
                  {section.heading}
                </h2>
                <div className="w-10 h-0.5 bg-[#E94A3C]/70 mx-auto mb-4" />
                <p className="font-body text-base md:text-lg italic text-sky-cream/65">
                  {section.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {section.items.map((item, i) => (
                  <MediaTile key={`${section.id}-${i}`} {...item} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
