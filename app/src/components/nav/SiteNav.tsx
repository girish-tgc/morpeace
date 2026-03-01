import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MobileMenu from './MobileMenu'

const NAV_LINKS = [
  { to: '/', label: 'Morpeace' },
  { to: '/the-becoming', label: 'The Becoming' },
  { to: '/the-forest', label: 'The Forest' },
  { to: '/the-experience', label: 'The Experience' },
  { to: '/come', label: 'Come' },
] as const

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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-parchment/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`font-display text-xl md:text-2xl tracking-wide transition-colors ${
              scrolled ? 'text-[#1a2e1a]' : 'text-sky-cream'
            }`}
          >
            Morpeace
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
                      ? scrolled ? 'text-[#1B6B5A]' : 'text-sky-cream'
                      : scrolled ? 'text-[#1a2e1a]/70 hover:text-[#1a2e1a]' : 'text-sky-cream/70 hover:text-sky-cream'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden p-2 transition-colors ${
              scrolled ? 'text-[#1a2e1a]' : 'text-sky-cream'
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
