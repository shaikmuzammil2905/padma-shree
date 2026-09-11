"use client";

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
  return (
    <main className="min-h-screen bg-[#F8FAF8] relative">
      {/* Flash Preloader Screen */}
      <Preloader />

      {/* Sticky Top Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Us Preview */}
      <About />

      {/* Products Showcase */}
      <Products />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Export & Import Process */}
      <ExportProcess />

      {/* Global Reach */}
      <GlobalReach />

      {/* Quality Commitment */}
      <QualitySection />

      {/* CTA Banner */}
      <CtaSection />

      {/* B2B Enquiry Form */}
      <EnquiryForm />

      {/* Contact & Map */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed Bottom Navigation Bar */}
      <MobileBottomBar />
    </main>
  );
}
