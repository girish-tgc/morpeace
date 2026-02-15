import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Layer4Sky() {
  const [letter, setLetter] = useState('')
  const [sent, setSent] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
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
    }, sectionRef)

    return () => { ctx.revert(); mm.revert() }
  }, [])

  const handleSend = () => {
    if (letter.trim()) {
      const mailtoLink = `mailto:rstalwalkar@yahoo.com?subject=A letter to Morpeace&body=${encodeURIComponent(letter)}`
      window.open(mailtoLink, '_blank')
      setSent(true)
    }
  }

  const textShadow = '0 2px 20px rgba(0,0,0,0.6), 0 1px 6px rgba(0,0,0,0.4)'
  const textShadowStrong = '0 2px 24px rgba(0,0,0,0.7), 0 1px 8px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.3)'

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-forest-night">
      {/* Dark forest background */}
      <div className="absolute inset-0">
        <img
          ref={bgRef}
          src={`${import.meta.env.BASE_URL}photos/forest-dense-vegetation.jpeg`}
          alt=""
          className="w-full h-full object-cover scale-110"
          style={{ filter: 'brightness(0.35) saturate(1.2)' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-night/60 via-transparent to-forest-night/80" />
      </div>

      <div ref={contentRef} className="relative z-10 max-w-3xl mx-auto px-8 md:px-12 py-16 md:py-24">
        {/* Opening */}
        <div className="text-center mb-12">
          <p className="font-poem text-2xl md:text-3xl leading-relaxed italic text-sky-cream/90" style={{ textShadow }}>
            What began as one man&rsquo;s quiet listening has grown into an open door &mdash;
            not a resort or hotel, but <span className="text-canopy-light">your own home</span>.
          </p>
        </div>

        {/* The four invitations */}
        <div className="space-y-4 mb-12 text-center">
          <p className="font-poem text-2xl md:text-3xl text-sky-cream" style={{ textShadow }}>
            A place to <span className="text-canopy-light italic">lose yourself</span> & <span className="text-canopy-light italic">find yourself</span>
          </p>
          <p className="font-poem text-2xl md:text-3xl text-sky-cream/90" style={{ textShadow }}>
            A place to <span className="text-mango-gold italic">create memories</span>
          </p>
          <p className="font-poem text-xl md:text-2xl text-sky-cream/80 leading-relaxed" style={{ textShadow }}>
            A place to reconnect with what matters most —
            <br /><span className="text-leaf-new italic">your roots and your family</span>
          </p>
          <p className="font-poem text-2xl md:text-3xl text-sky-cream" style={{ textShadow }}>
            A sanctuary to <span className="text-canopy-light italic">revisit</span> and <span className="text-canopy-light italic">renew</span> your spirit
          </p>
        </div>

        {/* Rohit's closing */}
        <div className="text-center mb-16">
          <p className="font-poem text-xl md:text-2xl italic text-sky-cream/60 mb-3" style={{ textShadow }}>
            After all, what else can I ask for —
          </p>
          <p
            className="font-devanagari text-2xl md:text-3xl italic text-mango-gold mb-8"
            style={{ textShadow: textShadowStrong }}
          >
            'Dil hai chhota sa, chhoti si aasha.'
          </p>

          <p className="font-poem text-2xl md:text-3xl text-sky-cream" style={{ textShadow }}>
            This is your home — ever welcoming, ever yours.
          </p>
          <p className="mt-4 font-handwritten text-2xl text-mango-gold/80" style={{ textShadow: textShadowStrong }}>
            — Rohit Talwalkar
          </p>
        </div>

        {/* Photo strip — circular, matching site aesthetic */}
        <div className="flex justify-center gap-4 md:gap-8 mb-28">
          {[`${import.meta.env.BASE_URL}photos/flowers-vivid-pink.jpeg`, `${import.meta.env.BASE_URL}photos/turtle.jpeg`, `${import.meta.env.BASE_URL}photos/flower-red-closeup.jpeg`].map((src, i) => (
            <div
              key={i}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-sky-cream/20 hover:border-sky-cream/50 transition-all"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
            >
              <img src={src} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Write a letter */}
        <div className="pt-12 border-t border-sky-cream/10">
          <h3 className="font-display text-center text-sm tracking-[0.3em] uppercase mb-10 text-sky-cream/40" style={{ textShadow }}>
            Write a Letter to Morpeace
          </h3>

          {!sent ? (
            <div
              className="rounded-2xl p-8 md:p-10 backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(12,26,14,0.7)',
                border: '1px solid rgba(107,143,60,0.15)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
            >
              <p className="font-handwritten text-2xl mb-5 text-sky-cream/50">Dear Morpeace,</p>
              <textarea
                value={letter}
                onChange={e => setLetter(e.target.value)}
                placeholder="Share your thoughts, memories, or wishes..."
                className="w-full h-44 bg-transparent font-poem text-lg leading-relaxed resize-none focus:outline-none text-sky-cream/80 placeholder:text-sky-cream/20"
              />
              <div className="flex justify-end mt-4">
                <button
                  onClick={handleSend}
                  disabled={!letter.trim()}
                  className="group flex items-center gap-3 px-8 py-3 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 bg-leaf-new/15 border border-leaf-new/30"
                >
                  <span className="font-display text-sm tracking-wider text-canopy-light/80">Send</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-canopy-light/60 group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14m0 0l-6-6m6 6l-6 6" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center p-10">
              <p className="font-poem text-2xl italic text-canopy-light/80" style={{ textShadow }}>
                Your letter has been carried on the wind.
              </p>
              <p className="font-poem text-base mt-3 text-sky-cream/40">
                Thank you for writing to Morpeace.
              </p>
            </div>
          )}
        </div>

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
            <p className="font-poem text-base mt-2 text-sky-cream/30 transition-colors group-hover:text-mango-gold/70">
              find us on the map
            </p>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-28 text-center">
          <div className="w-px h-12 mx-auto mb-6 bg-sky-cream/10" />
          <p className="font-display text-sm tracking-[0.3em] uppercase text-sky-cream/40">
            Morpeace · Near Satara, Maharashtra
          </p>
          <p className="font-poem text-sm mt-2 italic text-sky-cream/20">
            A forest that remembers
          </p>
        </div>
      </div>
    </section>
  )
}
