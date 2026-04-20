import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SiteNav from '../components/nav/SiteNav'
import FloatingBookButton from '../components/nav/FloatingBookButton'
import SiteFooter from '../components/footer/SiteFooter'
import ErrorBoundary from '../components/ErrorBoundary'
import { useScrollToTop } from '../hooks/useScrollToTop'

gsap.registerPlugin(ScrollTrigger)

export default function RootLayout() {
  const lenisRef = useRef<Lenis | null>(null)

  useScrollToTop()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
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

  return (
    <div className="relative min-h-screen">
      <SiteNav />
      <main>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <SiteFooter />
      <FloatingBookButton />
    </div>
  )
}
