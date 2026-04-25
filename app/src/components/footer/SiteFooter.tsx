import { Link } from 'react-router-dom'
import { ADDRESS_LINES, MAPS_URL } from '../../data/contact'

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
              src={`${BASE}logo.webp`}
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
              <Link to="/the-forest" className="font-body text-sm text-sky-cream/60 hover:text-sky-cream/90 transition-colors">Biodiversity</Link>
              <Link to="/philosophy" className="font-body text-sm text-sky-cream/60 hover:text-sky-cream/90 transition-colors">Philosophy</Link>
              <Link to="/gallery" className="font-body text-sm text-sky-cream/60 hover:text-sky-cream/90 transition-colors">Gallery</Link>
              <Link to="/menu" className="font-body text-sm text-sky-cream/60 hover:text-sky-cream/90 transition-colors">Menu</Link>
              <Link to="/team" className="font-body text-sm text-sky-cream/60 hover:text-sky-cream/90 transition-colors">Team</Link>
              <Link to="/reviews" className="font-body text-sm text-sky-cream/60 hover:text-sky-cream/90 transition-colors">Reviews</Link>
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="font-display text-xs tracking-[0.2em] uppercase text-sky-cream/40 mb-4">Find Us</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2.5 group not-italic"
              aria-label="Open property location in Google Maps"
            >
              <svg
                className="w-4 h-4 mt-0.5 flex-shrink-0 text-sky-cream/50 group-hover:text-[#F5EBD0] transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <address className="font-body text-sm leading-relaxed text-sky-cream/50 group-hover:text-[#F5EBD0] transition-colors not-italic">
                  {ADDRESS_LINES.flatMap((line, i) =>
                    i === 0 ? [line] : [<br key={`br-${i}`} />, line],
                  )}
                </address>
                <span className="mt-2 inline-flex items-center gap-1 font-display text-xs tracking-[0.2em] uppercase text-[#F5EBD0]/70 group-hover:text-[#F5EBD0] transition-colors">
                  Open in Google Maps
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M7 17L17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </span>
              </div>
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
              className="text-sky-cream/50 hover:text-[#F5EBD0] transition-colors"
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
