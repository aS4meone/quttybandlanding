import { Card } from "@/components/ui/card"
import { Heart, Moon, Activity, Camera } from "lucide-react"

const healthFeatures = [
  {
    icon: Moon,
    title: "Сон и восстановление",
    description: "Глубокий анализ фаз сна и качества отдыха",
  },
  {
    icon: Heart,
    title: "Пульс, давление, стресс",
    description: "Непрерывный мониторинг сердечно-сосудистой системы",
  },
  {
    icon: Activity,
    title: "Калории и активность",
    description: "Точный подсчет калорий и уровня активности",
  },
  {
    icon: Camera,
    title: "Дневник калорий",
    description: "Искусственный интеллект измерит количество калорий на основе фотографий или текста",
  },
]

export function HealthSection() {
  return (
    <section id="health" className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-6 mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Все метрики — в одном браслете</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthFeatures.map((feature, index) => (
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
