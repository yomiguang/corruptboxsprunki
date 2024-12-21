import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import GameVersions from '@/components/GameVersions'
import HowToPlay from '@/components/HowToPlay'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <GameVersions />
        <HowToPlay />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

