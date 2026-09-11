"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Globe2 } from "lucide-react";

interface HeroProps {
  onOpenEnquiry?: () => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-[#063B52]">
      {/* Background Image - Clean, vivid container shipping vessel with 100% clarity & ZERO dark background shadow overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="International Export Container Shipping Vessel"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-100"
        />
        {/* Subtle, minimal backdrop mask for mobile readability without obscuring shipping vessel picture */}
        <div className="absolute inset-0 bg-[#063B52]/35 sm:bg-[#063B52]/25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-[#063B52]/85 border border-[#39B54A] px-4 py-2 rounded-full backdrop-blur-md shadow-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-[#39B54A] animate-pulse" />
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-green-300 uppercase">
              GLOBAL EXPORTS • TRUSTED QUALITY • WORLDWIDE REACH
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Bringing India's Finest{" "}
            <span className="text-[#39B54A] inline-block relative drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
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

          {/* Description */}
          <p className="text-base sm:text-xl text-white font-semibold leading-relaxed drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)] max-w-2xl">
            Padmasri Global Exports specializes in the export and import of carefully sourced products, including Kewda Ruh, Frozen Chicken and Seafood, with a commitment to quality, reliability and timely global delivery.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-[#169447] hover:bg-[#39B54A] text-white text-base font-extrabold px-8 py-4 rounded-xl transition-all duration-200 shadow-2xl hover:shadow-green-500/40 hover:scale-105 active:scale-95 gap-3"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center bg-[#063B52]/90 hover:bg-[#087EA4] text-white border-2 border-white/80 text-base font-extrabold px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur-md shadow-xl hover:scale-105 active:scale-95 gap-3"
            >
              <span>Request an Enquiry</span>
              <ArrowRight className="w-5 h-5 text-[#39B54A]" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="pt-6 border-t border-white/30 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
            <div className="flex items-center gap-3 bg-[#063B52]/85 p-3.5 rounded-xl border border-white/20 backdrop-blur-md shadow-xl">
              <ShieldCheck className="w-6 h-6 text-[#39B54A] shrink-0" />
              <span className="text-xs sm:text-sm font-bold">Quality Sourcing</span>
            </div>

            <div className="flex items-center gap-3 bg-[#063B52]/85 p-3.5 rounded-xl border border-white/20 backdrop-blur-md shadow-xl">
              <Truck className="w-6 h-6 text-[#39B54A] shrink-0" />
              <span className="text-xs sm:text-sm font-bold">Reliable Supply</span>
            </div>

            <div className="flex items-center gap-3 bg-[#063B52]/85 p-3.5 rounded-xl border border-white/20 backdrop-blur-md shadow-xl">
              <Globe2 className="w-6 h-6 text-[#39B54A] shrink-0" />
              <span className="text-xs sm:text-sm font-bold">Global Trade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
