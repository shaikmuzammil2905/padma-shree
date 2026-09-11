"use client";

import Image from "next/image";
import { Award, Globe, PackageCheck, MapPin } from "lucide-react";

export default function About() {
  const infoCards = [
    {
      icon: Award,
      title: "Experienced in Global Trade",
      subtitle: "Dedicated to excellence & reliability",
    },
    {
      icon: Globe,
      title: "Export & Import",
      subtitle: "International logistics support",
    },
    {
      icon: PackageCheck,
      title: "3+ Core Categories",
      subtitle: "Kewda Ruh, Poultry & Seafood",
    },
    {
      icon: MapPin,
      title: "India Based Supply",
      subtitle: "Sourced direct from Odisha origin",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Logo Badge */}
          <div className="relative">
            <div className="relative h-[360px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
              <Image
                src="/images/about-montage.jpg"
                alt="Padmasri Global Exports Maritime & Product Sourcing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063B52]/80 via-transparent to-transparent" />
              
              {/* Official Logo Watermark Card Overlay - Left aligned logo, Right aligned text, Seamless white blend */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-gray-200 flex items-center justify-between gap-4">
                {/* Left Aligned Logo with mix-blend-multiply to eliminate patch work */}
                <div className="relative h-12 w-36 sm:h-14 sm:w-44 shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Padmasri Official Emblem"
                    fill
                    sizes="(max-width: 640px) 144px, 176px"
                    className="object-contain object-left mix-blend-multiply"
                  />
                </div>

                {/* Right Aligned Registered Exporter Text */}
                <div className="text-right">
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#169447] block">
                    REGISTERED EXPORTER
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-gray-700 block mt-0.5">
                    Odisha, India
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative background shadow patch */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#EAF7FA] rounded-3xl -z-10 hidden sm:block" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#169447]/10 rounded-3xl -z-10 hidden sm:block" />
          </div>

          {/* Right Column: About Content */}
          <div className="space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#169447] uppercase bg-[#169447]/10 px-3 py-1 rounded-md inline-block mb-3">
                ABOUT PADMASRI GLOBAL EXPORTS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#063B52] leading-tight">
                Connecting Quality Products With Global Markets
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                Padmasri Global Exports is an India-based export and import business focused on reliable sourcing and international trade.
              </p>
              <p>
                From Kewda Ruh to frozen chicken and seafood products, we focus on dependable quality, responsible sourcing and smooth export processes.
              </p>
            </div>

            {/* 4 Informational Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {infoCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F8FAF8] border border-gray-200/80 hover:border-[#169447]/40 hover:bg-[#EAF7FA]/50 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#169447]/10 text-[#169447] flex items-center justify-center mb-3 group-hover:bg-[#169447] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#063B52] mb-1">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {card.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
