"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Database, 
  Laptop, 
  Brain,
  Rocket,
  CheckCircle2
} from "lucide-react";

export function About() {
  const skills = [
    { name: "Frontend Development", icon: Code2, color: "from-blue-500 to-cyan-500" },
    { name: "UI/UX Design", icon: Palette, color: "from-purple-500 to-pink-500" },
    { name: "Data Analysis", icon: Database, color: "from-green-500 to-emerald-500" },
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", 
    "Python", "TailwindCSS", "PostgreSQL", "AWS"
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section id="about" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating beautiful, functional, and user-friendly digital experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="prose dark:prose-invert">
                <p className="text-lg leading-relaxed">
                  Hi! I'm David, a full-stack developer with a passion for creating 
                  innovative digital solutions. With 5+ years of experience in web 
                  development and design, I specialize in building responsive, 
                  user-friendly applications that solve real-world problems.
                </p>
                <p className="text-lg leading-relaxed">
                  My journey in tech started with a Computer Science degree, and 
                  I've since worked with startups and established companies, 
                  helping them achieve their digital goals through clean code 
                  and intuitive design.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-full bg-primary/10 text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6"
            >
              {skills.map(({ name, icon: Icon, color }, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl border border-primary/20 bg-white/5 backdrop-blur-sm"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${color} p-3 mb-4`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{name}</h3>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 