import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <About />
      </main>
    </div>
  );
}
