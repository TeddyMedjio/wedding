"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <motion.div
        className="fixed inset-0 bg-black z-50 pointer-events-none origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed inset-0 bg-black z-50 pointer-events-none origin-top flex items-center justify-center"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 2 }}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Image
            src="/logo_blanc.png"
            alt="Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </>
  );
};
