"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#063B52] text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Logo & Company Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block relative h-16 w-64 p-1">
              <Image
                src="/logo.png"
                alt="Padmasri Global Exports Official Footer Logo"
                fill
                sizes="256px"
                className="object-contain object-left filter brightness-110 drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]"
              />
            </Link>
            <p className="text-xs sm:text-sm text-[#EAF7FA]/90 leading-relaxed pt-2 font-medium">
              Connecting quality Indian products with global markets. Focused on dependable Kewda Ruh, Frozen Chicken, and Seafood supply.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#39B54A] border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <Link href="/" className="text-[#EAF7FA]/80 hover:text-[#39B54A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#EAF7FA]/80 hover:text-[#39B54A] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#EAF7FA]/80 hover:text-[#39B54A] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/export-process" className="text-[#EAF7FA]/80 hover:text-[#39B54A] transition-colors">
                  Export & Import
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-[#EAF7FA]/80 hover:text-[#39B54A] transition-colors">
                  Quality
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#EAF7FA]/80 hover:text-[#39B54A] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/enquiry" className="text-[#EAF7FA]/80 hover:text-[#39B54A] transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Export Products */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#39B54A] border-b border-white/10 pb-2">
              Export Products
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <Link href="/products/kewda-ruh" className="text-[#EAF7FA]/80 hover:text-[#39B54A] transition-colors">
                  Kewda Ruh (Essential Extract)
                </Link>
              </li>
              <li>
                <Link href="/products/frozen-chicken" className="text-[#EAF7FA]/80 hover:text-[#39B54A] transition-colors">
                  Frozen Chicken Cuts
                </Link>
              </li>
              <li>
                <Link href="/products/seafood" className="text-[#EAF7FA]/80 hover:text-[#39B54A] transition-colors">
                  Fresh & Frozen Seafood
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#39B54A] border-b border-white/10 pb-2">
              Contact Details
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#EAF7FA]/90 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#39B54A] shrink-0 mt-0.5" />
                <span>Govindapur, P.O. Surula, Block – Chikiti, Ganjam, Odisha – 761009, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#39B54A] shrink-0" />
                <a href="tel:+919114477616" className="hover:text-[#39B54A] transition-colors font-bold">
                  +91 91144 77616
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#39B54A] shrink-0" />
                <a href="mailto:nakachiranjivireddy@gmail.com" className="hover:text-[#39B54A] transition-colors break-all font-bold">
                  nakachiranjivireddy@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAF7FA]/70 font-medium">
          <p>© 2026 Padmasri Global Exports. All Rights Reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#39B54A] hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-xl border border-white/10 shadow-sm"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
