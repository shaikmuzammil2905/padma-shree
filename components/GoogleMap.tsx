"use client";

import { MapPin, ExternalLink } from "lucide-react";

export default function GoogleMap() {
  const addressQuery = encodeURIComponent(
    "Govindapur, Surula, Chikiti, Ganjam, Odisha 761009, India"
  );
  // Google Map embed URL with explicit marker pin drop parameter
  const embedUrl = `https://maps.google.com/maps?q=${addressQuery}&t=&z=14&ie=UTF8&iwloc=A&output=embed`;
  const googleMapsDirectUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

  return (
    <div className="w-full h-96 sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#169447]/30 relative bg-gray-100 group">
      {/* Official Embedded Google Map */}
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

      {/* Prominent Red Pin Location Marker Badge Card */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-gray-200 max-w-xs space-y-2 z-10">
        <div className="flex items-start gap-3">
          {/* Glowing Animated Red Location Pin Marker */}
          <div className="relative shrink-0 mt-0.5">
            <span className="absolute -inset-2 rounded-full bg-red-500 opacity-75 animate-ping" />
            <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl relative z-10">
              <MapPin className="w-5 h-5 fill-white text-red-600" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <h4 className="text-xs font-black uppercase text-[#063B52] tracking-wider">
                EXACT OFFICE LOCATION
              </h4>
            </div>
            <p className="text-xs text-gray-800 font-bold leading-snug mt-1">
              Govindapur, P.O. Surula, Block – Chikiti, Ganjam, Odisha – 761009, India
            </p>
          </div>
        </div>

        <a
          href={googleMapsDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between gap-1 text-xs font-extrabold text-white bg-red-600 hover:bg-red-700 py-2 px-3 rounded-xl transition-all shadow-md w-full mt-2"
        >
          <span>View Exact Red Pin on Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
