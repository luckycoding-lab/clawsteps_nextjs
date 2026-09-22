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
        url: "https://clawsteps.com/images/og-image.jpg",
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
  "@type": "LocalBusiness",
  name: "ClawSteps",
  image: "https://clawsteps.com/assets/Logo.png",
  "@id": "https://clawsteps.com",
  url: "https://clawsteps.com",
  telephone: "+91 7982520153",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dwarka Mor",
    addressLocality: "Delhi",
    addressRegion: "NCR",
    addressCountry: "IN",
  },
  description: "Professional dog walking and pet care services in Delhi NCR.",
  openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 06:00-21:00",
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
        className={`${inter.className} min-h-screen flex flex-col bg-zinc-950 text-zinc-100`}
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