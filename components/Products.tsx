"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import ProductDetailModal, { ProductItem } from "./ProductDetailModal";

interface ProductsProps {
  onOpenEnquiry: (productName?: string) => void;
}

export default function Products({ onOpenEnquiry }: ProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const productList: ProductItem[] = [
    {
      id: "kewda-ruh",
      name: "Kewda Ruh",
      category: "Aromatic Essential Extract",
      image: "/images/kewda-ruh.jpg",
      description:
        "Premium Kewda Ruh sourced with attention to fragrance, purity and quality, suitable for international buyers seeking authentic Indian aromatic products.",
      fullDetails:
        "Kewda Ruh (Pandanus odorifer extract) is one of India's most prized natural aromatic concentrates, distilled traditionally from fragrant male screwpine flowers in Odisha's coastal belt. Recognized globally for its enchanting botanical aroma, high purity, and long-lasting scent profile.",
      keyHighlights: [
        "100% Pure Natural Steam Distilled Extract",
        "Authentic Odisha Geographical Origin Sourcing",
        "Rich Floral Aroma Profile for High-End Perfumery",
        "Free from Artificial Additives or Synthetics"
      ],
      applications: [
        "Natural Perfumery & Fine Fragrance",
        "Attar & Traditional Fragrance Formulations",
        "Aromatherapy & Premium Cosmetic Formulations",
        "Culinary & Confectionery Flavoring"
      ],
      handlingInfo: [
        "Packaged in airtight, food-grade aluminum bottles or amber glass vials.",
        "Stored in cool, dry climate-controlled environments to preserve aroma profile.",
        "Sealed with tamper-evident export packaging."
      ]
    },
    {
      id: "frozen-chicken",
      name: "Frozen Chicken",
      category: "Poultry & Cold-Chain Supply",
      image: "/images/frozen-chicken.jpg",
      description:
        "Reliable frozen chicken products sourced and handled with a focus on hygiene, quality and dependable cold-chain supply.",
      fullDetails:
        "Our frozen chicken exports are processed in modern, hygienic food facilities adhering strictly to international food safety and veterinary standards. We offer whole dressed chicken, breast fillets, drumsticks, and wings tailored to commercial buyer specifications.",
      keyHighlights: [
        "Dressed & Cut Dressed Poultry Options",
        "Hygienically Processed Under Cold Chain Controls",
        "Clean, Skin-On and Skin-Off Custom Cuts Available",
        "Zero Added Water Weight / Blast Frozen Quality"
      ],
      applications: [
        "Wholesale Foodservice Distributors",
        "Commercial Restaurant & Catering Operations",
        "Hotel & Institutional Culinary Supply",
        "Retail & Supermarket Butchery Chains"
      ],
      handlingInfo: [
        "Blast frozen at -35°C to preserve cellular integrity and texture.",
        "Stored & shipped at continuous sub-zero temperatures (-18°C or colder).",
        "Export packed in heavy-duty food grade poly-bags and corrugated master cartons."
      ]
    },
    {
      id: "seafood",
      name: "Seafood",
      category: "Fresh & Frozen Marine Produce",
      image: "/images/seafood.jpg",
      description:
        "Quality seafood products prepared for international trade with careful sourcing, handling and packaging requirements.",
      fullDetails:
        "Sourced from the pristine waters of Odisha's coastline and sustainable aquaculture farms, our seafood export portfolio includes premium White Prawns (Vannamei), Black Tiger Shrimp, Indian Pomfret, and ocean-fresh catches. Harvested with care to ensure natural flavor and firm texture.",
      keyHighlights: [
        "Fresh Coastal & Farm-Raised Prawn Varieties",
        "Individually Quick Frozen (IQF) & Block Frozen",
        "Careful Sorting by Count, Weight & Grade",
        "Rigorous Sensory & Temperature Quality Checks"
      ],
      applications: [
        "International Seafood Importers & Distributors",
        "Seafood Specialty Restaurants & Hotel Chains",
        "Food Processing & Value-Add Manufacturing",
        "Supermarket Seafood Counters"
      ],
      handlingInfo: [
        "Quick frozen immediately after harvesting to retain peak fresh taste.",
        "Shipped in temperature-monitored refrigerated marine containers (Reefers).",
        "Protected by protective water glaze to prevent freezer burn during long voyages."
      ]
    }
  ];

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
              <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
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
              </div>

              {/* Product Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-[#063B52] group-hover:text-[#169447] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="inline-flex items-center text-sm font-bold text-[#169447] hover:text-[#39B54A] transition-colors gap-1.5 group/btn"
                  >
                    <span>Explore Product</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(product.name)}
                    className="text-xs font-semibold text-[#087EA4] hover:text-[#063B52] bg-[#EAF7FA] px-3 py-1.5 rounded-md transition-colors"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal Interaction */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(prodName) => {
          setSelectedProduct(null);
          onOpenEnquiry(prodName);
        }}
      />
    </section>
  );
}
