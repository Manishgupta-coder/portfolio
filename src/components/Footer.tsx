"use client";
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black py-32 border-t border-neutral-900">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.h2
          className="text-5xl md:text-7xl font-black text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          LET'S WORK <br /><span className="text-neutral-600">TOGETHER</span>
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-6 mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="/pdf/ManishGupta%20Resume.pdf" download="ManishGupta-Resume.pdf" className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden w-full md:w-auto inline-block text-center">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Download CV
            </span>
            <div className="absolute inset-0 bg-neutral-300 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
          </a>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/manishguptase/" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-neutral-800 text-white hover:bg-neutral-800 hover:text-white transition-all flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com/Manishgupta-coder" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-neutral-800 text-white hover:bg-neutral-800 hover:text-white transition-all flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
          </div>
        </motion.div>


      </div>
    </footer>
  );
}
