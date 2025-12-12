'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Download, Sparkles } from 'lucide-react';
import { useTheme } from '@/src/lib/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'py-2'
            : 'py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className={`
            relative flex justify-between items-center
            px-6 py-3 rounded-2xl
            transition-all duration-500
            ${scrolled
              ? 'bg-bg-primary/80 backdrop-blur-xl border border-border-subtle shadow-2xl shadow-black/20'
              : 'bg-transparent'
            }
          `}>
            {/* Logo */}
            <motion.a
              href="#hero"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-shadow">
                    <span className="text-white font-bold text-lg">V</span>
                  </div>
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-30 blur transition-opacity" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-bold text-text-primary">Vicky Kumar</p>
                  <p className="text-xs text-text-secondary">Engineer</p>
                </div>
              </div>
            </motion.a>

            {/* Desktop Navigation - Pill Style */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 p-1.5 rounded-full bg-bg-secondary/50 backdrop-blur-sm border border-border-subtle">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      ${activeSection === link.href.replace('#', '')
                        ? 'text-white'
                        : 'text-text-secondary hover:text-text-primary'
                      }
                    `}
                  >
                    {activeSection === link.href.replace('#', '') && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              {/* Resume Download - Premium Style */}
              <motion.a
                href="/Vicky_Kumar_Resume.pdf"
                download="Vicky_Kumar_Resume.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all border border-white/10"
                title="Download Resume"
              >
                <Download size={16} />
                <span>Resume</span>
                <Sparkles size={14} className="opacity-70" />
              </motion.a>

              {/* Theme Toggle - Pill Style */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative p-2.5 rounded-xl bg-bg-secondary/50 backdrop-blur-sm text-text-primary hover:text-blue-400 transition-all border border-border-subtle hover:border-blue-500/30 group"
                aria-label="Toggle theme"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  initial={false}
                  animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={toggleMenu}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="lg:hidden p-2.5 rounded-xl bg-bg-secondary/50 backdrop-blur-sm text-text-primary border border-border-subtle"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-bg-primary/95 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative h-full flex flex-col items-center justify-center gap-6 p-8"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  className={`
                    text-3xl font-bold transition-colors
                    ${activeSection === link.href.replace('#', '')
                      ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent'
                      : 'text-text-secondary hover:text-text-primary'
                    }
                  `}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="/Vicky_Kumar_Resume.pdf"
                download="Vicky_Kumar_Resume.pdf"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="mt-8 flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-bold text-lg shadow-2xl shadow-purple-500/30"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
