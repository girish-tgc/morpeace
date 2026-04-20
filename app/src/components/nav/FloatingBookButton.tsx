const BOOKING_URL =
  'https://www.stayvista.com/villa/rustic-haven?adult=6&child=0&infant=0&pax_selected=false&rooms_booked=3&reference_number=prop673b7f18be369lqw7kij&from=card'

export default function FloatingBookButton() {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book your stay at Morpeace"
      className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-40 inline-flex items-center gap-2 rounded-full border border-[#FF7D6B]/60 bg-[#012E43]/70 backdrop-blur-md px-4 py-2.5 font-display text-[11px] md:text-xs tracking-[0.2em] uppercase text-[#FF7D6B] shadow-[0_6px_24px_rgba(2,18,28,0.45)] hover:text-sky-cream hover:border-[#FF7D6B] hover:bg-[#FF7D6B]/15 active:scale-95 transition-all duration-300"
      style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))' }}
    >
      <span
        aria-hidden
        className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF7D6B] shadow-[0_0_10px_rgba(255,125,107,0.8)]"
      />
      Book
    </a>
  )
}
