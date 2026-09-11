"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck, Truck, Globe2 } from "lucide-react";

interface HeroProps {
  onOpenEnquiry: () => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#063B52]">
      {/* Background Image with Dark Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="International Export Container Shipping"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#063B52] via-[#063B52]/90 to-[#063B52]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-[#169447]/20 border border-[#39B54A]/40 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#39B54A] animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-green-300 uppercase">
              GLOBAL EXPORTS • TRUSTED QUALITY • WORLDWIDE REACH
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight sm:leading-none tracking-tight">
            Bringing India's Finest{" "}
            <span className="text-[#39B54A] inline-block relative">
              Products
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#39B54A]/40"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path d="M0 15 Q 50 0, 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>{" "}
            to the World
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed font-normal">
            Padmasri Global Exports specializes in the export and import of carefully sourced products, including Kewda Ruh, Frozen Chicken and Seafood, with a commitment to quality, reliability and timely global delivery.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="#products"
              className="inline-flex items-center justify-center bg-[#169447] hover:bg-[#39B54A] text-white text-base font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-green-900/30 hover:scale-[1.02] active:scale-95 gap-2"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/30 text-base font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 backdrop-blur-md hover:scale-[1.02] active:scale-95 gap-2"
            >
              <span>Request an Enquiry</span>
              <ArrowRight className="w-5 h-5 text-[#39B54A]" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/90">
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-6 h-6 text-[#39B54A] shrink-0" />
              <span className="text-xs sm:text-sm font-medium">Quality Sourcing</span>
            </div>

            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 backdrop-blur-sm">
              <Truck className="w-6 h-6 text-[#39B54A] shrink-0" />
              <span className="text-xs sm:text-sm font-medium">Reliable Supply</span>
            </div>

            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 backdrop-blur-sm">
              <Globe2 className="w-6 h-6 text-[#39B54A] shrink-0" />
              <span className="text-xs sm:text-sm font-medium">Global Trade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
