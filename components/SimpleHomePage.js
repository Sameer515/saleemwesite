'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SimpleHomePage({ locale = 'ro' }) {
  const [currentLocale, setCurrentLocale] = useState(locale);
  const [isLangOpen, setLangOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const locales = ['ro', 'en', 'de', 'fr', 'es', 'ar', 'it'];

  const translations = {
    ro: {
      title: "Construim Visurile Tale",
      subtitle: "Companie de construcții cu experiență de peste 15 ani în realizarea proiectelor rezidențiale și comerciale",
      cta: "Solicită Ofertă",
      phone: "Sună Acum",
      about: "Despre Noi",
      services: "Servicii",
      projects: "Proiecte",
      contact: "Contact",
      aboutTitle: "Despre Compania Noastră",
      aboutDesc: "Suntem o echipă dedicată de profesioniști în construcții, cu experiență vastă în realizarea proiectelor de calitate superioară.",
      servicesTitle: "Serviciile Noastre",
      residential: "Construcții Rezidențiale",
      commercial: "Construcții Comerciale",
      renovation: "Renovări și Modernizări",
      contactTitle: "Contactează-ne",
      address: "Str. Constructorilor nr. 123, București",
      phoneNum: "+40 721 123 456",
      email: "contact@constructii.ro"
    },
    en: {
      title: "Building Your Dreams",
      subtitle: "Construction company with over 15 years of experience in residential and commercial projects",
      cta: "Get Quote",
      phone: "Call Now",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      aboutTitle: "About Our Company",
      aboutDesc: "We are a dedicated team of construction professionals with extensive experience in delivering high-quality projects.",
      servicesTitle: "Our Services",
      residential: "Residential Construction",
      commercial: "Commercial Construction",
      renovation: "Renovations & Modernizations",
      contactTitle: "Contact Us",
      address: "123 Builders Street, Bucharest",
      phoneNum: "+40 721 123 456",
      email: "contact@construction.ro"
    },
    de: {
      title: "Ihre Träume bauen",
      subtitle: "Bauunternehmen mit über 15 Jahren Erfahrung in Wohn- und Gewerbeprojekten",
      cta: "Angebot erhalten",
      phone: "Jetzt anrufen",
      about: "Über uns",
      services: "Dienstleistungen",
      projects: "Projekte",
      contact: "Kontakt",
      aboutTitle: "Über unser Unternehmen",
      aboutDesc: "Wir sind ein engagiertes Team von Bauprofis mit umfangreicher Erfahrung in der Umsetzung hochwertiger Projekte.",
      servicesTitle: "Unsere Dienstleistungen",
      residential: "Wohnungsbau",
      commercial: "Gewerbebau",
      renovation: "Renovierungen & Modernisierungen",
      contactTitle: "Kontaktieren Sie uns",
      address: "Baumeisterstraße 123, Bukarest",
      phoneNum: "+40 721 123 456",
      email: "contact@construction.ro"
    },
    fr: {
      title: "Construire vos rêves",
      subtitle: "Entreprise de construction avec plus de 15 ans d'expérience dans les projets résidentiels et commerciaux",
      cta: "Obtenir un devis",
      phone: "Appelez maintenant",
      about: "À propos",
      services: "Services",
      projects: "Projets",
      contact: "Contact",
      aboutTitle: "À propos de notre entreprise",
      aboutDesc: "Nous sommes une équipe dédiée de professionnels de la construction avec une vaste expérience dans la réalisation de projets de haute qualité.",
      servicesTitle: "Nos services",
      residential: "Construction résidentielle",
      commercial: "Construction commerciale",
      renovation: "Rénovations et modernisations",
      contactTitle: "Contactez-nous",
      address: "123 Rue des Constructeurs, Bucarest",
      phoneNum: "+40 721 123 456",
      email: "contact@construction.ro"
    },
    es: {
      title: "Construyendo tus sueños",
      subtitle: "Empresa de construcción con más de 15 años de experiencia en proyectos residenciales y comerciales",
      cta: "Obtener cotización",
      phone: "Llamar ahora",
      about: "Acerca de",
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto",
      aboutTitle: "Acerca de nuestra empresa",
      aboutDesc: "Somos un equipo dedicado de profesionales de la construcción con amplia experiencia en la entrega de proyectos de alta calidad.",
      servicesTitle: "Nuestros servicios",
      residential: "Construcción residencial",
      commercial: "Construcción comercial",
      renovation: "Renovaciones y modernizaciones",
      contactTitle: "Contáctanos",
      address: "Calle de los Constructores 123, Bucarest",
      phoneNum: "+40 721 123 456",
      email: "contact@construction.ro"
    },
    ar: {
      title: "نبني أحلامك",
      subtitle: "شركة مقاولات بخبرة تزيد عن 15 عامًا في المشاريع السكنية والتجارية",
      cta: "احصل على عرض سعر",
      phone: "اتصل الآن",
      about: "من نحن",
      services: "خدماتنا",
      projects: "مشاريعنا",
      contact: "اتصل بنا",
      aboutTitle: "عن شركتنا",
      aboutDesc: "نحن فريق متخصص من محترفي البناء لدينا خبرة واسعة في تقديم مشاريع عالية الجودة.",
      servicesTitle: "خدماتنا",
      residential: "بناء سكني",
      commercial: "بناء تجاري",
      renovation: "تجديدات وتحديثات",
      contactTitle: "اتصل بنا",
      address: "شارع البناة 123، بوخارست",
      phoneNum: "+40 721 123 456",
      email: "contact@construction.ro"
    },
    it: {
      title: "Costruendo i tuoi sogni",
      subtitle: "Impresa di costruzioni con oltre 15 anni di esperienza in progetti residenziali e commerciali",
      cta: "Richiedi preventivo",
      phone: "Chiama ora",
      about: "Chi siamo",
      services: "Servizi",
      projects: "Progetti",
      contact: "Contatti",
      aboutTitle: "La nostra azienda",
      aboutDesc: "Siamo un team dedicato di professionisti dell'edilizia con una vasta esperienza nella realizzazione di progetti di alta qualità.",
      servicesTitle: "I nostri servizi",
      residential: "Costruzioni residenziali",
      commercial: "Costruzioni commerciali",
      renovation: "Ristrutturazioni e ammodernamenti",
      contactTitle: "Contattaci",
      address: "Via dei Costruttori 123, Bucarest",
      phoneNum: "+40 721 123 456",
      email: "contact@construction.ro"
    }
  };

  const t = translations[currentLocale] || translations['ro'];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex-shrink-0 font-bold text-xl sm:text-2xl construction-gradient bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              ConstructPro
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['about', 'services', 'projects', 'contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="text-construction-dark hover:text-construction-orange px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t[item]}
                  </motion.a>
                ))}
                <div className="relative">
                  <motion.button
                    onClick={() => setLangOpen(!isLangOpen)}
                    className="bg-construction-orange text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-construction-yellow transition-colors flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    {currentLocale.toUpperCase()}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </motion.button>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg z-20"
                    >
                      <div className="py-1">
                        {locales.map((locale) => (
                          <a
                            key={locale}
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentLocale(locale);
                              setLangOpen(false);
                            }}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {locale.toUpperCase()}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Language Selector */}
              <div className="relative">
                <motion.button
                  onClick={() => setLangOpen(!isLangOpen)}
                  className="bg-construction-orange text-white px-2 py-1 rounded text-xs font-medium hover:bg-construction-yellow transition-colors flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  {currentLocale.toUpperCase()}
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </motion.button>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 w-20 bg-white rounded-md shadow-lg z-20"
                  >
                    <div className="py-1">
                      {locales.map((locale) => (
                        <a
                          key={locale}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentLocale(locale);
                            setLangOpen(false);
                          }}
                          className="block px-3 py-2 text-xs text-gray-700 hover:bg-gray-100"
                        >
                          {locale.toUpperCase()}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
              
              {/* Hamburger Menu Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="text-construction-dark hover:text-construction-orange p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['about', 'services', 'projects', 'contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="text-construction-dark hover:text-construction-orange block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    whileHover={{ x: 10 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t[item]}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 px-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {t.title}
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t.subtitle}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="construction-gradient px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.cta}
              </motion.button>
              
              <motion.button
                className="border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-construction-dark transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.phone}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-construction-dark mb-4 sm:mb-6 px-4">
              {t.aboutTitle}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-construction-gray max-w-3xl mx-auto leading-relaxed px-4">
              {t.aboutDesc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="px-4 lg:px-0"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Construction team"
                className="rounded-lg shadow-2xl w-full"
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 px-4 lg:px-0"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { number: '15+', label: currentLocale === 'ro' ? 'Ani Experiență' : 'Years Experience' },
                  { number: '500+', label: currentLocale === 'ro' ? 'Proiecte' : 'Projects' },
                  { number: '100%', label: currentLocale === 'ro' ? 'Clienți Mulțumiți' : 'Happy Clients' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-construction-orange mb-2">
                      {stat.number}
                    </div>
                    <div className="text-construction-gray text-xs sm:text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-construction-dark mb-4 sm:mb-6 px-4">
              {t.servicesTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {[
              {
                title: t.residential,
                image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                icon: '🏠'
              },
              {
                title: t.commercial,
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                icon: '🏢'
              },
              {
                title: t.renovation,
                image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                icon: '🔨'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
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

                <div className="p-4 sm:p-6 bg-white">
                  <h3 className="text-lg sm:text-xl font-bold text-construction-dark mb-3">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-construction-dark mb-4 sm:mb-6 px-4">
              {currentLocale === 'ro' ? 'Proiectele Noastre' : 'Our Projects'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {[
              'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
              'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
              'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
              'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
              'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
              'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
            ].map((image, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
                  <motion.img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-construction-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
              {t.contactTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              {[
                { icon: '📍', label: currentLocale === 'ro' ? 'Adresă' : 'Address', value: t.address },
                { icon: '📞', label: currentLocale === 'ro' ? 'Telefon' : 'Phone', value: t.phoneNum },
                { icon: '✉️', label: 'Email', value: t.email }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="text-xl sm:text-2xl">{item.icon}</div>
                  <div>
                    <div className="text-gray-300 text-xs sm:text-sm">{item.label}</div>
                    <div className="font-semibold text-construction-orange text-sm sm:text-base">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <input
                    type="text"
                    placeholder={currentLocale === 'ro' ? 'Nume' : 'Name'}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-construction-orange text-sm sm:text-base"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-construction-orange text-sm sm:text-base"
                  />
                </div>
                <textarea
                  placeholder={currentLocale === 'ro' ? 'Mesaj' : 'Message'}
                  rows="5"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-construction-orange resize-none text-sm sm:text-base"
                ></textarea>
                <motion.button
                  type="submit"
                  className="w-full construction-gradient py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {currentLocale === 'ro' ? 'Trimite Mesajul' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 pt-8 border-t border-white/20 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p>&copy; 2024 ConstructPro. {currentLocale === 'ro' ? 'Toate drepturile rezervate.' : 'All rights reserved.'}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
