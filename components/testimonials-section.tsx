import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Алия К.",
    text: "Лёгкий, стильный, помогает контролировать тренировки и сон. Особенно нравится система с героями!",
    rating: 5,
  },
  {
    name: "Данияр М.",
    text: "Отличный браслет для спорта. Точно показывает готовность к тренировкам.",
    rating: 5,
  },
  {
    name: "Айгерим Т.",
    text: "Наконец-то понимаю, почему плохо сплю. Qutty Band помог наладить режим.",
    rating: 5,
  },
]

const certifications = ["CE", "FCC", "UKCA"]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Отзывы первых пользователей</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 text-sm">"{testimonial.text}"</p>
              <div className="font-medium text-sm">{testimonial.name}</div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-4">Сертификаты качества:</div>
          <div className="flex items-center justify-center space-x-8">
            {certifications.map((cert, index) => (
              <div key={index} className="w-16 h-16 border-2 border-muted rounded-lg flex items-center justify-center">
                <span className="font-bold text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
