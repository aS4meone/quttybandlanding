import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhyQuttySection } from "@/components/why-qutty-section"
import { SleepSection } from "@/components/sleep-section"
import { ReadinessSection } from "@/components/readiness-section"
import { GameSection } from "@/components/game-section"
import { HealthSection } from "@/components/health-section"
import { KazakhstanSection } from "@/components/kazakhstan-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />

      <div className="space-y-2 md:space-y-4 lg:space-y-6">
        <ScrollAnimation animation="fadeUp" delay={100}>
          <WhyQuttySection />
        </ScrollAnimation>

        <ScrollAnimation animation="slideLeft" delay={200}>
          <SleepSection />
        </ScrollAnimation>

        <ScrollAnimation animation="slideRight" delay={100}>
          <ReadinessSection />
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={150}>
          <GameSection />
        </ScrollAnimation>

        <ScrollAnimation animation="slideLeft" delay={100}>
          <HealthSection />
        </ScrollAnimation>

        <ScrollAnimation animation="fadeIn" delay={200}>
          <KazakhstanSection />
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={100}>
          <PricingSection />
        </ScrollAnimation>
      </div>

      <ScrollAnimation animation="fadeIn" delay={100} className="mt-2 md:mt-4">
        <Footer />
      </ScrollAnimation>
    </main>
  )
}
