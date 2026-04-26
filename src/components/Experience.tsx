"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const timeline = [
  { id: 1, type: "experience", title: "Frontend Developer", org: "SparxIt Solutions, Noida", date: "2023 - Present", side: "left" },
  { id: 2, type: "education", title: "Information Technology (IT)", org: "Jaypee University Of Information Technology (JUIT)", date: "2019 - 2023", side: "right" },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="bg-black py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-[0.3em] mb-24 text-center md:text-left">Journey</h2>
        
        <div ref={containerRef} className="relative">
          {/* Vertical Line Background */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-[1px] h-full bg-neutral-800" />
          
          {/* Animated Scrolling Line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-[1px] bg-white origin-top z-10"
            style={{ height }}
          />
          
          {timeline.map((item, index) => (
            <div key={item.id} className="relative mb-24 w-full flex flex-col md:flex-row justify-between items-start md:items-center pl-12 md:pl-0">
              {item.side === "left" ? (
                <>
                  <motion.div 
                    className="md:w-[45%] md:text-right md:pr-8 w-full text-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  >
                    <span className="text-neutral-500 font-mono text-sm">{item.date}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mt-2">{item.title}</h3>
                    <p className="text-neutral-400 mt-1">{item.org}</p>
                  </motion.div>
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute left-4 md:left-1/2 transform -translate-x-1/2 mt-1 md:mt-0 w-4 h-4 rounded-full bg-black border-4 border-white z-20" 
                  />
                  <div className="hidden md:block w-[45%]" />
                </>
              ) : (
                <>
                  <div className="hidden md:block w-[45%]" />
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute left-4 md:left-1/2 transform -translate-x-1/2 mt-1 md:mt-0 w-4 h-4 rounded-full bg-black border-4 border-white z-20" 
                  />
                  <motion.div 
                    className="md:w-[45%] w-full text-left md:pl-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  >
                    <span className="text-neutral-500 font-mono text-sm">{item.date}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mt-2">{item.title}</h3>
                    <p className="text-neutral-400 mt-1">{item.org}</p>
                  </motion.div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
