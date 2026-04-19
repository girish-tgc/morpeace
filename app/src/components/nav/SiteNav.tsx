import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MobileMenu from './MobileMenu'

const BASE = import.meta.env.BASE_URL

const NAV_LINKS = [
  { to: '/', label: 'Morpeace' },
  { to: '/the-experience', label: 'At Morpeace' },
  { to: '/the-forest', label: 'The Forest' },
  { to: '/philosophy', label: 'Philosophy' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/team', label: 'The Team' },
  { to: '/reviews', label: 'Reviews' },
] as const

const BOOKING_URL = 'https://www.stayvista.com/villa/rustic-haven?adult=6&child=0&infant=0&pax_selected=false&rooms_booked=3&reference_number=prop673b7f18be369lqw7kij&from=card'

// Routes whose hero uses the mist/canvas palette — nav needs its solid style
// from the top, otherwise white nav text vanishes against the light background.
const LIGHT_HERO_PATHS: string[] = []

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const hasLightHero = LIGHT_HERO_PATHS.some(
    p => pathname === p || pathname.startsWith(`${p}/`),
  )
  const solid = scrolled || hasLightHero

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 pad-safe-top transition-all duration-500 ${
          solid
            ? 'bg-parchment/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="Morpeace">
            <img
              src={`${BASE}logo.webp`}
              alt="Morpeace"
              className="h-10 md:h-12 w-auto transition-[filter] duration-500"
              style={{
                filter: solid
                  ? 'none'
                  : 'brightness(0) invert(1) drop-shadow(0 2px 8px rgba(1,46,67,0.45))',
              }}
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.slice(1).map(link => {
              const active = pathname === link.to || (link.to !== '/' && pathname.startsWith(link.to))
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-body text-sm tracking-wide transition-colors ${
                    active
                      ? solid ? 'text-[#016795]' : 'text-sky-cream'
                      : solid ? 'text-[#012E43]/70 hover:text-[#012E43]' : 'text-sky-cream/70 hover:text-sky-cream'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-display text-xs tracking-[0.2em] uppercase px-5 py-2 rounded-full border transition-all md:hover:scale-105 active:scale-95 ${
                solid
                  ? 'border-[#E94A3C] text-[#E94A3C] hover:bg-[#E94A3C]/10'
                  : 'border-[#FF7D6B]/70 text-[#FF7D6B] hover:bg-[#FF7D6B]/10'
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden p-2 transition-colors ${
              solid ? 'text-[#012E43]' : 'text-sky-cream'
            }`}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} links={NAV_LINKS.slice(1)} />
    </>
  )
}
