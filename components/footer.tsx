import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold">Qutty</div>
            <p className="text-sm opacity-80">Твой путь к здоровью и легенде.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Продукт</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#features" className="hover:opacity-100 transition-opacity">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#health" className="hover:opacity-100 transition-opacity">
                  Здоровье
                </a>
              </li>
              <li>
                <a href="#game" className="hover:opacity-100 transition-opacity">
                  Игра
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Поддержка</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Помощь
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Доставка
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:opacity-100 transition-opacity">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Контакты</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>support@qutty.kz</li>
              <li>+7 (777) 123-45-67</li>
              <li>Алматы, Казахстан</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-80">© 2025 Qutty Band. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
