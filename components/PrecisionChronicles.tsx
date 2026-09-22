interface ChronicleVideo {
  dogName: string;
  webmSrc: string;
  mp4Src: string;
  quote: string;
}

const DOG_VIDEOS: ChronicleVideo[] = [
  {
    dogName: "Zuno",
    webmSrc: "/assets/zuno.mp4",
    mp4Src: "/assets/zuno.mp4",
    quote:
      "Zuno waits at the door every evening for his Claw Steps walk. He comes back tired and happy. Thank you!",
  },
  {
    dogName: "Oreo",
    webmSrc: "/assets/oreo.mp4",
    mp4Src: "/assets/oreo.mp4",
    quote:
      "Oreo waits at the door every evening for his Claw Steps walk. He comes back tired and happy. Thank you!",
  },
  {
    dogName: "Coco",
    webmSrc: "/assets/coco.mp4",
    mp4Src: "/assets/coco.mp4",
    quote:
      "Daisy loves her 30 min walk. She has more energy now and sleeps better. Claw Steps is the best!",
  },
  {
    dogName: "Bingo",
    webmSrc: "/assets/bing.mp4",
    mp4Src: "/assets/bing.mp4",
    quote:
      "Bingo needed fresh air and exercise. Now he is healthier and calmer after his daily walks. Great service!",
  },
  {
    dogName: "Leo",
    webmSrc: "/assets/leo.mp4",
    mp4Src: "/assets/leo.mp4",
    quote:
      "Leo gets so excited when he sees the walker. It feels safe and caring. We trust Claw Steps fully.",
  },
  {
    dogName: "Shadow",
    webmSrc: "/assets/shadow.mp4",
    mp4Src: "/assets/shadow.mp4",
    quote:
      "Shadow was shy at first, but now she wags her tail every time Claw Steps comes. She feels loved.",
  },
];

export default function PrecisionChronicles() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Chronicles Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-500 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full mb-4">
          On-Duty Chronicles
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Precision Care in{" "}
          <span className="font-serif italic text-amber-500">Every Step.</span>
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          Watch how our certified walkers manage high-energy breeds and maintain
          safety protocols across Delhi&apos;s busy streets.
        </p>
      </div>

      {/* Videos Display Grid */}
      <div
        id="thecarousels"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {DOG_VIDEOS.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden p-5 flex flex-col justify-between"
          >
            <div className="relative w-full aspect-9/16 sm:aspect-square rounded-xl overflow-hidden bg-black mb-4">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="w-full h-full object-cover"
              >
                <source src={item.mp4Src} type="video/webm" />
                <source src={item.mp4Src} type="video/mp4" />
                <track kind="captions" label="English captions" default />
              </video>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Dog Name: {item.dogName}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed italic">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}