// src/app/page.tsx
'use client'; 
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer'; // Import Footer

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Jovi Syawal Difa | Portfolio</title>
        <meta name="description" content="Portfolio digital seorang web developer dengan keahlian Next.js dan Laravel." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="pt-20">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}