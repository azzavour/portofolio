// src/components/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center container mx-auto px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Muhammad Jovi Syawal Difa
        </span>
      </motion.h1> {/* Tag motion.h1 ditutup dengan benar di sini */}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl md:text-3xl text-secondary mb-8"
      >
        Full-Stack Web Developer
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-2xl text-lg text-secondary mb-8"
      >
        Saya adalah mahasiswa Sistem Informasi yang passionate, dengan keahlian dalam Next.js, Laravel, dan teknologi modern lainnya untuk menciptakan aplikasi web yang powerful.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex items-center space-x-6"
      >
        <a href="https://github.com/azzavour" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors text-3xl">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-jovi-syawal-difa/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors text-3xl">
          <FaLinkedin />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;