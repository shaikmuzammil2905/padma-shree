"use client";

import { CheckCircle2, ShieldCheck, ThermometerSnowflake, Truck } from "lucide-react";

export default function QualitySection() {
  const pillars = [
    {
      title: "PRODUCT QUALITY",
      description: "Carefully selected products according to buyer requirements.",
      icon: ShieldCheck,
      details: [
        "Rigorous sensory inspection before packing",
        "Selective sourcing from verified growers & catchers",
        "Consistent batch specifications"
      ]
    },
    {
      title: "SAFE HANDLING",
      description: "Appropriate handling, packaging and storage practices based on product requirements.",
      icon: ThermometerSnowflake,
      details: [
        "Cold chain continuity for poultry & seafood",
        "Aroma-preserving sealed glass/aluminum packaging",
        "Sanitized processing workspace standards"
      ]
    },
    {
      title: "RELIABLE DELIVERY",
      description: "Coordinated export processes designed to support smooth international delivery.",
      icon: Truck,
      details: [
        "Timely dispatch & harbor transfer logistics",
        "Complete export documentation alignment",
        "Responsive status communication"
      ]
    }
  ];

  return (
    <section id="quality" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#169447] uppercase bg-[#169447]/10 px-3 py-1 rounded-md inline-block">
            OUR COMMITMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B52]">
            Quality You Can Trust
          </h2>
          <p className="text-gray-600 text-base">
            Dedicated to maintaining product integrity across every stage of sourcing and shipment.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FAF8] p-8 rounded-2xl border border-gray-200/80 hover:border-[#169447]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#EAF7FA] text-[#087EA4] flex items-center justify-center mb-6 group-hover:bg-[#169447] group-hover:text-white transition-colors">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#063B52] mb-3 group-hover:text-[#169447] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200/60 space-y-2">
                  {pillar.details.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#169447] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
