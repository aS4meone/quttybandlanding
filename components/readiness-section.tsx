import { Card } from "@/components/ui/card"

export function ReadinessSection() {
  return (
    <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="/images/bracelet-black-transparent.png"
              alt="Qutty Band readiness tracking"
              className="w-full max-w-md mx-auto animate-bracelet-glow"
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              Тренируйся умно, не перегружай себя
            </h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Браслет анализирует HRV, пульс, насыщение кислородом и уровень стресса. Он подскажет: пора жечь калории
              или лучше отдохнуть.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-accent mb-1">85</div>
                <div className="text-sm text-muted-foreground">BPM</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-accent mb-1">98%</div>
                <div className="text-sm text-muted-foreground">SpO₂</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-accent mb-1">Low</div>
                <div className="text-sm text-muted-foreground">Stress</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
