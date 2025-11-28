import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réserver votre place",
  description: "Confirmez votre présence au mariage de Noe et Sandrine le 27 septembre 2025 à Barcelone. Remplissez le formulaire de réservation et partagez vos préférences alimentaires.",
  openGraph: {
    title: "Réserver votre place | Mariage Noe & Sandrine",
    description: "Confirmez votre présence à notre mariage et réservez votre place.",
    images: ["/maries.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
