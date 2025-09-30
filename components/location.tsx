"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Location() {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 })
  const mapAnimation = useScrollAnimation({ threshold: 0.2 })
  const cardsAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="location" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 ${
            headerAnimation.isVisible ? "animate-fade-up" : "scroll-animate-hidden"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Visit Us in Kilimani
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Conveniently located at MNG Apartments, Ndemi Road in the heart of Kilimani, Nairobi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div
            ref={mapAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`aspect-[4/3] rounded-xl overflow-hidden bg-muted shadow-lg ${
              mapAnimation.isVisible ? "animate-fade-right" : "scroll-animate-hidden"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8159896331!2d36.7869!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6e8c8c8c8%3A0x0!2zMcKwMTcnMzEuNiJTIDM2wrA0NycxMi44IkU!5e0!3m2!1sen!2ske!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Iryss Hair and Beauty Location - MNG Apartments, Ndemi Road, Nairobi"
            />
          </div>

          {/* Contact Information */}
          <div
            ref={cardsAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${cardsAnimation.isVisible ? "animate-fade-left" : "scroll-animate-hidden"}`}
          >
            <Card className="border-border hover:border-accent/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Address</h3>
                    <address className="text-muted-foreground leading-relaxed not-italic">
                      Iryss Hair and Beauty
                      <br />
                      MNG Apartments, Ndemi Road
                      <br />
                      Kilimani, Nairobi
                      <br />
                      Kenya
                    </address>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <a
                      href="tel:+254781104799"
                      className="text-muted-foreground hover:text-accent transition-colors block"
                    >
                      0781 104799
                    </a>
                    <p className="text-sm text-muted-foreground/70 mt-1">Call or WhatsApp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <a
                      href="mailto:info@irysshairandbeauty.co.ke"
                      className="text-muted-foreground hover:text-accent transition-colors block"
                    >
                      info@irysshairandbeauty.co.ke
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-semibold text-foreground mb-3">Opening Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Monday</span>
                        <span className="text-foreground font-medium">8:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Tuesday</span>
                        <span className="text-foreground font-medium">8:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Wednesday</span>
                        <span className="text-foreground font-medium">8:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Thursday</span>
                        <span className="text-foreground font-medium">8:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Friday</span>
                        <span className="text-foreground font-medium">8:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="text-foreground font-medium">8:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="text-foreground font-medium">10:00 AM - 7:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
