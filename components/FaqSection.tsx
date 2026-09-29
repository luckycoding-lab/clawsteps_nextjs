"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeartHandshake } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: "item-1",
    question: "Will my pup feel scared or confused walking with someone new?",
    answer:
      "We know how tender-hearted dogs are with unfamiliar faces. That’s why we never rush. Before any walk begins, our handler spends quiet time sitting beside your pup, offering treats, and speaking in calm tones. We only clip the leash when your dog's tail gives us the green light. You can also join us during the complimentary Meet & Greet so they know their human trusts us too.",
  },
  {
    id: "item-2",
    question: "What if my dog is shy, pulls on leash, or gets nervous around city traffic?",
    answer:
      "Every dog has their own rhythm and past story. We use gentle, force-free guidance with secure harnesses—never choke chains or sudden tugs. If your pup gets overwhelmed by traffic sounds in Delhi, our handlers naturally pause, step aside to a calm corner, and let them decompress at their own pace.",
  },
  {
    id: "item-3",
    question: "How will I know my fur baby is safe while I am at work?",
    answer:
      "You are trusting us with family, and we honor that completely. The moment the session starts, you receive a real-time WhatsApp live tracking link. You’ll see their walking route, distance covered, and little joyful moments captured in photos and videos right on your phone.",
  },
  {
    id: "item-4",
    question: "Delhi summers get terribly hot—how do you protect their little paw pads?",
    answer:
      "Dog paws are as sensitive as bare human feet. During peak heat, we shift sessions exclusively to breezy early mornings (6:00 AM) or post-sunset. Our handlers strictly follow the 5-second palm test on the asphalt. If the ground is too hot, we swap the outdoor walk for cool, indoor scent puzzles and bonding play at your home.",
  },
  {
    id: "item-5",
    question: "What if my schedule changes or I need to reschedule last minute?",
    answer:
      "Life happens, meetings run late, and pet parents have unpredictable days. Just message us on WhatsApp a few hours in advance, and our team will gladly adjust your dog's walk slot with zero hassle or stress.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Curiosity Meets Compassion</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Questions Every Caring Pet Parent Asks
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Because handing over your best friend takes complete peace of mind. Here is how we ensure their safety and joy.
        </p>
      </div>

      {/* Accordion List */}
      <Accordion  className="w-full space-y-4">
        {FAQ_ITEMS.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border border-zinc-800/80 bg-zinc-900/40 rounded-2xl px-6 py-1 transition-colors data-[state=open]:border-amber-500/40 data-[state=open]:bg-zinc-900/70"
          >
            <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-zinc-200 hover:text-amber-400 transition-colors py-4 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 text-sm sm:text-base leading-relaxed pt-1 pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}