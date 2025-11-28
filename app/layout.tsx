import type { Metadata } from "next";
import { Funnel_Sans, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});

const libreCaslonText = Libre_Caslon_Text({
  variable: "--font-libre-caslon-text",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wedding-ten-livid-77.vercel.app/"),
  title: {
    default: "Mariage Noe & Sandrine - 27 Septembre 2025 à Barcelone",
    template: "%s | Noe & Sandrine",
  },
  description:
    "Rejoignez-nous pour célébrer le mariage de Noe et Sandrine le samedi 27 septembre 2025 à Barcelone. Découvrez le programme, réservez votre place et partagez ce moment unique avec nous.",
  keywords: [
    "mariage",
    "Noe",
    "Sandrine",
    "Barcelone",
    "27 septembre",
    "2025",
    "célébration",
    "noces",
  ],
  authors: [{ name: "Noe & Sandrine" }],
  creator: "Noe & Sandrine",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://wedding-ten-livid-77.vercel.app/",
    title: "Mariage Noe & Sandrine - 27 Septembre 2025",
    description:
      "Rejoignez-nous pour célébrer notre mariage le samedi 27 septembre 2025 à Barcelone.",
    siteName: "Mariage Noe & Sandrine",
    images: [
      {
        url: "/church.png",
        width: 1200,
        height: 630,
        alt: "Noe & Sandrine - Notre Mariage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariage Noe & Sandrine - 27 Septembre 2025",
    description:
      "Rejoignez-nous pour célébrer notre mariage le samedi 27 septembre 2025 à Barcelone.",
    images: ["/church.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "votre-code-verification-google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <StructuredData />
      </head>
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
