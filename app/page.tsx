"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Package, Truck, ShieldCheck, PhoneCall, Sparkles } from "lucide-react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CtaSection from "@/components/CtaSection";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  const sectionShowcases = [
    {
      title: "About Padmasri Global Exports",
      subtitle: "Connecting Quality Indian Sourcing with Global Markets",
      description: "Based in Odisha, India, we specialize in high-grade agricultural extracts, frozen poultry, and pristine marine exports for international buyers.",
      icon: Building2,
      link: "/about",
      badge: "OUR COMPANY",
      image: "/images/about-montage.jpg",
      color: "from-[#063B52] to-[#087EA4]",
    },
    {
      title: "Export Products Portfolio",
      subtitle: "Authentic Kewda Ruh, Frozen Poultry & Marine Catches",
      description: "Discover our core exports: 100% steam distilled Kewda Ruh essential extract, hygienically blast-frozen poultry cuts, and premium coastal seafood.",
      icon: Package,
      link: "/products",
      badge: "OUR PRODUCTS",
      image: "/images/kewda-ruh.jpg",
      color: "from-[#169447] to-[#39B54A]",
    },
    {
      title: "Export & Import Logistics Process",
      subtitle: "6-Step Cold-Chain Workflow & International Shipping",
      description: "From custom quotation and quality inspection to container packaging, customs clearance, and reefer ocean freight delivery.",
      icon: Truck,
      link: "/export-process",
      badge: "TRADE LOGISTICS",
      image: "/images/hero-bg.jpg",
      color: "from-[#087EA4] to-[#063B52]",
    },
    {
      title: "Quality & Regulatory Standards",
      subtitle: "Strict Hygiene, Temperature Matrix & Compliance",
      description: "We enforce APEDA, MPEDA & FSSAI standards with continuous -18°C sub-zero cold chain monitoring and tamper-evident packaging.",
      icon: ShieldCheck,
      link: "/quality",
      badge: "COMPLIANCE & QUALITY",
      image: "/images/seafood.jpg",
      color: "from-[#063B52] to-[#169447]",
    },
    {
      title: "Contact & Headquarters Location",
      subtitle: "Direct Support Hotline & Registered Office",
      description: "Connect directly with our export management team in Ganjam, Odisha for quick trade quotes, samples, and shipping schedules.",
      icon: PhoneCall,
      link: "/contact",
      badge: "GET IN TOUCH",
      image: "/images/frozen-chicken.jpg",
      color: "from-[#087EA4] to-[#39B54A]",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAF8] relative">
      {/* Flash Preloader Screen */}
      <Preloader />

      {/* Sticky Top Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Home Page Sections Portal Overview */}
      <section className="py-20 bg-white border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#169447] uppercase bg-[#169447]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              EXPLORE PADMASRI GLOBAL EXPORTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#063B52] tracking-tight">
              Our Core Operations & Portals
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Click any section below to navigate to dedicated pages with detailed specifications, trade processes, and documentation.
            </p>
          </div>

          {/* Grid of Interactive Showcase Section Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectionShowcases.map((showcase, index) => {
              const IconComponent = showcase.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 flex flex-col group hover:-translate-y-2"
                >
                  {/* Card Image Banner */}
                  <div className="relative h-52 w-full bg-[#063B52] overflow-hidden">
                    <Image
                      src={showcase.image}
                      alt={showcase.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#063B52] via-[#063B52]/30 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md text-[#063B52] text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {showcase.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white">
                      <div className="w-10 h-10 rounded-xl bg-[#169447] flex items-center justify-center text-white shadow-md shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-extrabold leading-snug line-clamp-1">
                        {showcase.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-[#169447] uppercase tracking-wider">
                        {showcase.subtitle}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {showcase.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <Link
                        href={showcase.link}
                        className="inline-flex items-center text-sm font-extrabold text-[#169447] hover:text-[#39B54A] transition-colors gap-2 group/btn"
                      >
                        <span>Open {showcase.title.split(" ")[0]} Page</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section Banner */}
      <CtaSection />

      {/* B2B Quick Enquiry Form Section */}
      <EnquiryForm />

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomBar />
    </main>
  );
}
