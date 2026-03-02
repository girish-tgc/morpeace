import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { caretakers, guestReviews } from '../data/reviews'
import LetterForm from '../components/home/LetterForm'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL
const textShadow = '0 2px 20px rgba(0,0,0,0.6), 0 1px 6px rgba(0,0,0,0.4)'
const textShadowStrong = '0 2px 24px rgba(0,0,0,0.7), 0 1px 8px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.3)'

export default function ComePage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLImageElement>(null)
  const voicesHeaderRef = useRef<HTMLDivElement>(null)
  const caretakerRefs = useRef<(HTMLDivElement | null)[]>([])
  const guestHeaderRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      // Content fade-in
      if (contentRef.current) {
        gsap.fromTo(contentRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 2, ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            }
          }
        )
      }

      // Parallax on background (desktop only)
      mm.add('(min-width: 768px)', () => {
        if (bgRef.current) {
          gsap.to(bgRef.current, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            }
          })
        }
      })

      // Voices header fade
      if (voicesHeaderRef.current) {
        gsap.fromTo(voicesHeaderRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1.4, ease: 'power3.out',
            scrollTrigger: { trigger: voicesHeaderRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )
      }

      // Caretaker cards staggered
      caretakerRefs.current.forEach((ref, i) => {
        if (!ref) return
        gsap.fromTo(ref,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 1, delay: i * 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: ref, start: 'top 88%', toggleActions: 'play none none reverse' },
          }
        )
      })

      // Guest header
      if (guestHeaderRef.current) {
        gsap.fromTo(guestHeaderRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: guestHeaderRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )
      }

      // Guest scroll container
      if (scrollRef.current) {
        gsap.fromTo(scrollRef.current,
          { opacity: 0 },
          {
            opacity: 1, duration: 1.2, ease: 'power2.out',
            scrollTrigger: { trigger: scrollRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
          }
        )
      }
    }, sectionRef)

    return () => { ctx.revert(); mm.revert() }
  }, [])

  return (
    <div data-audio-zone="layer4-sky">
      {/* === CINEMATIC DARK SECTION — Invitations + Founder === */}
      <section ref={sectionRef} className="relative overflow-hidden bg-forest-night">
        {/* Dark forest background */}
        <div className="absolute inset-0">
          <img
            ref={bgRef}
            src={`${BASE}photos/forest-dense-vegetation.jpeg`}
            alt=""
            className="w-full h-full object-cover scale-110"
            style={{ filter: 'brightness(0.35) saturate(1.2)' }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-night/60 via-transparent to-forest-night/80" />
          <div className="light-dapple" />
        </div>

        <div ref={contentRef} className="relative z-10 max-w-3xl mx-auto px-8 md:px-12 py-16 md:py-24">
          {/* Opening */}
          <div className="text-center mb-12">
            <p className="font-body text-2xl md:text-3xl leading-relaxed italic text-sky-cream/90" style={{ textShadow }}>
              What began as one man&rsquo;s quiet listening has grown into an open door &mdash;
              not a resort or hotel, but <span className="text-canopy-light">your own home</span>.
            </p>
          </div>

          {/* The four invitations */}
          <div className="space-y-4 mb-12 text-center">
            <p className="font-body text-2xl md:text-3xl text-sky-cream" style={{ textShadow }}>
              A place to <span className="text-canopy-light italic">lose yourself</span> & <span className="text-canopy-light italic">find yourself</span>
            </p>
            <p className="font-body text-2xl md:text-3xl text-sky-cream/90" style={{ textShadow }}>
              A place to <span className="text-mango-gold italic">create memories</span>
            </p>
            <p className="font-body text-xl md:text-2xl text-sky-cream/80 leading-relaxed" style={{ textShadow }}>
              A place to reconnect with what matters most &mdash;
              <br /><span className="text-leaf-new italic">your roots and your family</span>
            </p>
            <p className="font-body text-2xl md:text-3xl text-sky-cream" style={{ textShadow }}>
              A sanctuary to <span className="text-canopy-light italic">revisit</span> and <span className="text-canopy-light italic">renew</span> your spirit
            </p>
          </div>

          {/* Rohit's closing */}
          <div className="text-center mb-16">
            <p className="font-body text-xl md:text-2xl italic text-sky-cream/60 mb-3" style={{ textShadow }}>
              After all, what else can I ask for &mdash;
            </p>
            <p
              className="font-devanagari text-2xl md:text-3xl italic text-mango-gold mb-8"
              style={{ textShadow: textShadowStrong }}
            >
              &lsquo;Dil hai chhota sa, chhoti si aasha.&rsquo;
            </p>

            <p className="font-body text-2xl md:text-3xl text-sky-cream" style={{ textShadow }}>
              This is your home &mdash; ever welcoming, ever yours.
            </p>
            <p className="mt-4 font-handwritten text-2xl text-mango-gold/80" style={{ textShadow: textShadowStrong }}>
              &mdash; Rohit Talwalkar
            </p>
          </div>

          {/* Photo strip */}
          <div className="flex justify-center gap-4 md:gap-8 mb-28">
            {[`${BASE}photos/flowers-vivid-pink.jpeg`, `${BASE}photos/turtle.jpeg`, `${BASE}photos/flower-red-closeup.jpeg`].map((src, i) => (
              <div
                key={i}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-sky-cream/20 hover:border-sky-cream/50 transition-all"
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
              >
                <img src={src} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Write a letter — dark version */}
          <LetterForm dark />

          {/* GPS */}
          <div className="mt-24 text-center">
            <a
              href="https://www.google.com/maps?q=17.6105,73.9895"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <p className="font-handwritten text-3xl md:text-4xl text-sky-cream/50 transition-colors group-hover:text-mango-gold" style={{ textShadow }}>
                17.6105°N, 73.9895°E
              </p>
              <p className="font-body text-base mt-2 text-sky-cream/30 transition-colors group-hover:text-mango-gold/70">
                find us on the map
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* === VOICES OF MORPEACE === */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #0a0f07 0%, #1b2a14 30%, #1b2a14 70%, #0a0f07 100%)',
        }}
      >
        {/* Section header */}
        <div ref={voicesHeaderRef} className="text-center px-8 mb-16 md:mb-20">
          <p
            className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-canopy-light/70 mb-6"
            style={{ textShadow }}
          >
            Voices of Morpeace
          </p>
          <p
            className="font-body text-xl md:text-2xl text-sky-cream/80 italic max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow }}
          >
            A forest is shaped by every hand that tends it
            <br />and every soul that passes through.
          </p>
        </div>

        {/* === The People === */}
        <div className="max-w-5xl mx-auto px-6 md:px-8 mb-20 md:mb-28">
          <p
            className="font-display text-xs md:text-sm tracking-[0.25em] uppercase text-mango-gold/60 mb-8 text-center"
            style={{ textShadow }}
          >
            The People Who Tend This Land
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {caretakers.map((person, i) => (
              <div
                key={person.name}
                ref={el => { caretakerRefs.current[i] = el }}
                className="rounded-2xl border border-sky-cream/10 bg-sky-cream/5 backdrop-blur-sm p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-canopy-light/15 border border-canopy-light/25 flex items-center justify-center shrink-0">
                    <span className="font-display text-sm text-canopy-light/80">
                      {person.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-sm text-sky-cream/90">{person.name}</p>
                    <p className="font-body text-xs text-sky-cream/50 italic">{person.role}</p>
                  </div>
                </div>
                <p className="font-body text-sm md:text-base text-sky-cream/60 italic leading-relaxed">
                  {person.placeholder ? (
                    <span className="text-sky-cream/40">{person.text}</span>
                  ) : (
                    person.text
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* === Guest Testimonials === */}
        <div ref={guestHeaderRef} className="text-center px-8 mb-8">
          <p
            className="font-display text-xs md:text-sm tracking-[0.25em] uppercase text-mango-gold/60"
            style={{ textShadow }}
          >
            What Our Guests Say
          </p>
        </div>

        <div ref={scrollRef} className="relative">
          <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-6 pt-2 snap-x snap-mandatory px-6 md:px-8">
            <div className="shrink-0 w-2 md:w-8" />
            {guestReviews.map((review) => (
              <div
                key={review.name}
                className="shrink-0 w-72 md:w-80 rounded-2xl snap-start border border-sky-cream/10 bg-sky-cream/5 backdrop-blur-sm p-6"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-mango-gold/70">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <p className="font-body text-sm text-sky-cream/80 leading-relaxed mb-4 line-clamp-6">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="border-t border-sky-cream/10 pt-3">
                  <p className="font-display text-xs text-sky-cream/70">{review.name}</p>
                  <p className="font-body text-xs text-sky-cream/40 italic">{review.date}</p>
                </div>
              </div>
            ))}
            <div className="shrink-0 w-2 md:w-8" />
          </div>

          {/* Fade edges */}
          <div className="absolute top-0 left-0 bottom-0 w-8 pointer-events-none bg-gradient-to-r from-[#1b2a14] to-transparent" />
          <div className="absolute top-0 right-0 bottom-0 w-8 pointer-events-none bg-gradient-to-l from-[#1b2a14] to-transparent" />
        </div>
      </section>
    </div>
  )
}
