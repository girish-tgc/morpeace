import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SiteNav from '../components/nav/SiteNav'
import SiteFooter from '../components/footer/SiteFooter'
import AmbientAudioToggle from '../components/shared/AmbientAudioToggle'
import ErrorBoundary from '../components/ErrorBoundary'
import { ambientAudio } from '../audio/ambientAudioManager'
import { useScrollToTop } from '../hooks/useScrollToTop'

gsap.registerPlugin(ScrollTrigger)

export default function RootLayout() {
  const lenisRef = useRef<Lenis | null>(null)
  const { pathname } = useLocation()

  useScrollToTop()

  // Lenis smooth scroll + GSAP ticker
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)
    const rafCallback = (time: number) => { lenis.raf(time * 1000) }
    gsap.ticker.add(rafCallback)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(rafCallback)
    }
  }, [])

  // Ambient audio manager
  useEffect(() => {
    ambientAudio.init()
    return () => { ambientAudio.destroy() }
  }, [])

  // Re-scan audio zones on page transitions
  useEffect(() => {
    // Small delay to let the new page's DOM render
    const timer = setTimeout(() => { ambientAudio.rescan() }, 100)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div className="relative min-h-screen">
      <SiteNav />
      <AmbientAudioToggle />
      <main>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <SiteFooter />
    </div>
  )
}
