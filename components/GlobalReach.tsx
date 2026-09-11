"use client";

import { Globe, MapPin, Compass, Anchor } from "lucide-react";

export default function GlobalReach() {
  return (
    <section className="py-20 bg-[#063B52] text-white relative overflow-hidden">
      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#39B54A] uppercase bg-[#169447]/20 border border-[#39B54A]/30 px-3.5 py-1.5 rounded-full inline-block">
            GLOBAL REACH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Building Global Connections Through Trusted Trade
          </h2>
          <p className="text-[#EAF7FA]/80 text-base sm:text-lg">
            India → International Markets
          </p>
        </div>

        {/* Interactive World Trade Map Illustration Box */}
        <div className="relative bg-[#032535] rounded-3xl p-6 sm:p-12 border border-white/10 shadow-2xl overflow-hidden">
          {/* World Map SVG Canvas */}
          <div className="relative min-h-[320px] sm:min-h-[420px] flex items-center justify-center">
            {/* World Map Background Vector SVG */}
            <svg
              className="w-full h-full text-white/10"
              viewBox="0 0 1000 500"
              fill="currentColor"
            >
              {/* Simplified World Continents Map paths */}
              <path d="M150,120 Q200,80 300,100 T400,160 T250,250 T150,180 Z" /> {/* North America */}
              <path d="M300,280 Q350,260 380,320 T340,420 T280,360 Z" /> {/* South America */}
              <path d="M480,100 Q550,70 620,110 T580,220 T480,180 Z" /> {/* Europe */}
              <path d="M480,220 Q560,200 600,270 T540,400 T460,300 Z" /> {/* Africa */}
              <path d="M620,100 Q780,60 880,120 T820,280 T680,220 Z" /> {/* Asia */}
              <path d="M780,340 Q840,320 880,360 T820,440 T760,400 Z" /> {/* Australia */}
            </svg>

            {/* India Export Hub Origin Pulse Marker */}
            <div className="absolute top-[42%] left-[68%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
              <div className="relative">
                <span className="absolute -inset-3 rounded-full bg-[#39B54A] opacity-75 animate-ping" />
                <div className="w-8 h-8 rounded-full bg-[#169447] border-2 border-white flex items-center justify-center text-white shadow-xl relative z-10">
                  <MapPin className="w-4 h-4 fill-white" />
                </div>
              </div>

              <div className="mt-2 bg-white text-[#063B52] font-black text-xs px-3 py-1 rounded-md shadow-lg border border-gray-100 flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#169447]" />
                <span>India (Origin Hub)</span>
              </div>
            </div>

            {/* Trade Route Connection Arc Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500">
              <path
                d="M680,210 Q 500,100 250,160"
                fill="none"
                stroke="#39B54A"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="opacity-70 animate-pulse"
              />
              <path
                d="M680,210 Q 550,220 540,300"
                fill="none"
                stroke="#087EA4"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="opacity-70 animate-pulse"
              />
              <path
                d="M680,210 Q 750,150 820,180"
                fill="none"
                stroke="#39B54A"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="opacity-70 animate-pulse"
              />
            </svg>
          </div>

          {/* Trade Connection Cards */}
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Compass className="w-6 h-6 text-[#39B54A] mx-auto mb-2" />
              <h4 className="font-bold text-sm text-white">Strategic Location</h4>
              <p className="text-xs text-[#EAF7FA]/70 mt-1">Coastal Odisha port access</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Globe className="w-6 h-6 text-[#087EA4] mx-auto mb-2" />
              <h4 className="font-bold text-sm text-white">International Reach</h4>
              <p className="text-xs text-[#EAF7FA]/70 mt-1">Seamless sea & air routes</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Anchor className="w-6 h-6 text-[#39B54A] mx-auto mb-2" />
              <h4 className="font-bold text-sm text-white">Cold-Chain Sea Freight</h4>
              <p className="text-xs text-[#EAF7FA]/70 mt-1">Temperature-monitored reefers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
