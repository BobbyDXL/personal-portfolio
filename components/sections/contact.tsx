"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Send, 
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";

export function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "Github" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 relative"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to new opportunities and collaborations. 
              Feel free to reach out if you want to work together!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">david.chen@example.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <motion.div whileHover={{ y: -2 }} className="group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-primary/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </motion.div>
                <motion.div whileHover={{ y: -2 }} className="group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-primary/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </motion.div>
                <motion.div whileHover={{ y: -2 }} className="group">
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-primary/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                  />
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 