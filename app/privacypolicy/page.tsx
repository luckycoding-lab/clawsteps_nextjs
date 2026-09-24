import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Navigation,
  PhoneOff,
  Trash2,
  Lock,
  Mail,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | ClawSteps",
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
  robots: {
    index: false,
    follow: true,
  },
};

const TLDR_POINTS = [
  {
    icon: <Navigation className="w-5 h-5 text-amber-500" />,
    text: "GPS tracking only active during walks.",
  },
  {
    icon: <PhoneOff className="w-5 h-5 text-amber-500" />,
    text: "Phone numbers never sold to third parties.",
  },
  {
    icon: <Trash2 className="w-5 h-5 text-amber-500" />,
    text: "Delete your data anytime you want.",
  },
  {
    icon: <Lock className="w-5 h-5 text-amber-500" />,
    text: "Home security is our absolute priority.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Header */}
        <div className="text-center space-y-4 border-b border-zinc-800 pb-10">
          <Link href="/" className="inline-block mx-auto mb-2">
            <Image
              src="/assets/clawsteps_logo.png"
              alt="Claw Steps Logo"
              width={160}
              height={45}
              priority
              className="h-11 w-auto object-contain mx-auto"
            />
          </Link>

          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full mb-3">
              Last Updated: Jan 2026
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Privacy &amp; Policy
            </h1>
          </div>

          <p className="max-w-md mx-auto text-sm sm:text-base text-zinc-300 font-medium leading-relaxed">
            We treat your data like we treat your dogs—with total care.
          </p>
        </div>

        {/* TL;DR Quick Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TLDR_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 flex items-center gap-3.5"
            >
              <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-xl shrink-0">
                {item.icon}
              </div>
              <p className="text-sm text-zinc-300 font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Main Content Sections */}
        <main className="space-y-8">
          {/* Section 01 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
                01
              </span>
              <h2 className="text-xl font-bold text-white">
                The Information We Collect
              </h2>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed pl-1 sm:pl-9">
              To provide professional dog walking services, we collect necessary
              details like your name, contact information, and address for
              pickup.
            </p>
            <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-4 ml-0 sm:ml-9 space-y-1">
              <strong className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4" /> Pet Specifics
              </strong>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                We store details about your pup’s health, dietary needs,
                temperament, and emergency vet contacts to ensure their safety.
              </p>
            </div>
          </section>

          {/* Section 02 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
                02
              </span>
              <h2 className="text-xl font-bold text-white">
                GPS &amp; Live Tracking
              </h2>
            </div>
            <div className="space-y-2 text-sm text-zinc-300 leading-relaxed pl-1 sm:pl-9">
              <p>
                During the session, our app collects precise location data to
                provide you with the live walk route. This data collection stops
                the moment the session is marked as &ldquo;Completed.&rdquo;
              </p>
              <p className="text-zinc-300">
                History of these routes is saved in your account so you can
                track your pet&apos;s exercise progress over time.
              </p>
            </div>
          </section>

          {/* Section 03 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
                03
              </span>
              <h2 className="text-xl font-bold text-white">
                Photography &amp; Media
              </h2>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed pl-1 sm:pl-9">
              Our walkers love taking photos of your pups! These are shared with
              you privately via the app. We only use photos for marketing
              (Instagram/Website) if you have explicitly checked the
              &ldquo;Media Consent&rdquo; box in your profile.
            </p>
          </section>

          {/* Section 04 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
                04
              </span>
              <h2 className="text-xl font-bold text-white">
                Home Access Security
              </h2>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed pl-1 sm:pl-9">
              If you provide physical keys or digital access codes, these are
              encrypted in our system. Only your assigned primary walker and a
              backup manager have access to these details.
            </p>
          </section>

          {/* Section 05 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
                05
              </span>
              <h2 className="text-xl font-bold text-white">Your Rights</h2>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed pl-1 sm:pl-9">
              You have the right to request a copy of all data we hold about you
              or ask for its permanent deletion. We aim to process these
              requests within 48 hours.
            </p>
          </section>
        </main>

        {/* Contact Support Footer Box */}
        <div className="bg-linear-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-10 text-center space-y-4">
          <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-2xl w-fit mx-auto text-amber-500">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white">Questions?</h3>
          <p className="text-xs sm:text-sm text-zinc-300">
            Text our privacy lead directly at
          </p>
          <div>
            <a
              href="mailto:contact@clawsteps.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition"
            >
              <Mail className="w-4 h-4" /> contact@clawsteps.com
            </a>
          </div>
          <p className="text-xs text-zinc-500 pt-4 border-t border-zinc-800/80">
            By using Claw Steps, you agree to the terms outlined above.
          </p>
        </div>
      </div>
    </div>
  );
}