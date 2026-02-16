import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary'
import Layer0Soil from './components/layer0/Layer0Soil'
import DroneVideoSection from './components/layer1/DroneVideoSection'
import Layer1Floor from './components/layer1/Layer1Floor'
import Layer2Understory from './components/layer2/Layer2Understory'
import Layer3Canopy from './components/layer3/Layer3Canopy'
import Layer4Sky from './components/layer4/Layer4Sky'
import OurDream from './components/shared/OurDream'
import OurPromise from './components/shared/OurPromise'
import Voices from './components/shared/Voices'
import TheUnfolding from './components/shared/TheUnfolding'
import TouchMeNotClosing from './components/shared/TouchMeNotClosing'
import RootNav from './components/navigation/RootNav'
import AmbientAudioToggle from './components/shared/AmbientAudioToggle'
import { ambientAudio } from './audio/ambientAudioManager'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [exploredLayers, setExploredLayers] = useState<Set<number>>(new Set([0]))
  const [activeTree, setActiveTree] = useState<number | null>(null)
  const lenisRef = useRef<Lenis | null>(null)
  const layerRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => { lenis.raf(time * 1000) })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  // Initialize ambient audio manager
  useEffect(() => {
    ambientAudio.init()
    return () => { ambientAudio.destroy() }
  }, [])

  // Track which layers have been explored
  useEffect(() => {
    layerRefs.current.forEach((ref, index) => {
      if (!ref) return
      ScrollTrigger.create({
        trigger: ref,
        start: 'top 80%',
        onEnter: () => {
          setExploredLayers(prev => new Set([...prev, index]))
        },
      })
    })
  }, [])

  const scrollToLayer = (index: number) => {
    const el = layerRefs.current[index]
    if (el && lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: 0, duration: 2 })
    }
  }

  return (
    <div className="relative">
      <RootNav
        exploredLayers={exploredLayers}
        onNavigate={scrollToLayer}
        activeTree={activeTree}
      />
      <AmbientAudioToggle />

      <ErrorBoundary>
        <div ref={el => { layerRefs.current[0] = el }}>
          <Layer0Soil />
        </div>
      </ErrorBoundary>

      <ErrorBoundary>
        <div data-audio-zone="our-dream">
          <OurDream />
        </div>
      </ErrorBoundary>

      <ErrorBoundary>
        <div data-audio-zone="the-unfolding">
          <TheUnfolding />
        </div>
      </ErrorBoundary>

      <ErrorBoundary>
        <div data-audio-zone="touch-me-not">
          <TouchMeNotClosing />
        </div>
      </ErrorBoundary>

      <ErrorBoundary>
        <div data-audio-zone="drone-video">
          <DroneVideoSection />
        </div>
      </ErrorBoundary>

      <ErrorBoundary>
        <div ref={el => { layerRefs.current[1] = el }} data-audio-zone="layer1-floor">
          <Layer1Floor onTreeSelect={setActiveTree} />
        </div>
      </ErrorBoundary>

      <ErrorBoundary>
        <div ref={el => { layerRefs.current[2] = el }}>
          <Layer2Understory />
        </div>
      </ErrorBoundary>

      <ErrorBoundary>
        <div ref={el => { layerRefs.current[3] = el }} data-audio-zone="layer3-canopy">
          <Layer3Canopy />
        </div>
      </ErrorBoundary>

      <ErrorBoundary>
        <Voices />
      </ErrorBoundary>

      <ErrorBoundary>
        <div data-audio-zone="our-promise">
          <OurPromise />
        </div>
      </ErrorBoundary>

      <ErrorBoundary>
        <div ref={el => { layerRefs.current[4] = el }} data-audio-zone="layer4-sky">
          <Layer4Sky />
        </div>
      </ErrorBoundary>
    </div>
  )
}

export default App
