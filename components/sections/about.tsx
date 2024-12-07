"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            Your introduction goes here. Write about your background, skills, and what drives you.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* Skill cards */}
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold mb-2">Frontend</h3>
            <p className="text-sm text-muted-foreground">React, Next.js, TailwindCSS</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold mb-2">Backend</h3>
            <p className="text-sm text-muted-foreground">Node.js, Python, SQL</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 