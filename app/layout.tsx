import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://padmasriglobalexports.com"),
  title: "Padmasri Global Exports | Export & Import from India",
  description: "Padmasri Global Exports is an India-based export and import company offering Kewda Ruh, Frozen Chicken and Seafood for international markets.",
  keywords: [
    "Padmasri Global Exports",
    "Kewda Ruh Export",
    "Frozen Chicken Export India",
    "Seafood Exporters Odisha",
    "Indian Export Import Business",
    "Global Trade Solutions",
    "Chikiti Ganjam Odisha Exports"
  ],
  authors: [{ name: "Padmasri Global Exports" }],
  openGraph: {
    title: "Padmasri Global Exports | Export & Import from India",
    description: "Connecting Quality Indian Products With Global Markets. Kewda Ruh, Frozen Chicken, and Premium Seafood.",
    url: "https://padmasriglobalexports.com",
    siteName: "Padmasri Global Exports",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Padmasri Global Exports Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Padmasri Global Exports | Export & Import from India",
    description: "Connecting Quality Indian Products With Global Markets.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#063B52",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#F8FAF8] text-[#111111] selection:bg-[#169447] selection:text-white">
        {children}
      </body>
    </html>
  );
}
