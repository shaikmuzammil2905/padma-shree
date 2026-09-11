"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Globe, Compass, Anchor, X, CheckCircle2, ArrowRight } from "lucide-react";

interface TradeRegion {
  id: string;
  name: string;
  coords: { x: number; y: number }; // percentage coords on map canvas
  arcPath: string; // SVG path d attribute
  hubDetails: string;
  popularProducts: string[];
}

export default function GlobalReach() {
  const [activeRegion, setActiveRegion] = useState<TradeRegion | null>(null);

  const tradeRegions: TradeRegion[] = [
    {
      id: "middle-east",
      name: "Middle East & GCC",
      coords: { x: 58, y: 38 },
      arcPath: "M 67.5 44.5 Q 62 38 58 38",
      hubDetails: "Major trade corridor for Kewda Ruh natural attars, premium frozen poultry, and seafood.",
      popularProducts: ["Kewda Ruh Extract", "Frozen Poultry", "Vannamei Shrimp"],
    },
    {
      id: "europe",
      name: "European Union",
      coords: { x: 48, y: 24 },
      arcPath: "M 67.5 44.5 Q 58 28 48 24",
      hubDetails: "High-grade essential oil extracts for perfumery & sustainable marine exports.",
      popularProducts: ["Kewda Ruh Perfumery Grade", "Black Tiger Prawns", "Ocean Fish"],
    },
    {
      id: "north-america",
      name: "North America",
      coords: { x: 22, y: 30 },
      arcPath: "M 67.5 44.5 Q 40 14 22 30",
      hubDetails: "Direct B2B wholesale supply of frozen seafood products and specialized botanical extracts.",
      popularProducts: ["Frozen Shrimp & Prawns", "Poultry Cuts", "Essential Extracts"],
    },
    {
      id: "southeast-asia",
      name: "Southeast Asia & Far East",
      coords: { x: 80, y: 52 },
      arcPath: "M 67.5 44.5 Q 74 48 80 52",
      hubDetails: "Rapid marine cargo routes connecting Bay of Bengal fisheries to regional food processing hubs.",
      popularProducts: ["Pomfret & Ocean Catches", "Frozen Chicken Parts"],
    },
    {
      id: "australia",
      name: "Australia & Oceania",
      coords: { x: 86, y: 72 },
      arcPath: "M 67.5 44.5 Q 80 62 86 72",
      hubDetails: "Long-haul containerized reefer shipments for wholesale food importers.",
      popularProducts: ["Frozen Seafood Assortment", "Kewda Aroma Extract"],
    },
    {
      id: "africa",
      name: "Africa & Indian Ocean",
      coords: { x: 52, y: 62 },
      arcPath: "M 67.5 44.5 Q 58 55 52 62",
      hubDetails: "Dependable bulk exports of frozen food supplies and aromatic trade products.",
      popularProducts: ["Frozen Poultry Bulk", "Fresh Water Fish"],
    },
  ];

  return (
    <section id="global-reach" className="py-16 sm:py-20 bg-[#063B52] text-white relative overflow-hidden">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#087EA4]/20 via-[#063B52] to-[#032535]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-10"
        >
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#39B54A] uppercase bg-[#169447]/20 border border-[#39B54A]/40 px-4 py-1.5 rounded-full inline-block">
            FROM INDIA TO GLOBAL MARKETS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Building Global Connections Through Trusted Trade
          </h2>
          <p className="text-[#EAF7FA]/80 text-base sm:text-lg">
            India → International Markets
          </p>
        </motion.div>

        {/* Grand Realistic Satellite World Map Canvas Container - Full Map Visible on Mobile! */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#032535] rounded-3xl border border-white/20 shadow-2xl overflow-hidden group"
        >
          {/* Satellite Map Container - aspect ratio optimized so full map is 100% visible on mobile */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] min-h-[300px] sm:min-h-[500px] bg-[#032535]">
            <Image
              src="/images/world-map-satellite.jpg"
              alt="Padmasri Global Exports Satellite World Map Network"
              fill
              priority
              sizes="100vw"
              className="object-contain sm:object-cover object-center filter brightness-110 contrast-105"
            />

            {/* SVG Layer for Animated Connection Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {tradeRegions.map((region) => (
                <g key={region.id}>
                  {/* Glowing Background Arc */}
                  <path
                    d={region.arcPath}
                    fill="none"
                    stroke="#39B54A"
                    strokeWidth="0.8"
                    strokeDasharray="2 2"
                    className="opacity-80"
                  />
                  {/* Animated Pulse Flow Arc */}
                  <motion.path
                    d={region.arcPath}
                    fill="none"
                    stroke="#00FF66"
                    strokeWidth="1.2"
                    strokeDasharray="1 3"
                    initial={{ strokeDashoffset: 20 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </g>
              ))}
            </svg>

            {/* India Origin Hub Pulse Node Marker */}
            <div
              className="absolute top-[44.5%] left-[67.5%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer"
              onClick={() => setActiveRegion(null)}
            >
              <div className="relative">
                <span className="absolute -inset-3 sm:-inset-4 rounded-full bg-[#39B54A] opacity-75 animate-ping" />
                <span className="absolute -inset-1.5 sm:-inset-2 rounded-full bg-[#169447] opacity-90 animate-pulse" />
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#169447] border-2 border-white flex items-center justify-center text-white shadow-2xl relative z-10 hover:scale-110 transition-transform">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
                </div>
              </div>

              <div className="mt-1 sm:mt-2 bg-[#169447] text-white font-extrabold text-[10px] sm:text-xs px-2.5 py-0.5 sm:py-1 rounded-md shadow-xl border border-white/40 flex items-center gap-1 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>India (Origin Hub)</span>
              </div>
            </div>

            {/* Interactive Destination Nodes */}
            {tradeRegions.map((region) => (
              <div
                key={region.id}
                style={{ top: `${region.coords.y}%`, left: `${region.coords.x}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group/node"
                onClick={() => setActiveRegion(region)}
              >
                <div className="relative flex items-center justify-center">
                  <span className="absolute -inset-2 rounded-full bg-[#087EA4] opacity-60 group-hover/node:animate-ping" />
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#087EA4] border-2 border-white text-white flex items-center justify-center shadow-lg group-hover/node:scale-125 group-hover/node:bg-[#39B54A] transition-all">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                </div>

                {/* Node Label */}
                <div className="hidden sm:block mt-1 bg-[#063B52]/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md border border-white/20 whitespace-nowrap group-hover/node:border-[#39B54A] transition-colors">
                  {region.name}
                </div>
              </div>
            ))}

            {/* Interactive Region Details Popup Modal */}
            <AnimatePresence>
              {activeRegion && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 bg-[#063B52]/95 backdrop-blur-md p-5 rounded-2xl border border-[#39B54A]/50 shadow-2xl z-30 space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[#39B54A]" />
                      <h4 className="font-extrabold text-sm sm:text-base text-white">
                        {activeRegion.name}
                      </h4>
                    </div>
                    <button
                      onClick={() => setActiveRegion(null)}
                      className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-[#EAF7FA]/90 leading-relaxed">
                    {activeRegion.hubDetails}
                  </p>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#39B54A] block mb-1.5">
                      Key Export Commodities:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {activeRegion.popularProducts.map((prod, i) => (
                        <span
                          key={i}
                          className="bg-[#169447]/30 text-green-200 text-[10px] font-semibold px-2 py-0.5 rounded border border-[#39B54A]/30 flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#39B54A]" />
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#enquiry"
                    onClick={() => setActiveRegion(null)}
                    className="mt-2 w-full py-2 bg-[#169447] hover:bg-[#39B54A] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <span>Request Quotation for {activeRegion.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Trade Metrics Strip */}
          <div className="p-4 sm:p-6 bg-[#063B52] border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Compass className="w-5 h-5 text-[#39B54A] mx-auto mb-1.5" />
              <h4 className="font-bold text-xs sm:text-sm text-white">Strategic Location</h4>
              <p className="text-[11px] text-[#EAF7FA]/70 mt-0.5">Direct access to Odisha maritime shipping ports</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Globe className="w-5 h-5 text-[#087EA4] mx-auto mb-1.5" />
              <h4 className="font-bold text-xs sm:text-sm text-white">International Reach</h4>
              <p className="text-[11px] text-[#EAF7FA]/70 mt-0.5">Seamless sea & air cargo connections worldwide</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Anchor className="w-5 h-5 text-[#39B54A] mx-auto mb-1.5" />
              <h4 className="font-bold text-xs sm:text-sm text-white">Cold-Chain Sea Freight</h4>
              <p className="text-[11px] text-[#EAF7FA]/70 mt-0.5">Continuous sub-zero reefer container shipments</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
