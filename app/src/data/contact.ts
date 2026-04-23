export const CONTACT = {
  whatsappE164: '+91XXXXXXXXXX',
  phoneE164: '+91XXXXXXXXXX',
  whatsappDisplay: '+91 XXXXX XXXXX',
  defaultWhatsappMessage:
    "Hi Morpeace! I'd like to check availability for a stay. Could you share details?",
} as const

export const ADDRESS_LINES = [
  'Gat No 267, Shivajinagar,',
  'Mugdul Bhatachiwadi,',
  'Satara, Maharashtra 415519',
] as const

export const MAPS_URL =
  'https://www.google.com/maps/place/StayVista+at+Rustic+Haven+%7C+Villa+with+Private+Pool+in+Satara/@17.6105128,73.9891524,17z'

export const MAPS_EMBED_URL =
  'https://www.google.com/maps?q=17.6105128,73.9891524&hl=en&z=13&output=embed'

export const BOOKING_URL_VILLA =
  'https://www.stayvista.com/villa/rustic-haven?adult=6&child=0&infant=0&pax_selected=false&rooms_booked=3&reference_number=prop673b7f18be369lqw7kij&from=card'

export const BOOKING_URL_ROOM =
  'https://www.stayvista.com/villa/rustic-haven?adult=2&child=0&infant=0&pax_selected=false&reference_number=prop673b7f18be369lqw7kij&from=card'

export const whatsappLink = (msg: string = CONTACT.defaultWhatsappMessage): string =>
  `https://wa.me/${CONTACT.whatsappE164.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`

export const telLink = (): string => `tel:${CONTACT.phoneE164}`
