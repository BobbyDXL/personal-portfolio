"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Shimmer } from "../ui/shimmer";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    "UI/UX Designer",
    "Frontend Developer",
    "Data Analyst"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[90vh] flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 rounded-full mx-auto mb-8 relative overflow-hidden group"
        >
          <img 
            src="/profile.jpg" 
            alt="David Chen" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <motion.div
            className="absolute inset-0 border-2 border-primary rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <h1 className="text-6xl font-bold mb-6 relative overflow-hidden bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">
          Hello, I'm{" "}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="relative inline-block hover:text-primary transition-colors duration-300"
          >
            David Chen
            <Shimmer />
          </motion.span>
        </h1>

        <div className="h-[30px] mb-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-muted-foreground"
            >
              {roles[currentIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-x-4"
        >
          <button className="group px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
            Get in touch
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-3 border border-primary/20 rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-105">
            View Projects
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
} 