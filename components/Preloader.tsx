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
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#063B52] text-white transition-opacity duration-700 ease-out">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute w-96 h-96 rounded-full bg-[#39B54A]/25 blur-3xl animate-pulse" />
      <div className="absolute w-80 h-80 rounded-full bg-[#087EA4]/25 blur-3xl animate-pulse delay-500" />

      <div className="relative z-10 flex flex-col items-center space-y-6 px-6 text-center">
        {/* Seamless Floating Logo without white background patch box */}
        <div className="relative group transition-transform duration-500 animate-in zoom-in-95">
          <div className="relative h-24 w-72 sm:h-28 sm:w-88 filter drop-shadow-[0_0_25px_rgba(57,181,74,0.6)]">
            <Image
              src="/logo.png"
              alt="Padmasri Global Exports Official Emblem"
              fill
              sizes="352px"
              className="object-contain filter brightness-0 invert"
              priority
            />
          </div>
        </div>

        {/* Brand Tagline */}
        <div className="space-y-1.5 pt-2">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-widest uppercase">
            PADMASRI GLOBAL EXPORTS
          </h2>
          <p className="text-xs sm:text-sm text-[#39B54A] font-extrabold uppercase tracking-widest">
            Connecting Quality Indian Products With Global Markets
          </p>
        </div>

        {/* Animated Loading Bar */}
        <div className="w-48 sm:w-64 h-1.5 bg-white/10 rounded-full overflow-hidden relative">
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
