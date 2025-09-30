import { Instagram, Facebook, Twitter, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Iryss Hair & Beauty</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Your premier destination for luxury beauty and wellness services in Kilimani, Nairobi.
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+254781104799" className="hover:text-primary-foreground transition-colors">
                  0781 104799
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>MNG Apartments, Ndemi Rd</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Book Now
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Location
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="tel:+254781104799" className="hover:text-primary-foreground transition-colors">
                  0781 104799
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@irysshairandbeauty.co.ke"
                  className="hover:text-primary-foreground transition-colors"
                >
                  info@irysshairandbeauty.co.ke
                </a>
              </li>
              <li>MNG Apartments, Ndemi Road</li>
              <li>Kilimani, Nairobi</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.instagram.com/iryss_hair_and_beauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-primary-foreground/60">Open 7 days a week</p>
            <p className="text-xs text-primary-foreground/60">Mon-Sat: 8am-7pm</p>
            <p className="text-xs text-primary-foreground/60">Sun: 10am-7pm</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Iryss Hair and Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
