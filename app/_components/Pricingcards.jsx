import Image from "next/image";

const services = [
  {
    image: "/spray-technician.png",
    title: "Breathable PPU",
    subtitle: "(soundproofing)",
    description:
      "Ideal for insulating roofs and porous walls. A breathable material with excellent soundproofing properties. Requires installation of a vapor barrier membrane.",
    price: "$5 — $15 / m²",
  },
  {
    image: "/house-rigid-ppu.png",
    title: "Rigid PPU",
    subtitle: "(the warmest option)",
    description:
      "No additional membranes needed — applied in an even layer. Ideal for foundations, plinths, and walls. Commonly used for interior insulation. Can be used under floor screed.",
    price: "$7.50 — $17.50 / m²",
  },
  {
    image: "/brick-cavity-fill.png",
    title: "PPU Cavity Fill",
    subtitle: "for wall cavities",
    description:
      "Injected either from above, where the cavity is open, or through drilled access holes. A popular choice for insulating occupied apartments — no permission required from the building management.",
    price: "$62 — $310 / m³",
  },
];

export default function PricingCards() {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-gradient-to-b from-sky-100 via-sky-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🧊</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            PRICING
          </h2>
        </div>
        <p className="text-sm md:text-base text-slate-600 mb-8">
          Exact pricing provided only after a detailed thermal survey
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-slate-900 leading-snug">
                  {service.title}
                  <br />
                  <span className="font-bold">{service.subtitle}</span>
                </h3>

                <p className="text-sm text-slate-600 mt-3 flex-1">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mt-5">
                  <button className="bg-gradient-to-b from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-1 transition-colors">
                    Learn more <span>→</span>
                  </button>
                  <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                    {service.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}