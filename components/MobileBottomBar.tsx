"use client";

import Link from "next/link";
import { Phone, MessageSquare, Send } from "lucide-react";

interface MobileBottomBarProps {
  onOpenEnquiry?: () => void;
}

export default function MobileBottomBar({ onOpenEnquiry }: MobileBottomBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#063B52] border-t border-white/10 p-2 shadow-2xl backdrop-blur-lg">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Action */}
        <a
          href="tel:+919114477616"
          className="flex flex-col items-center justify-center py-2 px-1 bg-white/10 text-white rounded-xl active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5 text-[#39B54A] mb-0.5" />
          <span className="text-[11px] font-bold tracking-wide uppercase">Call</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href="https://wa.me/919114477616"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#169447] text-white rounded-xl active:scale-95 transition-transform shadow-md"
        >
          <MessageSquare className="w-5 h-5 text-white mb-0.5" />
          <span className="text-[11px] font-bold tracking-wide uppercase">WhatsApp</span>
        </a>

        {/* Enquiry Action */}
        <Link
          href="/enquiry"
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#087EA4] text-white rounded-xl active:scale-95 transition-transform"
        >
          <Send className="w-5 h-5 text-white mb-0.5" />
          <span className="text-[11px] font-bold tracking-wide uppercase">Enquiry</span>
        </Link>
      </div>
    </div>
  );
}
