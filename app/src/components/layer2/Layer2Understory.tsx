import AdventureTrail from './AdventureTrail'
import MeditationSpace from './MeditationSpace'

export default function Layer2Understory() {
  return (
    <section className="relative bg-gradient-to-b from-forest-night via-forest-night to-soil-deep">
      <AdventureTrail />
      <MeditationSpace />
    </section>
  )
}
