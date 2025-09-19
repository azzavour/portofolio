// src/components/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="text-2xl font-bold bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">Annisa Fitriana</div>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#about" className="hover:text-secondary-500 font-medium transition-colors">Tentang</Link></li>
            <li><Link href="#experience" className="hover:text-secondary-500 font-medium transition-colors">Pengalaman</Link></li>
            <li><Link href="#projects" className="hover:text-secondary-500 font-medium transition-colors">Proyek</Link></li>
            <li><Link href="#contact" className="hover:text-secondary-500 font-medium transition-colors">Kontak</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;