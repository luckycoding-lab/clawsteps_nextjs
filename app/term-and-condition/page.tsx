import type { Metadata } from "next";
import { Download, ShieldCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | ClawSteps",
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

export default function TermsAndConditionsPage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-3 border-b border-zinc-800 pb-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            Legal Agreement
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Last Updated: January 2026
          </p>
        </div>

        {/* Important Notice Callout */}
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5 sm:p-6 flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-sm text-zinc-300 leading-relaxed">
            Please read these Terms and Conditions carefully. By booking a
            service with <strong className="text-white">Claw Steps</strong>, you
            agree to be bound by the terms outlined below.
          </p>
        </div>

        {/* Legal Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
              1. General Provisions
            </h2>
            <div className="space-y-4 text-sm text-zinc-300 leading-relaxed pl-1 sm:pl-7">
              <div>
                <h3 className="font-semibold text-zinc-100 mb-1">
                  1.1 Acceptance of Terms
                </h3>
                <p>
                  These Terms and Conditions constitute a legally binding
                  agreement between you, the client, and Claw Steps. By using
                  our services, you confirm that you have read, understood, and
                  agreed to these terms.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-100 mb-1">
                  1.2 Scope of Service
                </h3>
                <p>
                  Claw Steps provides professional dog walking and pet sitting
                  services. The specific services, dates, and times will be
                  detailed in your individual booking confirmation.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-100 mb-1">
                  1.3 Client Responsibilities
                </h3>
                <ul className="list-disc list-inside space-y-1.5 text-zinc-400">
                  <li>
                    <strong className="text-zinc-200">Information Accuracy:</strong>{" "}
                    You must provide complete information about your dog&apos;s
                    health conditions, behavioral issues, allergies, and special
                    needs.
                  </li>
                  <li>
                    <strong className="text-zinc-200">Vaccinations:</strong> All
                    dogs must be up-to-date on vaccinations and flea/tick
                    prevention. Proof may be requested.
                  </li>
                  <li>
                    <strong className="text-zinc-200">Supplies:</strong> Clients
                    must provide necessary supplies (leashes, harnesses, food,
                    and waste bags).
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
              2. Services and Bookings
            </h2>
            <div className="space-y-4 text-sm text-zinc-300 leading-relaxed pl-1 sm:pl-7">
              <div>
                <h3 className="font-semibold text-zinc-100 mb-1">
                  2.1 Booking Confirmation
                </h3>
                <p>
                  All services are subject to availability. A booking is not
                  confirmed until you receive a formal confirmation via email or
                  message from the Claw Steps team.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-100 mb-1">
                  2.2 Service Duration
                </h3>
                <p>
                  Dog walks are timed from entry to exit. This window includes
                  leashing, hydration, and towel-offs if needed.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-100 mb-1">
                  2.3 Meet-and-Greet
                </h3>
                <p>
                  A complimentary{" "}
                  <strong className="text-zinc-100">&ldquo;Meet-and-Greet&rdquo;</strong>{" "}
                  session is mandatory for all new clients to ensure compatibility
                  between the walker and your pet.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-100 mb-1">
                  2.4 Off-Leash Walking Policy
                </h3>
                <p>
                  All dogs remain on-leash at all times. Off-leash activity is
                  only permitted with a signed waiver and in designated,
                  fenced-in secure areas.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
              3. Payments and Cancellations
            </h2>
            <div className="space-y-4 text-sm text-zinc-300 leading-relaxed pl-1 sm:pl-7">
              <div>
                <h3 className="font-semibold text-zinc-100 mb-1">
                  3.1 Payment Policy
                </h3>
                <p>
                  Payment is due at the time of booking via all major credit cards
                  or digital payments. Bookings are finalized only upon receipt
                  of payment.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-100 mb-1">
                  3.2 Cancellation Fees
                </h3>
                <ul className="list-disc list-inside space-y-1.5 text-zinc-400">
                  <li>
                    <strong className="text-zinc-200">&gt; 24 Hours Notice:</strong>{" "}
                    Full refund or credit for future service.
                  </li>
                  <li>
                    <strong className="text-zinc-200">&lt; 24 Hours Notice:</strong>{" "}
                    No refund will be issued.
                  </li>
                  <li>
                    <strong className="text-zinc-200">No-Show/No Access:</strong> If
                    our walker cannot access the premises, the full fee applies.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
              4. Safety and Emergencies
            </h2>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed pl-1 sm:pl-7">
              <p>
                <strong className="text-zinc-100">4.1 Safety:</strong> While we
                take every precaution, Claw Steps is not liable for incidents
                caused by undisclosed health or aggression issues.
              </p>
              <p>
                <strong className="text-zinc-100">4.2 Medical Emergencies:</strong>{" "}
                If we cannot reach you during an emergency, we reserve the right
                to transport your pet to a veterinarian. You are responsible for
                all associated expenses.
              </p>
              <p>
                <strong className="text-zinc-100">4.3 Extreme Weather:</strong>{" "}
                For the safety of the dogs, walks may be shortened during extreme
                heatwaves or storms. Fees remain unchanged as care is still
                provided.
              </p>
            </div>
          </section>

          {/* Section 5 & 6 */}
          <section className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                5. Liability and Indemnification
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed pl-1 sm:pl-7">
                <strong className="text-zinc-100">5.1 Limited Liability:</strong>{" "}
                Claw Steps is not liable for loss, injury, or damage unless
                caused by gross negligence. Owners are liable for expenses if
                their dog bites or causes damage.
              </p>
            </div>

            <div className="border-t border-zinc-800/80 pt-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                6. Privacy Policy
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed pl-1 sm:pl-7">
                <strong className="text-zinc-100">6.1 Confidentiality:</strong>{" "}
                Claw Steps respects your privacy. Your personal information and
                home access details will never be shared with third parties
                unless required by law or in a medical emergency.
              </p>
            </div>
          </section>
        </div>

        {/* Bottom Acknowledgment */}
        <div className="text-center pt-8 border-t border-zinc-800 text-xs sm:text-sm italic text-zinc-500">
          <p>
            By proceeding with a booking, you acknowledge that you have read and
            agreed to these terms.
          </p>
        </div>
      </div>

      {/* Floating Download PDF Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="/assets/clawstepsterms.pdf"
          download
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-5 py-3 rounded-full shadow-2xl shadow-amber-500/20 transition-all duration-200 hover:scale-105"
        >
          <Download className="w-4 h-4 stroke-[2.5]" />
          <span className="text-sm">Download PDF</span>
        </a>
      </div>
    </div>
  );
}