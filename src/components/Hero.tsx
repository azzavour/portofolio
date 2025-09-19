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
          src="/nama-file-anda.jpg" // Ganti path ini. Contoh: "/annisa-profil.jpg"
          alt="Annisa Fitriana" 
          width={192} 
          height={192} 
          className="object-cover"
        />
      </motion.div>
      {/* ... kode lainnya ... */}
    </section>
  );
};
export default Hero;