import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tambahkan konfigurasi Tailwind CSS di sini
  experimental: {
    // next.js v15 dan tailwind v4 memerlukan konfigurasi berikut
    // untuk mengaktifkan kompilasi JIT (Just-In-Time)
    // yang lebih cepat dan efisien.
    urlImports: ['https://cdn.tailwindcss.com'],
  },
};

export default nextConfig;