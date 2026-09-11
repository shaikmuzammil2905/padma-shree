import { Metadata } from "next";
import Header from "@/components/Header";
import Products from "@/components/Products";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Sparkles, HelpCircle, ShieldCheck, Thermometer, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Export Products Portfolio | Kewda Ruh, Frozen Chicken & Seafood | Padmasri Global Exports",
  description: "Browse our premium export offerings: Kewda Ruh aromatic extract, frozen chicken cuts, and fresh & frozen seafood prepared for global shipping.",
};

export default function ProductsPage() {
  const buyerFaqs = [
    {
      q: "What are the Minimum Order Quantities (MOQ) for Kewda Ruh and Frozen Produce?",
      a: "For Kewda Ruh (essential extract), MOQs start from 5 Liters in food-grade aluminum bottles. For Frozen Chicken and Seafood, commercial export orders start at 1x20ft Reefer Container (~10-12 Metric Tons) or consolidated LCL shipments.",
    },
    {
      q: "How is cold chain integrity maintained during transit?",
      a: "Our frozen chicken and seafood are blast frozen at -35°C and packed into heavy-duty poly-bags inside insulated master cartons. Containers are kept at a constant -18°C or lower with continuous electronic temperature data loggers.",
    },
    {
      q: "Can you provide samples before finalizing a commercial contract?",
      a: "Yes, product sample kits for Kewda Ruh and certified inspection reports for poultry and marine catches can be dispatched via international express courier to verified buyers.",
    },
    {
      q: "What export documentation is provided with every shipment?",
      a: "We provide complete export documentation including Certificate of Origin, Health & Veterinary Certificate, Bill of Lading, Commercial Invoice, Packing List, FSSAI / APEDA compliance certificates, and Phytosanitary / Quality analysis reports.",
    },
  ];

  const sourcingPillars = [
    {
      icon: Sparkles,
      title: "Pure Kewda Ruh Sourcing",
      desc: "Distilled traditionally in coastal Ganjam, Odisha using male screwpine blossoms to capture peak natural fragrance without synthetics.",
    },
    {
      icon: Thermometer,
      title: "Hygienic Poultry Processing",
      desc: "Processed in modern, veterinary-supervised facilities. Clean, blast-frozen cuts with zero added water weight.",
    },
    {
      icon: Truck,
      title: "Marine Fresh Harvesting",
      desc: "Wild-caught pomfret & farmed Vannamei shrimp sorted by count and size, IQF frozen immediately to seal in sea freshness.",
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
              OUR EXPORT CATALOG
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Export Products Catalog
            </h1>
            <p className="text-[#EAF7FA]/90 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Premium quality Kewda Ruh, Frozen Poultry, and Fresh Marine Produce harvested & processed to international standards.
            </p>
          </div>
        </div>

        {/* Main Products Grid */}
        <div className="animate-fade-in-up">
          <Products showAll={true} />
        </div>

        {/* Sourcing Standards Breakdown */}
        <section className="py-16 bg-white border-y border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-wider text-[#169447] uppercase bg-[#169447]/10 px-3 py-1 rounded-md inline-block mb-2">
                QUALITY SOURCING PROTOCOL
              </span>
              <h2 className="text-3xl font-extrabold text-[#063B52]">
                How We Source Our Core Offerings
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sourcingPillars.map((p, i) => {
                const IconComp = p.icon;
                return (
                  <div
                    key={i}
                    className="bg-[#F8FAF8] p-8 rounded-3xl border border-gray-200/80 space-y-4 hover:border-[#169447]/50 transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#169447]/10 text-[#169447] flex items-center justify-center group-hover:bg-[#169447] group-hover:text-white transition-colors shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#063B52]">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* International Buyer FAQs */}
        <section className="py-20 bg-[#F8FAF8]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#087EA4] uppercase bg-[#087EA4]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4" />
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B52]">
                Trade & Procurement FAQs
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Everything commercial importers and global buyers need to know.
              </p>
            </div>

            <div className="space-y-4">
              {buyerFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-sm space-y-2 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-base sm:text-lg font-extrabold text-[#063B52] flex items-start gap-2.5">
                    <span className="text-[#169447] font-black">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
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
