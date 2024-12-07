"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, User, Code, Mail } from "lucide-react";

export function NavigationPill() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll);
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
      <motion.nav
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
        initial={false}
        animate={{
          backgroundColor: isExpanded 
            ? "var(--nav-background)" 
            : "var(--nav-background-collapsed)",
          width: isExpanded ? "320px" : "200px",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative backdrop-blur-md rounded-full border border-primary/20 shadow-lg shadow-black/5"
      >
        <ul className="flex items-center justify-between p-2 gap-1">
          {navItems.map(({ id, label, icon: Icon }) => (
            <motion.li key={id} className="flex-1">
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({
                    behavior: "smooth"
                  });
                  setActiveSection(id);
                }}
                className={`
                  relative flex items-center justify-center p-2 rounded-full 
                  transition-colors duration-200 group
                  ${activeSection === id 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }
                `}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <AnimatePresence mode="wait">
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ 
                        opacity: 1, 
                        width: "auto",
                        transition: { duration: 0.2, delay: 0.1 }
                      }}
                      exit={{ 
                        opacity: 0, 
                        width: 0,
                        transition: { duration: 0.2 }
                      }}
                      className="ml-2 whitespace-nowrap text-sm font-medium overflow-hidden"
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
    </div>
  );
} 