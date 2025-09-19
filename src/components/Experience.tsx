// src/components/Experience.tsx
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
  {
    title: "Intern, Divisi IT Development",
    company: "PT. Antariksa Inspirasi Solusi",
    duration: "Mei - Agustus 2025",
    description: [
      "Merancang dan mengimplementasikan prototipe aplikasi e-commerce 'Verse Beauty' menggunakan Laravel dan MySQL, mencakup modul autentikasi, katalog produk, keranjang belanja, checkout, dan dashboard admin.",
      "Mendesain arsitektur Model-View-Controller (MVC) serta membuat Entity-Relationship Diagram (ERD) dan skema basis data untuk tujuh tabel inti.",
      "Mengembangkan antarmuka dengan Tailwind CSS, Blade, dan JavaScript, memastikan tampilan responsif dan ramah pengguna."
    ]
  },
  {
    title: "Sekretaris",
    company: "Mentoring Community Digital Innovation (CDI), Universitas Nasional",
    duration: "Maret 2024 - Sekarang",
    description: [
      "Mengelola administrasi dan dokumentasi organisasi, memastikan kerapihan arsip digital.",
      "Membimbing anggota baru dalam produksi konten digital edukatif hingga karya terbaik lolos kompetisi internal dan sedang berkompetisi di tingkat nasional."
    ]
  }
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Pengalaman</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`bg-white rounded-2xl shadow-lg p-6 border-l-4 ${index % 2 === 0 ? 'border-primary-500' : 'border-secondary-500'} hover:shadow-xl transition-all duration-300`}
          >
            <h3 className="text-xl font-semibold text-primary-600">{exp.title}</h3>
            <p className="text-gray-700 font-medium">{exp.company}</p>
            <p className="text-gray-500 text-sm italic mb-4">{exp.duration}</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;