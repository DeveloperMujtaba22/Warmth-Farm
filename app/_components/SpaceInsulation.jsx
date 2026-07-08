import React from "react";
import Image from "next/image";

const SpaceInsulation = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0b1230] via-[#16234f] to-sky-300 py-16 px-6 md:px-16">
      {/* Starfield dots */}
      <div className="absolute inset-0 opacity-40 pointer-events-none [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
              SPACE-GRADE INSULATION
            </h2>
            <Image
              src="/icon-rocket.png"
              alt="Rocket"
              width={44}
              height={44}
              className="shrink-0"
            />
          </div>

          <p className="text-sky-100/90 text-sm md:text-base leading-relaxed">
            Today, PPU is the most energy-efficient insulation material in
            the world. It's actively used in the space industry — the
            Soviet reusable spacecraft Buran was insulated with PPU.
          </p>

          <p className="text-sky-100/90 text-sm md:text-base leading-relaxed">
            Minimal thickness, maximum energy efficiency.
          </p>

          <p className="text-sky-100/90 text-sm md:text-base leading-relaxed">
            PPU is non-flammable and the most energy-efficient insulator in
            the world. 8 cm of PPU equals 190 cm of brick — and that's no
            exaggeration. 5 cm of PPU equals 15 cm of dry mineral wool,
            with no seams around the wood.
          </p>

          <button className="mt-2 bg-gradient-to-b from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 transition-colors text-slate-900 font-semibold text-sm md:text-base px-6 py-4 rounded-xl shadow-md w-fit flex items-center gap-3">
            <Image
              src="/icon-calculator.png"
              alt=""
              width={28}
              height={28}
              className="shrink-0"
            />
            Calculate Insulation Cost
          </button>
        </div>

        {/* Right image card */}
        <div className="relative">
          <div className="bg-white/95 rounded-2xl shadow-xl p-4 md:p-6">
            <Image
              src="/comparison-bricks.png"
              alt="Insulation thickness comparison: brick, block, timber, and PPU foam"
              width={1200}
              height={700}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceInsulation;