"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenEnquiry: (productName?: string) => void;
}

export default function Header({ onOpenEnquiry }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Export & Import", href: "#process" },
    { name: "Quality", href: "#quality" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2.5"
          : "bg-white py-3 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Logo - Blended seamlessly with white background */}
          <Link href="#hero" className="flex items-center group py-0.5">
            <div className="relative h-14 w-52 sm:h-18 sm:w-64 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Padmasri Global Exports Official Logo"
                fill
                sizes="(max-width: 640px) 208px, 256px"
                className="object-contain object-left mix-blend-multiply"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-bold text-[#063B52] hover:text-[#169447] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#169447] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+919114477616"
              className="flex items-center text-sm font-extrabold text-[#063B52] hover:text-[#169447] transition-colors gap-2.5"
            >
              <div className="w-9 h-9 rounded-full bg-[#EAF7FA] flex items-center justify-center text-[#087EA4] shadow-sm">
                <Phone className="w-4 h-4" />
              </div>
              <span>+91 91144 77616</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center justify-center bg-[#169447] hover:bg-[#39B54A] text-white text-sm font-extrabold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 gap-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#063B52] hover:text-[#169447] hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bg-white border-b border-gray-200 shadow-2xl py-6 px-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-[#063B52] hover:text-[#169447] py-2 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 flex flex-col space-y-3">
            <a
              href="tel:+919114477616"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#EAF7FA] text-[#063B52] rounded-xl font-bold text-base shadow-sm"
            >
              <Phone className="w-5 h-5 text-[#087EA4]" />
              <span>+91 91144 77616</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full bg-[#169447] text-white py-3.5 rounded-xl font-extrabold text-base hover:bg-[#39B54A] transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>Request an Enquiry</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
