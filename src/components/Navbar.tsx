'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#collection', label: 'Collection' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-md bg-white/70 shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 relative">
        {/* MOBILE LAYOUT */}
        <div className="flex lg:hidden items-center justify-between">
          {/* Left Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary z-50"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Center Logo */}
          <a
            href="#home"
            className="absolute left-1/2 -translate-x-1/2 font-display text-2xl font-bold text-primary"
          >
            Shoe<span className="text-accent">Plaza</span>
          </a>

          {/* Right Call */}
          <a
            href="tel:09545545417"
            className="bg-accent text-white p-2 rounded-full shadow-md"
          >
            <Phone size={18} />
          </a>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:flex items-center justify-between">
          <a
            href="#home"
            className="font-display text-3xl font-bold text-primary"
          >
            Shoe<span className="text-accent">Plaza</span>
          </a>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="tel:09545545417"
            className="btn-accent flex items-center gap-2 px-5 py-3"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden backdrop-blur-md bg-white/90 border-t"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
