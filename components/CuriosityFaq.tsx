const FAQS = [
  {
    label: "Safety & Tracking",
    question: "How do I know where my dog is during the session?",
    answer:
      "Safety is the core of our service. Every walk is monitored via live GPS tracking. Once the session begins, you'll receive a secure WhatsApp link to monitor your pup's route, pace, and location in real-time.",
  },
  {
    label: "The Walkers",
    question: "What qualifications do Claw Steps walkers have?",
    answer:
      "Every walker in our pack undergoes a rigorous 4-week training program. This includes canine behavioral studies, basic first aid, and dual-leash handling techniques.",
  },
  {
    label: "Environment",
    question: "What happens if it's too hot or raining outside?",
    answer:
      "In extreme heat or heavy rain, we offer indoor 'Brain Games' sessions. This includes mental stimulation and indoor training to ensure they burn energy safely.",
  },
  {
    label: "Onboarding",
    question: "Can I meet the walker before the first session?",
    answer:
      "Absolutely. We require a Trial Session for all new members. This allows the walker to bond with your dog and for you to ask any specific questions.",
  },
];

export default function CuriosityFaq() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* FAQ Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-500 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full mb-4">
          Common Questions
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Curiosity{" "}
          <span className="font-serif italic text-amber-500">meets</span>{" "}
          transparency.
        </h2>
        <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
          We believe in building trust through every detail. If you have more
          questions, our pack is always a message away.
        </p>
      </div>

      {/* FAQ Grid */}
      <div id="faq" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FAQS.map((faq, index) => (
          <div
            key={index}
            className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 hover:border-zinc-800 transition-colors"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
              {faq.label}
            </span>
            <h3 className="text-lg font-bold text-white mt-2 mb-3">
              {faq.question}
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}