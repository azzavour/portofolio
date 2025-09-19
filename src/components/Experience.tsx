'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  // ... (data pengalaman Anda tetap sama)
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Pengalaman Profesional</h2>
          <p className="text-lg text-gray-500 mt-2">Perjalanan karir dan kontribusi saya di berbagai organisasi.</p>
        </div>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 w-0.5 h-full bg-primary-200 transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 flex justify-between items-center w-full"
            >
              {/* Left or Right alignment */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}></div>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                <div className={`p-6 bg-gray-50 rounded-2xl shadow-lg border-l-4 ${index % 2 === 0 ? 'border-primary-500' : 'border-secondary-500'} hover:shadow-xl transition-shadow duration-300`}>
                  <h3 className="text-xl font-semibold text-primary-600">{exp.title}</h3>
                  <p className="text-gray-700 font-medium">{exp.company}</p>
                  <p className="text-gray-500 text-sm italic mb-4">{exp.duration}</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 text-left">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
               {/* Timeline Dot */}
              <div className="absolute left-1/2 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-1/2 border-4 border-white"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;