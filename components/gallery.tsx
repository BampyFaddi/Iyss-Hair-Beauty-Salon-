"use client"

import type React from "react"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Gallery() {
  const images = [
    { url: "/gallery/box-braids.png", alt: "Beautiful box braids hairstyle", category: "Hair" },
    { url: "/gallery/gold-pedicure.png", alt: "Luxury gold pedicure with toe rings", category: "Pedicure" },
    { url: "/gallery/braids-beads.png", alt: "Intricate braids with silver beads", category: "Hair" },
    { url: "/gallery/french-tips.png", alt: "Classic French tip manicure and pedicure", category: "Nails" },
    { url: "/gallery/blue-pedicure.png", alt: "Vibrant blue pedicure", category: "Pedicure" },
    { url: "/gallery/stiletto-nails.png", alt: "Artistic stiletto nail design", category: "Nails" },
    { url: "/gallery/mint-pedicure.png", alt: "Fresh mint pedicure", category: "Pedicure" },
    { url: "/gallery/abstract-nails.png", alt: "Modern abstract nail art", category: "Nails" },
    { url: "/gallery/massage-tools.png", alt: "Traditional massage therapy tools", category: "Spa" },
    { url: "/gallery/fun-nail-art.png", alt: "Creative and fun nail art designs", category: "Nails" },
    { url: "/services/facial-1.png", alt: "Rejuvenating facial treatment", category: "Facial" },
    { url: "/services/massage-1.png", alt: "Relaxing massage therapy", category: "Spa" },
  ]

  const [filter, setFilter] = useState("All")
  const categories = ["All", "Hair", "Nails", "Pedicure", "Spa", "Facial"]

  const filteredImages = filter === "All" ? images : images.filter((img) => img.category === filter)

  const headerAnimation = useScrollAnimation({ threshold: 0.2 })
  const gridAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 })

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 ${
            headerAnimation.isVisible ? "animate-fade-up" : "scroll-animate-hidden"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Our Work Speaks for Itself
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Every style tells a story. Browse our portfolio of stunning transformations that showcase the artistry and
            excellence that define Iryss Hair & Beauty.
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 md:px-6 py-2.5 md:py-2 rounded-full font-medium transition-all duration-300 touch-manipulation min-h-[44px] text-sm md:text-base ${
                  filter === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={gridAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 ${
            gridAnimation.isVisible ? "animate-fade-up animation-delay-200" : "scroll-animate-hidden"
          }`}
        >
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`rounded-xl md:rounded-2xl overflow-hidden bg-muted hover:scale-105 transition-all duration-500 shadow-md hover:shadow-2xl group cursor-pointer ${
                index % 7 === 0 ? "md:col-span-2 md:row-span-2" : "aspect-square"
              }`}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading={index < 6 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                  <div className="text-white">
                    <span className="inline-block px-2 md:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={ctaAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mt-12 ${
            ctaAnimation.isVisible ? "animate-scale-up animation-delay-400" : "scroll-animate-hidden"
          }`}
        >
          <p className="text-base md:text-lg text-muted-foreground mb-6">Ready to be our next masterpiece?</p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 touch-manipulation min-h-[44px] text-sm md:text-base"
          >
            Book Your Transformation
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
