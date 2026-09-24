import type { Metadata } from "next";
import Link from "next/link";
import {
  Footprints,
  BookOpenText,
  Home,
  BedDouble,
  Bone,
  CheckCircle2,
  PhoneCall,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Expert Dog Services: Beds, Walking & Care Tips | ClawSteps",
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
    canonical: "https://clawsteps.com/services",
  },
  openGraph: {
    type: "website",
    url: "https://clawsteps.com/services",
    title: "ClawSteps Services: Premium Comfort & Professional Walking",
    description:
      "Shop luxury dog beds and book reliable dog walking services today.",
    images: [
      {
        url: "https://clawsteps.com/assets/services-preview.png",
        width: 1200,
        height: 630,
        alt: "ClawSteps Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClawSteps Dog Services",
    description:
      "Premium dog beds and professional walking services at your fingertips.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ClawSteps Pet Care",
  description: "Professional dog walking and premium bedding.",
  provider: {
    "@type": "PetStore",
    name: "ClawSteps",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "ClawSteps Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Dog Walking" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Premium Dog Beds" },
      },
    ],
  },
};

interface ServiceItem {
  tag: string;
  tagType: "active" | "upcoming";
  icon: React.ReactNode;
  title: string;
  description: string;
  btnText: string;
  btnLink?: string;
  disabled?: boolean;
}

const SERVICES: ServiceItem[] = [
  {
    tag: "Live & Active",
    tagType: "active",
    icon: <Footprints className="w-6 h-6 text-amber-500" />,
    title: "Professional Walking",
    description:
      "Personalized sessions led by vetted professionals. We focus on exercise, socialization, and proper leash manners.",
    btnText: "Book a Session",
    btnLink: "/#bookingForm",
    disabled: false,
  },
  {
    tag: "Weekly",
    tagType: "active",
    icon: <BookOpenText className="w-6 h-6 text-amber-500" />,
    title: "Claw Steps Journal",
    description:
      "Deep dives into dog behavior, nutrition hacks, and the best pet-friendly spots in Delhi NCR.",
    btnText: "Read Our Journal",
    btnLink: "/blog",
    disabled: false,
  },
  {
    tag: "Active",
    tagType: "active",
    icon: <Home className="w-6 h-6 text-amber-500" />,
    title: "Luxury Boarding",
    description:
      "Cage-free, home-style boarding in safe environments. Your dog stays in a family atmosphere.",
    btnText: "Stay Tuned",
    btnLink: "https://wa.me/917982520153?text=Hi%20ClawSteps%2C%20I%20wanted%20to%20inquire%20about%20Pet%20Boarding%20service.",
    disabled: false,
  },
  {
    tag: "Summer 2026",
    tagType: "upcoming",
    icon: <BedDouble className="w-6 h-6 text-zinc-500" />,
    title: "Claw Steps Beds",
    description:
      "Proprietary ergonomic designs focused on joint health and ultimate comfort. Premium fabrics.",
    btnText: "Join Waitlist",
    disabled: true,
  },
  {
    tag: "Specialized",
    tagType: "upcoming",
    icon: <Bone className="w-6 h-6 text-zinc-500" />,
    title: "Senior Strolls",
    description:
      "Gentle, slow-paced mobility walks designed for older dogs to keep joints moving safely.",
    btnText: "Inquire Now",
    btnLink: "/#bookingForm",
    disabled: true,
  },
];

const STEPS = [
  {
    step: 1,
    title: "Register",
    description: "Tell us about your pup's unique personality via our form.",
  },
  {
    step: 2,
    title: "Meet & Greet",
    description: "A complimentary session to ensure a perfect match.",
  },
  {
    step: 3,
    title: "Walk & Update",
    description: "Enjoy live updates and photos while your dog explores.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 py-16 px-4 sm:px-6 lg:px-8">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto space-y-20">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-500 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
            Delhi&apos;s Premium Pet Care
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Elevating Your Pet&apos;s{" "}
            <span className="font-serif italic text-amber-500">Daily Life</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            From energetic daily walks to upcoming luxury boarding—we are
            building a full-circle ecosystem for the modern pet parent.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-800 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl">
                    {item.icon}
                  </div>
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${
                      item.tagType === "active"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-zinc-800 text-zinc-300 border-zinc-800"
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                {item.disabled ? (
                  <button
                  aria-label="Toogle for Disable"
                    disabled
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-zinc-800/80 text-zinc-500 cursor-not-allowed border border-zinc-800"
                  >
                    {item.btnText}
                  </button>
                ) : (
                  <Link
                    href={item.btnLink || "#"}
                    className="block w-full text-center py-2.5 px-4 rounded-xl text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-zinc-950 transition"
                  >
                    {item.btnText}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
              Simple 3-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-6 text-center space-y-3 relative"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-sm">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Support & Trust Stats Banner */}
        <section
          id="supportBanner"
          className="bg-linear-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 text-center space-y-8"
        >
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
              Parent Satisfaction
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Fueling Excellence Through Support
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-zinc-950/80 border border-zinc-800/80 p-6 rounded-2xl">
              <div className="text-3xl font-extrabold text-amber-500 mb-1">
                1000+
              </div>
              <div className="text-xs text-zinc-300 font-medium flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Happy Tails
              </div>
            </div>

            <div className="bg-zinc-950/80 border border-zinc-800/80 p-6 rounded-2xl">
              <div className="text-3xl font-extrabold text-amber-500 mb-1">
                24/7
              </div>
              <div className="text-xs text-zinc-300 font-medium flex items-center justify-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
                Parent Support
              </div>
            </div>

            <div className="bg-zinc-950/80 border border-zinc-800/80 p-6 rounded-2xl">
              <div className="text-3xl font-extrabold text-amber-500 mb-1">
                4.9/5
              </div>
              <div className="text-xs text-zinc-300 font-medium flex items-center justify-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                Trust Rating
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}