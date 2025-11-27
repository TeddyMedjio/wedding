"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInBlurProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeInBlur({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
}: FadeInBlurProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
