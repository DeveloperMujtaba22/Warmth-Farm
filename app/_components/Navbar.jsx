import React from "react";
import { Phone, Clock } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-stretch h-20 md:h-24 shadow-sm">
      {/* Left half - white background, logo */}
      <div className="flex-1 bg-white flex items-center gap-4 px-6 md:px-20">
        {/* Logo badge */}
        <div className="text-black text-center leading-tight shrink-0">
          <div className="text-xl md:text-xl font-extrabold tracking-wide">
            WARMTH
          </div>
          <div className="bg-slate-800 text-white p-2 text-base md:text-base font-extrabold tracking-wide">
            TERRITORY
          </div>
        </div>

        {/* Tagline */}
        <span className="text-[14px] md:text-base text-slate-500 tracking-wide leading-snug">
          Everything about insulation. <br /> with polyurethane foam
        </span>
      </div>

      {/* Right half - blue background, contact + CTA */}
      <div className="flex-1 bg-[#56b6fa] flex items-center justify-end gap-16 pl-80 pr-10 md:pr-[350px]">
        <div className="hidden sm:flex items-center gap-3 mr-4 md:mr-8">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <Phone className="w-4 h-4 text-white" fill="white" />
          </div>
          <div className="flex flex-col leading-tight">
            <a
              href="tel:+74994074747"
              className="text-white font-semibold text-sm md:text-lg hover:underline md:px-[-70px]"
            >
              +7 (499) 40-40-747
            </a>
            <span className="flex items-center gap-1 text-white/80 text-[11px] md:text-xs">
              <Clock className="w-3 h-3" />
              We're available: 8:00 – 18:00
            </span>
          </div>
        </div>

       <button className="bg-gradient-to-b from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 transition-colors text-slate-900 font-semibold text-base md:text-xl px-4 md:px-6 py-2.5 rounded-full whitespace-nowrap shrink-0 mr-4 md:mr-[-198]">
  Call me back
</button>
      </div>
    </nav>
  );
};

export default Navbar;