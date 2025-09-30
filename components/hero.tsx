"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Hero() {
  const contentAnimation = useScrollAnimation({ threshold: 0.2 })
  const imageAnimation = useScrollAnimation({ threshold: 0.2 })
  const statsAnimation = useScrollAnimation({ threshold: 0.3 })

  const scrollToBooking = () => {
    const element = document.getElementById("booking")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            ref={contentAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`space-y-6 md:space-y-8 ${
              contentAnimation.isVisible ? "animate-fade-right" : "scroll-animate-hidden"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/90 rounded-full border border-primary">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">Where Kenya's Finest Come to Shine</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight text-balance">
              Elevate Your Beauty Experience
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Discover luxury beauty services in the heart of Kilimani, Nairobi. From expert hair styling to
              rejuvenating spa treatments, we're dedicated to making you look and feel your absolute best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={scrollToBooking}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base"
              >
                Book Your Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("services")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
                className="text-base border-primary/30 hover:bg-primary/5"
              >
                Explore Services
              </Button>
            </div>

            <div
              ref={statsAnimation.ref as React.RefObject<HTMLDivElement>}
              className={`grid grid-cols-3 gap-6 pt-8 border-t border-border ${
                statsAnimation.isVisible ? "animate-fade-up" : "scroll-animate-hidden"
              }`}
            >
              <div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-foreground">2000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Services</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            ref={imageAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`relative ${imageAnimation.isVisible ? "animate-fade-left" : "scroll-animate-hidden"}`}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted shadow-2xl">
              <img
                src="/elegant-african-woman-at-luxury-beauty-salon-getti.jpg"
                alt="Luxury beauty salon experience"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-accent/20 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Premium Quality</div>
                  <div className="text-sm text-muted-foreground">Expert professionals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
