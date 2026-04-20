import TheVisionSection from '../components/home/TheVisionSection'
import TheVillaSection from '../components/home/TheVillaSection'
import MeditationCave from '../components/trail/MeditationCave'
import SeoHead from '../components/SeoHead'
import { breadcrumbSchema } from '../lib/seo/schema'

const textShadow = '0 2px 20px rgba(1,46,67,0.55), 0 1px 6px rgba(1,46,67,0.35)'

export default function PhilosophyPage() {
  return (
    <div>
      <SeoHead
        title="The Philosophy — Morpeace | Pasaydan, The Living Wada, and the Meditation Cave"
        description="The convictions beneath Morpeace — the Pasaydan groves, the Living Wada, and the Meditation Cave. A philosophy of becoming, rooted in Sant Dnyaneshwar's prayer and a science-led ethic of care."
        path="/philosophy"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Philosophy', path: '/philosophy' },
        ])}
      />
      {/* === HERO === */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #016795, #014066)' }}
      >
        <div className="relative z-10 text-center px-8 py-20">
          <p
            className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-canopy-light/50 mb-6"
            style={{ textShadow }}
          >
            The Philosophy
          </p>
          <h1
            className="font-display text-3xl md:text-5xl text-sky-cream mb-4"
            style={{ textShadow }}
          >
            Where our convictions take root
          </h1>
          <p
            className="font-body text-lg md:text-xl text-sky-cream/70 italic max-w-xl mx-auto"
            style={{ textShadow }}
          >
            Outside in the groves. Inside the wada. Deeper still, the cave.
          </p>
        </div>
      </section>

      {/* === FOREST PHILOSOPHY — Pasaydan groves === */}
      <TheVisionSection />

      {/* === INFRASTRUCTURE PHILOSOPHY — The Living Wada === */}
      <TheVillaSection />

      {/* === MEDITATION CAVE PHILOSOPHY — Inner Star === */}
      <MeditationCave />
    </div>
  )
}
