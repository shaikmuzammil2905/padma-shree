"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck, Truck, Globe2 } from "lucide-react";

interface HeroProps {
  onOpenEnquiry: () => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-[#063B52]">
      {/* Background Image - Clear, vivid shipping vessel */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="International Export Container Shipping Vessel"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-95 scale-105 transition-transform duration-1000"
        />
        {/* Soft, subtle left gradient to ensure text readability without hiding ship */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#063B52]/80 via-[#063B52]/40 to-transparent sm:from-[#063B52]/75 sm:via-[#063B52]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#063B52] via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-[#063B52]/80 border border-[#39B54A] px-4 py-2 rounded-full backdrop-blur-md shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-[#39B54A] animate-pulse" />
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-green-300 uppercase">
              GLOBAL EXPORTS • TRUSTED QUALITY • WORLDWIDE REACH
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Bringing India's Finest{" "}
            <span className="text-[#39B54A] inline-block relative drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Products
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#39B54A]"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path d="M0 15 Q 50 0, 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>{" "}
            to the World
          </h1>

          {/* Description - NO BACKGROUND SHADOW / NO DARK BOX BACKGROUND! */}
          <p className="text-base sm:text-xl text-white font-semibold leading-relaxed drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)] max-w-2xl">
            Padmasri Global Exports specializes in the export and import of carefully sourced products, including Kewda Ruh, Frozen Chicken and Seafood, with a commitment to quality, reliability and timely global delivery.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="#products"
              className="inline-flex items-center justify-center bg-[#169447] hover:bg-[#39B54A] text-white text-base font-extrabold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl hover:shadow-green-500/40 hover:scale-105 active:scale-95 gap-3"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center justify-center bg-[#063B52]/90 hover:bg-[#087EA4] text-white border-2 border-white/80 text-base font-extrabold px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur-md shadow-lg hover:scale-105 active:scale-95 gap-3"
            >
              <span>Request an Enquiry</span>
              <ArrowRight className="w-5 h-5 text-[#39B54A]" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
            <div className="flex items-center gap-3 bg-[#063B52]/80 p-3.5 rounded-xl border border-white/20 backdrop-blur-md shadow-lg">
              <ShieldCheck className="w-6 h-6 text-[#39B54A] shrink-0" />
              <span className="text-xs sm:text-sm font-bold">Quality Sourcing</span>
            </div>

            <div className="flex items-center gap-3 bg-[#063B52]/80 p-3.5 rounded-xl border border-white/20 backdrop-blur-md shadow-lg">
              <Truck className="w-6 h-6 text-[#39B54A] shrink-0" />
              <span className="text-xs sm:text-sm font-bold">Reliable Supply</span>
            </div>

            <div className="flex items-center gap-3 bg-[#063B52]/80 p-3.5 rounded-xl border border-white/20 backdrop-blur-md shadow-lg">
              <Globe2 className="w-6 h-6 text-[#39B54A] shrink-0" />
              <span className="text-xs sm:text-sm font-bold">Global Trade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
