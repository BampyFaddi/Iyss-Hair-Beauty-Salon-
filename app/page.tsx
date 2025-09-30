import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { Pricing } from "@/components/pricing"
import { Booking } from "@/components/booking"
import { Location } from "@/components/location"
import { FAQ } from "@/components/faq"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Booking />
      <Location />
      <Footer />
    </main>
  )
}
