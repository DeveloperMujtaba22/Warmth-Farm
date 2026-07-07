import React from "react";
import { Phone, Clock } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-stretch h-20 md:h-24 shadow-sm">
      {/* Left half - white background, logo */}
      <div className="flex-1 bg-white flex items-center px-6 md:px-20">
        <div className="flex flex-col leading-tight">
          <span className="text-lg md:text-xl font-extrabold tracking-wide text-slate-900">
            WARMTH <br /> TERRITORY
          </span>
          <span className="text-[11px] md:text-xs text-slate-500 tracking-wide">
            Everything about insulation. <br /> with polyurethane foam
          </span>
        </div>
      </div>

      {/* Right half - blue background, contact + CTA */}
      <div className="flex-1 bg-sky-400 flex items-center justify-between px-6 md:px-90 gap-4">
        <div className="hidden sm:flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <Phone className="w-4 h-4 text-white" fill="white" />
          </div>
          <div className="flex flex-col leading-tight">
            <a
              href="tel:+74994074747"
              className="text-white font-semibold text-sm md:text-base hover:underline"
            >
              +7 (499) 40-40-747
            </a>
            <span className="flex items-center gap-1 text-white/80 text-[11px] md:text-xs">
              <Clock className="w-3 h-3" />
              We're available: 8:00 – 18:00
            </span>
          </div>
        </div>

        <button className="bg-amber-400 hover:bg-amber-300 transition-colors text-slate-900 font-semibold text-sm md:text-base px-4 md:px-6 py-2.5 rounded-full whitespace-nowrap shrink-0">
          Call me back
        </button>
      </div>
    </nav>
  );
};

export default Navbar;