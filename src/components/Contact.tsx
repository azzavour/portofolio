// src/components/Contact.tsx
'use client';

import { motion } from 'framer-motion';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Hubungi Saya</h2>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-lg p-8 inline-block border border-primary-100"
      >
        <p className="text-lg text-gray-700 mb-6">
          Tertarik untuk bekerja sama? Mari berdiskusi!
        </p>
        <div className="flex items-center justify-center space-x-6">
          <a href="mailto:annisafitriana38@gmail.com" className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-2xl transition-all duration-300 hover:bg-primary-500 hover:text-white transform hover:-translate-y-1">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://linkedin.com/in/annisa-fitriana" className="w-12 h-12 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center text-2xl transition-all duration-300 hover:bg-accent-500 hover:text-white transform hover:-translate-y-1">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/annisa-fitriana" className="w-12 h-12 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-2xl transition-all duration-300 hover:bg-gray-700 hover:text-white transform hover:-translate-y-1">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;