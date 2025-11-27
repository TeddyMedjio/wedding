import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Program } from "@/components/Program";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Program />
        <div className="h-screen bg-red-300"></div>
      </main>
    </div>
  );
}
