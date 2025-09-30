import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const pricingData = [
  {
    category: "Hair Services",
    services: [
      { name: "Haircut & Styling", price: "KSh 1,500 - 3,000" },
      { name: "Hair Coloring", price: "KSh 3,500 - 8,000" },
      { name: "Hair Treatment", price: "KSh 2,500 - 5,000" },
      { name: "Braiding & Extensions", price: "KSh 2,000 - 10,000" },
    ],
  },
  {
    category: "Nail Services",
    services: [
      { name: "Classic Manicure", price: "KSh 800 - 1,200" },
      { name: "Gel Manicure", price: "KSh 1,500 - 2,000" },
      { name: "Classic Pedicure", price: "KSh 1,000 - 1,500" },
      { name: "Gel Pedicure", price: "KSh 1,800 - 2,500" },
    ],
  },
  {
    category: "Spa & Wellness",
    services: [
      { name: "Full Body Massage", price: "KSh 3,000 - 5,000" },
      { name: "Facial Treatment", price: "KSh 2,500 - 4,500" },
      { name: "Body Waxing", price: "KSh 1,000 - 4,000" },
      { name: "Spa Package", price: "KSh 8,000 - 15,000" },
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Quality beauty services at competitive prices. All prices are in Kenyan Shillings (KSh).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pricingData.map((category, index) => (
            <Card key={index} className="border-border hover:border-accent/30 transition-colors">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-serif text-foreground">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-foreground">{service.name}</div>
                        <div className="text-sm text-muted-foreground">{service.price}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Prices may vary based on hair length, complexity, and products used. Contact us for exact quotes.
          </p>
        </div>
      </div>
    </section>
  )
}
