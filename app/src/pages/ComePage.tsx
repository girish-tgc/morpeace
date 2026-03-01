import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { caretakers, guestReviews } from '../data/reviews'
import LetterForm from '../components/home/LetterForm'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL
const textShadow = '0 2px 20px rgba(0,0,0,0.5), 0 1px 6px rgba(0,0,0,0.3)'

export default function ComePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      mm.add('(min-width: 768px)', () => {
        if (bgRef.current) {
          gsap.to(bgRef.current, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
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
    <div data-audio-zone="layer4-sky">
      {/* === HERO — Invitations === */}
      <section ref={heroRef} className="relative overflow-hidden min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <div className="ken-burns-c absolute inset-0">
              <img
                ref={bgRef}
                src={`${BASE}photos/forest-dense-vegetation.jpeg`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover scale-110"
                style={{ filter: 'brightness(0.35) saturate(1.2)' }}
                loading="lazy"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-forest-night/60 via-transparent to-forest-night/80" />
          <div className="light-dapple" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-8 py-20 text-center">
          <p className="font-body text-xl md:text-2xl leading-relaxed italic text-sky-cream/90 mb-8" style={{ textShadow }}>
            What began as one man&rsquo;s quiet listening has grown into an open door &mdash;
            not a resort or hotel, but <span className="text-canopy-light">your own home</span>.
          </p>
          <div className="space-y-4">
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
        </div>
      </section>

      {/* === THE FOUNDER === */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-canvas">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-xs tracking-[0.3em] uppercase text-turmeric/60 mb-6">
            The Founder
          </p>

          <p className="font-body text-xl md:text-2xl italic text-text-deep/60 mb-3">
            After all, what else can I ask for &mdash;
          </p>
          <p className="font-devanagari text-2xl md:text-3xl italic text-turmeric mb-8">
            &lsquo;Dil hai chhota sa, chhoti si aasha.&rsquo;
          </p>

          <p className="font-body text-xl md:text-2xl text-text-deep mb-4">
            This is your home &mdash; ever welcoming, ever yours.
          </p>
          <p className="font-handwritten text-2xl text-turmeric/80">
            &mdash; Rohit Talwalkar
          </p>

          {/* Photo strip */}
          <div className="flex justify-center gap-4 md:gap-8 mt-12">
            {[`${BASE}photos/flowers-vivid-pink.jpeg`, `${BASE}photos/turtle.jpeg`, `${BASE}photos/flower-red-closeup.jpeg`].map((src, i) => (
              <div
                key={i}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-text-deep/10 hover:border-teal-deep/30 transition-all"
              >
                <img src={src} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CARETAKERS === */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-parchment">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-display text-xs tracking-[0.3em] uppercase text-teal-deep/60 mb-3">
              The People Who Tend This Land
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {caretakers.map(person => (
              <div
                key={person.name}
                className="rounded-2xl border border-text-deep/10 bg-canvas p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-teal-deep/10 border border-teal-deep/20 flex items-center justify-center shrink-0">
                    <span className="font-display text-sm text-teal-deep">{person.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-display text-sm text-text-deep">{person.name}</p>
                    <p className="font-body text-xs text-text-deep/50 italic">{person.role}</p>
                  </div>
                </div>
                <p className="font-body text-sm md:text-base text-text-deep/60 italic leading-relaxed">
                  {person.placeholder ? (
                    <span className="text-text-deep/40">{person.text}</span>
                  ) : (
                    person.text
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === GUEST VOICES === */}
      <section className="py-16 md:py-20 bg-canvas">
        <div className="text-center px-8 mb-10">
          <p className="font-display text-xs tracking-[0.3em] uppercase text-turmeric/60 mb-3">
            What Our Guests Say
          </p>
          <p className="font-body text-xl md:text-2xl text-text-deep/80 italic max-w-2xl mx-auto leading-relaxed">
            A forest is shaped by every hand that tends it
            <br />and every soul that passes through.
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-6 pt-2 snap-x snap-mandatory px-6 md:px-8">
            <div className="shrink-0 w-2 md:w-8" />
            {guestReviews.map((review) => (
              <div
                key={review.name}
                className="shrink-0 w-72 md:w-80 rounded-2xl snap-start border border-text-deep/10 bg-canvas p-6"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-turmeric/70">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <p className="font-body text-sm text-text-deep/70 leading-relaxed mb-4 line-clamp-6">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="border-t border-text-deep/10 pt-3">
                  <p className="font-display text-xs text-text-deep/70">{review.name}</p>
                  <p className="font-body text-xs text-text-deep/40 italic">{review.date}</p>
                </div>
              </div>
            ))}
            <div className="shrink-0 w-2 md:w-8" />
          </div>

          {/* Fade edges */}
          <div className="absolute top-0 left-0 bottom-0 w-8 pointer-events-none bg-gradient-to-r from-canvas to-transparent" />
          <div className="absolute top-0 right-0 bottom-0 w-8 pointer-events-none bg-gradient-to-l from-canvas to-transparent" />
        </div>
      </section>

      {/* === LETTER FORM === */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-canvas">
        <div className="max-w-2xl mx-auto">
          <LetterForm />
        </div>
      </section>

      {/* === PRACTICAL INFO === */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-parchment">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-xs tracking-[0.3em] uppercase text-text-deep/40 mb-8">
            Find Us
          </p>
          <a
            href="https://www.google.com/maps?q=17.6105,73.9895"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group"
          >
            <p className="font-handwritten text-3xl md:text-4xl text-text-deep/50 transition-colors group-hover:text-turmeric">
              17.6105°N, 73.9895°E
            </p>
            <p className="font-body text-base mt-2 text-text-deep/30 transition-colors group-hover:text-turmeric/70">
              find us on the map
            </p>
          </a>
          <p className="font-body text-sm text-text-deep/40 mt-6">
            Near Satara, Maharashtra
          </p>
        </div>
      </section>
    </div>
  )
}
