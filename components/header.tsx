"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleBuyClick = () => {
    window.open("https://wa.me/+77064460112", "_blank")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-foreground">
              Qutty
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Возможности
            </a>
            <a href="#health" className="text-muted-foreground hover:text-foreground transition-colors">
              Здоровье
            </a>
            <a href="#game" className="text-muted-foreground hover:text-foreground transition-colors">
              Игра
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Цена
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Узнать больше
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90" onClick={handleBuyClick}>
              Купить за 49 990 ₸
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Возможности
              </a>
              <a href="#health" className="text-muted-foreground hover:text-foreground transition-colors">
                Здоровье
              </a>
              <a href="#game" className="text-muted-foreground hover:text-foreground transition-colors">
                Игра
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Цена
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm">
                  Узнать больше
                </Button>
                <Button size="sm" className="bg-accent hover:bg-accent/90" onClick={handleBuyClick}>
                  Купить за 49 990 ₸
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
