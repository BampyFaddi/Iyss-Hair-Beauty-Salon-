"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Booking() {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 })
  const cardsAnimation = useScrollAnimation({ threshold: 0.2 })
  const formAnimation = useScrollAnimation({ threshold: 0.1 })

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - in production, this would send to a backend
    console.log("Booking submitted:", formData)
    alert("Thank you! We will contact you shortly to confirm your appointment.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="booking" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            ref={headerAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`text-center mb-12 md:mb-16 ${
              headerAnimation.isVisible ? "animate-fade-up" : "scroll-animate-hidden"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
              Book Your Appointment
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Ready to experience luxury? Schedule your visit today and let us pamper you.
            </p>
          </div>

          <div
            ref={cardsAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 ${
              cardsAnimation.isVisible ? "animate-fade-up animation-delay-200" : "scroll-animate-hidden"
            }`}
          >
            <Card className="border-border hover:border-accent/30 transition-colors">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Call Us</h3>
                <p className="text-sm text-muted-foreground mb-2">+254 712 345 678</p>
                <p className="text-xs text-muted-foreground">Mon-Sat: 9AM - 7PM</p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent/30 transition-colors">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Walk-ins Welcome</h3>
                <p className="text-sm text-muted-foreground mb-2">Subject to availability</p>
                <p className="text-xs text-muted-foreground">Book ahead recommended</p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent/30 transition-colors sm:col-span-2 md:col-span-1">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Flexible Hours</h3>
                <p className="text-sm text-muted-foreground mb-2">Evening appointments</p>
                <p className="text-xs text-muted-foreground">Available by request</p>
              </CardContent>
            </Card>
          </div>

          <div
            ref={formAnimation.ref as React.RefObject<HTMLDivElement>}
            className={formAnimation.isVisible ? "animate-scale-up animation-delay-400" : "scroll-animate-hidden"}
          >
            <Card className="border-border">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm md:text-base">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        className="h-11 md:h-10 text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm md:text-base">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 712 345 678"
                        className="h-11 md:h-10 text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm md:text-base">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="h-11 md:h-10 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-sm md:text-base">
                      Service *
                    </Label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-11 md:h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-base"
                    >
                      <option value="">Select a service</option>
                      <option value="hair">Hair Styling</option>
                      <option value="manicure">Manicure</option>
                      <option value="pedicure">Pedicure</option>
                      <option value="massage">Massage</option>
                      <option value="facial">Facial Treatment</option>
                      <option value="waxing">Waxing</option>
                      <option value="package">Spa Package</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-sm md:text-base">
                        Preferred Date *
                      </Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="h-11 md:h-10 text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-sm md:text-base">
                        Preferred Time *
                      </Label>
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="h-11 md:h-10 text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm md:text-base">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any special requests or preferences?"
                      rows={4}
                      className="text-base resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 touch-manipulation min-h-[48px] text-base md:text-lg font-semibold"
                  >
                    Confirm Booking
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
