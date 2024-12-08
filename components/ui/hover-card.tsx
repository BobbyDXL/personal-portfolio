"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function HoverCard({ children }: { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative rounded-2xl p-6 bg-white/5 border border-primary/20 backdrop-blur-sm
                 transition-colors hover:bg-primary/5 hover:border-primary/30"
    >
      {children}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 to-transparent opacity-0 
                   group-hover:opacity-100 rounded-2xl transition-opacity"
        initial={false}
      />
    </motion.div>
  );
} 