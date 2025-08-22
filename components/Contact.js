'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const t = useTranslations('contact');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-construction-dark text-white relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B35' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('title')}
          </h2>
          <div className="w-24 h-1 construction-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-construction-yellow">
                Informații de Contact
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: '📍',
                    label: 'Adresă',
                    value: t('address'),
                    color: 'text-construction-orange'
                  },
                  {
                    icon: '📞',
                    label: 'Telefon',
                    value: t('phone'),
                    color: 'text-construction-yellow'
                  },
                  {
                    icon: '✉️',
                    label: 'Email',
                    value: t('email'),
                    color: 'text-construction-orange'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors"
                    whileHover={{ x: 10, scale: 1.02 }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  >
                    <motion.div
                      className="text-2xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <div className="text-gray-300 text-sm">{item.label}</div>
                      <div className={`font-semibold ${item.color}`}>{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <motion.div
              className="bg-construction-orange/20 p-6 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-bold mb-4 text-construction-yellow">
                Program de Lucru
              </h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Luni - Vineri:</span>
                  <span className="text-construction-orange font-semibold">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sâmbătă:</span>
                  <span className="text-construction-orange font-semibold">09:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Duminică:</span>
                  <span className="text-gray-400">Închis</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder={t('form.name')}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-construction-orange focus:bg-white/20 transition-all backdrop-blur-sm"
                    required
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder={t('form.email')}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-construction-orange focus:bg-white/20 transition-all backdrop-blur-sm"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <textarea
                  name="message"
                  placeholder={t('form.message')}
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-construction-orange focus:bg-white/20 transition-all backdrop-blur-sm resize-none"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full construction-gradient py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('form.send')}
              </motion.button>
            </form>

            {/* Social Links */}
            <motion.div
              className="mt-8 flex justify-center space-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {['facebook', 'instagram', 'linkedin'].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-construction-orange transition-colors backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  <span className="text-xl">
                    {social === 'facebook' && '📘'}
                    {social === 'instagram' && '📷'}
                    {social === 'linkedin' && '💼'}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/20 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p>&copy; 2024 ConstructPro. Toate drepturile rezervate.</p>
        </motion.div>
      </div>
    </section>
  );
}
