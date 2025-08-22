'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}
