"use client";

import { MapPin, ExternalLink } from "lucide-react";

export default function GoogleMap() {
  const addressQuery = encodeURIComponent(
    "Govindapur, Surula, Chikiti, Ganjam, Odisha 761009, India"
  );
  const embedUrl = `https://maps.google.com/maps?q=${addressQuery}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;
  const googleMapsDirectUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

  return (
    <div className="w-full h-96 sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200 relative bg-gray-100 group">
      {/* Official Google Map Embed with Exact Location Pin Marker */}
      <iframe
        title="Padmasri Global Exports Exact Business Location Map"
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full filter contrast-[1.05]"
      />

      {/* Floating Info Overlay Box with Red Location Pin Marker */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-200 max-w-xs space-y-2 z-10">
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 shadow-lg animate-bounce">
            <MapPin className="w-5 h-5 fill-white text-red-600" />
          </div>
          <div>
            <h4 className="text-xs font-black uppercase text-[#063B52]">
              Padmasri Global Exports
            </h4>
            <p className="text-xs text-gray-700 font-medium leading-tight mt-0.5">
              Govindapur, P.O. Surula, Block – Chikiti, Ganjam, Odisha – 761009
            </p>
          </div>
        </div>

        <a
          href={googleMapsDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#169447] hover:text-[#063B52] transition-colors pt-1 border-t border-gray-100 w-full"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
