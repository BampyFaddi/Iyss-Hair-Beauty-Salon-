"use client"

import type React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function FAQ() {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.2 })

  const faqs = [
    {
      question: "Where is Iryss Hair and Beauty located?",
      answer:
        "We are conveniently located at MNG Apartments, Ndemi Road in Kilimani, Nairobi. Easy to access with ample parking available.",
    },
    {
      question: "What are your opening hours?",
      answer:
        "We're open Monday to Saturday from 8:00 AM to 7:00 PM, and Sunday from 10:00 AM to 7:00 PM. We're here 7 days a week to serve you!",
    },
    {
      question: "Do I need to book an appointment?",
      answer:
        "While walk-ins are welcome, we highly recommend booking an appointment to ensure availability and minimize wait times. You can book by calling 0781 104799 or through our website.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of beauty services including hair styling and braiding, nail services (manicure, pedicure, nail art), spa treatments, massage therapy, facial treatments, waxing, and more. All services are performed by experienced professionals.",
    },
    {
      question: "Do you specialize in African hair?",
      answer:
        "We specialize in African hair care and styling, including braids, weaves, natural hair treatments, and protective styles. Our stylists are experts in working with all African hair textures.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, M-Pesa, and all major credit/debit cards for your convenience. Payment is due at the time of service.",
    },
    {
      question: "Can I reschedule or cancel my appointment?",
      answer:
        "Yes, we understand plans change. Please give us at least 24 hours notice if you need to reschedule or cancel your appointment by calling 0781 104799.",
    },
    {
      question: "Do you use quality products?",
      answer:
        "Yes! We use only premium, professional-grade products that are safe and effective for African hair and skin. We prioritize quality to ensure the best results for our clients.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div
          ref={headerAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 md:mb-16 ${
            headerAnimation.isVisible ? "animate-fade-up" : "scroll-animate-hidden"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about our services and salon
          </p>
        </div>

        <div
          ref={contentAnimation.ref as React.RefObject<HTMLDivElement>}
          className={contentAnimation.isVisible ? "animate-fade-up" : "scroll-animate-hidden"}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div
          className={`mt-12 text-center ${contentAnimation.isVisible ? "animate-fade-up" : "scroll-animate-hidden"}`}
          style={{ animationDelay: "200ms" }}
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="tel:+254781104799"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
          >
            Call Us: 0781 104799
          </a>
        </div>
      </div>
    </section>
  )
}
