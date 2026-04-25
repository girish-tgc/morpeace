import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import PairedBookingCTAs from './PairedBookingCTAs'
import { whatsappLink, telLink, CONTACT, ADDRESS_LINES, MAPS_URL } from '../../data/contact'

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

        <div className="px-6 pt-6">
          <PairedBookingCTAs
            tone="drawer"
            size="md"
            stack
            fullWidth
            onNavigate={onClose}
          />
        </div>

        <div className="px-6 pt-4 flex gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white font-display text-xs tracking-[0.2em] uppercase hover:bg-[#1fb558] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.49 0 .18 5.31.18 11.87a11.78 11.78 0 001.59 5.94L0 24l6.35-1.67a11.9 11.9 0 005.7 1.45h.01c6.56 0 11.87-5.31 11.87-11.87 0-3.17-1.23-6.15-3.41-8.43zM12.06 21.8h-.01a9.91 9.91 0 01-5.05-1.38l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.82 9.82 0 01-1.51-5.28c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 016.99 2.9 9.8 9.8 0 012.89 6.99c0 5.46-4.44 9.92-9.9 9.92zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"/>
            </svg>
            WhatsApp
          </a>
          <a
            href={telLink()}
            onClick={onClose}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#0E7EC0] text-white font-display text-xs tracking-[0.2em] uppercase hover:bg-[#016795] transition-colors"
            aria-label={`Call ${CONTACT.whatsappDisplay}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.9.35 1.84.59 2.8.72A2 2 0 0 1 22 16.92z" />
            </svg>
            Call
          </a>
        </div>

        {/* Footer */}
        <div className="mt-auto p-6 border-t border-[#012E43]/10">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-2 group not-italic"
            aria-label="Open property location in Google Maps"
          >
            <svg
              className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#012E43]/55 group-hover:text-[#012E43]/85 transition-colors"
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
              <address className="font-body text-xs leading-relaxed text-[#012E43]/55 group-hover:text-[#012E43]/85 transition-colors not-italic">
                {ADDRESS_LINES.flatMap((line, i) =>
                  i === 0 ? [line] : [<br key={`br-${i}`} />, line],
                )}
              </address>
              <span className="mt-1.5 inline-flex items-center gap-1 font-display text-[10px] tracking-[0.18em] uppercase text-[#012E43]/70 group-hover:text-[#012E43] transition-colors">
                Open in Google Maps
                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17L17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
