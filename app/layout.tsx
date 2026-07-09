import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Master 90cm Range Cooker Single Oven Dual Fuel | SMG Surfaces & Appliances",
  description:
    "Bertazzoni Master Series 90cm dual fuel range cooker — five gas burners, a 103L multifunction oven and 11 cooking functions. Choose Matt Black, Matt White or Stainless Steel, with UK delivery and fitting support.",
  metadataBase: new URL("https://www.smgsurfaces.co.uk"),
  openGraph: {
    title: "Master 90cm Range Cooker Single Oven Dual Fuel",
    description:
      "Bertazzoni Master Series 90cm dual fuel range cooker with UK delivery and fitting support.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4F0E8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
