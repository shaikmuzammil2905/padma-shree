"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Clock, FileText, Ship, Sparkles } from "lucide-react";

function EnquiryContent() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product") || undefined;

  return <EnquiryForm prefilledProduct={productParam} />;
}

export default function EnquiryPage() {
  const buyerSteps = [
    {
      step: "01",
      icon: Clock,
      title: "Fast 24-Hour Quote Response",
      desc: "Our trade team reviews your product volume, packaging preferences, and destination port to send a formal quotation within 24 hours.",
    },
    {
      step: "02",
      icon: FileText,
      title: "Sample & Contract Finalization",
      desc: "Upon pricing approval, product samples for Kewda Ruh or certified spec sheets for frozen produce are provided along with commercial terms.",
    },
    {
      step: "03",
      icon: Ship,
      title: "Inspection & Reefer Shipping",
      desc: "Consignments undergo strict quality inspection, custom cold-chain staging, customs clearance, and dispatch via ocean/air freight.",
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
              B2B TRADE QUOTATIONS
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Request an Export Quote
            </h1>
            <p className="text-[#EAF7FA]/90 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Submit your import specifications, volume requirements, or port destination to receive a direct quotation from our trade management.
            </p>
          </div>
        </div>

        {/* What Happens Next 3-Step Buyer Guide */}
        <section className="py-16 bg-white border-b border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-wider text-[#169447] uppercase bg-[#169447]/10 px-3 py-1 rounded-md inline-block mb-2">
                OUR INQUIRY PROCESS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#063B52]">
                What Happens After You Submit?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {buyerSteps.map((step, idx) => {
                const IconComp = step.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#F8FAF8] p-7 rounded-3xl border border-gray-200/80 space-y-4 hover:border-[#169447]/50 transition-all duration-300 shadow-sm hover:shadow-xl group hover:-translate-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#169447]/10 text-[#169447] flex items-center justify-center group-hover:bg-[#169447] group-hover:text-white transition-colors shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-gray-300">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-[#063B52]">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Enquiry Form Component */}
        <div className="animate-fade-in-up">
          <Suspense fallback={<div className="py-20 text-center text-gray-500">Loading enquiry form...</div>}>
            <EnquiryContent />
          </Suspense>
        </div>

      </div>
      <Footer />
      <MobileBottomBar />
    </main>
  );
}
