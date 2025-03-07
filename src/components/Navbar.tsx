'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { href: '/#home', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('/#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Close mobile menu if open
      setIsOpen(false);
      
      // Smooth scroll to section
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Update URL without reload
      window.history.pushState({}, '', href);
      
      // Update active section
      setActiveSection(targetId);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/50 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <nav className="container-custom mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/#home" 
                  onClick={(e) => handleNavClick(e, '/#home')}
                  className="text-xl font-semibold">
              Ashwin
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`relative py-2 transition-colors duration-300 ${
                  activeSection === href.replace('/#', '') 
                    ? 'text-white' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {label}
                {activeSection === href.replace('/#', '') && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <span className="sr-only">Open menu</span>
            <div className="w-6 h-6 flex items-center justify-center relative">
              <span
                className={`transform transition-all duration-300 absolute h-0.5 w-6 bg-white rounded-lg ${
                  isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}
              />
              <span
                className={`transform transition-all duration-300 absolute h-0.5 w-6 bg-white rounded-lg ${
                  isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`block py-2 transition-colors duration-300 ${
                  activeSection === href.replace('/#', '') 
                    ? 'text-white' 
                    : 'text-white/70'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar; 