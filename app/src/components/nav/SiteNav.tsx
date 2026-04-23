import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import PairedBookingCTAs from './PairedBookingCTAs'
import { whatsappLink } from '../../data/contact'

const BASE = import.meta.env.BASE_URL

const NAV_LINKS = [
  { to: '/', label: 'Morpeace' },
  { to: '/origin', label: 'Origin' },
  { to: '/the-forest', label: 'The Forest' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/menu', label: 'Menu' },
  { to: '/team', label: 'The Team' },
  { to: '/reviews', label: 'Reviews' },
] as const

const DRAWER_LINKS = [
  { to: '/', label: 'Home' },
  ...NAV_LINKS.slice(1),
] as const

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

          <div className="hidden md:flex items-center gap-7">
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
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message us on WhatsApp"
              className={`inline-flex items-center justify-center w-9 h-9 rounded-full transition-all md:hover:scale-105 active:scale-95 ${
                solid
                  ? 'bg-[#25D366] text-white hover:bg-[#1fb558]'
                  : 'bg-[#25D366]/90 text-white hover:bg-[#25D366]'
              }`}
              title="WhatsApp us"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.49 0 .18 5.31.18 11.87a11.78 11.78 0 001.59 5.94L0 24l6.35-1.67a11.9 11.9 0 005.7 1.45h.01c6.56 0 11.87-5.31 11.87-11.87 0-3.17-1.23-6.15-3.41-8.43zM12.06 21.8h-.01a9.91 9.91 0 01-5.05-1.38l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.82 9.82 0 01-1.51-5.28c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 016.99 2.9 9.8 9.8 0 012.89 6.99c0 5.46-4.44 9.92-9.9 9.92zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"/>
              </svg>
            </a>
            <PairedBookingCTAs
              size="md"
              tone={solid ? 'light' : 'dark'}
            />
          </div>

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

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} links={DRAWER_LINKS} />
    </>
  )
}
