import { Link } from 'react-router-dom'

export default function SiteFooter() {
  return (
    <footer className="bg-[#1a2e1a] text-sky-cream/60 py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl text-sky-cream/90 mb-3">Morpeace</p>
            <p className="font-body text-sm leading-relaxed text-sky-cream/50 italic">
              A forest that remembers
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-display text-xs tracking-[0.2em] uppercase text-sky-cream/40 mb-4">Explore</p>
            <div className="flex flex-col gap-2">
              <Link to="/the-becoming" className="font-body text-sm text-sky-cream/60 hover:text-sky-cream/90 transition-colors">The Becoming</Link>
              <Link to="/the-forest" className="font-body text-sm text-sky-cream/60 hover:text-sky-cream/90 transition-colors">The Forest</Link>
              <Link to="/the-experience" className="font-body text-sm text-sky-cream/60 hover:text-sky-cream/90 transition-colors">The Experience</Link>
              <Link to="/come" className="font-body text-sm text-sky-cream/60 hover:text-sky-cream/90 transition-colors">Come</Link>
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="font-display text-xs tracking-[0.2em] uppercase text-sky-cream/40 mb-4">Find Us</p>
            <a
              href="https://www.google.com/maps?q=17.6105,73.9895"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <p className="font-handwritten text-xl text-sky-cream/50 group-hover:text-mango-gold transition-colors">
                17.6105°N, 73.9895°E
              </p>
              <p className="font-body text-xs text-sky-cream/30 mt-1">Near Satara, Maharashtra</p>
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
              className="text-sky-cream/50 hover:text-canopy-light transition-colors"
            >
              The Green Concept
            </a>
          </p>
          <p className="font-body text-xs text-sky-cream/30">
            Morpeace · Near Satara, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  )
}
