import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="w-full py-10 px-4 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left - blue WhatsApp panel */}
        <div className="relative flex-1 bg-gradient-to-r from-sky-500 to-sky-400 flex items-center gap-4 md:gap-6 px-8 md:px-10 py-8 md:py-6">
          {/* Worker photo badge */}
          <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-amber-400 flex items-center justify-center overflow-hidden border-4 border-white shadow-md -ml-2">
            <img
              src="/technician.png"
              alt="Technician"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-white text-sm md:text-base leading-snug flex-1">
            Let's dive into your project and{" "}
            <span className="font-bold">solve it comprehensively</span> —
            let's discuss it on WhatsApp.
          </p>

          <button
            aria-label="Continue"
            className="hidden md:flex shrink-0 w-12 h-12 rounded-xl bg-white/20 hover:bg-white/30 transition-colors items-center justify-center"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Right - phone input + CTA */}
        <div className="flex-1 bg-white flex flex-col justify-center gap-3 px-8 md:px-10 py-8 md:py-6">
          <label className="text-sm text-slate-700">
            Phone <span className="text-red-500">*</span>{" "}
            <span className="text-slate-400">Enter your phone number</span>
          </label>

          <input
            type="tel"
            placeholder="+7 (___) ___-__-__"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-b from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 transition-colors text-slate-900 font-semibold text-sm md:text-base px-6 py-3 rounded-lg shadow-md">
            <MessageCircle className="w-5 h-5" fill="currentColor" />
            Get a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;