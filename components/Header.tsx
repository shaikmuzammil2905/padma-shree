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
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white py-4 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Logo */}
          <Link href="#hero" className="flex items-center group">
            <div className="relative h-12 w-48 sm:h-14 sm:w-56 transition-transform group-hover:scale-[1.02]">
              <Image
                src="/logo.png"
                alt="Padmasri Global Exports"
                fill
                sizes="(max-width: 640px) 192px, 224px"
                className="object-contain object-left"
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
                className="text-sm font-medium text-gray-700 hover:text-[#169447] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#169447] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+919114477616"
              className="flex items-center text-sm font-semibold text-[#063B52] hover:text-[#169447] transition-colors gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-[#EAF7FA] flex items-center justify-center text-[#087EA4]">
                <Phone className="w-4 h-4" />
              </div>
              <span>+91 91144 77616</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center justify-center bg-[#169447] hover:bg-[#39B54A] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md active:scale-95 gap-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#169447] hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-gray-200 shadow-xl py-6 px-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-gray-800 hover:text-[#169447] py-2 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 flex flex-col space-y-3">
            <a
              href="tel:+919114477616"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#EAF7FA] text-[#063B52] rounded-lg font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-[#087EA4]" />
              <span>+91 91144 77616</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full bg-[#169447] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#39B54A] transition-colors flex items-center justify-center gap-2"
            >
              <span>Request an Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
