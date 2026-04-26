"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-white tracking-tighter">
          MANISH<span className="text-neutral-500">GUPTA</span>
        </a>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-neutral-300">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        </div>
        <a href="/pdf/ManishGupta%20Resume.pdf" download="ManishGupta-Resume.pdf" className="hidden md:inline-flex px-5 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
          Download CV
        </a>
      </div>
    </motion.nav>
  );
}
