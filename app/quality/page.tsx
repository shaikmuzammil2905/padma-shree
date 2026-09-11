import { Metadata } from "next";
import Header from "@/components/Header";
import QualitySection from "@/components/QualitySection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { ShieldCheck, Thermometer, Award, CheckCircle2, FileCheck, Microchip, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Assurance & Regulatory Standards | Padmasri Global Exports",
  description: "Learn about our strict quality inspection, cold-chain controls, APEDA/MPEDA compliance, and food safety standards for international exports.",
};

export default function QualityPage() {
  const qualityPillars = [
    {
      icon: Thermometer,
      title: "Sub-Zero Blast Freezing (-35°C)",
      desc: "Instant blast freezing immediately after dressing or harvest locks in natural texture, moisture, and nutritional integrity.",
    },
    {
      icon: Microchip,
      title: "Continuous Temp Data Loggers",
      desc: "Cold-chain containers are equipped with electronic temperature tracking logs recording unbroken -18°C storage throughout sea transport.",
    },
    {
      icon: FileCheck,
      title: "Multi-Agency Certifications",
      desc: "Adherence to APEDA, MPEDA, FSSAI, and veterinary sanitary regulations required for smooth clearance at destination customs.",
    },
    {
      icon: Award,
      title: "100% Purity Guarantee for Kewda",
      desc: "Pure steam distilled essential extract tested for GC-MS botanical markers, zero synthetics, and long-lasting aroma profile.",
    },
  ];

  const complianceList = [
    "FSSAI (Food Safety and Standards Authority of India) License",
    "APEDA (Agricultural and Processed Food Products Export Development Authority)",
    "MPEDA (Marine Products Export Development Authority) Registration",
    "Veterinary Health Inspection Certificate for Poultry Exports",
    "Certificate of Origin (Government Authorized Chambers)",
    "Tamper-Evident Export Packaging & Food Grade Containers",
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
              <ShieldCheck className="w-4 h-4" />
              QUALITY ASSURANCE & STANDARDS
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Quality Commitment & Compliance
            </h1>
            <p className="text-[#EAF7FA]/90 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Upholding strict hygiene, temperature management, laboratory testing, and botanical purity standards across every export consignment.
            </p>
          </div>
        </div>

        {/* Core Quality Component */}
        <div className="animate-fade-in-up">
          <QualitySection />
        </div>

        {/* 4 Quality Pillars Grid */}
        <section className="py-20 bg-white border-y border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#169447] uppercase bg-[#169447]/10 px-4 py-1 rounded-full inline-block">
                RIGOROUS QUALITY CONTROLS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B52]">
                Our Four Quality Guarantee Pillars
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                How we protect flavor, hygiene, and botanical integrity from origin to buyer port.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualityPillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#F8FAF8] p-7 rounded-3xl border border-gray-200/80 hover:border-[#169447]/50 transition-all duration-300 space-y-4 hover:shadow-xl group hover:-translate-y-1.5"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#169447]/10 text-[#169447] flex items-center justify-center group-hover:bg-[#169447] group-hover:text-white transition-colors shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#063B52] group-hover:text-[#169447] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Regulatory Compliance Checklist */}
        <section className="py-20 bg-[#F8FAF8]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#063B52] text-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-[#39B54A]/30 space-y-8">
              <div className="space-y-3 text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-[#39B54A] bg-white/10 px-3 py-1 rounded-md inline-block">
                  REGULATORY STANDARDS
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  Export Accreditations & Documentation
                </h2>
                <p className="text-[#EAF7FA]/90 text-sm sm:text-base">
                  All shipments comply fully with Indian export regulations and international import food safety codes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {complianceList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                    <CheckCircle2 className="w-5 h-5 text-[#39B54A] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-[#EAF7FA]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CtaSection />
      </div>
      <Footer />
      <MobileBottomBar />
    </main>
  );
}
