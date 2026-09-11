"use client";

import Image from "next/image";
import { X, CheckCircle2, ArrowRight, ShieldCheck, Thermometer, Sparkles } from "lucide-react";

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  fullDetails: string;
  applications: string[];
  handlingInfo: string[];
  keyHighlights: string[];
}

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  onRequestQuote,
}: ProductDetailModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image Banner */}
        <div className="relative h-64 sm:h-72 w-full bg-[#063B52]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#063B52] via-[#063B52]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider bg-[#169447] text-white px-3 py-1 rounded-md inline-block">
              {product.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {product.name}
            </h2>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <div>
            <h3 className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2">
              Overview
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {product.fullDetails}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="bg-[#F8FAF8] p-4 rounded-xl border border-gray-200/80">
            <h3 className="text-xs font-bold tracking-wider text-[#063B52] uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#169447]" />
              Key Features & Sourcing Quality
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              {product.keyHighlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#169447] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-[#063B52] uppercase mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#087EA4]" />
              Commercial Applications & Use Cases
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, i) => (
                <span
                  key={i}
                  className="bg-[#EAF7FA] text-[#063B52] text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#087EA4]/20"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Safe Handling & Cold Chain */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-[#063B52] uppercase mb-3 flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-[#169447]" />
              Handling & Export Packaging Practices
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              {product.handlingInfo.map((info, i) => (
                <li key={i} className="flex items-start gap-2 bg-gray-50 p-2.5 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#169447] mt-2 shrink-0" />
                  <span>{info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            Close Details
          </button>

          <button
            onClick={() => {
              onClose();
              onRequestQuote(product.name);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#169447] hover:bg-[#39B54A] text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <span>Request Quote for {product.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
