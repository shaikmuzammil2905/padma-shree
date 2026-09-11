"use client";

export default function GoogleMap() {
  // Embed map centered around Ganjam / Chikiti, Odisha 761009 area
  return (
    <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative bg-gray-100">
      <iframe
        title="Padmasri Global Exports Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60447.88647039016!2d84.5800!3d19.2000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d5e23730e2f5b%3A0x6b7722d56d10f80!2sChikiti%2C%20Odisha%20761009!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="filter contrast-[1.05]"
      />
    </div>
  );
}
