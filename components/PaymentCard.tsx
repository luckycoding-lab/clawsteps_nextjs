"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Copy, ShieldCheck, UserCheck } from "lucide-react";

type PaymentProvider = "whatsapp" | "gpay";

interface ProviderData {
  name: string;
  holderName: string;
  upiId: string;
  qrImage: string;
  actionText: string;
  whatsappMessage: string;
  upiDeepLink: string;
}

const PROVIDERS: Record<PaymentProvider, ProviderData> = {
  whatsapp: {
    name: "WhatsApp Pay",
    holderName: "Sarthak Diwaker",
    upiId: "sarthak.8752@waaxis",
    qrImage: "/assets/whatsapp_qr.png",
    actionText: "Pay via WhatsApp",
    whatsappMessage:
      "Hi Sarthak, I am making a payment for ClawSteps service to your WhatsApp UPI (sarthak.8752@waaxis). Please verify once received.",
    upiDeepLink: "upi://pay?pa=sarthak.8752@waaxis&pn=Sarthak%20Diwaker&cu=INR",
  },
  gpay: {
    name: "Google Pay",
    holderName: "Sarthak Diwaker",
    upiId: "sarthakdiwaker0819@oksbi",
    qrImage: "/assets/gpay_qr.png",
    actionText: "Pay via Google Pay",
    whatsappMessage:
      "Hi Sarthak, I have sent payment for ClawSteps to your Google Pay UPI (sarthakdiwaker0819@oksbi). Please confirm receipt.",
    upiDeepLink: "upi://pay?pa=sarthakdiwaker0819@oksbi&pn=Sarthak%20Diwaker&cu=INR",
  },
};

// Glowing Button with Dynamic Gradient
const GlowActionButton = ({
  label,
  isActive,
  onClick,
  iconType,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
  iconType: "whatsapp" | "gpay";
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative rounded-full p-px overflow-hidden transition-all active:scale-95 cursor-pointer w-full ${
        isActive ? "ring-2 ring-amber-400/80" : "opacity-90 hover:opacity-100"
      }`}
    >
      <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        <span
          className="block -translate-x-1/2 -translate-y-1/3 size-24 blur-xl"
          style={{
            background:
              iconType === "whatsapp"
                ? "linear-gradient(135deg, rgb(37, 211, 102), rgb(16, 185, 129), rgb(245, 158, 11))"
                : "linear-gradient(135deg, rgb(66, 133, 244), rgb(234, 67, 53), rgb(251, 188, 5))",
          }}
        />
      </span>

      <span
        className="inset-0 absolute pointer-events-none select-none animate-pulse"
        style={{
          background:
            iconType === "whatsapp"
              ? "linear-gradient(135deg, rgba(37, 211, 102, 0.35), rgba(245, 158, 11, 0.35))"
              : "linear-gradient(135deg, rgba(66, 133, 244, 0.35), rgba(234, 67, 53, 0.35))",
        }}
      />

      <span className="flex items-center justify-center gap-2 relative z-[1] bg-neutral-950/90 rounded-full py-2.5 px-4 w-full">
        <span className="relative group-hover:scale-110 transition-transform duration-300">
          {iconType === "whatsapp" ? (
            <svg className="w-4 h-4 fill-emerald-400" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.842-.981z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 fill-sky-400" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
            </svg>
          )}
        </span>

        <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-xs sm:text-sm font-bold text-transparent">
          {label}
        </span>
      </span>
    </button>
  );
};

export default function PaymentCard() {
  const [activeProvider, setActiveProvider] = useState<PaymentProvider>("whatsapp");
  const [copied, setCopied] = useState(false);

  const current = PROVIDERS[activeProvider];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // WhatsApp click handler for both QR and WhatsApp button
  const whatsappTargetUrl = `https://wa.me/917906678752?text=${encodeURIComponent(
    current.whatsappMessage
  )}`;

  return (
    <section className="w-full max-w-xl mx-auto p-4 sm:p-6">
      {/* Glossy Dark Card */}
      <div className="relative overflow-hidden rounded-3xl bg-neutral-950/95 border border-neutral-800/90 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-neutral-700">
        
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 -left-24 size-64 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 size-64 rounded-full bg-emerald-500/10 blur-3xl" />

        {/* Top Header: Member Pill (Left) & UPI ID + Copy (Right) */}
        <div className="flex items-center justify-between gap-2 border-b border-neutral-800/80 pb-5">
          {/* Personal Member Pill */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 border border-neutral-800 px-3 py-1 text-xs text-neutral-300">
            <span className="flex items-center justify-center size-4 rounded-full bg-amber-500/20 text-amber-400">
              <UserCheck className="w-2.5 h-2.5 stroke-[2.5]" />
            </span>
            <span className="font-medium tracking-tight">ClawSteps Member Account</span>
          </div>

          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 px-2.5 py-1 rounded-xl text-xs text-neutral-300 transition-colors cursor-pointer group"
            title="Click to copy UPI ID"
          >
            <span className="font-mono text-[11px] sm:text-xs text-neutral-400 group-hover:text-white">
              {current.upiId.length > 20
                ? `${current.upiId.slice(0, 10)}...${current.upiId.slice(-6)}`
                : current.upiId}
            </span>
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
            )}
          </button>
        </div>

        {/* Main Section: QR (Left) + Details (Right) */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-6">
          
          {/* QR Code Container (Clicking opens WhatsApp confirmation) */}
          <a
            href={whatsappTargetUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Click QR to confirm payment on WhatsApp"
            className="group/qr relative shrink-0 w-44 h-44 sm:w-48 sm:h-48 rounded-2xl bg-white p-2.5 flex items-center justify-center shadow-lg transition-transform hover:scale-[1.02] active:scale-98 cursor-pointer"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={current.qrImage}
                alt={`${current.holderName} QR Code`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Hover Indicator */}
            <div className="absolute inset-0 bg-neutral-950/80 rounded-2xl opacity-0 group-hover/qr:opacity-100 flex flex-col items-center justify-center p-3 text-center transition-opacity backdrop-blur-[2px]">
              <span className="text-xs font-bold text-emerald-400">Tap to Pay</span>
              <span className="text-[10px] text-neutral-300 mt-1">
                Opens WhatsApp with {current.holderName}&apos;s account details
              </span>
            </div>
          </a>

          {/* Member Details & Switching Buttons */}
          <div className="flex-1 w-full flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                Verified Account Holder
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                {current.holderName}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Scan via any UPI app or choose a quick option below to complete your booking settlement.
              </p>
            </div>

            {/* Glowing Action Buttons */}
            <div className="flex flex-col gap-2.5 pt-1">
              <GlowActionButton
                label="Pay via WhatsApp"
                isActive={activeProvider === "whatsapp"}
                onClick={() => {
                  setActiveProvider("whatsapp");
                  window.open(whatsappTargetUrl, "_blank");
                }}
                iconType="whatsapp"
              />

              <GlowActionButton
                label="Pay via Google Pay"
                isActive={activeProvider === "gpay"}
                onClick={() => {
                  setActiveProvider("gpay");
                  window.location.href = PROVIDERS.gpay.upiDeepLink;
                }}
                iconType="gpay"
              />
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            Official Settlement Account • {current.holderName}
          </span>
          <span className="text-neutral-400">Tap QR to chat</span>
        </div>

      </div>
    </section>
  );
}