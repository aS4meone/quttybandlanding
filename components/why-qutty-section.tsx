import { Card } from "@/components/ui/card"
import { Moon, Zap, Heart, Gamepad2 } from "lucide-react"

const features = [
  {
    icon: Moon,
    title: "Сон и восстановление",
    description: "Отслеживание фаз сна и качества отдыха",
  },
  {
    icon: Zap,
    title: "Готовность к тренировкам",
    description: "Анализ готовности организма к нагрузкам",
  },
  {
    icon: Heart,
    title: "Контроль сердца и давления",
    description: "Мониторинг пульса, давления и стресса",
  },
  {
    icon: Gamepad2,
    title: "Геймификация с мифическими персонажами",
    description: "Прокачивай героев из скандинавской и греческой мифологии",
  },
]

export function WhyQuttySection() {
  return (
    <section id="why-qutty" className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-6 mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Почему Qutty Band?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Это больше, чем фитнес-браслет. Это ваш персональный тренер, мотиватор и игра в одном.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
