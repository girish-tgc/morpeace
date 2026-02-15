import AdventureTrail from './AdventureTrail'
import MeditationCave from './MeditationCave'

export default function Layer2Understory() {
  return (
    <section className="relative bg-gradient-to-b from-forest-night via-forest-night to-soil-deep">
      <AdventureTrail />
      <MeditationCave />
    </section>
  )
}
