'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Services from '../../components/Services';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';

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
