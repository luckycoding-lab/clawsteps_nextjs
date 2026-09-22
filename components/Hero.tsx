import Link from "next/link";

const REVIEWS = [
  { initials: "RS", name: "Rohit Sharma", time: "12 min ago", text: "My dog waits at the door every morning for Claw Steps 🐾" },
  { initials: "AV", name: "Ananya Verma", time: "3 days ago", text: "Professional walkers and genuine love for pets. Highly recommended!" },
  { initials: "KM", name: "Kunal Mehta", time: "1 week ago", text: "Safe, timely walks. My Labrador comes back happy every time." },
  { initials: "PN", name: "Pooja Nair", time: "2 weeks ago", text: "Claw Steps treats my pet like family. Love the service 💛" },
  { initials: "AK", name: "Amit Khurana", time: "18 days ago", text: "Reliable and caring walkers. Total peace of mind." },
  { initials: "SI", name: "Sneha Iyer", time: "3 weeks ago", text: "Daily walks have improved my dog’s mood and health." },
  { initials: "VM", name: "Vikas Malhotra", time: "1 month ago", text: "Best dog walking service in Delhi NCR. Trustworthy team." },
  { initials: "NK", name: "Neha Kapoor", time: "4 weeks ago", text: "My puppy is calmer and happier thanks to Claw Steps." },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 min-h-[85vh] flex flex-col justify-between">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-25"
        >
          <source src="/assets/clawstepsmainvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Where Every Step <br />
          <span className="text-amber-500 font-serif italic">Tells a Happy Tail</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-zinc-300">
          Delhi NCR&apos;s trusted professional dog walking and pet care service.
          Verified, trained, and 100% loving walkers for your pets.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="#bookingForm"
            className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-6 py-3 rounded-xl transition"
          >
            Book A Walk
          </Link>
          <Link
            href="/about"
            className="border border-zinc-700 hover:border-zinc-500 text-zinc-200 font-medium px-6 py-3 rounded-xl transition"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative z-10 py-6 border-t border-zinc-800/60 overflow-hidden">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {REVIEWS.concat(REVIEWS).map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-3 min-w-75"
            >
              <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center font-bold text-xs shrink-0">
                {item.initials}
              </div>
              <div className="text-left overflow-hidden">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-zinc-200 truncate">{item.name}</span>
                  <span className="text-[10px] text-zinc-500">{item.time}</span>
                </div>
                <p className="text-xs text-zinc-400 truncate">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}