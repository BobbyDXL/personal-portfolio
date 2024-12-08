"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "Github" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ];

  const roles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4 mx-auto relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
            className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-primary/30"
            style={{ zIndex: 20 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40" />
            <img
              src="/profile.jpg"
              alt="David Chen"
              className="object-cover w-full h-full"
            />
            <motion.div
              className="absolute inset-0 border-2 border-primary/50 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                David Chen
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 relative z-20"
          >
            <TypewriterEffect words={roles} className="text-xl md:text-2xl text-muted-foreground" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto relative z-20"
          >
            Crafting beautiful, intuitive digital experiences with clean code and innovative solutions.
            Passionate about creating impactful web applications that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 relative z-20"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-6 py-3 rounded-full bg-primary text-white flex items-center gap-2 hover:bg-primary/90 transition-colors"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-6 py-3 rounded-full border border-primary/20 hover:bg-primary/10 transition-colors flex items-center gap-2"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-4 relative z-20"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Icon className="w-5 h-5 text-primary" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      </div>
    </section>
  );
}