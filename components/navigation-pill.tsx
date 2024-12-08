"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, User, Code, Mail, ChevronRight } from "lucide-react";

export function NavigationPill() {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const sections = document.querySelectorAll("section[id]");
        const scrollPosition = window.scrollY + 100;

        sections.forEach((section) => {
          if (section instanceof HTMLElement) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.id;

            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(id);
            }
          }
        });
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Code },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        className="p-[2px] rounded-full bg-gradient-to-r from-primary/50 via-primary/25 to-primary/50"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <nav className="backdrop-blur-md rounded-full bg-white/80 dark:bg-black/80 p-1.5">
          <ul className="flex items-center gap-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <motion.li
                key={id}
                onHoverStart={() => setHoveredItem(id)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative"
              >
                <motion.a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    setActiveSection(id);
                  }}
                  className={`
                    relative flex items-center rounded-full px-4 py-2
                    transition-colors duration-200 group
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${
                      activeSection === id 
                        ? "text-primary" 
                        : "text-muted-foreground group-hover:text-primary"
                    }`} />
                    <span className={`text-sm font-medium ${
                      activeSection === id 
                        ? "text-primary" 
                        : "text-muted-foreground group-hover:text-primary"
                    }`}>
                      {label}
                    </span>
                  </div>
                  {hoveredItem === id && (
                    <motion.div
                      layoutId="navBackground"
                      className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    />
                  )}
                  {activeSection === id && (
                    <motion.div
                      layoutId="activeBackground"
                      className="absolute inset-0 bg-primary/15 rounded-full -z-10"
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </motion.a>
              </motion.li>
            ))}
          </ul>
          <motion.div 
            className="absolute inset-0 origin-left rounded-full -z-10 bg-primary/10"
            style={{ scaleX: scrollProgress / 100 }}
          />
        </nav>
      </motion.div>
    </div>
  );
} 