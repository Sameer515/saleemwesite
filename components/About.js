'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const t = useTranslations('about');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { number: '15+', label: t('experience') },
    { number: '500+', label: t('projects') },
    { number: '100%', label: t('clients') }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-construction-dark mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-construction-gray max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Construction team"
                className="rounded-lg shadow-2xl animate-scale-in"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-construction-orange text-white p-6 rounded-lg shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Ani Experiență</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-bold text-construction-orange mb-2">
                    {stat.number}
                  </div>
                  <div className="text-construction-gray text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-construction-dark mb-4">
                De ce să ne alegi?
              </h3>
              <ul className="space-y-3 text-construction-gray">
                <motion.li 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-construction-orange rounded-full mr-3"></span>
                  Materiale de cea mai bună calitate
                </motion.li>
                <motion.li 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-construction-orange rounded-full mr-3"></span>
                  Echipă de profesioniști certificați
                </motion.li>
                <motion.li 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-construction-orange rounded-full mr-3"></span>
                  Respectarea termenelor stabilite
                </motion.li>
                <motion.li 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-construction-orange rounded-full mr-3"></span>
                  Garanție extinsă pentru toate lucrările
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
