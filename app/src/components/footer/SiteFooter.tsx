import { Link } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL

export default function SiteFooter() {
  return (
    <footer className="bg-[#014066] text-sky-cream/60 py-16 md:py-20 pad-safe-bottom">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-12">
          {/* Brand */}
          <div>
            <img
              src={`${BASE}logo.png`}
              alt="Morpeace"
              className="h-12 md:h-14 w-auto mb-4"
              style={{ filter: 'brightness(0) invert(1) drop-shadow(0 2px 8px rgba(1,46,67,0.4))' }}
            />
            <p className="font-body text-sm leading-relaxed text-sky-cream/55 italic">
              Morpeace is not being built.
              <br />
              It is becoming.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-display text-xs tracking-[0.2em] uppercase text-sky-cream/40 mb-4">Explore</p>
            <div className="flex flex-col gap-2">
              <Link to="/the-experience" className="font-body text-sm text-sky-cream/60 hover:text-sky-cream/90 transition-colors">At Morpeace</Link>
              <Link to="/the-forest" className="font-body text-sm text-sky-cream/60 hover:text-sky-cream/90 transition-colors">The Forest</Link>
              <Link to="/philosophy" className="font-body text-sm text-sky-cream/60 hover:text-sky-cream/90 transition-colors">Philosophy</Link>
              <Link to="/gallery" className="font-body text-sm text-sky-cream/60 hover:text-sky-cream/90 transition-colors">Gallery</Link>
              <Link to="/team" className="font-body text-sm text-sky-cream/60 hover:text-sky-cream/90 transition-colors">The Team</Link>
              <Link to="/reviews" className="font-body text-sm text-sky-cream/60 hover:text-sky-cream/90 transition-colors">Reviews</Link>
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="font-display text-xs tracking-[0.2em] uppercase text-sky-cream/40 mb-4">Find Us</p>
            <a
              href="https://www.google.com/maps?q=Gat+No+267,+Shivajinagar,+Mugdul+Bhatachiwadi,+Satara,+Maharashtra+415519"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group not-italic"
            >
              <address className="font-body text-sm leading-relaxed text-sky-cream/50 group-hover:text-[#FF7D6B] transition-colors not-italic">
                Gat No 267, Shivajinagar,<br />
                Mugdul Bhatachiwadi,<br />
                Satara, Maharashtra 415519
              </address>
            </a>
          </div>
        </div>

        {/* Divider + partner + copyright */}
        <div className="border-t border-sky-cream/10 pt-6 text-center space-y-2">
          <p className="font-body text-xs text-sky-cream/30">
            Ecology &amp; Technology partner:{' '}
            <a
              href="https://thegreenconcept.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-cream/50 hover:text-[#FF7D6B] transition-colors"
            >
              The Green Concept
            </a>
          </p>
          <p className="font-body text-xs text-sky-cream/30">
            Morpeace · Satara, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  )
}
