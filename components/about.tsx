"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function About() {
  const contentAnimation = useScrollAnimation({ threshold: 0.2 })
  const imagesAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={contentAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${contentAnimation.isVisible ? "animate-fade-right" : "scroll-animate-hidden"}`}
          >
            <div className="inline-block">
              <span className="text-sm font-semibold tracking-wider uppercase text-primary">About Iryss</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Where African Elegance Meets Modern Beauty
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Iryss Hair & Beauty, we celebrate the rich tapestry of African beauty through expert craftsmanship
                and contemporary techniques. Our sanctuary in Kilimani is more than a salon—it's a haven where every
                woman discovers her most radiant self.
              </p>
              <p>
                From intricate braiding artistry that honors our heritage to cutting-edge nail designs that make
                statements, we blend tradition with innovation. Our skilled artisans don't just provide services; they
                create transformative experiences that leave you feeling empowered, confident, and absolutely stunning.
              </p>
              <p className="font-semibold text-foreground">
                Because you deserve more than beauty—you deserve to shine.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2K+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Expert Stylists</div>
              </div>
            </div>
          </div>

          <div
            ref={imagesAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`relative ${imagesAnimation.isVisible ? "animate-fade-left" : "scroll-animate-hidden"}`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/services/hair-1.png"
                    alt="African braiding artistry"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/gallery/gold-pedicure.png"
                    alt="Luxury pedicure"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/services/facial-1.png"
                    alt="Facial treatment"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/gallery/box-braids.png"
                    alt="Box braids styling"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
