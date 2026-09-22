import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Compass, ShieldCheck, Target, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | ClawSteps - Trusted Dog Walkers in Delhi NCR",
  description:
    "Learn about ClawSteps, the most reliable dog walking service in Delhi, Noida & Gurgaon. Meet our mission to provide safe and happy walks for every pet.",
  keywords: [
    "about ClawSteps",
    "professional dog walkers Delhi",
    "pet care mission",
    "experienced dog walkers Noida",
    "Gurgaon pet services",
  ],
  alternates: {
    canonical: "https://clawsteps.com/aboutus",
  },
  openGraph: {
    type: "website",
    url: "https://clawsteps.com/aboutus",
    title: "About ClawSteps | Dedicated to Your Pet's Well-being",
    description:
      "Discover the story behind ClawSteps. We provide professional, safe, and fun walking experiences for dogs across Delhi NCR.",
    images: [
      {
        url: "https://clawsteps.com/images/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About ClawSteps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ClawSteps - Our Story & Values",
    description:
      "Providing professional dog walking tailored to your pet's needs since day one.",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "ClawSteps",
    image: "https://clawsteps.com/assets/Logo.png",
    telephone: "+91 7982520153",
    url: "https://clawsteps.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressRegion: "NCR",
      addressCountry: "IN",
    },
  },
};

const VALUES_GRID = [
  {
    icon: <Heart className="w-6 h-6 text-amber-500" />,
    title: "What We Do",
    description:
      "Safe, fun walks tailored to your pup's personality and exercise needs.",
    highlight: false,
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    title: "Why Us?",
    description:
      "Verified professionals, GPS tracking, and live photo updates for complete peace of mind.",
    highlight: false,
  },
  {
    icon: <Compass className="w-6 h-6 text-amber-400" />,
    title: "Our Vision",
    description:
      "Building a community where every dog enjoys a healthy, active, and joyful lifestyle.",
    highlight: true,
  },
  {
    icon: <Target className="w-6 h-6 text-zinc-400" />,
    title: "Our Mission",
    description:
      "Providing genuine convenience for humans and absolute dedicated care for dogs.",
    highlight: false,
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <div className="max-w-6xl mx-auto space-y-24">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-500 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
            Know more about us
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Building a better{" "}
            <span className="font-serif italic text-amber-500">Delhi</span> for
            every paw.
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Delhi&apos;s most trusted companion for professional pet care.
          </p>
        </section>

        {/* Story Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 sm:p-12">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Our Story
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <p>
                Born from a deep love for animals, we support busy pet parents in
                Delhi NCR by providing more than just a walk—we provide a genuine
                connection.
              </p>
              <p className="text-zinc-400">
                Our mission is to bridge the gap between your busy city schedule
                and your dog&apos;s need for movement and companionship. Clawsteps
                serves as an extension of your family, ensuring high-quality
                experiences rooted in safety, certified techniques, and trust.
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
            <a
              href="https://www.instagram.com/clawsteps/"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative aspect-4/3 w-full"
            >
              <Image
                src="/assets/insbio1.png"
                alt="Professional Dog Walker"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs text-amber-400 font-medium flex items-center gap-1.5">
                  Follow our pack on Instagram <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Values & Vision Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
              Core Philosophies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Spreading Happiness
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              We create moments of joy and health that ripple through the community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES_GRID.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl border transition-colors flex flex-col justify-between ${
                  item.highlight
                    ? "bg-linear-to-br from-amber-500/10 to-zinc-900 border-amber-500/40"
                    : "bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-700"
                }`}
              >
                <div>
                  <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl w-fit mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Box */}
        <section className="bg-linear-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-14 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to start?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-md mx-auto">
            Book a free meet-and-greet today and let your pet experience structured, loving walks.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/917982520153"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-7 py-3.5 rounded-xl transition text-sm shadow-xl shadow-amber-500/10"
            >
              Book a Walk Now
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}