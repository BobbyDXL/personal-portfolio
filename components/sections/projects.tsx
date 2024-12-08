"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "EcoTrack Analytics",
      description: "A sustainable living dashboard that helps users track their carbon footprint through daily activities and provides personalized recommendations.",
      image: "/projects/ecotrack.jpg",
      tech: ["React", "D3.js", "Node.js", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "HealthHub Portal",
      description: "A healthcare management system that connects patients with healthcare providers, featuring real-time consultations and medical record tracking.",
      image: "/projects/healthhub.jpg",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-blue-500 to-violet-500"
    },
    {
      title: "SmartCity Dashboard",
      description: "An urban analytics platform that visualizes city data to help municipal authorities make data-driven decisions for better city management.",
      image: "/projects/smartcity.jpg",
      tech: ["Vue.js", "Python", "TensorFlow", "AWS"],
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-orange-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </motion.div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative rounded-2xl overflow-hidden border border-primary/20 bg-white/5 backdrop-blur-sm"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-primary/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-video rounded-xl overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`} />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
              whileHover={{ x: 5 }}
            >
              View more projects on GitHub
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 