import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-sky-200 via-sky-300 to-sky-400">
      {/* Background image - full screen width & height */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero-worker.png"
          alt="Technician spraying polyurethane foam insulation"
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      {/* Left content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-16 pb-24 min-h-screen flex flex-col justify-center">
        <div className="w-full md:w-[48%] flex flex-col gap-6">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
            WE INSULATE WITH SPRAYED PPU{" "}
            <span className="inline-block bg-slate-900 text-white px-3 py-1 rounded-md text-lg md:text-2xl align-middle">
              30-YEAR GUARANTEE
            </span>
          </h1>

          {/* Badges - glassmorphism / blurred cards */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-md px-4 py-3 flex items-center gap-3 max-w-[220px] border border-white/40">
              <Image
                src="/badge-prepay.png"
                alt="No prepayment required"
                width={40}
                height={40}
                className="shrink-0"
              />
              <span className="text-sm text-slate-800 font-medium">
                Pay only after the work is done
              </span>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-md px-4 py-3 flex items-center gap-3 max-w-[240px] border border-white/40">
              <Image
                src="/badge-notice.png"
                alt="Reduce heating bills"
                width={40}
                height={40}
                className="shrink-0"
              />
              <span className="text-sm text-slate-800 font-medium">
                Cut your heating bills by 40% or get your money back
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white/40 backdrop-blur-sm rounded-lg px-4 py-3 w-fit">
            <p className="text-lg font-semibold text-slate-900">
              Get a <span className="text-sky-700">free</span> thermal
              inspection.
            </p>
            <p className="text-sm text-slate-700 mt-2 max-w-md">
              After the inspection, you'll know exactly how to achieve
              maximum heat-loss reduction for the lowest budget.
            </p>
          </div>

          {/* CTA button */}
          <button className="bg-amber-400 hover:bg-amber-300 transition-colors text-slate-900 font-semibold px-6 py-4 rounded-xl shadow-md w-fit flex items-center gap-3">
            Get an Inspection
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-700/70 z-10">
        <span className="text-xs tracking-wide">scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-700/40 flex justify-center pt-1">
          <div className="w-1 h-2 bg-slate-700/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;