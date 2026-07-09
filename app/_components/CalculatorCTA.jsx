import React from "react";
import Image from "next/image";
import { Hourglass } from "lucide-react";

const CalculatorCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-sky-100 via-sky-200 to-sky-300 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div className="flex flex-col gap-5 relative z-10">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
              Calculate the Cost of PPU Insulation{" "}
              <span className="text-sky-700">in 1 Minute</span>
            </h2>
            <div className="hidden md:flex shrink-0 w-14 h-14 rounded-full bg-white shadow-md items-center justify-center">
              <Hourglass className="w-6 h-6 text-sky-600" />
            </div>
          </div>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Answer 7 questions and get a{" "}
            <span className="font-bold">free thermal inspection</span>.
          </p>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            We'll send the price list on{" "}
            <span className="text-emerald-600 font-semibold">WhatsApp</span>{" "}
            or call you back whenever it's convenient.
          </p>

          <button className="mt-2 bg-gradient-to-b from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 transition-colors text-slate-900 font-semibold text-sm md:text-base px-8 py-4 rounded-xl shadow-md w-fit">
            Calculate the Cost
          </button>
        </div>

        {/* Right image */}
        <div className="relative flex justify-center md:justify-end">
          <Image
            src="/technician.png"
            alt="Technician with thermal imaging camera"
            width={700}
            height={700}
            className="w-full max-w-md md:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CalculatorCTA;