import Header from '@/components/Header'
import Hero from '@/components/Hero'
import News from '@/components/News'
import Features from '@/components/Features'
import Amblyopia from '@/components/Amblyopia'
import Medical from '@/components/Medical'
import WhyKirin from '@/components/WhyKirin'
import Greeting from '@/components/Greeting'
import ClinicInfo from '@/components/ClinicInfo'
import CtaBanner from '@/components/CtaBanner'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ containerSize: 'inline-size' }}>
      <Header />
      <main className="space-y-0" style={{ contentVisibility: 'auto' }}>
        {/* Skip link target */}
        <a href="#main-content" className="sr-only">
          本文へスキップ
        </a>
        <Hero />
        <ClinicInfo />
        <div id="main-content" className="space-y-0">
          <h1 className="sr-only">眼科とよす医院 - 豊洲のかかりつけ眼科</h1>
          <News />
          <Features />
          <Amblyopia />
          <Medical />
          <WhyKirin />
          <Greeting />
          <CtaBanner />
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
