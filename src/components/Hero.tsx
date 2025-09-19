// src/components/Hero.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-20 flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white"
      >
        <Image 
          src="/path/ke/foto-profil-anda.jpg" // Ganti dengan path foto profil Anda
          alt="Annisa Fitriana" 
          width={192} 
          height={192} 
          className="object-cover"
        />
      </motion.div>
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2"
      >
        Annisa Fitriana
      </motion.h1>
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-2xl text-secondary-500 font-medium"
      >
        Mahasiswa Sistem Informasi & Web Developer
      </motion.p>
    </section>
  );
};

export default Hero;