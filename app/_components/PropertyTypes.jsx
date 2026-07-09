import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

const properties = [
  {
    image: "/property-house.png",
    title: "Residential",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    image: "/property-warehouse.png",
    title: "Industrial",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    image: "/property-ambulance.png",
    title: "Other",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const PropertyTypes = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <Heart className="w-6 h-6 text-red-500" fill="currentColor" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 text-center">
            WE INSULATE{" "}
            <span className="text-red-500">ANY TYPE</span> OF PROPERTY
          </h2>
        </div>

        {/* Cards container */}
        <div className="border border-dashed border-slate-300 rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4">
              <div className="w-full h-40 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={220}
                  height={160}
                  className="object-contain max-h-40 w-auto"
                />
              </div>

              <div className="border border-sky-200 rounded-lg px-6 py-2 w-fit">
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;