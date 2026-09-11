"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import ExportProcess from "@/components/ExportProcess";
import GlobalReach from "@/components/GlobalReach";
import QualitySection from "@/components/QualitySection";
import CtaSection from "@/components/CtaSection";
import EnquiryForm from "@/components/EnquiryForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (productName?: string) => {
    if (productName) {
      setSelectedProductForEnquiry(productName);
    }
    const enquiryElem = document.getElementById("enquiry");
    if (enquiryElem) {
      enquiryElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAF8] relative">
      {/* Flash Preloader Screen */}
      <Preloader />

      {/* Sticky Top Header */}
      <Header onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Hero Section */}
      <Hero onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* About Us Section */}
      <About />

      {/* Products Section with Modal Integration */}
      <Products onOpenEnquiry={(prod) => handleOpenEnquiry(prod)} />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Export & Import Process */}
      <ExportProcess />

      {/* Global Reach Dark Navy Section */}
      <GlobalReach />

      {/* Quality Commitment Section */}
      <QualitySection />

      {/* CTA Section */}
      <CtaSection onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* B2B Enquiry Form Section */}
      <EnquiryForm prefilledProduct={selectedProductForEnquiry} />

      {/* Contact & Map Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed Bottom Navigation Bar */}
      <MobileBottomBar onOpenEnquiry={() => handleOpenEnquiry()} />
    </main>
  );
}
