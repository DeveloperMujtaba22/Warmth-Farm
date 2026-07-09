"use client";

import React, { useState, useRef, useCallback } from "react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const CompareSlider = ({ beforeSrc, afterSrc }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const draggingRef = useRef(false);

  const updatePosition = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const handleMouseDown = () => {
    draggingRef.current = true;
  };

  const handleMouseUp = () => {
    draggingRef.current = false;
  };

  const handleMouseMove = (e) => {
    if (draggingRef.current) updatePosition(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* After image - full background */}
      <img
        src={afterSrc}
        alt="After insulation"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Before image - clipped */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeSrc}
          alt="Before insulation"
          className="w-full h-full object-cover"
          style={{
            width: containerRef.current
              ? containerRef.current.offsetWidth
              : "100%",
            maxWidth: "none",
          }}
        />
      </div>

      {/* Divider handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-sky-400 flex items-center justify-center shadow-md pointer-events-auto cursor-ew-resize">
          <ChevronLeft className="w-3.5 h-3.5 text-white -mr-1" />
          <ChevronRight className="w-3.5 h-3.5 text-white -ml-1" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute bottom-3 left-3 bg-white/90 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
        before
      </span>
      <span className="absolute bottom-3 right-3 bg-white/90 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
        after
      </span>
    </div>
  );
};

const BeforeAfter = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">
            INSULATION: BEFORE &amp; AFTER
          </h2>
        </div>
        <p className="text-sm text-slate-500 mb-8">
          Here's what insulation with soft-spray PPU looks like:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CompareSlider
            beforeSrc="/before-1.png"
            afterSrc="/after-1.png"
          />
          <CompareSlider
            beforeSrc="/before-1.png"
            afterSrc="/after-1.png"
          />
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;