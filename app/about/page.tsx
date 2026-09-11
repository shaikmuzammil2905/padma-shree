import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Globe, ShieldCheck, HeartHandshake, ArrowRight, CheckCircle2, Target, Eye, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export const metadata: Metadata = {
  title: "About Us | Padmasri Global Exports",
  description: "Learn about Padmasri Global Exports, our commitment to quality Indian products, Kewda Ruh essential extract, Frozen Chicken, and Seafood global export standards.",
};

export default function AboutPage() {
  const coreValues = [
    {
      icon: ShieldCheck,
      title: "Uncompromising Quality",
      description: "Every shipment undergoes rigorous multi-tier testing, sensory evaluation, and strict temperature control prior to dispatch.",
    },
    {
      icon: HeartHandshake,
      title: "Authentic Regional Sourcing",
      description: "Direct partnerships with coastal distillers and certified agricultural producers in Odisha, ensuring 100% genuine products.",
    },
    {
      icon: Globe,
      title: "Worldwide Logistics Precision",
      description: "End-to-end cold chain logistics, reefers, and export customs compliance tailored for Middle East, Asian, and Western buyers.",
    },
    {
      icon: Award,
      title: "Ethical B2B Integrity",
      description: "Transparent pricing, guaranteed specifications, tamper-evident packaging, and dedicated 24/7 client communication.",
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
              <Sparkles className="w-4 h-4" />
              WHO WE ARE & OUR MISSION
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              About Padmasri Global Exports
            </h1>
            <p className="text-[#EAF7FA]/90 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Bridging the finest Indian coastal & agricultural produce with international markets through unyielding quality, cold-chain reliability, and ethical trade.
            </p>
          </div>
        </div>

        {/* Main About Component */}
        <div className="animate-fade-in-up">
          <About />
        </div>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-[#F8FAF8] border-b border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Mission Card */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-gray-200/80 space-y-4 hover:border-[#169447]/40 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-[#169447]/10 text-[#169447] flex items-center justify-center group-hover:bg-[#169447] group-hover:text-white transition-colors shadow-sm">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#063B52]">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  To serve as India's premier export gateway for authentic Kewda Ruh, frozen poultry cuts, and marine catches by maintaining world-class sourcing hygiene, continuous cold-chain integrity, and transparent trade practices.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-gray-200/80 space-y-4 hover:border-[#087EA4]/40 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-[#087EA4]/10 text-[#087EA4] flex items-center justify-center group-hover:bg-[#087EA4] group-hover:text-white transition-colors shadow-sm">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#063B52]">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  To build a globally recognized brand synonymous with Indian trade excellence, expanding our reach across GCC countries, Asia Pacific, Europe, and Americas while empowering regional farmers and coastal harvesters in Odisha.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Core Values Grid */}
        <section className="py-20 bg-white border-b border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#169447] uppercase bg-[#169447]/10 px-4 py-1.5 rounded-full inline-block">
                FOUNDATIONAL PILLARS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B52]">
                Our Core Trade Values
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                The principles that guide our product selection, packaging, regulatory compliance, and client relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, idx) => {
                const IconComp = value.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#F8FAF8] p-6 rounded-2xl border border-gray-200/80 hover:border-[#169447]/50 hover:bg-[#EAF7FA]/40 transition-all duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1.5"
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-[#169447]/10 text-[#169447] flex items-center justify-center group-hover:bg-[#169447] group-hover:text-white transition-colors shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-extrabold text-[#063B52] group-hover:text-[#169447] transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-gray-200/60 flex items-center text-xs font-bold text-[#169447] gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Trade Standard</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* CTA Banner */}
        <CtaSection />
      </div>
      <Footer />
      <MobileBottomBar />
    </main>
  );
}
