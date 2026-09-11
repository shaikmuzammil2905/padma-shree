"use client";

import { ArrowRight, Phone } from "lucide-react";

interface CtaSectionProps {
  onOpenEnquiry: () => void;
}

export default function CtaSection({ onOpenEnquiry }: CtaSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-[#063B52] via-[#087EA4] to-[#063B52] text-white relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/5 p-8 sm:p-12 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Looking for Reliable Export Products?
            </h2>
            <p className="text-[#EAF7FA]/90 text-base sm:text-lg">
              Let's discuss your requirements. From Kewda Ruh to frozen chicken and seafood exports, we ensure dependable sourcing and global delivery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#169447] hover:bg-[#39B54A] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-green-900/40 hover:scale-105 active:scale-95 gap-2 text-base"
            >
              <span>Request an Enquiry</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="tel:+919114477616"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-6 py-3.5 rounded-xl transition-all duration-200 backdrop-blur-md hover:scale-105 active:scale-95 gap-2 text-base"
            >
              <Phone className="w-5 h-5 text-[#39B54A]" />
              <span>+91 91144 77616</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
