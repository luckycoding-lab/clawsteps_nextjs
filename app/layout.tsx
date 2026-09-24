import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthProvider from "@/components/AuthProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
export const metadata: Metadata = {
  title: "Best Dog Walkers in Delhi & Noida | ClawSteps - Book Now",
  icons: {
    icon: "/assets/Logo.png",
  },
  description:
    "ClawSteps provides trusted, professional dog walking in Delhi, Noida & Gurgaon. 20, 30 & 40-min safe, fun walks for your furry friends. Book your walker today!",
  keywords: [
    "dog walker Delhi NCR",
    "dog walking services Noida",
    "pet care Gurgaon",
    "dog walking near me",
    "professional pet sitters",
    "ClawSteps",
  ],
  alternates: {
    canonical: "https://clawsteps.com/",
  },
  openGraph: {
    type: "website",
    url: "https://clawsteps.com/",
    title: "ClawSteps | Every Step Matters to Your Best Friend",
    description:
      "Safe, reliable, and professional dog walking services across Delhi NCR. Choose from multiple walk durations.",
    images: [
      {
        url: "https://clawsteps.com/assets/clawstepWebsite.png",
        width: 1200,
        height: 630,
        alt: "ClawSteps Dog Walking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClawSteps Dog Walking Delhi NCR",
    description: "Professional dog walking tailored to your pet's needs.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "PetService"],
  "@id": "https://clawsteps.com/#business",
  name: "ClawSteps",
  alternateName: "ClawSteps Dog Walking",
  description: "Professional dog walking and pet care services in Delhi NCR. Certified handlers, GPS tracking, and daily updates.",
  url: "https://clawsteps.com",
  logo: "https://clawsteps.com/assets/Logo.png",
  image: "https://clawsteps.com/assets/Logo.png",
  telephone: "+91 7982520153",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dwarka Mor",
    addressLocality: "New Delhi",
    addressRegion: "Delhi NCR",
    postalCode: "110059",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.6186, // Dwarka Mor coordinates
    longitude: 77.0322,
  },
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Gurgaon" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:00",
      closes: "21:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/clawsteps/",
    "https://www.facebook.com/profile.php?id=61581390965748",
    "https://x.com/clawsteps",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} min-h-screen flex flex-col bg-zinc-950 text-zinc-300`}
      >
        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}