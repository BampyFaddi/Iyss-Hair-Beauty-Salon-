"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Sparkles, Hand, Droplet, Flower2, Heart, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    description:
      "Expert cuts, coloring, braiding, weaves, and styling for all hair types. Transform your look with our professional stylists.",
    images: ["/services/hair-1.png", "/services/hair-2.jpg", "/services/hair-3.jpg"],
  },
  {
    icon: Sparkles,
    title: "Manicure & Pedicure",
    description:
      "Pamper your hands and feet with our luxurious nail care services. Gel, acrylic, classic, and artistic designs available.",
    images: ["/services/nails-1.png", "/services/nails-2.png", "/services/nails-3.png", "/services/nails-4.png"],
  },
  {
    icon: Hand,
    title: "Massage Therapy",
    description:
      "Relax and rejuvenate with our therapeutic massage services. Release tension and restore balance to body and mind.",
    images: ["/services/massage-1.png", "/services/massage-2.jpg"],
  },
  {
    icon: Droplet,
    title: "Waxing Services",
    description:
      "Professional hair removal services for smooth, beautiful skin. Gentle techniques ensuring your comfort and satisfaction.",
    images: ["/services/waxing-1.png", "/services/waxing-2.jpg"],
  },
  {
    icon: Flower2,
    title: "Facial Treatments",
    description:
      "Revitalize your skin with our customized facial treatments. Deep cleansing, hydration, and anti-aging solutions for radiant skin.",
    images: ["/services/facial-1.png", "/services/facial-2.png"],
  },
  {
    icon: Heart,
    title: "Spa Packages",
    description:
      "Complete beauty experiences combining multiple services. Perfect for special occasions, celebrations, or ultimate self-care days.",
    images: ["/services/spa-1.png"],
  },
]

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)
  const Icon = service.icon

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % service.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + service.images.length) % service.images.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (service.images.length <= 1) return

    const swipeDistance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (swipeDistance > minSwipeDistance) {
      nextImage()
    } else if (swipeDistance < -minSwipeDistance) {
      prevImage()
    }
  }

  return (
    <Card
      className="border-border hover:shadow-xl transition-all duration-300 hover:border-accent/50 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Gallery Section */}
      <div
        className="relative h-64 md:h-72 overflow-hidden bg-muted"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={service.images[currentImageIndex] || "/placeholder.svg"}
          alt={`${service.title} - Image ${currentImageIndex + 1}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={index < 3}
        />

        {/* Navigation Arrows - Show on hover for desktop, always show on mobile if multiple images */}
        {service.images.length > 1 && (isHovered || isMobile) && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 backdrop-blur-sm touch-manipulation"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 backdrop-blur-sm touch-manipulation"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </>
        )}

        {/* Image Indicators */}
        {service.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {service.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all touch-manipulation ${
                  idx === currentImageIndex ? "bg-accent w-6" : "bg-background/60 hover:bg-background/80"
                }`}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Icon Badge */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <Icon className="w-6 h-6 text-accent-foreground" />
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-3">{service.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
        <Button
          variant="outline"
          className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent touch-manipulation min-h-[44px]"
          onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  )
}

function AnimatedServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const animation = useScrollAnimation({ threshold: 0.1 })
  const delayClass = `animation-delay-${Math.min(index * 200, 800)}`

  return (
    <div
      ref={animation.ref as React.RefObject<HTMLDivElement>}
      className={`${animation.isVisible ? `animate-scale-up ${delayClass}` : "scroll-animate-hidden"}`}
    >
      <ServiceCard service={service} index={index} />
    </div>
  )
}

export function Services() {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 ${
            headerAnimation.isVisible ? "animate-fade-up" : "scroll-animate-hidden"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Our Premium Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive beauty and wellness services tailored to enhance your natural beauty and boost your
            confidence. Each service is delivered with expertise and care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <AnimatedServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
