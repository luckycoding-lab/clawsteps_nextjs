import { Zap, HeartHandshake, Compass, MapPin } from "lucide-react";

export default function CarePackages() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full mb-3">
          Premier Dog Care • Delhi NCR
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          The <span className="font-serif italic text-amber-500">Care</span> Packages
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base">
          Premium walking experiences structured specifically around your dog&apos;s energy levels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Large Highlight Card */}
        <div className="md:col-span-2 bg-linear-to-br from-zinc-900 to-zinc-950 border border-amber-500/30 p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="bg-amber-500 text-zinc-950 text-xs font-bold px-2.5 py-1 rounded-full">
                Best Value
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Weekly Play Pack</h3>
            <p className="text-amber-400 font-semibold mb-3">30 min / 6 walks</p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Our most popular routine. Consistent engagement to keep your dog physically active, calm, and fulfilled while you manage work.
            </p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Priority Scheduling
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> GPS Live Tracking
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Professional Handlers
              </li>
            </ul>
          </div>
          <a
            href="https://wa.me/917982520153"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block text-center bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold py-3 rounded-xl transition"
          >
            Get Started Now
          </a>
        </div>

        {/* 20 Min Quick Card */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="p-3 bg-zinc-800 rounded-xl text-amber-400 w-fit mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Quick Refresh</h3>
            <p className="text-amber-500 font-semibold text-sm mb-3">20 min Session</p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Designed for elderly dogs, puppies, or quick midday relief walks to keep routine intact.
            </p>
          </div>
          <a
            href="https://wa.me/917982520153"
            className="mt-6 text-sm text-amber-400 hover:text-amber-300 font-medium"
          >
            Book now →
          </a>
        </div>

        {/* 40 Min Stroll Card */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="p-3 bg-zinc-800 rounded-xl text-amber-400 w-fit mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Long Stroll</h3>
            <p className="text-amber-500 font-semibold text-sm mb-3">40 min Session</p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Deep aerobic exercise session tailored to burn off energy for high-stamina adult breeds.
            </p>
          </div>
          <a
            href="https://wa.me/917982520153"
            className="mt-6 text-sm text-amber-400 hover:text-amber-300 font-medium"
          >
            Book now →
          </a>
        </div>

        {/* Coverage Banner Card */}
        <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-center gap-4">
          <div className="p-3 bg-zinc-800 rounded-xl text-amber-400 shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">NCR Coverage Area</h4>
            <p className="text-zinc-400 text-sm">
              Active in South Delhi, Dwarka, Noida, and Gurgaon with local vetted specialists.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Counter Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {[
          { label: "Walks Completed", value: "1k+" },
          { label: "Satisfied Clients", value: "99%" },
          { label: "Google Rating", value: "4.9" },
          { label: "Expert Walkers", value: "50+" },
        ].map((stat, i) => (
          <div key={i} className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-xl text-center">
            <div className="text-3xl font-extrabold text-amber-500 mb-1">{stat.value}</div>
            <div className="text-xs text-zinc-400 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}