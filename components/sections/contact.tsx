"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-8">
          I'm always open to new opportunities and collaborations.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-2 border rounded-lg bg-background"
          />
          <textarea
            placeholder="Your message"
            rows={4}
            className="w-full p-2 border rounded-lg bg-background"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
} 