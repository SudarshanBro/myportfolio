'use client';

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Research } from '@/components/Research';
import { Blogs } from '@/components/Blogs';
import { Gallery } from '@/components/Gallery';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Blogs />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}