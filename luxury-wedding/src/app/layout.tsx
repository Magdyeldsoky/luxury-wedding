import type { Metadata, Viewport } from "next";
import { Cairo, Alexandria } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-cairo",
});

const alexandria = Alexandria({
  subsets: ["arabic"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-alexandria",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "دعوة زفاف: مجدي ❤️ رحمه",
  description: "يسرنا دعوتكم لمشاركتنا أجمل لحظات حياتنا - الموقع الرسمي لدعوة زفاف مجدي ورامه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${alexandria.variable} overflow-x-hidden`}>
      <body className="bg-luxury-black text-luxury-cream antialiased selection:bg-luxury-gold selection:text-luxury-black overflow-x-hidden">
        <div className="noise-bg" />
        {children}
      </body>
    </html>
  );
}