import { Metadata } from "next";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export const metadata: Metadata = {
  title: "Contact Us | Padmasri Global Exports",
  description: "Get in touch with Padmasri Global Exports. Official contact address in Ganjam, Odisha, phone details, and email inquiry.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF8] relative">
      <Header />
      <div className="pt-24 sm:pt-28">
        {/* Page Banner */}
        <div className="bg-[#063B52] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#39B54A]/30">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#39B54A] uppercase bg-white/10 px-3 py-1 rounded-md inline-block">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white">
              Contact Padmasri Global Exports
            </h1>
            <p className="text-[#EAF7FA]/90 text-base sm:text-lg max-w-2xl mx-auto">
              Our export specialists are available to answer your trade questions, provide quotes, and discuss custom packaging.
            </p>
          </div>
        </div>

        <ContactSection />
      </div>
      <Footer />
      <MobileBottomBar />
    </main>
  );
}
