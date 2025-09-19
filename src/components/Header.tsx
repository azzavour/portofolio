// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-primary hover:text-accent transition-colors">
          Jovi.dev
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#experience" className="text-secondary hover:text-primary transition-colors">Pengalaman</a>
          <a href="#projects" className="text-secondary hover:text-primary transition-colors">Proyek</a>
          <a href="#skills" className="text-secondary hover:text-primary transition-colors">Keahlian</a>
          <a href="#contact" className="px-4 py-2 border border-accent text-accent rounded-md hover:bg-accent hover:text-primary transition-colors">
            Kontak
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;