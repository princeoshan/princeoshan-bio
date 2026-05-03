import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import content from "@/content.config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: content.og.title,
  description: content.og.description,
  metadataBase: new URL(content.og.siteUrl),
  openGraph: {
    title: content.og.title,
    description: content.og.description,
    images: [{ url: content.og.imageUrl }],
    url: content.og.siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.og.title,
    description: content.og.description,
    images: [content.og.imageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable}`}
    >
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
