"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, Send, AlertCircle, Building2, User, Mail, Phone, Globe, Package, MessageSquare } from "lucide-react";

interface EnquiryFormProps {
  prefilledProduct?: string;
}

export default function EnquiryForm({ prefilledProduct }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    product: "Kewda Ruh",
    quantity: "",
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({ ...prev, product: prefilledProduct }));
    }
  }, [prefilledProduct]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = "Please enter a valid contact phone number";
    }

    if (!formData.product) {
      newErrors.product = "Please select a product category";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#169447", "#39B54A", "#087EA4", "#063B52"],
        });
      } catch (e) {
        // Fallback if canvas confetti isn't initialized
      }
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      product: "Kewda Ruh",
      quantity: "",
      country: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <section id="enquiry" className="py-20 bg-[#F8FAF8] border-t border-gray-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200/80 p-6 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#169447] uppercase bg-[#169447]/10 px-3 py-1 rounded-md inline-block mb-3">
              BUSINESS INQUIRIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B52]">
              Request an Enquiry
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Fill out the details below to receive a formal quotation and product details from our export team.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-[#EAF7FA] border border-[#087EA4]/30 rounded-2xl p-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-[#169447] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#063B52]">
                Thank You!
              </h3>
              <p className="text-gray-700 text-base max-w-md mx-auto">
                Your enquiry for <strong className="text-[#169447]">{formData.product}</strong> has been received. Our export management team will contact you shortly at <strong>{formData.email}</strong>.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-[#063B52] hover:bg-[#087EA4] text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase text-[#063B52] mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#169447]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                      errors.fullName
                        ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200"
                        : "border-gray-300 focus:border-[#169447] focus:ring-2 focus:ring-[#169447]/20"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-bold uppercase text-[#063B52] mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#087EA4]" />
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Global Foods Trading Ltd"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:border-[#169447] focus:ring-2 focus:ring-[#169447]/20 focus:outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase text-[#063B52] mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#169447]" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                      errors.email
                        ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200"
                        : "border-gray-300 focus:border-[#169447] focus:ring-2 focus:ring-[#169447]/20"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase text-[#063B52] mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#087EA4]" />
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                      errors.phone
                        ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200"
                        : "border-gray-300 focus:border-[#169447] focus:ring-2 focus:ring-[#169447]/20"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Product Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase text-[#063B52] mb-1.5 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-[#169447]" />
                    Product Category *
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:border-[#169447] focus:ring-2 focus:ring-[#169447]/20 focus:outline-none transition-all bg-white"
                  >
                    <option value="Kewda Ruh">Kewda Ruh</option>
                    <option value="Frozen Chicken">Frozen Chicken</option>
                    <option value="Seafood">Seafood</option>
                    <option value="Export & Import">General Export & Import</option>
                    <option value="Other">Other Requirement</option>
                  </select>
                </div>

                {/* Quantity / Requirement */}
                <div>
                  <label className="block text-xs font-bold uppercase text-[#063B52] mb-1.5 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-[#087EA4]" />
                    Quantity / Requirement
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 500 Liters / 5 Metric Tons"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:border-[#169447] focus:ring-2 focus:ring-[#169447]/20 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#063B52] mb-1.5 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#169447]" />
                  Destination Country
                </label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g. United Arab Emirates, Saudi Arabia, Singapore"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:border-[#169447] focus:ring-2 focus:ring-[#169447]/20 focus:outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#063B52] mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#087EA4]" />
                  Message / Specifications
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe your specific product packaging, grading, or delivery port requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:border-[#169447] focus:ring-2 focus:ring-[#169447]/20 focus:outline-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#169447] hover:bg-[#39B54A] text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-green-900/30 flex items-center justify-center gap-2 text-base active:scale-95 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Processing Enquiry...</span>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
