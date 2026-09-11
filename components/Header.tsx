"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenEnquiry?: (productName?: string) => void;
}

export default function Header({ onOpenEnquiry }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Export & Import", href: "/export-process" },
    { name: "Quality", href: "/quality" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-white py-2.5 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Row Alignment Container */}
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Official Logo - Blended seamlessly with zero white box patch */}
          <Link href="/" className="flex items-center shrink-0 py-1 group">
            <div className="relative h-12 w-48 sm:h-14 sm:w-56 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Padmasri Global Exports Official Logo"
                fill
                sizes="(max-width: 640px) 192px, 224px"
                className="object-contain object-left mix-blend-multiply"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links - Single Horizontal Alignment with whitespace-nowrap */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm xl:text-base font-bold whitespace-nowrap transition-colors relative py-1.5 ${
                    isActive
                      ? "text-[#169447] after:w-full"
                      : "text-[#063B52] hover:text-[#169447]"
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#169447] hover:after:w-full after:transition-all`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Phone & CTA Button - Single Row Centered */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 shrink-0">
            <a
              href="tel:+919114477616"
              className="flex items-center text-xs xl:text-sm font-extrabold text-[#063B52] hover:text-[#169447] transition-colors gap-2 whitespace-nowrap"
            >
              <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-[#EAF7FA] flex items-center justify-center text-[#087EA4] shadow-sm shrink-0">
                <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
              </div>
              <span>+91 91144 77616</span>
            </a>

            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center bg-[#169447] hover:bg-[#39B54A] text-white text-xs xl:text-sm font-extrabold px-5 py-2.5 xl:px-6 xl:py-3 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 gap-2 whitespace-nowrap shrink-0"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#063B52] hover:text-[#169447] hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 sm:w-8 sm:h-8" />
              ) : (
                <Menu className="w-7 h-7 sm:w-8 sm:h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[64px] sm:top-[72px] bg-white border-b border-gray-200 shadow-2xl py-6 px-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-bold py-2 border-b border-gray-100 ${
                    isActive ? "text-[#169447]" : "text-[#063B52] hover:text-[#169447]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 flex flex-col space-y-3">
            <a
              href="tel:+919114477616"
              className="flex items-center justify-center gap-2.5 w-full py-3 bg-[#EAF7FA] text-[#063B52] rounded-xl font-bold text-sm shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#087EA4]" />
              <span>+91 91144 77616</span>
            </a>

            <Link
              href="/enquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#169447] text-white py-3 rounded-xl font-extrabold text-sm hover:bg-[#39B54A] transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>Request an Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
