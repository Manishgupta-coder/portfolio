"use client";
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MouseEvent } from 'react';

const skillCategories = [
  {
    title: "Languages",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "C++",
      "Java",
    ],
  },
  {
    title: "Frameworks / Libs",
    items: [
      "React.js",
      "Redux",
      "React Query",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Webpack",
      "Vite",
      "npm / yarn",
    ],
  },
  {
    title: "Databases",
    items: [
      "SQL (MySQL)",
      "Query & DB Performance Optimisation",
      "localStorage / IndexedDB",
    ],
  },
  {
    title: "Practices",
    items: [
      "RESTful API Integration",
      "Responsive Design",
      "Cross-Browser Compatibility",
      "Agile / Scrum",
      "Code Reviews",
      "Debugging & Production Support",
      "CI/CD (Developer Workflow)",
      "ADA / WCAG Accessibility",
    ],
  },
  {
    title: "AI Tools",
    items: ["GitHub Copilot (AI-Assisted Development)"],
  },
] as const;

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

  const compact = name.length > 22;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative p-6 md:p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex items-center justify-center cursor-pointer transition-colors hover:border-neutral-600 min-h-32 h-full"
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className={`font-bold text-white tracking-wide text-center leading-snug ${
          compact ? "text-sm md:text-base px-1" : "text-xl md:text-2xl"
        }`}
      >
        {name}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  let cardIndex = 0;

  return (
    <section id="skills" className="bg-black py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-[0.3em] mb-6 text-center md:text-left">
          Skills & Stack
        </h2>
        <p className="text-neutral-500 text-base md:text-lg font-light max-w-3xl mb-16 text-center md:text-left">
          Technologies and practices I use to build scalable React applications, integrate APIs, and ship
          accessible, production-ready web experiences—aligned with the focus in my About section.
        </p>

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xs font-mono text-neutral-600 uppercase tracking-[0.25em] mb-6">
                {category.title}
              </h3>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                style={{ perspective: 1000 }}
              >
                {category.items.map((skill) => {
                  const index = cardIndex++;
                  return (
                    <motion.div
                      key={`${category.title}-${skill}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
                      className="h-full"
                    >
                      <SkillCard name={skill} />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
