import { Metadata } from "next";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Phone, Mail, MapPin, Clock, MessageSquare, Globe, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Official Head Office | Padmasri Global Exports",
  description: "Get in touch with Padmasri Global Exports. Official contact address in Ganjam, Odisha, direct hotline, WhatsApp, and email inquiry.",
};

export default function ContactPage() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Registered Export Address",
      line1: "Govindapur, P.O. Surula, Block – Chikiti",
      line2: "District Ganjam, Odisha – 761009, India",
      color: "text-[#169447]",
      bg: "bg-[#169447]/10",
    },
    {
      icon: Phone,
      title: "Direct Trade Hotline",
      line1: "+91 91144 77616",
      line2: "Available 24/7 for Global Inquiries",
      color: "text-[#087EA4]",
      bg: "bg-[#087EA4]/10",
      link: "tel:+919114477616",
    },
    {
      icon: Mail,
      title: "Official Email Address",
      line1: "nakachiranjivireddy@gmail.com",
      line2: "Quotations & Technical Specs Desk",
      color: "text-[#39B54A]",
      bg: "bg-[#39B54A]/10",
      link: "mailto:nakachiranjivireddy@gmail.com",
    },
    {
      icon: Clock,
      title: "Trade Desk Operating Hours",
      line1: "Monday - Saturday: 8:00 AM - 8:00 PM IST",
      line2: "International Email Support 24/7",
      color: "text-[#063B52]",
      bg: "bg-[#063B52]/10",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAF8] relative">
      <Header />
      <div className="pt-24 sm:pt-28">
        
        {/* Animated Page Hero Banner */}
        <div className="bg-[#063B52] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#39B54A]/30">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#39B54A_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10 animate-fade-in-up">
            <span className="text-xs sm:text-sm font-black tracking-widest text-[#39B54A] uppercase bg-white/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-[#39B54A]/30">
              <Sparkles className="w-4 h-4" />
              GLOBAL TRADE DESK
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Contact Padmasri Global Exports
            </h1>
            <p className="text-[#EAF7FA]/90 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Our trade specialists are ready to answer your questions, provide formal proforma quotes, and schedule sample dispatches.
            </p>
          </div>
        </div>

        {/* 4 Contact Cards */}
        <section className="py-16 bg-white border-b border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactDetails.map((card, i) => {
                const IconComp = card.icon;
                return (
                  <div
                    key={i}
                    className="bg-[#F8FAF8] p-6 rounded-3xl border border-gray-200/80 hover:border-[#169447]/50 transition-all duration-300 space-y-4 hover:shadow-xl group hover:-translate-y-1.5"
                  >
                    <div className={`w-12 h-12 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center shadow-sm`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-[#063B52]">
                        {card.title}
                      </h3>
                      {card.link ? (
                        <a href={card.link} className="text-sm font-bold text-[#169447] hover:underline block mt-1 break-all">
                          {card.line1}
                        </a>
                      ) : (
                        <p className="text-sm font-bold text-gray-800 mt-1">
                          {card.line1}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-0.5">
                        {card.line2}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section & Map Component */}
        <div className="animate-fade-in-up">
          <ContactSection />
        </div>
      </div>
      <Footer />
      <MobileBottomBar />
    </main>
  );
}
