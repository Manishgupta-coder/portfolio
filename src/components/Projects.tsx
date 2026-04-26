"use client";
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: "Sustain Eco", category: "Web App", color: "bg-green-950", img: "/sustain_eco.png", link: "https://www.sustaineco.co.in/" },
  { id: 2, title: "IT Dashboard", category: "Dashboard", color: "bg-blue-950", img: "/it_dashboard.png", link: "https://chintandashboard.github.io/It-dashboard/" },
  { id: 3, title: "Handwritten CNN", category: "Machine Learning", color: "bg-neutral-900", img: "/cnn_project.png", link: "https://colab.research.google.com/github/Manishgupta-coder/HandwrittenCharacterRecognitionUsingCNN/blob/main/Major_Project_Digit_Recognition.ipynb" },
  { id: 4, title: "iTune Media", category: "Web App", color: "bg-purple-950", img: "/itune_media.png", link: "https://i-tune-media.vercel.app/" },
  { id: 5, title: "Rock Paper Scissor", category: "Game", color: "bg-red-950", img: "/rock_paper_scissor.png", link: "https://rock-paper-scissor-seven-azure.vercel.app/" },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-[0.3em] mb-12">Featured Work</h2>
        
        <div className="relative mt-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`sticky top-32 w-full h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row mb-12 origin-top ${project.color}`}
              style={{ top: `calc(100px + ${index * 40}px)` }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                <span className="text-neutral-400 font-mono text-sm mb-4">{project.category}</span>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noreferrer" className="inline-block px-8 py-3 rounded-full border border-white/20 text-white w-max hover:bg-white hover:text-black transition-all">View Project</a>
              </div>
              <div className="w-full md:w-1/2 h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
