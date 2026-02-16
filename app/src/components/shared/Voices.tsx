import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const shadow = '0 2px 20px rgba(0,0,0,0.5), 0 1px 6px rgba(0,0,0,0.3)'

interface Voice {
  name: string
  role: string
  text: string
  placeholder?: boolean
}

const caretakers: Voice[] = [
  {
    name: 'Rajendra & Sangita',
    role: 'Caretaker Family',
    text: 'Placeholder — their story of living and working on this land, caring for every guest and every tree.',
    placeholder: true,
  },
  {
    name: 'Ganesh & Tara',
    role: 'Caretaker Family',
    text: 'Placeholder — their connection to the food they cook, the soil they tend, and the life they nurture here.',
    placeholder: true,
  },
  {
    name: 'Architect',
    role: 'Architect',
    text: 'Placeholder — the vision behind the structure, building with the land rather than on it.',
    placeholder: true,
  },
  {
    name: 'Contractor',
    role: 'Contractor',
    text: 'Placeholder — the hands that shaped the walls, the craft of working alongside nature.',
    placeholder: true,
  },
]

interface GuestReview {
  name: string
  date: string
  text: string
}

const guestReviews: GuestReview[] = [
  {
    name: 'Anjal Raj',
    date: 'September 2024',
    text: 'Nestled amidst serene environment, full of greenery and nature, is this very amazing and tastefully done up house which is bound to uplift your mood! Well done Mr. Rohit. The watch tower gives a 360 degree view of the landscape and star gazing at night and is worth the efforts. The home staff and caretaker were very hospitable and prepared food which was extremely delicious! Special mention goes to the gavran chicken! All in all I would say that this was a great find and a delight to have spent our weekend here. Sure to be back soon!',
  },
  {
    name: 'Arindam Sarkar',
    date: 'August 2025',
    text: 'Excellent hospitality and a beautiful location. We stayed here just for a night on our way to goa but already plan a longer stay to enjoy the beauty of this place. The house is tastefully done with adequate light and has a lovely plunge pool which faces a stream. The caretakers and his family take very good care and the food is outstanding and I would highly recommended to try the local fare of which they are a master. It scores high for us as its pet friendly and your pet will have a lot of space to run around off leash.',
  },
  {
    name: 'Sushma Poojary',
    date: 'October 2024',
    text: 'Beautiful Property wonderful service and property is maintained very well. Surely recommending this property for spending time with friends and family. Must Visit!! Rooms: Very well maintained rooms, cleanliness as required for the travellers..perfect stay. Food and drinks: Good service by the caretakers Rajendra, Ganesh, Sangita and Tara bai. They made the stay very comfortable. Food taste is good, maharashtrian authentic food very enjoyable.',
  },
  {
    name: 'Arya Wadwalkar',
    date: 'January 2025',
    text: 'My family & I stayed at Rustic Haven by Stay Vista in Satara for one night, and it was truly an unforgettable experience. From the moment we arrived, we were greeted with warm hospitality by the house help and caretakers, who were incredibly polite, kind, and attentive to every detail. The villa itself is breathtaking spacious, meticulously clean, and even more stunning than the pictures on Google. We were amazed at how thoughtfully everything was organized. The owner of the villa is an absolute gentleman, going above and beyond to ensure we had a memorable stay. He provided us with a lavish spread of delicious food, featuring unique dishes we had never tried before, and every bite was an absolute delight. The villa\u2019s surroundings are nothing short of magical, with lush greenery, vibrant flowers, and fresh produce grown right on their own farm. Waking up to the serene beauty of nature here was an experience we will cherish forever. It\u2019s the perfect place to unwind, reconnect with nature.',
  },
  {
    name: 'Manish Bhardwaj',
    date: 'September 2024',
    text: 'Plush Farmstay amidst beautiful surroundings. Food and service quality is exceptional. Very tastefully done up with attention to every minute detail. Bathrooms, furniture, crockery and cutlery are of the highest quality. Located very close to the highway yet in complete serenity. It\u2019s dog friendly and has a beautiful pool.',
  },
  {
    name: 'Yash Suchak',
    date: 'January 2025',
    text: 'A beautiful homely experience. Rohit has made the place with all his heart and it shows. We had a great time with our dog here. And the food here is delicious! Don\u2019t miss it!',
  },
  {
    name: 'Shivani W',
    date: 'February 2025',
    text: 'We truly had a lovely stay. It\u2019s such a beautiful location. The villa is lovely, clean and the hospitality was exceptional with Ganesh being very warm and attentive. Looking forward on visiting again.',
  },
  {
    name: 'Paras',
    date: 'December 2024',
    text: 'Rustic Haven by StayVista was an absolute delight! The villa was beautifully designed with a perfect blend of modern amenities and rustic charm. The serene location and peaceful atmosphere made it an ideal getaway for relaxation. The staff provided exceptional service, making our stay even more enjoyable. Highly recommend this place for anyone looking for a tranquil retreat!',
  },
  {
    name: 'Kushagra Sahu',
    date: 'December 2024',
    text: 'Had a lovely stay! Ganesh and his family took great care of us and the food was lovely.',
  },
  {
    name: 'Hemant Pawar',
    date: 'November 2024',
    text: 'Awesome stay, great staff and organic pure food. Loved and enjoyed my stay with family. Would definitely suggest.',
  },
  {
    name: 'Preety Priya',
    date: 'November 2024',
    text: 'Had an amazing stay at Rustic Haven. The staff is so polite and helpful. The food is delicious. Rooms are spacious and clean. The property is away from the city chaos. Will definitely come back.',
  },
  {
    name: 'Akshay Ranjanikar',
    date: 'November 2024',
    text: 'We had an absolutely delightful stay at Rustik Haven - Satara the property is serence well maintained and toughtfully designed to ensure a comfertable and memorable experience. A special mention goes to the caretaker Ganesh and his family who went above and beyond to make our stay truly special. His warmth attentiveness and willingness to assist with anything we needed added a personal touch to our visit. He ensured we felt at home throughout our stay.',
  },
  {
    name: 'Akash Sapra',
    date: 'October 2024',
    text: 'Rustic setting. Cool vibes, very courteous staff and great food. Nice for weekend getaway with family. Highly recommended.',
  },
  {
    name: 'Arindam Sanyal',
    date: 'October 2024',
    text: 'Lovely home.. in the middle of almost nowhere... Picturesque sunset and nice cold winter nights!! It was an amazing experience and the caretaker Ganesh and his Mother served us absolutely amazingly.. and her food.. words fall short.',
  },
  {
    name: 'Abhishek Jain',
    date: 'October 2024',
    text: 'The villa is too good and ambience is great. A great place to have fun with family and friends. The caretakers are very helpful and polite.',
  },
  {
    name: 'Abhijit Koli',
    date: 'September 2024',
    text: 'Superb expierience, caretaker ganesh and his family are very good and humble..... highly recomanded for family...... best luck',
  },
  {
    name: 'Pratik Deokar',
    date: 'September 2024',
    text: 'stay was perfect, Ganesh was the best Host. villa is properly maintained. would love to visit again',
  },
  {
    name: 'Ameya Gholap',
    date: 'September 2024',
    text: 'Rustic haven is a great farmside villa. Highly recommend.',
  },
  {
    name: 'Nishad Nair',
    date: 'August 2024',
    text: 'We found the best care taker for villa, our infant was most happiest with all arrangement',
  },
  {
    name: 'Swati Desai',
    date: 'August 2024',
    text: 'The privacy amid green fields for a family get together in a luxurious setting',
  },
]

export default function Voices() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const caretakerRefs = useRef<(HTMLDivElement | null)[]>([])
  const guestHeaderRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Header fade in
      if (headerRef.current) {
        gsap.fromTo(headerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1.4, ease: 'power3.out',
            scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )
      }

      // Caretaker cards staggered
      caretakerRefs.current.forEach((ref, i) => {
        if (!ref) return
        gsap.fromTo(ref,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 1, delay: i * 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: ref, start: 'top 88%', toggleActions: 'play none none reverse' },
          }
        )
      })

      // Guest header
      if (guestHeaderRef.current) {
        gsap.fromTo(guestHeaderRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: guestHeaderRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )
      }

      // Guest scroll container
      if (scrollRef.current) {
        gsap.fromTo(scrollRef.current,
          { opacity: 0 },
          {
            opacity: 1, duration: 1.2, ease: 'power2.out',
            scrollTrigger: { trigger: scrollRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
          }
        )
      }
    }, sectionRef)

    return () => { ctx.revert() }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0a0f07 0%, #1b2a14 30%, #1b2a14 70%, #0a0f07 100%)',
      }}
    >
      {/* Section header */}
      <div ref={headerRef} className="text-center px-8 mb-16 md:mb-20">
        <p
          className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-canopy-light/70 mb-6"
          style={{ textShadow: shadow }}
        >
          Voices of Morpeace
        </p>
        <p
          className="font-poem text-xl md:text-2xl text-sky-cream/80 italic max-w-2xl mx-auto leading-relaxed"
          style={{ textShadow: shadow }}
        >
          A forest is shaped by every hand that tends it
          <br />and every soul that passes through.
        </p>
      </div>

      {/* === The People === */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 mb-20 md:mb-28">
        <p
          className="font-display text-xs md:text-sm tracking-[0.25em] uppercase text-mango-gold/60 mb-8 text-center"
          style={{ textShadow: shadow }}
        >
          The People Who Tend This Land
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {caretakers.map((person, i) => (
            <div
              key={person.name}
              ref={el => { caretakerRefs.current[i] = el }}
              className="rounded-2xl border border-sky-cream/10 bg-sky-cream/5 backdrop-blur-sm p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-canopy-light/15 border border-canopy-light/25 flex items-center justify-center shrink-0">
                  <span className="font-display text-sm text-canopy-light/80">
                    {person.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display text-sm text-sky-cream/90">{person.name}</p>
                  <p className="font-poem text-xs text-sky-cream/50 italic">{person.role}</p>
                </div>
              </div>
              <p className="font-poem text-sm md:text-base text-sky-cream/60 italic leading-relaxed">
                {person.placeholder ? (
                  <span className="text-sky-cream/40">{person.text}</span>
                ) : (
                  person.text
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* === Guest Testimonials === */}
      <div ref={guestHeaderRef} className="text-center px-8 mb-8">
        <p
          className="font-display text-xs md:text-sm tracking-[0.25em] uppercase text-mango-gold/60"
          style={{ textShadow: shadow }}
        >
          What Our Guests Say
        </p>
      </div>

      <div ref={scrollRef} className="relative">
        <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-6 pt-2 snap-x snap-mandatory px-6 md:px-8">
          <div className="shrink-0 w-2 md:w-8" />
          {guestReviews.map((review) => (
            <div
              key={review.name}
              className="shrink-0 w-72 md:w-80 rounded-2xl snap-start border border-sky-cream/10 bg-sky-cream/5 backdrop-blur-sm p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-mango-gold/70">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="font-poem text-sm text-sky-cream/80 leading-relaxed mb-4 line-clamp-6">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="border-t border-sky-cream/10 pt-3">
                <p className="font-display text-xs text-sky-cream/70">{review.name}</p>
                <p className="font-poem text-xs text-sky-cream/40 italic">{review.date}</p>
              </div>
            </div>
          ))}
          <div className="shrink-0 w-2 md:w-8" />
        </div>

        {/* Fade edges */}
        <div className="absolute top-0 left-0 bottom-0 w-8 pointer-events-none bg-gradient-to-r from-[#1b2a14] to-transparent" />
        <div className="absolute top-0 right-0 bottom-0 w-8 pointer-events-none bg-gradient-to-l from-[#1b2a14] to-transparent" />
      </div>
    </section>
  )
}
