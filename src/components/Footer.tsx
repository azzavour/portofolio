// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t border-border text-center">
      <div className="container mx-auto px-6">
        <p className="text-secondary text-sm">
          &copy; {new Date().getFullYear()} Muhammad Jovi Syawal Difa. Dibuat dengan Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;