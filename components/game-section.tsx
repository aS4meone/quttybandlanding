import { Card } from "@/components/ui/card"

export function GameSection() {
  return (
    <section id="game" className="py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center space-y-6 mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Инновационная геймификация</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            Революционная технология геймификации помогает лучше углубляться в тренировки над собой, повышает интерес к
            заботе о здоровье и увеличивает процент заинтересованности человека в уходе за собой. Превратите свой путь к
            здоровью в увлекательную игру.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* First screenshot - Achievements */}
          <div className="relative overflow-hidden rounded-lg bg-black/50 flex items-center justify-center min-h-[500px] group">
            <img
              src="/images/app-metrics.png"
              alt="Достижения и метрики"
              className="w-full h-auto max-h-[500px] object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <p className="text-lg text-center text-white text-pretty">
                Достижения помогают пользователю видеть реальные результаты и укрепляют мотивацию.
              </p>
            </div>
          </div>

          {/* Second screenshot - Character progression */}
          <div className="relative overflow-hidden rounded-lg bg-black/50 flex items-center justify-center min-h-[500px] group">
            <img
              src="/images/app-character.png"
              alt="Прогресс персонажа"
              className="w-full h-auto max-h-[500px] object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <p className="text-lg text-center text-white text-pretty">Прогрессируйте вместе с вашим персонажем</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-accent/10 to-accent/5 border-border/50 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold mb-4">Почему геймификация работает?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-accent mb-2">Повышает мотивацию</h4>
                <p className="text-sm text-muted-foreground">
                  Игровые элементы делают процесс заботы о здоровье более увлекательным и менее рутинным
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Формирует привычки</h4>
                <p className="text-sm text-muted-foreground">
                  Система наград и достижений помогает закрепить полезные привычки на долгосрочной основе
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Увеличивает вовлеченность</h4>
                <p className="text-sm text-muted-foreground">
                  Пользователи на 40% чаще используют устройства с элементами геймификации
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
