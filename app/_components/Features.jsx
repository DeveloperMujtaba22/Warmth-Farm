import React from "react";
import { ShieldCheck, Leaf, Coins } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    badge: "30",
    badgeLabel: "years",
    title: "30-Year Guarantee, Backed by Us",
    description:
      "To keep things honest, we already ran a thermal survey this winter and fixed every issue before the cold set in — at our own expense. The real service life of PPU is 70+ years, and it won't crack or lose its properties over time.",
  },
  {
    icon: Leaf,
    badge: null,
    title: "Best Materials — Eco-Friendly Guarantee",
    description:
      "We only use materials from proven manufacturers: Lapolam, BASF, Huntsman, and Ecotermix Premium. You can be fully confident in the material's safety — PPU is one of the most eco-friendly insulation options available.",
  },
  {
    icon: Coins,
    badge: null,
    title: "Full Financial Compensation",
    description:
      "We guarantee replacement of the insulation if there's ever an error, but we don't stop there. We take on full responsibility for fixing any resulting damage, including interior repairs — that's how confident we are in our work.",
  },
];

const Features = () => {
  return (
    <section className="w-full bg-gradient-to-b from-sky-100 to-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div
              key={i}
              className="bg-sky-50 rounded-2xl p-6 flex flex-col items-center text-center gap-4 shadow-sm"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-inner flex items-center justify-center relative">
                <Icon className="w-9 h-9 text-sky-600" />
                {feature.badge && (
                  <span className="absolute -top-2 -right-1 bg-amber-400 text-slate-900 text-xs font-bold px-2 py-0.5 rounded-full">
                    {feature.badge}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {feature.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;