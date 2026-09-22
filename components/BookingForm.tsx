"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { submitBookingLead } from "@/app/actions/leadActions";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") || "").trim(),
      phoneNumber: String(formData.get("phoneNumber") || "").trim(),
      emailAddress: String(formData.get("emailAddress") || "").trim(),
      address: String(formData.get("address") || "").trim(),
      dogName: String(formData.get("dogName") || "").trim(),
      dogBreed: String(formData.get("dogBreed") || "").trim(),
      dogAge: Number(formData.get("dogAge")) || 0,
      gender: "Not specified",
      date: new Date().toISOString().split("T")[0],
      walkDuration: String(formData.get("walkDuration") || ""),
      timeSlot: String(formData.get("timeSlot") || ""),
      medicalNotes: String(formData.get("medicalNotes") || "").trim(),
    };

    try {
      const res = await submitBookingLead(payload);
      console.log("Server Response:", res);

      if (res?.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setErrorMsg(res?.message || "Submission failed.");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error";
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="bookingForm"
      className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 sm:p-10 shadow-2xl">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Book a Happy Walk
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">
            Fill in your pet&apos;s details to schedule a verified handler in
            Delhi NCR.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm rounded-xl flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {submitted ? (
          <div className="p-8 text-center bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-emerald-400">
              Booking Request Received!
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1">
              Our team will review your slot and contact you via WhatsApp
              shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-xs text-amber-400 hover:underline"
            >
              Submit another booking →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} method="POST" className="space-y-6">
            {/* Pet Parent Info */}
            <div className="border-b border-zinc-800 pb-5">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-amber-500 mb-3">
                Pet Parent Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Your Name
                  </label>
                  <input
                    name="fullName"
                    type="text"
                    required
                    placeholder="Rahul Sharma"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    name="phoneNumber"
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Email Address
                  </label>
                  <input
                    name="emailAddress"
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Address / Locality
                  </label>
                  <input
                    name="address"
                    type="text"
                    required
                    placeholder="Apartment, Street, Landmark"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Dog Details */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-amber-500 mb-3">
                Dog Details & Scheduling
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Dog&apos;s Name
                  </label>
                  <input
                    name="dogName"
                    type="text"
                    required
                    placeholder="Leo"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Breed
                  </label>
                  <input
                    name="dogBreed"
                    type="text"
                    required
                    placeholder="Golden Retriever / Indie"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Age (Years)
                  </label>
                  <input
                    name="dogAge"
                    type="number"
                    min="0"
                    max="25"
                    required
                    placeholder="3"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Duration
                  </label>
                  <select
                    name="walkDuration"
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-zinc-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="">Select length</option>
                    <option value="20 Mins">20 Mins (Quick Potty)</option>
                    <option value="30 Mins">30 Mins (Standard)</option>
                    <option value="40 Mins">40 Mins (High Energy)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Preferred Slot
                  </label>
                  <select
                    name="timeSlot"
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-zinc-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="">Select slot</option>
                    <option value="Morning">
                      Morning (7:00 AM - 10:00 AM)
                    </option>
                    <option value="Afternoon">
                      Afternoon (12:00 PM - 3:00 PM)
                    </option>
                    <option value="Evening">Evening (5:00 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="mt-3">
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Medical History / Behavioral Notes (Optional)
                </label>
                <textarea
                  name="medicalNotes"
                  rows={3}
                  placeholder="Allergies, fear of other dogs, joint issues..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-base sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-zinc-950 font-bold py-3.5 rounded-xl transition disabled:opacity-50 touch-manipulation cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving & Notifying Team...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Book Happy Walk
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
