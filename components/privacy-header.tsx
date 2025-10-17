import Link from "next/link"

export function PrivacyHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <Link href="/" className="text-2xl font-bold text-foreground">
            Qutty
          </Link>
        </div>
      </div>
    </header>
  )
}
