"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Testimonials() {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 })
  const cardsAnimation = useScrollAnimation({ threshold: 0.2 })

  const testimonials = [
    {
      name: "Amina Hassan",
      rating: 5,
      text: "Best salon in Nairobi! The braiding is absolutely stunning and lasts for weeks. The staff is professional and the atmosphere is so relaxing. Highly recommend!",
      service: "Box Braids",
    },
    {
      name: "Grace Wanjiru",
      rating: 5,
      text: "I've been coming here for over a year now. The nail art is always on point and the pedicures are heavenly. Love the attention to detail!",
      service: "Nail Services",
    },
    {
      name: "Fatuma Mohamed",
      rating: 5,
      text: "The massage therapy here is incredible. I always leave feeling refreshed and rejuvenated. The therapists really know what they're doing!",
      service: "Spa & Massage",
    },
    {
      name: "Njeri Kamau",
      rating: 5,
      text: "Finally found a salon that understands African hair! My natural hair has never looked better. The treatments are top-notch and affordable.",
      service: "Hair Treatment",
    },
    {
      name: "Aisha Ali",
      rating: 5,
      text: "The facial treatments are amazing! My skin has improved so much since I started coming here. Professional service every time.",
      service: "Facial Treatment",
    },
    {
      name: "Mary Ochieng",
      rating: 5,
      text: "Love this place! Clean, professional, and the results are always perfect. The location is convenient and parking is easy. My go-to salon!",
      service: "Full Service",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 ${
            headerAnimation.isVisible ? "animate-fade-up" : "scroll-animate-hidden"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div
          ref={cardsAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${
            cardsAnimation.isVisible ? "animate-fade-up" : "scroll-animate-hidden"
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border hover:border-accent/30 transition-all hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`mt-12 text-center ${cardsAnimation.isVisible ? "animate-fade-up" : "scroll-animate-hidden"}`}
          style={{ animationDelay: "600ms" }}
        >
          <p className="text-muted-foreground mb-4">Join hundreds of satisfied clients</p>
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium text-lg"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  )
}
