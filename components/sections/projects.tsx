"use client";

import { motion } from "framer-motion";
import { Shimmer } from "../ui/shimmer";

export function Projects() {
  const projects = [
    {
      title: "EcoTrack Analytics",
      description: "A sustainable living dashboard that helps users track their carbon footprint through daily activities and provides personalized recommendations.",
      tech: ["React", "D3.js", "Node.js", "MongoDB"],
      color: "from-teal-500/20 to-emerald-500/20",
      image: "/projects/ecotrack.jpg"
    },
    {
      title: "HealthHub Portal",
      description: "A healthcare management system that connects patients with healthcare providers, featuring real-time consultations and medical record tracking.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      color: "from-teal-500/20 to-cyan-500/20",
      image: "/projects/healthhub.jpg"
    },
    {
      title: "SmartCity Dashboard",
      description: "An urban analytics platform that visualizes city data to help municipal authorities make data-driven decisions for better city management.",
      tech: ["Vue.js", "Python", "TensorFlow", "AWS"],
      color: "from-teal-500/20 to-blue-500/20",
      image: "/projects/smartcity.jpg"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-3xl font-bold mb-8 relative inline-block"
      >
        Projects
        <motion.div
          className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3 }}
        />
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -5 }}
            className={`relative p-6 rounded-xl overflow-hidden backdrop-blur-sm bg-gradient-to-br ${project.color}`}
          >
            <div className="absolute inset-0 bg-grid-white/[0.02]" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs px-3 py-1.5 bg-white/10 rounded-full backdrop-blur-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            <Shimmer className="group-hover:translate-x-0" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 