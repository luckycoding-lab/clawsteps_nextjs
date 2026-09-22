"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle, ChevronRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/aboutus" },
  { label: "Privacy Policy", href: "/privacypolicy" },
  { label: "Terms & Conditions", href: "/term-and-condition" },
];

export default function NavbarGlass() {
  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/80 backdrop-blur-2xl border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo - Left */}
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/clawsteps_logo.png"
            alt="clawsteps_logo"
            width={130}
            height={32}
            priority
            style={{ width: "auto" }}
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav - Center */}
        <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
          <div className="flex items-center bg-zinc-900/50 rounded-full px-1.5 py-1.5 border border-zinc-800/50">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/80
                           px-4 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop CTA - Right */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://wa.me/917982520153?text=Hello%20Claw%20Steps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500
                       text-white text-xs font-semibold px-4 py-2 rounded-full transition-all
                       hover:shadow-lg hover:shadow-emerald-500/20"
          >
            <MessageCircle className="w-4 h-4" />
            Chat
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="https://wa.me/917982520153?text=Hello%20Claw%20Steps"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 rounded-full bg-emerald-500/10 text-emerald-400
                       active:scale-95 transition-all touch-manipulation"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          <details className="group relative">
            <summary
              aria-label="Menu"
              className="list-none cursor-pointer p-2.5 rounded-full bg-zinc-900
                         border border-zinc-800 text-zinc-100 flex items-center
                         justify-center select-none touch-manipulation
                         [&::-webkit-details-marker]:hidden active:scale-95"
            >
              <Menu className="w-5 h-5 group-open:hidden" />
              <X className="w-5 h-5 hidden group-open:block text-amber-400" />
            </summary>

            {/* Mobile Dropdown - Left Aligned */}
            <div className="fixed inset-x-0 top-16 bg-zinc-950/98 backdrop-blur-2xl
                            border-b border-zinc-800/50 shadow-2xl shadow-black/50">
              <div className="max-w-7xl mx-auto px-4 py-6">
                <ul className="space-y-1">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between text-base font-medium
                                   text-zinc-300 hover:text-amber-400 py-3 px-3 rounded-xl
                                   hover:bg-zinc-900/50 transition-all group/link"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-4 h-4 text-zinc-600 group-hover/link:text-amber-400
                                                  group-hover/link:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-4 border-t border-zinc-800/50">
                  <a
                    href="https://wa.me/917982520153?text=Hello%20Claw%20Steps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2
                               bg-emerald-600 hover:bg-emerald-500 text-white font-semibold
                               py-3.5 rounded-2xl text-sm transition-all shadow-lg
                               shadow-emerald-500/10"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}