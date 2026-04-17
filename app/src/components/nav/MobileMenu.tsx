import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

interface Props {
  open: boolean
  onClose: () => void
  links: readonly { to: string; label: string }[]
}

export default function MobileMenu({ open, onClose, links }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    if (!overlayRef.current || !panelRef.current) return

    if (open) {
      document.body.style.overflow = 'hidden'
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' })
      gsap.fromTo(panelRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.4, ease: 'power3.out' }
      )
    } else {
      document.body.style.overflow = ''
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.2 })
      gsap.to(panelRef.current, { x: '100%', duration: 0.3, ease: 'power2.in' })
    }

    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-[#012E43]/50 opacity-0"
        onClick={onClose}
      />

      {/* Slide-out panel */}
      <div
        ref={panelRef}
        className="absolute top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-mist shadow-2xl flex flex-col overflow-y-auto pad-safe-top pad-safe-bottom"
        style={{ transform: 'translateX(100%)' }}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 text-[#012E43]/60 hover:text-[#012E43]"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 px-6 pt-4">
          {links.map(link => {
            const active = pathname === link.to || (link.to !== '/' && pathname.startsWith(link.to))
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={onClose}
                className={`font-body text-lg py-3 px-4 rounded-xl transition-colors ${
                  active
                    ? 'text-[#016795] bg-[#016795]/10'
                    : 'text-[#012E43]/80 hover:text-[#012E43] hover:bg-[#012E43]/5'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Book Now */}
        <div className="px-6 pt-6">
          <a
            href="https://www.stayvista.com/villa/rustic-haven?adult=6&child=0&infant=0&pax_selected=false&rooms_booked=3&reference_number=prop673b7f18be369lqw7kij&from=card"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="block text-center cta-text px-5 py-3 rounded-full border border-[#E94A3C] text-[#E94A3C] hover:bg-[#E94A3C]/10 transition-all"
          >
            Book Now
          </a>
        </div>

        {/* Footer */}
        <div className="mt-auto p-6 border-t border-[#012E43]/10">
          <address className="font-body text-xs leading-relaxed text-[#012E43]/55 not-italic">
            Gat No 267, Shivajinagar,<br />
            Mugdul Bhatachiwadi,<br />
            Satara, Maharashtra 415519
          </address>
        </div>
      </div>
    </div>
  )
}
