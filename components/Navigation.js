'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

export default function Navigation() {
  const t = useTranslations('navigation');
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split('/')[1] || 'ro';
  const locales = ['ro', 'en', 'de', 'fr', 'es', 'ar', 'it'];
  const [isLangOpen, setLangOpen] = useState(false);

  const switchLanguage = (locale) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
  };

  const navItems = [
    { key: 'home', href: '#hero' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex-shrink-0 font-bold text-2xl construction-gradient bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            ConstructPro
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  className="text-construction-dark hover:text-construction-orange px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t(item.key)}
                </motion.a>
              ))}
              <div className="relative">
                <motion.button
                  onClick={() => setLangOpen(!isLangOpen)}
                  className="bg-construction-orange text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-construction-yellow transition-colors flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
                            switchLanguage(locale);
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-construction-dark hover:text-construction-orange"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-construction-dark hover:text-construction-orange block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!isLangOpen)}
                  className="bg-construction-orange text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-construction-yellow transition-colors flex justify-between items-center"
                >
                  <span>{currentLocale.toUpperCase()}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {isLangOpen && (
                  <div className="pl-4">
                    {locales.map((locale) => (
                      <a
                        key={locale}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          switchLanguage(locale);
                          setIsOpen(false);
                          setLangOpen(false);
                        }}
                        className="text-construction-dark hover:text-construction-orange block px-3 py-2 rounded-md text-base font-medium"
                      >
                        {locale.toUpperCase()}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
