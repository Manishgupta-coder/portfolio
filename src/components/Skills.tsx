"use client";
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MouseEvent } from 'react';

const skills = [
  "HTML", "CSS", "Tailwind Css", "Bootstrap", 
  "Javascript", "Typescript", "React.js", "CPP", 
  "Data Structure", "MySQL", "API Integration", "Python"
];

function SkillCard({ name }: { name: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex items-center justify-center cursor-pointer transition-colors hover:border-neutral-600 h-32"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="text-xl md:text-2xl font-bold text-white tracking-wide text-center"
      >
        {name}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-black py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-[0.3em] mb-16 text-center md:text-left">Skills & Stack</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" style={{ perspective: 1000 }}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <SkillCard name={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
