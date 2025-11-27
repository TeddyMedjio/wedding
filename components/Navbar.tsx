import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="bg-black/5 backdrop-blur-md border-b border-white/50 sticky top-0 z-50">
      <Container>
        <div className="py-5 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" height={46} width={41} alt="logo" />
          </Link>
          <ul className="flex items-center gap-10 text-[17px] uppercase">
            <li>
              <Link href="#about">Nous</Link>
            </li>
            <li>
              <Link href="#programme">programme</Link>
            </li>
            <li>
              <Link href="#faq">FAQ</Link>
            </li>
          </ul>

          <Link
            href="/contact"
            className="text-[17px] font-medium bg-black text-white p-3 flex items-center gap-2"
          >
            RSVP
            <ArrowUpRight />
          </Link>
        </div>
      </Container>
    </nav>
  );
};
