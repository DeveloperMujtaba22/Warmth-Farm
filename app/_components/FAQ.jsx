"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does PPU replace in bricks?",
    answer:
      "It's not entirely accurate to compare directly, but 5cm of PPU replaces roughly 28cm of wood. Compared with mineral wool, it's 13cm — without factoring in air leaks — and with 100% adherence. Regular seam insulation always has thermal bridges at joints, which is minimal with PPU since there are no seams. That's why the honest answer is: within the first year it pays for itself at a ratio of 1/3, then 1/5, 1/7, and so on — the longer you have it, the more dramatic the savings become.",
  },
  {
    question: "How long does PPU insulation last?",
    answer:
      "The real service life of sprayed polyurethane foam is 50-70 years, and often longer under the right conditions. Unlike mineral wool, PPU doesn't sag, settle, or lose density over time, so its insulating properties stay consistent for decades. If it's protected from direct UV exposure (with paint, plaster, or cladding), the outer layer won't degrade either. This is why most manufacturers back it with warranties of 25-30 years — it's simply built to outlast the structure it's applied to.",
  },
  {
    question: "Is PPU safe once it's cured?",
    answer:
      "Yes. During application, the components react and expand within seconds, and once fully cured (usually within 24 hours) the foam is chemically inert — it doesn't off-gas, doesn't irritate skin on contact, and is safe to live and work around. We only use certified materials from proven manufacturers (BASF, Huntsman, Ecotermix Premium), all of which meet fire-safety and environmental standards for residential and commercial use. The only precaution needed is during the spraying process itself, when installers wear protective gear — after curing, there's no ongoing risk.",
  },
  {
    question: "Can PPU be applied in winter?",
    answer:
      "Yes, and this is actually one of PPU's biggest advantages over other insulation types. It can be sprayed in temperatures as low as -15°C to -20°C without losing adhesion or expansion quality, which means we're not limited to a narrow summer installation window. This is especially useful if you're dealing with rising heating costs mid-season — we can insulate your property and start reducing your bills right away, instead of waiting months for warmer weather.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Yes — every project comes with a 30-year guarantee covering the insulation's performance. If the material underperforms or fails prematurely due to installation error on our part, we don't just replace the insulation itself; we take full responsibility for any resulting repairs, including interior finishing work. We stand behind our work precisely because we control the entire process, from material sourcing to application, so there's no ambiguity about who's responsible if something goes wrong.",
  },
  {
    question: "How is the price calculated?",
    answer:
      "Pricing depends on three main factors: the total surface area to be insulated, the thickness of PPU required (which depends on your climate zone and the structure's current condition), and site accessibility. Rather than guessing, we start with a free thermal inspection using a thermal imaging camera, which shows exactly where heat is escaping and how much material is actually needed — this avoids both underquoting and overselling. You'll get a detailed, itemized estimate before any work begins, with no hidden fees added later.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-2xl">🤔</span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm text-slate-800">
                    <span className="font-bold">Q{i + 1}.</span>{" "}
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-white" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;