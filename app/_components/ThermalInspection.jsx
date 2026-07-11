"use client";

import React, { useState } from "react";
import { Thermometer, ShieldCheck } from "lucide-react";

const ThermalInspection = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your form handler / API route
    console.log("Submitted phone:", phone);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr,0.9fr,1fr] gap-10 items-center">
        {/* Left content */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Thermometer className="w-6 h-6 text-red-500" />
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-snug">
              THERMAL INSPECTION
            </h2>
          </div>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Before starting any work, we always carry out a{" "}
            <span className="font-bold text-slate-900">
              thermal inspection
            </span>{" "}
            — free of charge.
          </p>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            This lets us pinpoint exactly where insulation is needed most,
            so you get the maximum reduction in energy costs for the
            lowest possible budget — no guesswork.
          </p>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            And the thermal imaging survey itself is{" "}
            <span className="font-bold text-slate-900">
              included at no cost
            </span>
            .
          </p>
        </div>

        {/* Center - decorative device visual */}
        <div className="relative flex items-center justify-center py-10 md:py-0">
          {/* Concentric rings */}
          <div className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-red-200" />
          <div className="absolute w-44 h-44 md:w-52 md:h-52 rounded-full border-2 border-red-200" />

          <div className="relative w-28 h-36 md:w-32 md:h-40 bg-slate-800 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-2 rotate-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-emerald-400 via-amber-300 to-red-500 flex items-center justify-center">
              <Thermometer className="w-8 h-8 text-white" />
            </div>
            <div className="w-14 h-2 rounded-full bg-slate-600" />
          </div>
        </div>

        {/* Right - form card */}
        <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-7">
          <span className="absolute -top-3 right-6 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            Free
          </span>

          <p className="text-sm md:text-base text-slate-800 mb-5 leading-snug">
            Book your{" "}
            <span className="font-bold">free thermal inspection</span>
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label className="text-xs text-slate-500">
              Phone <span className="text-red-500">*</span> Enter your
              phone number
            </label>

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (___) ___-__-__"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-b from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 transition-colors text-slate-900 font-semibold text-sm md:text-base px-6 py-3 rounded-lg shadow-md"
            >
              Get a Quick Estimate
            </button>

            <p className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-1">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              By clicking the button, you agree to the{" "}
              <a href="#" className="underline hover:text-slate-600">
                privacy policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ThermalInspection;