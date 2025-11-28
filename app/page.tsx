import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Program } from "@/components/Program";
import { Rsvp } from "@/components/Rsvp";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Program />
        <Faq />
        <Rsvp />
      </main>
    </div>
  );
}
