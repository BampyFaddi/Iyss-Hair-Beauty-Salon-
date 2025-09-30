import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Iryss Hair and Beauty | Premium Hair Salon & Spa in Nairobi | Ndemi Road",
  description:
    "Top-rated hair salon and beauty spa in Nairobi. Located at MNG Apartments, Ndemi Road. Expert hair styling, braids, nails, massage, facials & more. Call 0781 104799 to book.",
  keywords: [
    "hair salon Nairobi",
    "beauty salon Nairobi",
    "hair salon Kilimani",
    "braids Nairobi",
    "nail salon Nairobi",
    "spa Nairobi",
    "massage Nairobi",
    "hair styling Nairobi",
    "pedicure Nairobi",
    "manicure Nairobi",
    "facials Nairobi",
    "waxing Nairobi",
    "Iryss Hair and Beauty",
    "Ndemi Road salon",
    "MNG Apartments salon",
  ],
  authors: [{ name: "Iryss Hair and Beauty" }],
  creator: "Iryss Hair and Beauty",
  publisher: "Iryss Hair and Beauty",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://iryss-hair-and-beauty.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Iryss Hair and Beauty | Premium Hair Salon & Spa in Nairobi",
    description:
      "Top-rated hair salon and beauty spa in Nairobi. Expert hair styling, braids, nails, massage, facials & more. Located at MNG Apartments, Ndemi Road.",
    url: "https://iryss-hair-and-beauty.vercel.app",
    siteName: "Iryss Hair and Beauty",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Iryss Hair and Beauty - Premium Salon in Nairobi",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iryss Hair and Beauty | Premium Hair Salon & Spa in Nairobi",
    description:
      "Top-rated hair salon and beauty spa in Nairobi. Expert hair styling, braids, nails, massage, facials & more.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  manifest: "/manifest.json",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Iryss Hair and Beauty",
              image: "https://iryss-hair-and-beauty.vercel.app/og-image.jpg",
              "@id": "https://iryss-hair-and-beauty.vercel.app",
              url: "https://iryss-hair-and-beauty.vercel.app",
              telephone: "+254781104799",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "MNG Apartments, Ndemi Road",
                addressLocality: "Kilimani",
                addressRegion: "Nairobi",
                postalCode: "00100",
                addressCountry: "KE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -1.2921,
                longitude: 36.7869,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "10:00",
                  closes: "19:00",
                },
              ],
              sameAs: ["https://www.instagram.com/iryss_hair_and_beauty/"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "127",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Beauty Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Hair Styling & Braiding",
                      description: "Professional hair styling, braids, and treatments",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Nail Services",
                      description: "Manicure, pedicure, and nail art",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Spa & Massage",
                      description: "Relaxing massage and spa treatments",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Facial Treatments",
                      description: "Professional facial treatments and skincare",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Where is Iryss Hair and Beauty located?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We are conveniently located at MNG Apartments, Ndemi Road in Kilimani, Nairobi. Easy to access with ample parking available.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are your opening hours?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We're open Monday to Saturday from 8:00 AM to 7:00 PM, and Sunday from 10:00 AM to 7:00 PM.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you specialize in African hair?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we specialize in African hair care and styling, including braids, weaves, natural hair treatments, and protective styles. Our stylists are experts in working with all African hair textures.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${inter.variable} ${playfair.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
