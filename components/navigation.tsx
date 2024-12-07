"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

export function Navigation() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    return scrollY.onChange((latest) => {
      const previous = scrollY.getPrevious();
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    });
  }, [scrollY]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/10"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold"
        >
          Logo
        </motion.span>
        <ul className="flex gap-8">
          {["About", "Projects", "Contact"].map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
} 