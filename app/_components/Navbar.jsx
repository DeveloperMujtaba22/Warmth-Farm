import React from "react";
import { Phone, Clock } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col md:flex-row items-stretch md:h-24 shadow-sm">
      {/* Left half - white background, logo */}
      <div className="flex-1 bg-white flex flex-row items-center gap-3 md:gap-4 px-4 sm:px-6 md:px-12 lg:px-20 py-4 md:py-0 text-left">
        {/* Logo badge */}
        <div className="text-black text-center leading-tight shrink-0">
          <div className="text-lg md:text-xl font-extrabold tracking-wide">
            WARMTH
          </div>
          <div className="bg-slate-800 text-white p-2 text-sm md:text-base font-extrabold tracking-wide">
            TERRITORY
          </div>
        </div>

        {/* Tagline */}
        <span className="text-[12px] sm:text-[14px] md:text-base text-slate-500 tracking-wide leading-snug">
          Everything about insulation. <br /> with polyurethane foam
        </span>
      </div>

      {/* Right half - blue background, contact + CTA */}
      <div className="flex-1 bg-[#56b6fa] flex flex-row items-center justify-between md:justify-between lg:justify-end gap-3 sm:gap-6 md:gap-8 lg:gap-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:pl-32 xl:pr-20 py-4 md:py-0">
        {/* Phone number - full version from sm up */}
        <div className="hidden sm:flex items-center gap-3 shrink-0 whitespace-nowrap">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <Phone className="w-4 h-4 text-white" fill="white" />
          </div>
          <div className="flex flex-col leading-tight">
            <a
              href="tel:+74994074747"
              className="text-white font-semibold text-sm md:text-base lg:text-lg hover:underline whitespace-nowrap"
            >
              +7 (499) 40-40-747
            </a>
            <span className="flex items-center gap-1 text-white/80 text-[11px] md:text-xs whitespace-nowrap">
              <Clock className="w-3 h-3" />
              We're available: 8:00 – 18:00
            </span>
          </div>
        </div>

        {/* Phone number - mobile: stacked above button */}
        <a
          href="tel:+74994074747"
          className="sm:hidden flex items-center gap-2 text-white font-semibold text-sm whitespace-nowrap"
        >
          <Phone className="w-4 h-4" fill="white" />
          +7 (499) 40-40-747
        </a>

        {/* Button */}
        <button className="bg-gradient-to-b from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 transition-colors text-slate-900 font-semibold text-sm sm:text-base md:text-lg lg:text-xl px-4 md:px-6 py-2.5 rounded-full whitespace-nowrap shrink-0">
          Call me back
        </button>
      </div>
    </nav>
  );
};

export default Navbar;