export function KazakhstanSection() {
  return (
    <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Qutty Band создан для тебя</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Разработан с учётом потребностей современного жителя Казахстана: работа, спорт, семья и здоровье всегда под
            рукой.
          </p>
        </div>

        <div className="mt-8">
          <img
            src="/images/bracelet-rose-gold.png"
            alt="Qutty Band packaging"
            className="w-full max-w-2xl mx-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
