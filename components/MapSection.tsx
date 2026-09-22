import { MapPin, Phone, Mail, Target } from "lucide-react";

export default function MapSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.267922568967!2d77.03261877601616!3d28.62173118457016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05003f8ff00d%3A0x97e2fac6216d3450!2sClawsteps!5e0!3m2!1sen!2sin!4v1767990693339!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ClawSteps Google Map Location"
        />

        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              Claw Steps 🐾
            </h3>
            <p className="text-zinc-400 text-sm mt-1">Professional Dog Walking Service</p>
            <span className="text-xs text-amber-500 font-semibold">Delhi NCR Operations</span>
          </div>

          <div className="space-y-2 text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              <span>contact@clawsteps.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <span>+91 79825 20153</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-amber-500 shrink-0" />
              <span>@clawsteps</span>
            </div>
          </div>

          <div className="md:text-right">
            <a
              href="https://maps.app.goo.gl/22DfgQhW3E3BpL9r8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl border border-zinc-700 transition"
            >
              <MapPin className="w-4 h-4 text-amber-500" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}