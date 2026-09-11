"use client";

import { MapPin, Phone, Mail, MessageSquare, ExternalLink } from "lucide-react";
import GoogleMap from "./GoogleMap";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#169447] uppercase bg-[#169447]/10 px-3 py-1 rounded-md inline-block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B52]">
            Contact Padmasri Global Exports
          </h2>
          <p className="text-gray-600 text-base">
            Reach out directly to our trade representatives for inquiries, product details, and partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Business Contact Cards & Action Buttons */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#F8FAF8] p-8 rounded-3xl border border-gray-200/80 space-y-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#063B52] border-b border-gray-200 pb-4">
                Padmasri Global Exports
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF7FA] text-[#087EA4] flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Registered Business Address
                  </h4>
                  <p className="text-sm font-medium text-gray-800 leading-relaxed">
                    Govindapur, P.O. Surula,<br />
                    Block – Chikiti, Ganjam,<br />
                    Odisha – 761009, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#169447]/10 text-[#169447] flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Direct Trade Phone
                  </h4>
                  <a
                    href="tel:+919114477616"
                    className="text-base font-bold text-[#063B52] hover:text-[#169447] transition-colors"
                  >
                    +91 91144 77616
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF7FA] text-[#087EA4] flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Official Email
                  </h4>
                  <a
                    href="mailto:nakachiranjivireddy@gmail.com"
                    className="text-sm font-bold text-[#063B52] hover:text-[#169447] transition-colors break-all"
                  >
                    nakachiranjivireddy@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Three Contact Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="tel:+919114477616"
                className="flex items-center justify-center gap-2 bg-[#063B52] hover:bg-[#087EA4] text-white py-3.5 px-4 rounded-xl font-bold text-sm transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#39B54A]" />
                <span>Call Us</span>
              </a>

              <a
                href="https://wa.me/919114477616"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#169447] hover:bg-[#39B54A] text-white py-3.5 px-4 rounded-xl font-bold text-sm transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href="mailto:nakachiranjivireddy@gmail.com"
                className="flex items-center justify-center gap-2 bg-[#087EA4] hover:bg-[#063B52] text-white py-3.5 px-4 rounded-xl font-bold text-sm transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Map */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#063B52] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#169447]" />
                Location & Sourcing Region
              </h3>
              <span className="text-xs font-semibold text-gray-500">
                Ganjam District, Odisha
              </span>
            </div>

            <GoogleMap />
          </div>
        </div>
      </div>
    </section>
  );
}
