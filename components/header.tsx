"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Iryss Hair and Beauty"
              width={50}
              height={50}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <h1 className="text-lg md:text-xl font-serif font-bold text-foreground tracking-tight">
              Iryss Hair & Beauty
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Location
            </button>
            <Button
              onClick={() => scrollToSection("booking")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-foreground">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Location
              </button>
              <Button
                onClick={() => scrollToSection("booking")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
              >
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
