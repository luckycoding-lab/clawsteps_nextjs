import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://clawsteps.com"),
  title: "Best Dog Walkers in Delhi & Noida | ClawSteps - Book Now",
  icons: {
    icon: "/assets/Logo.png",
    apple: "/assets/Logo.png",
  },
  description:
    "ClawSteps provides trusted, professional dog walking in Delhi, Noida & Gurgaon. 20, 30 & 40-min safe, fun walks for your furry friends. Book your walker today!",
  keywords: [
    "dog walker Delhi NCR",
    "dog walking services Noida",
    "pet care Gurgaon",
    "dog walking near me",
    "professional pet sitters",
    "cage free dog boarding Delhi",
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
    images: ["https://clawsteps.com/assets/clawstepWebsite.png"],
  },
};

// Rich Structured Data (Local Business + Sitelinks Search Schema)
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://clawsteps.com/#website",
    name: "ClawSteps",
    url: "https://clawsteps.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://clawsteps.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PetService"],
    "@id": "https://clawsteps.com/#business",
    name: "ClawSteps",
    alternateName: "ClawSteps Dog Walking & Pet Care",
    description:
      "Professional dog walking and cage-free pet care services across Delhi NCR. Verified handlers, GPS tracking, and daily hydration logs.",
    url: "https://clawsteps.com",
    logo: "https://clawsteps.com/assets/Logo.png",
    image: "https://clawsteps.com/assets/clawstepWebsite.png",
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
      latitude: 28.6186,
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
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("scroll-smooth", geist.variable)}
    >
      <body
        suppressHydrationWarning
        className={`${inter.className} min-h-screen flex flex-col bg-zinc-950 text-zinc-300 antialiased selection:bg-amber-500 selection:text-black`}
      >
        {/* SEO & Sitelinks Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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