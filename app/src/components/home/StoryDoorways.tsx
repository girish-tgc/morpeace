import { Link } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL

const doorways = [
  {
    to: '/the-becoming',
    title: 'The Becoming',
    subtitle: 'How a child\'s memory became a forest\'s return.',
    image: `${BASE}photos/forest-path.jpeg`,
  },
  {
    to: '/the-forest',
    title: 'The Forest',
    subtitle: '18 trees. 10 stories. The living map of Morpeace.',
    image: `${BASE}photos/forest-dense-vegetation.jpeg`,
  },
  {
    to: '/the-experience',
    title: 'The Experience',
    subtitle: 'Adventure trails, a meditation cave, forgotten recipes.',
    image: `${BASE}photos/mangoes-sunlight.jpeg`,
  },
] as const

export default function StoryDoorways() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {doorways.map(d => (
            <Link
              key={d.to}
              to={d.to}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-[2/3]"
            >
              {/* Background image */}
              <img
                src={d.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl text-sky-cream mb-2 group-hover:text-canopy-light transition-colors">
                  {d.title}
                </h3>
                <p className="font-body text-sm md:text-base text-sky-cream/70 italic leading-relaxed">
                  {d.subtitle}
                </p>
                <span className="inline-block mt-4 font-display text-xs tracking-wider uppercase text-sky-cream/40 group-hover:text-sky-cream/70 transition-colors">
                  Explore &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
