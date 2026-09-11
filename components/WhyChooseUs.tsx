"use client";

import { ShieldCheck, Truck, Globe, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      num: "01",
      title: "QUALITY FIRST",
      description: "Products sourced with careful attention to buyer requirements.",
      icon: ShieldCheck,
      color: "bg-[#169447]",
    },
    {
      num: "02",
      title: "RELIABLE SUPPLY",
      description: "Focused on consistent sourcing and dependable product availability.",
      icon: Truck,
      color: "bg-[#087EA4]",
    },
    {
      num: "03",
      title: "EXPORT EXPERTISE",
      description: "Supporting smooth import and export processes from sourcing to shipment.",
      icon: Globe,
      color: "bg-[#063B52]",
    },
    {
      num: "04",
      title: "CUSTOMER FOCUS",
      description: "Building long-term relationships through transparency and responsive service.",
      icon: HeartHandshake,
      color: "bg-[#39B54A]",
    },
  ];

  return (
    <section className="py-20 bg-[#EAF7FA] border-y border-gray-200/60 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#087EA4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#169447]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#087EA4] uppercase bg-[#087EA4]/10 px-3 py-1 rounded-md inline-block">
            WHY PADMASRI GLOBAL EXPORTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B52]">
            Your Reliable Partner in Global Trade
          </h2>
          <p className="text-gray-600 text-base">
            High-quality products sourced with care, ready for global markets.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-200/60 transition-all duration-300 relative group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-gray-200 group-hover:text-[#169447] transition-colors">
                      {item.num}
                    </span>
                    <div className={`w-12 h-12 rounded-xl ${item.color} text-white flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#063B52] mb-3 group-hover:text-[#169447] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#169447] uppercase tracking-wider">
                    Verified Process
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#169447]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
