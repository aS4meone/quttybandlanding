'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { PhoneInput } from '@/components/phone-input'
import { authApi, ApiException } from '@/lib/api'
import { cn } from '@/lib/utils'
import {
  CheckCircle2,
  Smartphone,
  Heart,
  Zap,
  Moon,
  Loader2,
  Activity,
  Shield,
  Sparkles,
  PartyPopper,
  ArrowRight,
  Download,
  AlertCircle,
} from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function RegistrationPage() {
  const params = useParams()
  const utm = params.utm as string

  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const isPhoneValid = phone.length === 11
  const isNameValid = name.trim().length >= 2
  const isFormValid = isPhoneValid && isNameValid

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isFormValid) return

    setFormState('loading')
    setErrorMessage('')

    try {
      await authApi.register(utm, {
        phone_number: phone,
        name: name.trim(),
      })
      setFormState('success')
    } catch (error) {
      setFormState('error')
      if (error instanceof ApiException) {
        // Translate common errors to Russian
        const errorMap: Record<string, string> = {
          'Invalid or inactive UTM code. Registration not allowed.': 'Недействительный код регистрации. Обратитесь в поддержку.',
          'User with this phone number already exists.': 'Пользователь с таким номером уже зарегистрирован. Войдите в приложение.',
          'Phone number must contain only digits.': 'Некорректный номер телефона.',
        }
        setErrorMessage(errorMap[error.detail] || error.detail)
      } else {
        setErrorMessage('Произошла ошибка. Попробуйте еще раз.')
      }
    }
  }

  if (formState === 'success') {
    return <SuccessScreen name={name.split(' ')[0]} />
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 lg:py-5 flex items-center justify-between border-b border-border/50 lg:px-12">
        <Link href="/" className="text-2xl lg:text-3xl font-bold tracking-tight">
          Qutty
        </Link>
        {/* Step indicator - desktop */}
        <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold">1</span>
          <span className="font-medium text-foreground">Регистрация</span>
          <ArrowRight className="w-4 h-4 mx-1" />
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold">2</span>
          <span>Приложение</span>
        </div>
      </header>

      {/* Main Content - Split Layout on Desktop */}
      <main className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side - Form */}
        <div className="flex-1 flex flex-col px-6 py-8 lg:px-12 lg:py-12 xl:px-20 lg:max-w-2xl">
          {/* Hero Section */}
          <div className="text-center lg:text-left mb-8 lg:mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-5">
              <PartyPopper className="w-4 h-4" />
              Поздравляем с покупкой!
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-5 tracking-tight">
              Добро пожаловать <br className="hidden lg:block" />в Qutty
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              Ваш браслет уже ждёт подключения. Осталось только зарегистрироваться — это займёт 30 секунд
            </p>
          </div>

          {/* Registration Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 lg:space-y-6 mb-8 lg:max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100"
          >
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm lg:text-base font-medium text-foreground"
              >
                Как вас зовут?
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя и фамилия"
                autoComplete="name"
                aria-describedby="name-hint"
                className={cn(
                  "placeholder:text-muted-foreground/60 selection:bg-primary selection:text-primary-foreground",
                  "border-input flex h-12 lg:h-14 w-full rounded-xl border bg-card/50 px-4 py-3 text-base lg:text-lg",
                  "transition-all duration-200 outline-none",
                  "hover:border-border/80 hover:bg-card",
                  "focus-visible:border-accent focus-visible:ring-accent/20 focus-visible:ring-4 focus-visible:bg-card",
                  "disabled:pointer-events-none disabled:opacity-50",
                  isNameValid && name.length > 0 && "border-accent/50 bg-accent/5"
                )}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm lg:text-base font-medium text-foreground"
              >
                Номер телефона
              </label>
              <PhoneInput
                id="phone"
                value={phone}
                onChange={setPhone}
                aria-describedby="phone-hint"
                className={cn(
                  "lg:h-14 lg:text-lg hover:border-border/80 hover:bg-card",
                  "focus-visible:border-accent focus-visible:ring-accent/20 focus-visible:ring-4 focus-visible:bg-card",
                  isPhoneValid && "border-accent/50 bg-accent/5"
                )}
              />
              <p id="phone-hint" className="text-xs lg:text-sm text-muted-foreground">
                На этот номер придёт SMS для входа в приложение
              </p>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div
                role="alert"
                className="flex items-start gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm lg:text-base animate-in slide-in-from-top-2 duration-300"
              >
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={!isFormValid || formState === 'loading'}
              className={cn(
                "w-full h-12 lg:h-14 rounded-xl text-base lg:text-lg font-semibold",
                "bg-accent hover:bg-accent/90 text-accent-foreground",
                "transition-all duration-200",
                "hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5",
                "active:translate-y-0 active:shadow-md",
                "disabled:hover:translate-y-0 disabled:hover:shadow-none"
              )}
            >
              {formState === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 lg:w-6 lg:h-6 animate-spin" />
                  Секунду...
                </>
              ) : (
                <>
                  Продолжить
                  <ArrowRight className="w-5 h-5 ml-1" />
                </>
              )}
            </Button>
          </form>

          {/* App Store Section - Mobile Only */}
          <div className="lg:hidden animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-3 text-muted-foreground">
                  Понадобится приложение
                </span>
              </div>
            </div>

            <MobileAppSection />
          </div>

          {/* Footer Links */}
          <div className="mt-auto pt-6 border-t border-border/50 lg:border-0 lg:pt-8">
            <div className="flex justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Конфиденциальность
              </Link>
              <Link href="/support" className="hover:text-foreground transition-colors">
                Поддержка
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Promo Content (Desktop Only) */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-card via-card to-accent/5 border-l border-border/50 flex-col items-center justify-center p-12 xl:p-20 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(60,179,113,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(60,179,113,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="relative z-10 max-w-lg text-center">
            {/* Bracelet Image */}
            <div className="relative w-64 h-64 xl:w-80 xl:h-80 mx-auto mb-10">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
              <Image
                src="/images/bracelet-black-transparent.png"
                alt="Qutty Band"
                fill
                className="object-contain animate-float drop-shadow-2xl"
                priority
              />
            </div>

            {/* Features */}
            <h2 className="text-2xl xl:text-3xl font-bold mb-3 tracking-tight">
              Вы сделали правильный выбор
            </h2>
            <p className="text-muted-foreground mb-8">
              Теперь у вас есть всё для заботы о себе
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <FeatureCardDesktop
                icon={<Heart className="w-5 h-5" />}
                title="Здоровье 24/7"
                description="Пульс, SpO2, стресс"
              />
              <FeatureCardDesktop
                icon={<Moon className="w-5 h-5" />}
                title="Умный сон"
                description="Фазы и рекомендации"
              />
              <FeatureCardDesktop
                icon={<Activity className="w-5 h-5" />}
                title="Активность"
                description="Шаги, калории, цели"
              />
              <FeatureCardDesktop
                icon={<Sparkles className="w-5 h-5" />}
                title="Геймификация"
                description="Прокачивай героя"
              />
            </div>

            {/* App Store */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-muted-foreground text-sm">
                Скачайте приложение, пока регистрируетесь
              </p>
              <a
                href="https://apps.apple.com/us/app/qutty-band/id6753149993"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-200 hover:scale-105 hover:-translate-y-1"
              >
                <Image
                  src="/images/app-store-badge.svg"
                  alt="Скачать в App Store"
                  width={180}
                  height={60}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function FeatureCardDesktop({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group flex flex-col items-center gap-2 p-5 rounded-2xl bg-background/50 border border-border/50 backdrop-blur-sm transition-all duration-200 hover:bg-background/80 hover:border-accent/30 hover:-translate-y-1">
      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-1 transition-transform duration-200 group-hover:scale-110">
        {icon}
      </div>
      <span className="font-medium text-sm">{title}</span>
      <span className="text-xs text-muted-foreground">{description}</span>
    </div>
  )
}

function MobileAppSection() {
  return (
    <>
      {/* App Download Card */}
      <div className="bg-card rounded-2xl border border-border p-5 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
            <Download className="w-7 h-7 text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base mb-0.5">Qutty Band</h3>
            <p className="text-muted-foreground text-sm">
              Скачайте сейчас, чтобы сразу подключить браслет
            </p>
          </div>
        </div>
      </div>

      {/* App Store Badge */}
      <a
        href="https://apps.apple.com/us/app/qutty-band/id6753149993"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center mb-8 transition-transform active:scale-95"
      >
        <Image
          src="/images/app-store-badge.svg"
          alt="Скачать в App Store"
          width={156}
          height={52}
          className="opacity-90 hover:opacity-100 transition-opacity"
        />
      </a>

      {/* Features Grid */}
      <div className="grid grid-cols-3 gap-3">
        <FeatureCardMobile
          icon={<Heart className="w-5 h-5" />}
          label="Здоровье"
        />
        <FeatureCardMobile
          icon={<Moon className="w-5 h-5" />}
          label="Сон"
        />
        <FeatureCardMobile
          icon={<Zap className="w-5 h-5" />}
          label="Энергия"
        />
      </div>
    </>
  )
}

function FeatureCardMobile({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border transition-colors hover:border-accent/30">
      <div className="text-accent">{icon}</div>
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
    </div>
  )
}

function SuccessScreen({ name }: { name: string }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 lg:py-5 flex items-center justify-between border-b border-border/50 lg:px-12">
        <Link href="/" className="text-2xl lg:text-3xl font-bold tracking-tight">
          Qutty
        </Link>
        {/* Step indicator - desktop */}
        <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/20 text-accent text-xs font-bold">
            <CheckCircle2 className="w-4 h-4" />
          </span>
          <span className="text-muted-foreground">Регистрация</span>
          <ArrowRight className="w-4 h-4 mx-1" />
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold">2</span>
          <span className="font-medium text-foreground">Приложение</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side - Success Message */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 lg:px-12 lg:py-16 xl:px-20 text-center lg:text-left lg:items-start lg:max-w-2xl">
          {/* Success Icon */}
          <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-accent/20 flex items-center justify-center mb-6 lg:mb-8 animate-in zoom-in duration-500">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-accent/30 flex items-center justify-center animate-pulse-glow">
              <CheckCircle2 className="w-10 h-10 lg:w-12 lg:h-12 text-accent" />
            </div>
          </div>

          <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-5 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            {name ? `${name}, вы в команде!` : 'Отлично, вы в команде!'}
          </h1>
          <p className="text-muted-foreground mb-8 lg:mb-10 max-w-md text-base lg:text-lg leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
            Аккаунт создан. Откройте приложение Qutty Band и войдите по номеру телефона — там уже ждёт ваш браслет
          </p>

          {/* App Download Card */}
          <a
            href="https://apps.apple.com/us/app/qutty-band/id6753149993"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md bg-card hover:bg-card/80 rounded-2xl border border-border hover:border-accent/30 p-6 mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-accent flex items-center justify-center shrink-0">
                <Download className="w-7 h-7 lg:w-8 lg:h-8 text-accent-foreground" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-lg lg:text-xl mb-1">Скачать Qutty Band</h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  Откройте в App Store
                </p>
              </div>
              <ArrowRight className="w-6 h-6 text-accent shrink-0" />
            </div>
          </a>

          {/* Steps */}
          <div className="w-full max-w-md space-y-3 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            <p className="text-sm font-medium text-foreground mb-3 lg:text-base">Что дальше:</p>
            <div className="flex items-center gap-3 text-sm lg:text-base text-muted-foreground">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold shrink-0">1</span>
              <span>Откройте приложение Qutty Band</span>
            </div>
            <div className="flex items-center gap-3 text-sm lg:text-base text-muted-foreground">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold shrink-0">2</span>
              <span>Войдите по SMS-коду</span>
            </div>
            <div className="flex items-center gap-3 text-sm lg:text-base text-muted-foreground">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold shrink-0">3</span>
              <span>Подключите ваш браслет</span>
            </div>
          </div>

          {/* Back to Home */}
          <Link
            href="/"
            className="text-muted-foreground text-sm lg:text-base hover:text-foreground transition-colors"
          >
            На главную
          </Link>
        </div>

        {/* Right Side - Visual (Desktop Only) */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-card via-card to-accent/5 border-l border-border/50 flex-col items-center justify-center p-12 xl:p-20 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(60,179,113,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(60,179,113,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="relative z-10 text-center">
            {/* Celebration Visual */}
            <div className="relative w-72 h-72 xl:w-96 xl:h-96 mx-auto mb-8">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
              <Image
                src="/images/bracelet-black-transparent.png"
                alt="Qutty Band"
                fill
                className="object-contain animate-float drop-shadow-2xl"
              />
            </div>

            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-accent" />
              <span className="text-xl font-semibold">Всё готово</span>
            </div>

            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Подключите браслет в приложении и начните свой путь к лучшей версии себя
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
