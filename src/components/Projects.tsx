// src/components/Projects.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "Aplikasi E-commerce 'Verse Beauty'",
    description: "Proyek magang untuk merancang dan mengimplementasikan aplikasi e-commerce lengkap dengan fitur autentikasi, katalog produk, keranjang belanja, checkout, dan dashboard admin.",
    techStack: ["Laravel", "MySQL", "Tailwind CSS", "Blade"],
    link: "#", // Ganti dengan link live demo
    github: "#", // Ganti dengan link GitHub
    image: "/project-1.png" // Ganti dengan path gambar Anda
  },
  {
    title: "Portofolio Digital Pribadi",
    description: "Membangun portofolio pribadi yang responsif dan interaktif dari nol menggunakan teknologi web modern untuk menampilkan proyek dan keahlian.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://portofolio-jovi.vercel.app",
    github: "#", // Ganti dengan link GitHub
    image: "/project-2.png" // Ganti dengan path gambar Anda
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Proyek Pilihan</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card border border-border rounded-lg overflow-hidden group"
            >
              <div className="relative h-60 w-full">
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-secondary hover:text-primary transition-colors">
                    <FiGithub className="mr-2" /> GitHub
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-secondary hover:text-primary transition-colors">
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;