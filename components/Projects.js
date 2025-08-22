'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'Vila Modernă Bucuresti',
      category: 'Rezidențial',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Vilă cu 4 camere, design modern și tehnologii smart home'
    },
    {
      title: 'Complex Comercial Central',
      category: 'Comercial',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Centru comercial cu 50 de magazine și spații de birouri'
    },
    {
      title: 'Renovare Apartament Lux',
      category: 'Renovare',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Transformare completă apartament în stil contemporan'
    },
    {
      title: 'Casă Ecologică',
      category: 'Rezidențial',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Construcție sustenabilă cu materiale eco-friendly'
    },
    {
      title: 'Clădire Birouri',
      category: 'Comercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Clădire de birouri cu 10 etaje și facilități moderne'
    },
    {
      title: 'Restaurant Boutique',
      category: 'Renovare',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Renovare completă restaurant cu design industrial'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-construction-dark mb-6">
            Proiectele Noastre
          </h2>
          <p className="text-xl text-construction-gray max-w-3xl mx-auto">
            Descoperă câteva dintre realizările noastre care demonstrează calitatea și atenția la detalii
          </p>
        </motion.div>

        {/* Project Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setActiveProject(index)}
            >
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Animated overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.8 }}
                />

                {/* Category badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-construction-orange text-white px-3 py-1 rounded-full text-sm font-semibold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {project.category}
                </motion.div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.h3 
                    className="text-xl font-bold mb-2 group-hover:text-construction-yellow transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-200 text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    {project.description}
                  </motion.p>
                </div>

                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 left-0 w-0 h-0 border-l-[50px] border-l-construction-orange border-b-[50px] border-b-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated statistics */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: '500+', label: 'Proiecte Finalizate', icon: '🏗️' },
            { number: '15+', label: 'Ani Experiență', icon: '⏰' },
            { number: '100%', label: 'Clienți Mulțumiți', icon: '😊' },
            { number: '24/7', label: 'Suport Tehnic', icon: '🔧' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5, scale: 1.05 }}
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              <motion.div 
                className="text-3xl mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-2xl font-bold text-construction-orange mb-1">
                {stat.number}
              </div>
              <div className="text-construction-gray text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
