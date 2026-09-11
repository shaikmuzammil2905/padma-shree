import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, ShieldCheck, Thermometer, Sparkles, ArrowLeft, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { productList, getProductById } from "@/data/products";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return productList.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);
  if (!product) {
    return { title: "Product Not Found | Padmasri Global Exports" };
  }
  return {
    title: `${product.name} | Padmasri Global Exports`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8FAF8] relative">
      <Header />
      <div className="pt-24 sm:pt-28 pb-20">
        {/* Breadcrumb / Back Bar */}
        <div className="bg-white border-b border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#063B52] hover:text-[#169447] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Products</span>
            </Link>
            <span className="text-xs font-semibold text-gray-500 hidden sm:inline">
              Padmasri Global Exports / {product.name}
            </span>
          </div>
        </div>

        {/* Product Detail Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Image Section */}
            <div className="lg:col-span-6 relative min-h-[350px] sm:min-h-[480px] bg-[#063B52]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063B52]/90 via-transparent to-black/20" />
              
              <div className="absolute top-6 left-6">
                <span className="bg-[#063B52]/90 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full border border-white/20 uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {product.name}
                </h1>
                <p className="text-xs sm:text-sm text-gray-200 line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Right Details Section */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h2 className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2">
                    Product Specifications & Overview
                  </h2>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {product.fullDetails}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="bg-[#F8FAF8] p-5 rounded-2xl border border-gray-200/80">
                  <h3 className="text-xs font-bold tracking-wider text-[#063B52] uppercase mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#169447]" />
                    Key Quality Highlights
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-gray-700">
                    {product.keyHighlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#169447] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-[#063B52] uppercase mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#087EA4]" />
                    Commercial Applications
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

                {/* Handling & Export Packaging */}
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-[#063B52] uppercase mb-3 flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-[#169447]" />
                    Export Packaging & Storage
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                    {product.handlingInfo.map((info, i) => (
                      <li key={i} className="flex items-start gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#169447] mt-2 shrink-0" />
                        <span>{info}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href={`/enquiry?product=${encodeURIComponent(product.name)}`}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center bg-[#169447] hover:bg-[#39B54A] text-white text-base font-bold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg gap-2"
                >
                  <span>Request Quote for {product.name}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href="tel:+919114477616"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-[#063B52] text-sm font-bold py-3.5 px-5 rounded-xl transition-colors gap-2"
                >
                  <Phone className="w-4 h-4 text-[#087EA4]" />
                  <span>Call Direct</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
      <MobileBottomBar />
    </main>
  );
}
