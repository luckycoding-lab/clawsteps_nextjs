import type { Metadata } from "next";
import Link from "next/link";
import { Dog, Wrench, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Coming Soon | Claw Steps",
  description: "Exciting new pet care features and products are coming soon to ClawSteps.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ComingSoonPage() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center bg-zinc-950 text-zinc-100 px-4 py-16 overflow-hidden">
      {/* Decorative Background Paws */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden">
        <span
          className="absolute text-5xl opacity-10 animate-pulse"
          style={{ top: "10%", left: "10%" }}
        >
          🐾
        </span>
        <span
          className="absolute text-6xl opacity-10 animate-pulse"
          style={{ top: "20%", right: "15%", animationDelay: "1s" }}
        >
          🐾
        </span>
        <span
          className="absolute text-5xl opacity-10 animate-pulse"
          style={{ bottom: "15%", left: "20%", animationDelay: "2s" }}
        >
          🐾
        </span>
        <span
          className="absolute text-7xl opacity-10 animate-pulse"
          style={{ bottom: "10%", right: "10%", animationDelay: "3s" }}
        >
          🐾
        </span>
      </div>

      {/* Main Coming Soon Card */}
      <div className="relative z-10 max-w-lg w-full bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl backdrop-blur-sm">
        {/* Icon & Status Badge */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shadow-inner">
            <Dog className="w-9 h-9" />
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            <Wrench className="w-3.5 h-3.5" />
            Work in Progress
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
          Woof! You caught us mid-walk.
        </h1>

        {/* Description */}
        <div className="space-y-3 text-sm text-zinc-400 leading-relaxed">
          <p>
            This link is currently being sniffed out and optimized by our team.
            We&apos;re busy building something amazing for the Delhi pet
            community!
          </p>
          <p className="text-zinc-300 font-medium">
            In the meantime, head back to our main pack:
          </p>
        </div>

        {/* CTA Return Button */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-6 py-3 rounded-xl transition duration-200 text-sm shadow-lg shadow-amber-500/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Main Website
          </Link>
        </div>

        {/* Bottom Tagline */}
        <div className="pt-6 border-t border-zinc-800 text-xs text-zinc-500 font-medium">
          Claw Steps – Walking Happiness, One Paw at a Time. 🐾
        </div>
      </div>
    </div>
  );
}