import { Metadata } from "next";
import Header from "@/components/Header";
import Products from "@/components/Products";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export const metadata: Metadata = {
  title: "Export Products | Kewda Ruh, Frozen Chicken & Seafood | Padmasri Global Exports",
  description: "Browse our premium export offerings: Kewda Ruh aromatic extract, frozen chicken cuts, and fresh & frozen seafood prepared for global shipping.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF8] relative">
      <Header />
      <div className="pt-24 sm:pt-28">
        {/* Page Banner */}
        <div className="bg-[#063B52] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#39B54A]/30">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#39B54A] uppercase bg-white/10 px-3 py-1 rounded-md inline-block">
              OUR PRODUCT PORTFOLIO
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white">
              Export Products Catalog
            </h1>
            <p className="text-[#EAF7FA]/90 text-base sm:text-lg max-w-2xl mx-auto">
              Premium quality Kewda Ruh, Frozen Poultry, and Fresh Marine Produce harvested & processed to international standards.
            </p>
          </div>
        </div>

        <Products showAll={true} />
        <CtaSection />
      </div>
      <Footer />
      <MobileBottomBar />
    </main>
  );
}
