"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command,
  Home,
  User,
  Folder,
  Mail,
  Sun,
  Moon,
  Github,
  Twitter,
  Linkedin,
  Clock,
  Calendar,
  Cloud,
  Download,
  Coffee,
  Music,
  Settings,
  Play,
  Pause,
  ExternalLink,
  Heart,
} from "lucide-react";
import { useState, useEffect } from "react";

type Category = "navigation" | "social" | "tools" | "support" | "media";

const categories: Record<Category, string> = {
  navigation: "Navigation",
  social: "Social Links",
  tools: "Tools",
  support: "Support",
  media: "Media Controls",
};

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch weather data
  useEffect(() => {
    if (isOpen && !weather) {
      fetch("https://wttr.in/?format=j1")
        .then(res => res.json())
        .then(data => {
          setWeather({
            temp: data.current_condition[0].temp_C,
            condition: data.current_condition[0].weatherDesc[0].value,
            feelsLike: data.current_condition[0].FeelsLikeC,
            humidity: data.current_condition[0].humidity
          });
        })
        .catch(console.error);
    }
  }, [isOpen, weather]);

  const actions = [
    // Navigation
    { id: "home", label: "Go to Home", icon: Home, action: () => scrollToSection("home"), category: "navigation" },
    { id: "about", label: "Go to About", icon: User, action: () => scrollToSection("about"), category: "navigation" },
    { id: "projects", label: "View Projects", icon: Folder, action: () => scrollToSection("projects"), category: "navigation" },
    { id: "contact", label: "Contact Me", icon: Mail, action: () => scrollToSection("contact"), category: "navigation" },
    
    // Social
    { id: "github", label: "Visit Github", icon: Github, action: () => window.open("https://github.com/yourusername", "_blank"), category: "social" },
    { id: "twitter", label: "Follow on Twitter", icon: Twitter, action: () => window.open("https://twitter.com/yourusername", "_blank"), category: "social" },
    { id: "linkedin", label: "Connect on LinkedIn", icon: Linkedin, action: () => window.open("https://linkedin.com/in/yourusername", "_blank"), category: "social" },
    
    // Tools
    { id: "theme", label: "Toggle Theme", icon: ({ className }: { className?: string }) => 
      document.documentElement.classList.contains("dark") ? <Sun className={className} /> : <Moon className={className} />,
      action: () => document.documentElement.classList.toggle("dark"),
      category: "tools"
    },
    { id: "resume", label: "Download Resume", icon: Download, action: () => window.open("/path-to-resume.pdf", "_blank"), category: "tools" },
    { id: "settings", label: "Open Settings", icon: Settings, action: () => console.log("Settings clicked"), category: "tools" },
    
    // Support
    { id: "coffee", label: "Buy me a Coffee", icon: Coffee, action: () => window.open("https://buymeacoffee.com/yourusername", "_blank"), category: "support" },
    { id: "sponsor", label: "Become a Sponsor", icon: Heart, action: () => window.open("https://github.com/sponsors/yourusername", "_blank"), category: "support" },
    
    // Media
    { id: "music", label: isPlaying ? "Pause Music" : "Play Music", icon: isPlaying ? Pause : Play,
      action: () => setIsPlaying(!isPlaying), category: "media" },
  ];

  const filteredActions = query === ""
    ? actions
    : actions.filter(action =>
        action.label.toLowerCase().includes(query.toLowerCase())
      );

  const groupedActions = filteredActions.reduce((groups, action) => {
    const category = action.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(action);
    return groups;
  }, {} as Record<Category, typeof actions>);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 
                   transition-colors z-50 flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Command className="w-4 h-4" />
        <span className="text-sm">⌘K</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            />
            <div className="fixed inset-x-0 top-24 flex justify-center z-[100]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="w-full max-w-2xl bg-background/80 backdrop-blur-xl rounded-xl 
                           shadow-2xl border border-primary/20 overflow-hidden"
              >
                {/* Status Bar */}
                <div className="px-4 py-2 border-b border-primary/10 bg-primary/5
                              flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{time.toLocaleTimeString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{time.toLocaleDateString()}</span>
                    </div>
                  </div>
                  {weather && (
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Cloud className="w-4 h-4" />
                        <span>{weather.temp}°C</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <span>Feels: {weather.feelsLike}°C</span>
                        <span>•</span>
                        <span>{weather.condition}</span>
                        <span>•</span>
                        <span>{weather.humidity}% humidity</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Search Input */}
                <div className="p-4 border-b border-primary/20 bg-gradient-to-b from-primary/5 to-transparent">
                  <div className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search actions..."
                      className="w-full bg-transparent border-none outline-none placeholder:text-muted-foreground"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      autoFocus
                    />
                  </div>
                </div>

                {/* Actions List */}
                <div className="max-h-[60vh] overflow-y-auto">
                  {Object.entries(groupedActions).map(([category, actions]) => (
                    <div key={category} className="p-2">
                      <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground uppercase">
                        {categories[category as Category]}
                      </div>
                      <div className="space-y-1">
                        {actions.map((action) => (
                          <motion.button
                            key={action.id}
                            onClick={action.action}
                            className="w-full p-3 text-left rounded-lg 
                                     hover:bg-primary/10 transition-all
                                     flex items-center gap-3 group relative
                                     hover:pl-6"
                            whileHover={{ 
                              backgroundColor: "rgba(var(--primary), 0.1)",
                              boxShadow: "0 0 20px rgba(var(--primary), 0.2)"
                            }}
                          >
                            <action.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                            <span className="flex-1">{action.label}</span>
                            {action.category === "social" && (
                              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                            {/* Gradient line on hover */}
                            <motion.div
                              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/60 to-primary/20 rounded-full"
                              initial={{ scaleY: 0 }}
                              whileHover={{ scaleY: 1 }}
                            />
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Empty State */}
                {filteredActions.length === 0 && (
                  <div className="p-8 text-center text-muted-foreground">
                    <p>No actions found</p>
                  </div>
                )}

                {/* Footer */}
                <div className="p-2 border-t border-primary/20 text-xs text-muted-foreground text-center">
                  Press ESC to close
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}