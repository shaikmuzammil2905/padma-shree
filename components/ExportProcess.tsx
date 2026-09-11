"use client";

import { ShoppingBag, Award, PackageCheck, Ship } from "lucide-react";

export default function ExportProcess() {
  const steps = [
    {
      step: "01",
      title: "Product Sourcing",
      description: "Direct sourcing from trusted farms, coastal fisheries, and artisanal Kewda growers in Odisha.",
      icon: ShoppingBag,
    },
    {
      step: "02",
      title: "Quality & Processing",
      description: "Thorough inspection, temperature monitoring, and hygienic processing according to buyer requirements.",
      icon: Award,
    },
    {
      step: "03",
      title: "Packaging & Documentation",
      description: "Export-grade protective packaging, cold-chain seals, and export trade documentation.",
      icon: PackageCheck,
    },
    {
      step: "04",
      title: "International Shipment",
      description: "Coordinated freight logistics via sea or air container shipment to destination global ports.",
      icon: Ship,
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#169447] uppercase bg-[#169447]/10 px-3 py-1 rounded-md inline-block">
            EXPORT & IMPORT PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B52]">
            From India to Global Markets
          </h2>
          <p className="text-gray-600 text-base">
            A streamlined approach to sourcing, preparation and international trade.
          </p>
        </div>

        {/* Desktop View: Connected Horizontal Stepper */}
        <div className="hidden lg:block relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-[#169447] via-[#087EA4] to-[#063B52] -translate-y-6 z-0" />

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Step Circle Badge */}
                  <div className="w-14 h-14 rounded-full bg-white border-4 border-[#169447] text-[#063B52] font-black text-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#169447] group-hover:text-white transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="bg-[#F8FAF8] p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow w-full">
                    <span className="text-xs font-bold text-[#169447] uppercase tracking-wider block mb-1">
                      Step {item.step}
                    </span>
                    <h3 className="text-lg font-bold text-[#063B52] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet View: Vertical Timeline */}
        <div className="lg:hidden relative border-l-2 border-[#169447] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative group">
                {/* Timeline Dot Icon */}
                <div className="absolute -left-[37px] sm:-left-[45px] top-0 w-10 h-10 rounded-full bg-[#169447] text-white flex items-center justify-center shadow-md">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="bg-[#F8FAF8] p-5 sm:p-6 rounded-xl border border-gray-100 shadow-sm">
                  <span className="text-xs font-bold text-[#169447] uppercase tracking-wider block mb-1">
                    Step {item.step}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#063B52] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
