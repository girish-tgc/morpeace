import HeroSection from '../components/home/HeroSection'
import StoryDoorways from '../components/home/StoryDoorways'

export default function HomePage() {
  return (
    <div>
      <div data-audio-zone="layer0-intro">
        <HeroSection />
      </div>
      <StoryDoorways />
    </div>
  )
}
