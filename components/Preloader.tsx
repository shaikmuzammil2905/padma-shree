"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show flash preloader on initial page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#063B52] text-white transition-opacity duration-700 ease-out">
      {/* Background Subtle Pulsing Orbs */}
      <div className="absolute w-96 h-96 rounded-full bg-[#169447]/20 blur-3xl animate-pulse" />
      <div className="absolute w-80 h-80 rounded-full bg-[#087EA4]/20 blur-3xl animate-pulse delay-500" />

      <div className="relative z-10 flex flex-col items-center space-y-6 px-6 text-center">
        {/* Grand Glowing Official Logo Badge */}
        <div className="relative p-6 rounded-3xl bg-white/95 shadow-[0_0_50px_rgba(57,181,74,0.4)] border border-[#39B54A]/40 animate-in zoom-in-90 duration-500">
          <div className="relative h-20 w-64 sm:h-24 sm:w-80">
            <Image
              src="/logo.png"
              alt="Padmasri Global Exports Official Emblem"
              fill
              sizes="320px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Brand Tagline */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide">
            PADMASRI GLOBAL EXPORTS
          </h2>
          <p className="text-xs sm:text-sm text-[#39B54A] font-extrabold uppercase tracking-widest">
            Connecting Quality Indian Products With Global Markets
          </p>
        </div>

        {/* Animated Loading Bar */}
        <div className="w-48 sm:w-64 h-1.5 bg-white/10 rounded-full overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#169447] via-[#39B54A] to-[#087EA4] rounded-full animate-[loading-bar_1.2s_ease-in-out_infinite]" />
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
