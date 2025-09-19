// src/components/Skills.tsx
'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { FaLaravel, FaPhp, FaDatabase, FaCss3Alt, FaJs, FaGitAlt, FaPython, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Laravel', icon: <FaLaravel /> },
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'MySQL', icon: <FaDatabase /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'Git/GitHub', icon: <FaGitAlt /> },
  { name: 'Python', icon: <FaPython /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Teknologi & Keahlian</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}
              className="flex flex-col items-center justify-center p-4 bg-card border border-border rounded-lg group"
            >
              <div className="text-5xl text-secondary group-hover:text-accent transition-colors duration-300">
                {skill.icon}
              </div>
              <p className="mt-2 text-sm text-center font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;