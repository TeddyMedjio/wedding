"use client";

import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className=" hidden md:block bg-black/5 backdrop-blur-md border-b border-white/50 sticky top-0 w-full z-50"
      >
        <Container>
          <div className="py-3 flex items-center justify-between">
            <Link href="/">
              <Image src="/logo.png" height={46} width={41} alt="logo" />
            </Link>

            {/* Menu desktop - caché sur mobile */}
            <ul className="hidden md:flex items-center gap-10 text-[17px] uppercase">
              <li>
                <Link href="/#about">Nous</Link>
              </li>
              <li>
                <Link href="/#programme">programme</Link>
              </li>
              <li>
                <Link href="/#faq">FAQ</Link>
              </li>
            </ul>

            {/* Bouton RSVP desktop - caché sur mobile */}
            <Link
              href="/contact"
              className="flex text-[17px] bg-black text-white p-2 items-center gap-2"
            >
              RSVP
              <ArrowUpRight className="stroke-1" />
            </Link>
          </div>
        </Container>
      </motion.nav>

      <nav className=" md:hidden bg-black/5 backdrop-blur-md border-b border-white/50 sticky top-0 w-full z-50">
        <Container>
          <div className="py-3 flex items-center justify-between">
            <Link href="/">
              <Image src="/logo.png" height={46} width={41} alt="logo" />
            </Link>

            {/* Menu mobile  - caché sur desktop */}

            {/* Bouton RSVP desktop - caché sur mobile */}
            <Link
              href="/contact"
              className="hidden md:flex text-[17px] bg-black text-white p-2 items-center gap-2"
            >
              RSVP
              <ArrowUpRight className="stroke-1" />
            </Link>

            {/* Bouton hamburger - visible uniquement sur mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </Container>
      </nav>

      {/* Menu mobile */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: {
            opacity: 1,
            height: "100%",
            transition: {
              duration: 0.4,
              ease: "easeInOut",
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
          closed: {
            opacity: 0,
            height: 0,
            transition: {
              duration: 0.4,
              ease: "easeInOut",
              delay: 0.5,
            },
          },
        }}
        className="md:hidden bg-white/70 backdrop-blur-md border-b border-white/50 overflow-hidden fixed w-full z-40 grid place-items-center"
      >
        <Container>
          <motion.ul
            className="py-6 flex flex-col items-center justify-center gap-6 text-[27px] uppercase"
            variants={{
              open: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
              closed: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.li
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -20 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Acceuil
              </Link>
            </motion.li>
            <motion.li
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -20 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link href="/#about" onClick={() => setMobileMenuOpen(false)}>
                Nous
              </Link>
            </motion.li>
            <motion.li
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -20 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link href="/#programme" onClick={() => setMobileMenuOpen(false)}>
                programme
              </Link>
            </motion.li>
            <motion.li
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -20 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link href="/#faq" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
            </motion.li>
            <motion.li
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -20 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[17px] bg-black text-white p-2 flex items-center gap-2 w-fit"
              >
                RSVP
                <ArrowUpRight className="stroke-1" />
              </Link>
            </motion.li>
          </motion.ul>
        </Container>
      </motion.div>
    </>
  );
};
