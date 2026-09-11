"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

function EnquiryContent() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product") || undefined;

  return <EnquiryForm prefilledProduct={productParam} />;
}

export default function EnquiryPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF8] relative">
      <Header />
      <div className="pt-24 sm:pt-28">
        {/* Page Banner */}
        <div className="bg-[#063B52] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#39B54A]/30">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#39B54A] uppercase bg-white/10 px-3 py-1 rounded-md inline-block">
              GET A QUOTE
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white">
              B2B Enquiry & Quotation Request
            </h1>
            <p className="text-[#EAF7FA]/90 text-base sm:text-lg max-w-2xl mx-auto">
              Submit your import specifications, volume requirements, or port destination to get a direct quote from our export team.
            </p>
          </div>
        </div>

        <Suspense fallback={<div className="py-20 text-center text-gray-500">Loading form...</div>}>
          <EnquiryContent />
        </Suspense>
      </div>
      <Footer />
      <MobileBottomBar />
    </main>
  );
}
