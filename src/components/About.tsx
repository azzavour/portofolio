'use client';

import { motion } from 'framer-motion';
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
       <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Profil Saya</h2>
        <p className="text-lg text-gray-500 mt-2">Sebuah ringkasan singkat mengenai latar belakang profesional saya.</p>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
      >
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Mahasiswa Sistem Informasi Universitas Nasional (IPK 3.85/4.00) dengan pengalaman pengembangan aplikasi web dan pengelolaan organisasi. Menyelesaikan magang di PT. Antariksa Inspirasi Solusi dengan proyek perancangan aplikasi e-commerce berbasis Laravel dan MySQL. Terampil dalam perancangan basis data, pengembangan web full-stack, dan kolaborasi tim menggunakan Git/GitHub. Memiliki kemampuan analisis data dan komunikasi yang mendukung pengambilan keputusan berbasis teknologi.
        </p>
      </motion.div>
    </section>
  );
};

export default About;