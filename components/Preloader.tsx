"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show flash preloader on initial page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F8FAF8] text-[#063B52] transition-opacity duration-700 ease-out">
      {/* Subtle Mint & Emerald Ambient Orbs */}
      <div className="absolute w-96 h-96 rounded-full bg-[#169447]/10 blur-3xl animate-pulse" />
      <div className="absolute w-80 h-80 rounded-full bg-[#087EA4]/10 blur-3xl animate-pulse delay-500" />

      <div className="relative z-10 flex flex-col items-center space-y-6 px-6 text-center">
        {/* Exact Original Colored Logo with zero white background box patch */}
        <div className="relative group transition-transform duration-500 animate-in zoom-in-95">
          <div className="relative h-28 w-80 sm:h-36 sm:w-96">
            <Image
              src="/logo.png"
              alt="Padmasri Global Exports Official Logo"
              fill
              sizes="384px"
              className="object-contain mix-blend-multiply"
              priority
            />
          </div>
        </div>

        {/* Brand Tagline */}
        <div className="space-y-1.5 pt-2">
          <h2 className="text-xl sm:text-2xl font-black text-[#063B52] tracking-widest uppercase">
            PADMASRI GLOBAL EXPORTS
          </h2>
          <p className="text-xs sm:text-sm text-[#169447] font-extrabold uppercase tracking-widest">
            Connecting Quality Indian Products With Global Markets
          </p>
        </div>

        {/* Animated Loading Bar */}
        <div className="w-48 sm:w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#169447] via-[#39B54A] to-[#087EA4] rounded-full animate-[loading-bar_1.1s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-bar {
          0% {
            left: -100%;
            width: 50%;
          }
          50% {
            width: 70%;
          }
          100% {
            left: 100%;
            width: 30%;
          }
        }
      `}</style>
    </div>
  );
}
