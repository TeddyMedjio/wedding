"use client";

import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous: any = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className=" bg-black/5 backdrop-blur-md border-b border-white/50 sticky top-0 w-full z-50"
    >
      <Container>
        <div className="py-3 flex items-center justify-between">
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
            className="text-[17px] bg-black text-white p-2 flex items-center gap-2"
          >
            RSVP
            <ArrowUpRight className="stroke-1" />
          </Link>
        </div>
      </Container>
    </motion.nav>
  );
};
