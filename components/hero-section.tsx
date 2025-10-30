"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const scrollToWhyQutty = () => {
    const element = document.getElementById("why-qutty")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="pt-20 pb-4 md:pt-16 md:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Qutty Band — браслет, который превращает <span className="text-accent">здоровье в игру</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Следи за сном, энергией и нагрузкой. Прокачивай своего мифического героя. Стань легендой вместе с Qutty
                Band.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6" asChild>
                <a href="https://wa.me/+77064460112" target="_blank" rel="noopener noreferrer">
                  Купить за 49 990 ₸
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-transparent"
                onClick={scrollToWhyQutty}
              >
                <Play className="mr-2 h-5 w-5" />
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float">
              <img
                src="/images/bracelet-black-perforated.png"
                alt="Qutty Band fitness bracelet"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
