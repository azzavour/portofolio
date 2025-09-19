// src/components/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface ProjectItem {
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

const projects: ProjectItem[] = [
  {
    title: "Aplikasi E-commerce 'Verse Beauty'",
    description: "Proyek magang untuk merancang dan mengimplementasikan aplikasi e-commerce lengkap dengan fitur autentikasi, katalog produk, keranjang belanja, checkout, dan dashboard admin.",
    techStack: ["Laravel", "MySQL", "Tailwind CSS"],
    link: "#" 
  },
  {
    title: "Coaching Clinic Visualisasi Pancasila",
    description: "Memimpin tim untuk menghasilkan 15 karya sinematografi mahasiswa yang diapresiasi oleh fakultas.",
    techStack: ["Manajemen Proyek", "Sinematografi"],
    link: "#"
  },
];

const projectVariants = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: { opacity: 1, rotateY: 0 }
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Proyek</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-lg p-6 group cursor-pointer hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors">{project.title}</h3>
            <p className="text-gray-600 my-4">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, i) => (
                <span key={i} className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-medium text-sm hover:bg-primary-200 transition-colors">{tech}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} className="mt-4 inline-block font-semibold text-secondary-500 hover:text-secondary-600 transition-colors">Lihat Detail &rarr;</a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;