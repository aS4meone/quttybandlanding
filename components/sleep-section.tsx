import { Card } from "@/components/ui/card"
import Image from "next/image"

export function SleepSection() {
  return (
    <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              Просыпайся с энергией, а не с усталостью
            </h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Qutty Band отслеживает фазы сна, качество отдыха и даёт простую оценку — чтобы каждое утро начиналось
              легко.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="text-2xl font-bold text-accent mb-1">7</div>
                <div className="text-sm text-muted-foreground">Часов сна</div>
              </Card>
              <Card className="p-4">
                <div className="text-2xl font-bold text-accent mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Качество восстановления</div>
              </Card>
            </div>
          </div>

          <div className="relative flex flex-col gap-6 items-end">
            {/* Sleep graph screenshot - top left */}
            <div className="relative w-full max-w-[280px] self-start">
              <Card className="overflow-hidden border-border/50 shadow-xl">
                <Image
                  src="/images/app-sleep-graph.png"
                  alt="График фаз сна"
                  width={280}
                  height={400}
                  className="w-full h-auto"
                />
              </Card>
            </div>

            {/* Health metrics screenshot - bottom right */}
            <div className="relative w-full max-w-[280px] self-end -mt-12">
              <Card className="overflow-hidden border-border/50 shadow-xl">
                <Image
                  src="/images/app-health-metrics.png"
                  alt="Показатели здоровья"
                  width={280}
                  height={400}
                  className="w-full h-auto"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
