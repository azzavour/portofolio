// src/components/About.tsx
'use client';

import { motion } from 'framer-motion';
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Profil</h2>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-gradient-to-br from-white to-secondary-50 rounded-2xl shadow-lg border-t-4 border-secondary-500 p-8"
      >
        <p className="text-lg text-gray-700">
          Mahasiswa Sistem Informasi Universitas Nasional (IPK 3.85/4.00) dengan pengalaman pengembangan aplikasi web dan pengelolaan organisasi. Menyelesaikan magang di PT. Antariksa Inspirasi Solusi dengan proyek perancangan aplikasi e-commerce berbasis Laravel dan MySQL. Terampil dalam perancangan basis data, pengembangan web full-stack, dan kolaborasi tim menggunakan Git/GitHub. Memiliki kemampuan analisis data dan komunikasi yang mendukung pengambilan keputusan berbasis teknologi.
        </p>
      </motion.div>
    </section>
  );
};

export default About;