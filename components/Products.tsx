"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductDetailModal from "./ProductDetailModal";
import { productList, ProductItem } from "@/data/products";

interface ProductsProps {
  onOpenEnquiry?: (productName?: string) => void;
  showAll?: boolean;
}

export default function Products({ onOpenEnquiry, showAll = true }: ProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <section id="products" className="py-20 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#169447] uppercase bg-[#169447]/10 px-3 py-1 rounded-md inline-block">
            OUR EXPORT PRODUCTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B52]">
            Our Export Products
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            High-quality products sourced with care, ready for global markets.
          </p>
        </div>

        {/* 3 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productList.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Product Image Container */}
              <Link href={`/products/${product.id}`} className="relative h-64 w-full bg-gray-100 overflow-hidden block">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#063B52]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                  {product.category}
                </div>
              </Link>

              {/* Product Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-xl font-extrabold text-[#063B52] group-hover:text-[#169447] transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center text-sm font-bold text-[#169447] hover:text-[#39B54A] transition-colors gap-1.5 group/btn"
                  >
                    <span>View Product Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  <Link
                    href={`/enquiry?product=${encodeURIComponent(product.name)}`}
                    className="text-xs font-semibold text-[#087EA4] hover:text-[#063B52] bg-[#EAF7FA] px-3 py-1.5 rounded-md transition-colors"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal Interaction if triggered */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onRequestQuote={(prodName) => {
            setSelectedProduct(null);
            if (onOpenEnquiry) {
              onOpenEnquiry(prodName);
            }
          }}
        />
      )}
    </section>
  );
}
