// src/components/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface SkillSet {
  technical: string[];
  interpersonal: string[];
}

const skills: SkillSet = {
  technical: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "Git/GitHub", "Python (dasar)", "Analisis Data"],
  interpersonal: ["Kepemimpinan", "Kerja Sama Tim", "Pemikiran Kritis", "Pemecahan Masalah"]
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Keahlian</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-lg p-6 border-t-4 border-primary-500"
        >
          <h3 className="text-2xl font-semibold text-primary-600 mb-4">Teknis</h3>
          <ul className="flex flex-wrap gap-3">
            {skills.technical.map((skill, index) => (
              <motion.li
                key={index}
                variants={skillVariants}
                className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-medium text-sm hover:bg-primary-200 transition-colors"
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="bg-gradient-to-br from-white to-secondary-50 rounded-2xl shadow-lg p-6 border-t-4 border-secondary-500"
        >
          <h3 className="text-2xl font-semibold text-secondary-600 mb-4">Interpersonal</h3>
          <ul className="flex flex-wrap gap-3">
            {skills.interpersonal.map((skill, index) => (
              <motion.li
                key={index}
                variants={skillVariants}
                className="bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full font-medium text-sm hover:bg-secondary-200 transition-colors"
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;