'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
  const t = useTranslations('services');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      title: t('residential.title'),
      description: t('residential.description'),
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      icon: '🏠'
    },
    {
      title: t('commercial.title'),
      description: t('commercial.description'),
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      icon: '🏢'
    },
    {
      title: t('renovation.title'),
      description: t('renovation.description'),
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      icon: '🔨'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
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
          <div className="w-24 h-1 construction-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <motion.div
                  className="absolute top-4 left-4 text-4xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {service.icon}
                </motion.div>
              </div>

              <div className="p-6 bg-white">
                <motion.h3 
                  className="text-xl font-bold text-construction-dark mb-3 group-hover:text-construction-orange transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-construction-gray leading-relaxed">
                  {service.description}
                </p>
                
                <motion.button
                  className="mt-4 text-construction-orange font-semibold hover:text-construction-yellow transition-colors flex items-center"
                  whileHover={{ x: 5 }}
                >
                  Află mai multe
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>

              {/* Animated overlay */}
              <motion.div
                className="absolute inset-0 bg-construction-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional animated elements */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="inline-flex items-center space-x-4 bg-gray-50 px-8 py-4 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-construction-orange border-t-transparent rounded-full"
            />
            <span className="text-construction-dark font-semibold">
              Lucrăm 24/7 pentru proiectele tale
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
