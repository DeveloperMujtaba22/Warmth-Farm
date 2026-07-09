"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  "/rigid-ppu-1.jpg",
  "/rigid-ppu-2.jpg",
];

const RigidPPU = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === galleryImages.length - 1 ? 0 : i + 1));

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-sky-200 via-sky-300 to-white py-16 px-6 md:px-16">
      {/* Calculator banner */}
      <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center gap-4 mb-16">
        <div className="flex items-center gap-3">
          <Image
            src="/icon-calculator.png"
            alt=""
            width={58}
            height={58}
            className="shrink-0"
          />
          <p className="text-slate-800 text-sm md:text-base font-medium text-center">
            Find out the cost of insulation
            <br />
            for your property ↓
          </p>
        </div>

        <button className="w-full max-w-sm bg-gradient-to-b from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 transition-colors text-slate-900 font-semibold text-sm md:text-base px-6 py-3 rounded-xl shadow-md">
          Get a Quick Estimate
        </button>
      </div>

      {/* Gallery + content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - gallery */}
        <div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
            <img
              src={galleryImages[index]}
              alt="Rigid PPU insulated property"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? "bg-amber-400" : "bg-slate-300"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-10 h-10 rounded-full bg-amber-400 hover:bg-amber-300 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-slate-900" />
            </button>
          </div>
        </div>

        {/* Right - text content */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            RIGID PPU
          </h2>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Closed-cell PPU can also be used as a finishing coating, but
            only with quality components. We recommend avoiding
            makeshift "home-brew" mixes and using only quality PPU.
          </p>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            That said, the surface still needs UV protection (painting or
            plastering). Many people ask how long PPU can be left exposed
            to sunlight — the answer is: for a couple of years the outer
            1-2mm layer degrades, after which the degradation process
            slows thanks to the crust that forms.
          </p>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Rigid PPU is ideal for insulating floors, foundations, and
            non-breathing walls or metal structures.
          </p>

          <button className="mt-2 flex items-center gap-3 bg-white border border-slate-200 hover:bg-slate-50 transition-colors text-slate-900 font-semibold text-sm md:text-base px-5 py-3 rounded-xl shadow-sm w-fit">
            <Image
              src="/icon-calculator.png"
              alt=""
              width={28}
              height={28}
              className="shrink-0"
            />
            Calculate Price
          </button>
        </div>
      </div>
    </section>
  );
};

export default RigidPPU;