"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Home, User, Code, Mail } from "lucide-react";

export function NavigationPill() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Code },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 20 }}
      className="fixed left-1/2 -translate-x-1/2 z-50"
    >
      <motion.nav
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
        animate={{
          backgroundColor: isExpanded ? "var(--nav-background)" : "var(--nav-background-collapsed)",
          width: isExpanded ? "320px" : "180px",
        }}
        className="relative backdrop-blur-lg rounded-full border border-primary/20 shadow-lg"
      >
        <ul className="flex items-center justify-between p-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <motion.li key={id} className="relative">
              <a
                href={`#${id}`}
                className={`relative flex items-center justify-center p-2 rounded-full transition-colors ${
                  activeSection === id ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setActiveSection(id)}
              >
                <Icon className="w-5 h-5" />
                <AnimatePresence>
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className="ml-2 overflow-hidden whitespace-nowrap"
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </motion.div>
  );
} 