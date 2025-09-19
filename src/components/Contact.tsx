// src/components/Contact.tsx
'use client';
import { motion } from 'framer-motion';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Mari Terhubung</h2>
        <p className="max-w-xl mx-auto text-secondary mb-8">
          Saya selalu terbuka untuk diskusi, kolaborasi, atau peluang baru. Jangan ragu untuk menghubungi saya.
        </p>
        <motion.a
          href="mailto:muhammadjovidifa@gmail.com" // Ganti dengan email Anda
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-lg hover:bg-accent-hover transition-colors"
        >
          Kirim Email
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;