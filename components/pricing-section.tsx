"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Truck } from "lucide-react"

export function PricingSection() {
  const handleBuyClick = () => {
    window.open("https://wa.me/77771234567", "_blank")
  }

  return (
    <section id="pricing" className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-6 mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Твоя инвестиция в здоровье</h2>
        </div>

        <div className="max-w-md mx-auto px-4 sm:px-0">
          <Card className="p-6 sm:p-8 text-center">
            <div className="space-y-6">
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-2 flex items-baseline justify-center gap-1">
                  <span>49 999</span>
                  <span>₸</span>
                </div>
                <div className="text-muted-foreground text-sm sm:text-base">Единоразовая покупка</div>
              </div>

              <div className="flex items-center justify-center space-x-2 text-accent">
                <Truck className="h-6 w-6 sm:h-5 sm:w-5" />
                <span className="font-medium text-sm sm:text-base">Бесплатная доставка по Казахстану</span>
              </div>

              <div className="space-y-3 text-left px-2 sm:px-0">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm">Мониторинг сна и восстановления</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm">Контроль пульса, давления и стресса</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm">Геймификация с мифическими героями</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm">Дневник калорий с AI-помощником</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-base sm:text-lg py-6"
                onClick={handleBuyClick}
              >
                Купить сейчас
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
