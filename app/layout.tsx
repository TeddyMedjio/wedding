import type { Metadata } from "next";
import { Funnel_Sans, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});

const libreCaslonText = Libre_Caslon_Text({
  variable: "--font-libre-caslon-text",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Noah & Mariline",
  description: "Bienvenue au mariage de Noah & Sabrina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelSans.variable} ${libreCaslonText.variable} antialiased scroll-smooth`}
      >
        <div className="relative">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
