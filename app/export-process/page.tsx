import { Metadata } from "next";
import Header from "@/components/Header";
import ExportProcess from "@/components/ExportProcess";
import GlobalReach from "@/components/GlobalReach";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Sparkles, Ship, ShieldCheck, Thermometer, Clock, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Export & Import Process | Global Supply Logistics | Padmasri Global Exports",
  description: "Explore the step-by-step export workflow and global logistics handling by Padmasri Global Exports for seamless trade operations.",
};

export default function ExportProcessPage() {
  const containerSpecs = [
    {
      type: "20ft Reefer Container",
      payload: "10,000 - 12,000 kg",
      tempRange: "-20°C to +15°C",
      idealFor: "Frozen Seafood (Prawns/Pomfret), Frozen Poultry Cuts",
    },
    {
      type: "40ft High Cube Reefer",
      payload: "24,000 - 26,000 kg",
      tempRange: "-25°C to +15°C",
      idealFor: "High-volume Commercial Foodservice & Wholesale Poultry",
    },
    {
      type: "Air Freight Express",
      payload: "50 kg - 2,000 kg",
      tempRange: "Climate Controlled / Ambient",
      idealFor: "High-value Kewda Ruh Essential Oil & Urgent Samples",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAF8] relative">
      <Header />
      <div className="pt-24 sm:pt-28">
        
        {/* Animated Page Hero Banner */}
        <div className="bg-[#063B52] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#39B54A]/30">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#39B54A_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10 animate-fade-in-up">
            <span className="text-xs sm:text-sm font-black tracking-widest text-[#39B54A] uppercase bg-white/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-[#39B54A]/30">
              <Ship className="w-4 h-4" />
              GLOBAL LOGISTICS & SUPPLY CHAIN
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Export & Import Workflow
            </h1>
            <p className="text-[#EAF7FA]/90 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Transparent, reliable, and compliant export procedures from initial inquiry to final port clearance and destination delivery.
            </p>
          </div>
        </div>

        {/* Export Process Timeline */}
        <div className="animate-fade-in-up">
          <ExportProcess />
        </div>

        {/* Freight & Container Specifications Table */}
        <section className="py-20 bg-white border-y border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#169447] uppercase bg-[#169447]/10 px-4 py-1 rounded-full inline-block">
                CONTAINER & LOGISTICS SPECS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B52]">
                Shipping & Container Formats
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Tailored freight configurations for temperature-sensitive food and high-value extracts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {containerSpecs.map((spec, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8FAF8] p-8 rounded-3xl border border-gray-200/80 space-y-5 hover:border-[#169447]/50 transition-all duration-300 shadow-sm hover:shadow-xl group hover:-translate-y-1.5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#063B52] text-[#39B54A] flex items-center justify-center font-bold text-lg shadow-md">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#063B52] mb-1">
                      {spec.type}
                    </h3>
                    <span className="text-xs font-bold text-[#169447] uppercase tracking-wider bg-[#169447]/10 px-2.5 py-1 rounded-md">
                      {spec.tempRange}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600 border-t border-gray-200/60 pt-4">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-500">Max Payload:</span>
                      <span className="font-bold text-[#063B52]">{spec.payload}</span>
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="font-semibold text-gray-500 text-xs uppercase">Recommended For:</span>
                      <span className="font-medium text-gray-800 text-xs mt-0.5">{spec.idealFor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach Component */}
        <div className="animate-fade-in-up">
          <GlobalReach />
        </div>

        {/* CTA Banner */}
        <CtaSection />
      </div>
      <Footer />
      <MobileBottomBar />
    </main>
  );
}
