import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <Image
            src="/assets/clawsteps_logo.png"
            alt="ClawSteps Logo"
            width={130}
            height={36}
            priority={true}
            className="h-auto w-auto object-contain"
          />
          <p className="text-xs leading-relaxed text-zinc-300">
            Ensuring your pets get regular exercise and structured care. Delhi&apos;s premier dog walking community with verified handlers.
          </p>
          <div className="flex space-x-3 pt-2">
            <a href="https://www.instagram.com/clawsteps/" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:text-white">IG</a>
            <a href="https://x.com/clawsteps" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:text-white">X</a>
            <a href="https://www.facebook.com/profile.php?id=61581390965748" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:text-white">FB</a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/services" className="hover:text-amber-500">Dog Walking Routine</Link></li>
            <li><Link href="/blog" className="hover:text-amber-500">Pet Health Blog</Link></li>
            <li><Link href="/services" className="hover:text-amber-500">Brain Games & Stimulation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/about" className="hover:text-amber-500">About Our Pack</Link></li>
            <li><Link href="/terms" className="hover:text-amber-500">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-amber-500">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Get in Touch</h4>
          <p className="text-xs mb-2"><strong className="text-zinc-300">Call:</strong> +91 79825 20153</p>
          <p className="text-xs mb-4"><strong className="text-zinc-300">Email:</strong> contact@clawsteps.com</p>
          <a
            href="https://wa.me/917982520153"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold px-4 py-2 rounded-xl hover:bg-emerald-600/30"
          >
            <MessageCircle className="w-3.5 h-3.5" /> Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-zinc-900 py-6 text-center text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Claw Steps. All Rights Reserved.</p>
        <div className="flex items-center gap-1.5 mt-2 sm:mt-0 text-amber-500/80">
          <MapPin className="w-3.5 h-3.5" />
          <span>Active in Delhi NCR</span>
        </div>
      </div>
    </footer>
  );
}